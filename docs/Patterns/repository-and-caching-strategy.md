---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: patterns
tags: [repository-pattern, caching-strategy, data-access, redis, performance]
---

# Repository and Caching Strategy

## Purpose
Explain how repositories encapsulate outbound HTTP integration with the BRS API, enforce club scoping, and apply consistent Redis caching for performance and resilience.

## When You Need This
- Adding a new external API call
- Optimizing latency hotspots
- Reviewing cache TTL or invalidation approach
- Auditing data flow for multi-tenancy correctness

## Context / Diagram
```
Handler → Repository → (Redis Cache) → BRS API → Map → Value Objects
                     ↘ cache store ↗
```

## Key Concepts
- Repository Interface: Contract consumed by handlers (promotes test doubles)
- Cache Aside: Check cache first, populate on miss
- Deterministic Key Schema: Prevent collisions & ease debugging
- TTL Strategy: Balance freshness vs performance (short for mutable, longer for static config)
- Error Translation: Transport errors mapped to domain-level exceptions

## Flow / Sequence
1. Handler calls repository method with club context + identifiers
2. Repository builds cache key (see schema) and attempts Redis read
3. Cache hit → hydrate Value Object(s) → return
4. Cache miss → perform Guzzle request to BRS API endpoint
5. Validate & map JSON → Value Object(s)
6. Store serialized representation under key with appropriate TTL
7. Return hydrated Value Object(s)

## Rules & Constraints
- All keys MUST follow canonical schema: `club:{clubId}:{resource}:{scopedIdentifier}[:variant]`
- Repositories MUST NOT leak raw HTTP client responses
- Cache TTLs SHOULD be declared as constants near repository top
- Invalidation MUST occur via explicit methods (no ad-hoc key guessing)
- Repository methods MUST accept clubId as first argument (after $this)
- Failures SHOULD raise domain exceptions, not return null silently

## Minimal Example
```php
final class MemberRepositoryImpl implements MemberRepository {
    private const TTL_PROFILE = 300; // seconds
    public function __construct(private Client $http, private Cache $cache) {}
    public function fetchProfile(string $clubId, string $memberId): MemberProfileVO {
        $key = "club:$clubId:member:profile:$memberId";
        if ($cached = $this->cache->get($key)) {
            return MemberProfileVO::fromCache($cached);
        }
        $resp = $this->http->get("/clubs/$clubId/members/$memberId");
        $vo = MemberProfileVO::fromApiResponse($resp->toArray());
        $this->cache->set($key, $vo->toArray(), self::TTL_PROFILE);
        return $vo;
    }
}
```

## Common Pitfalls
- Divergent key formats causing cache fragmentation
- Excessive TTL leading to stale user-facing data
- Injecting HTTP client directly into handlers bypassing repository abstraction
- Caching error responses or partial payloads
- Silent failures returning null instead of raising a domain exception

## See Also
- [Multi-Tenancy](../Foundations/multi-tenancy.md)
- [Error and Resilience](../Quality/error-and-resilience.md)
- [Performance and Observability](../Quality/performance-and-observability.md)
