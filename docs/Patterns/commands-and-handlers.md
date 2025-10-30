---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: patterns
tags: [command-handler-pattern, business-logic, use-cases, implementation]
---

# Commands and Handlers

## Purpose
Define the intent-execution separation that keeps controllers thin, promotes testability, and centralizes business orchestration around external API interactions.

## When You Need This
- Adding a new feature operation
- Refactoring business logic out of controllers or services
- Introducing cross-cutting concerns (metrics, logging) via middleware
- Writing focused unit tests for domain orchestration

## Context / Diagram
```
Controller → Command → Command Bus → Handler → Repositories → Value Objects
```

## Key Concepts
- Command: Immutable intent container (no behavior)
- Handler: Single responsibility executor for one Command type
- Command Bus: Dispatcher supporting middleware chaining
- Middleware: Optional wrappers (timing, tracing, circuit breakers)
- Value Objects: Returned from handlers or used to build View Models

## Flow / Sequence
1. Controller builds Command (data only, validated for presence)
2. Command Bus resolves matching Handler (naming convention or map)
3. Middleware (if any) wraps execution (e.g., metrics)
4. Handler loads or mutates data via repositories
5. Handler returns result (Value Object / collection / primitive)
6. Controller adapts result to HTTP response

## Rules & Constraints
- Each Command MUST have exactly one Handler
- Handlers MUST NOT perform direct HTTP calls (only through repositories)
- Command properties MUST be scalars, Value Objects, or identifiers (no services)
- Handlers SHOULD remain side-effect minimal except orchestrated outbound calls
- Validation beyond simple presence MUST occur inside Handler (not controller)
- Middleware MUST NOT alter Command payloads (read-only)

## Minimal Example
```php
final class UpdateMemberContactCommand {
    public function __construct(
        private string $clubId,
        private string $memberId,
        private string $email
    ) {}
    // Accessors...
}

final class UpdateMemberContactHandler {
    public function __construct(private MemberRepository $repo) {}
    public function handle(UpdateMemberContactCommand $c): MemberContactVO {
        $existing = $this->repo->fetchProfile($c->clubId(), $c->memberId());
        $updated  = $this->repo->updateEmail($c->clubId(), $c->memberId(), $c->email());
        return MemberContactVO::from($updated);
    }
}
```

## Common Pitfalls
- Overloading a single Handler with multiple unrelated operations
- Embedding presentation formatting inside Handlers
- Allowing Commands to expose public mutable fields
- Using arrays instead of dedicated Value Objects for returns
- Adding cross-cutting logic directly into each Handler (prefer middleware)

## See Also
- [Repository & Caching Strategy](../patterns/repository-and-caching-strategy.md)
- [Value Objects](../data-model/value-objects.md)
- [Feature Golden Path](../guides/feature-golden-path.md)
