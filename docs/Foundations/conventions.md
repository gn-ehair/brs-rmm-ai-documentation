---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: foundations
tags: [coding-standards, naming-conventions, style-guide, best-practices]
---

# Conventions

## Purpose
Ensure consistent, predictable code and documentation patterns that reinforce API‑first, command-driven design and club isolation.

## When You Need This
- Creating a new Command / Handler pair
- Adding a Repository method
- Naming a Value Object or View Model
- Reviewing a pull request for style adherence

## Context / Diagram
```
Intent (Command) → Execution (Handler) → Data Access (Repository) → Value Objects → View Model
```

## Key Concepts
- Intent vs Execution: Separate what we want from how we do it
- Immutable Domain: Value Objects never mutate post-construction
- Narrow Controllers: Thin adapters, not mini-handlers
- Deterministic Caching: Uniform key schema across repositories
- Explicit Club Scope: Always first parameter / property where relevant

## Rules & Constraints
- Class Names MUST use PascalCase; file name MUST match class
- Value Objects MUST have static named constructors (e.g. `fromApiResponse()`)
- Command classes MUST end with `Command`; Handler classes MUST end with `Handler`
- Repositories MUST implement an interface placed under `Repository/`
- Public methods in repositories MUST accept club identifier explicitly
- Twig templates SHOULD avoid business logic (formatting / presentation only)
- Frontend events MUST use kebab-case names (`member-updated`)
- Cache keys MUST NOT be hand-rolled outside repository layer

## Common Pitfalls
- Adding validation logic to Value Object constructors (prefer factories)
- Leaking raw API arrays into handlers or views
- Overloading a single Handler with multiple unrelated operations
- Mixing synchronous DOM manipulation with Vue state without emitting events
- Divergent naming for identical concepts (`MemberProfileVO` vs `ProfileValueObject`)

## See Also
- [Glossary](../glossary.md)
- [System Architecture](../Foundations/system-architecture.md)
- [Commands & Handlers](../Patterns/commands-and-handlers.md)
