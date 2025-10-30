---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: data-model
tags: [domain-modeling, data-structures, entities, api-shapes, serialization]
---

# Domain and Data Shapes

## Purpose
Provide a consistent vocabulary and minimal set of data abstractions (Value Objects, Collections, View Models) for representing member, booking, and configuration data sourced exclusively from external APIs.

## When You Need This
- Designing a new API integration
- Deciding whether to introduce a new Value Object
- Reviewing PRs for data modeling consistency
- Mapping raw API payloads into internal immutable structures

## Context / Diagram
```
BRS API JSON → Normalization → Value Objects → Collections → View Model → Presentation
```

## Key Concepts
- Raw Payload: Untouched associative array returned by external API
- Normalization: Minimal transformation (key renaming, date parsing) before VO creation
- Value Object (VO): Immutable semantic wrapper for a single conceptual entity
- Collection VO: Typed iterable of homogeneous Value Objects with convenience methods
- View Model: Aggregated structure organized for rendering or JSON serialization
- Shape Stability: Minimizing future churn by introducing clear boundaries early

## Flow / Sequence
1. Repository retrieves raw JSON from external API
2. Repository normalizes keys (e.g., snake_case → camelCase) & coerces primitive types (dates, ints)
3. Static constructor (`fromApiResponse`) of VO validates required fields & builds immutable object
4. Collections wrap arrays of VO instances and expose query helpers (e.g., `filterByStatus()`)
5. Handler composes one or more VO / Collections into a View Model for presentation
6. Controller or template renders View Model without further mutation

## Rules & Constraints
- Value Objects MUST NOT expose public mutable properties
- Static constructors MUST validate required mandatory fields and throw domain exceptions when absent
- Collections SHOULD provide only domain-relevant helpers (avoid generic LINQ-style sprawl)
- View Models MUST derive solely from Value Objects (no raw payload mixing)
- Dates MUST be converted to immutable date/time objects before VO storage
- Optional fields SHOULD use explicit nullable types instead of sentinel values

## Minimal Example
```php
final class MemberProfileVO {
    private function __construct(private string $id, private string $name, private string $email) {}
    public static function fromApiResponse(array $data): self {
        foreach (['id','full_name','email'] as $f) if (!isset($data[$f])) throw new InvalidMemberPayload($f);
        return new self(
            (string)$data['id'],
            trim($data['full_name']),
            strtolower($data['email'])
        );
    }
    public function toArray(): array { return ['id'=>$this->id,'name'=>$this->name,'email'=>$this->email]; }
}
```

## Common Pitfalls
- Allowing view templates to parse raw JSON directly
- Duplicating field normalization logic across multiple handlers
- Creating overly broad “god” Value Objects combining unrelated concerns
- Omitting nullability checks for optional API fields
- Re-exporting raw arrays instead of providing `toArray()` methods

## See Also
- [Value Objects](../data-model/value-objects.md)
- [Commands & Handlers](../patterns/commands-and-handlers.md)
- [Frontend Architecture](../frontend/frontend-architecture.md)
