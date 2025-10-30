---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: data-model
tags: [value-objects, immutable-data, domain-primitives, validation, type-safety]
---

# Value Objects

## Purpose
Define the immutable, minimal, intention-revealing wrappers around normalized API data that underpin reliable business logic and testability.

## When You Need This
- Extracting logic from raw arrays
- Ensuring invariants (e.g., email normalized, status enum valid)
- Designing return types for repository or handler methods
- Preparing data for caching and later hydration

## Context / Diagram
```
API Payload → Normalization → Value Object (Immutable) → View Model / Handler Result
```

## Key Concepts
- Immutability: Once constructed, internal state never changes
- Invariant Enforcement: Construction time validation of required domain rules
- Semantic API: Clear method names (e.g., `isActive()`, `displayName()`) hide data shape details
- Hydration Variants: `fromApiResponse()` vs `fromCache()` static constructors
- Conversion: `toArray()` or dedicated DTO for outbound serialization

## Flow / Sequence
1. Raw array arrives from repository HTTP call or cache
2. Selected static constructor validates presence + value domain (enums / formats)
3. Internal properties set privately; derivatives (e.g., combined full name) computed lazily or at build time
4. Consumers invoke intention methods; they never mutate state
5. Object can be serialized through dedicated conversion method

## Rules & Constraints
- Constructors MUST be private or protected; use static factories
- Static constructors MUST throw domain-specific exceptions for invalid payloads
- Public getters SHOULD avoid returning raw arrays; prefer scalars or nested VO
- Avoid exposing internal formatting logic (centralize within VO)
- No setter methods or public mutable properties allowed
- VO names MUST end with `VO` or `Value` for discoverability

## Minimal Example
```php
final class BookingSlotVO {
    private function __construct(
        private string $slotId,
        private \DateTimeImmutable $start,
        private int $availableSpots
    ) {}
    public static function fromApiResponse(array $p): self {
        foreach(['id','start_time','available'] as $f) if(!isset($p[$f])) throw new InvalidSlotPayload($f);
        return new self(
            (string)$p['id'],
            new \DateTimeImmutable($p['start_time']),
            (int)$p['available']
        );
    }
    public function isAvailable(): bool { return $this->availableSpots > 0; }
}
```

## Common Pitfalls
- Treating Value Objects as data bags without behavior
- Bypassing validation by introducing public constructors
- Accumulating unrelated fields creating large, unstable classes
- Using arrays for nested sub-entities instead of dedicated VO structs
- Forgetting alternate constructor for cache hydration

## See Also
- [Domain and Data Shapes](../data-model/domain-and-data-shapes.md)
- [Commands & Handlers](../patterns/commands-and-handlers.md)
- [Repository & Caching Strategy](../patterns/repository-and-caching-strategy.md)
