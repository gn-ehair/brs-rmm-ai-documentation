---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: foundations
tags: [multi-tenancy, club-isolation, data-separation, tenant-management]
---

# Multi-Tenancy

## Purpose
Define how every operation remains strictly scoped to a single club, preventing cross-club data leakage and ensuring consistent caching and authorization behavior.

## When You Need This
- Implementing a new repository call
- Auditing security or data isolation
- Debugging unexpected data appearing for a member
- Reviewing cache key formats including club identifiers

## Context / Diagram
```
Session → Club Context
             ↓
Controller → Command → Handler → Repository(clubId, ...)
                                   ↓
                               Cache Key (club:...)
                                   ↓
                                 BRS API
```

## Key Concepts
- Club Context Source: Established during authentication & stored in session
- Mandatory Propagation: clubId travels through command → handler → repository
- Isolation by Keying: Redis keys embed clubId prefix to avoid collisions/leaks
- Validation: Early rejection if missing or mismatched clubId

## Flow / Sequence
1. Authentication sets session club identifier
2. Controller fetches clubId and injects into Command
3. Handler asserts clubId not empty / not placeholder
4. Repository receives clubId as first parameter
5. Repository composes outbound URL path including club segment
6. Cache key prefixed with `club:{clubId}` guaranteeing isolation
7. Response mapped to Value Objects (clubId retained where relevant)

## Rules & Constraints
- All cache keys MUST begin with `club:{clubId}:`
- Handlers MUST reject commands lacking clubId before any repository call
- Repositories MUST NOT infer clubId from global state (only explicit parameter)
- Tests SHOULD include negative case (different clubId cannot access data)
- View Models SHOULD exclude internal club identifiers unless required by UI

## Minimal Example
```php
if (empty($command->clubId())) {
    throw new ClubContextMissing('Club context required');
}
$profile = $memberRepo->fetchProfile($command->clubId(), $command->memberId());
```

## Common Pitfalls
- Deriving clubId indirectly from a memberId assumption
- Forgetting to include clubId in newly added repository methods
- Using inconsistent letter case in cache keys (should stay as provided)
- Logging sensitive club identifiers without redaction policy

## See Also
- [Repository & Caching Strategy](../patterns/repository-and-caching-strategy.md)
- [Security Overview](../foundations/security-overview.md)
- [System Architecture](../foundations/system-architecture.md)
