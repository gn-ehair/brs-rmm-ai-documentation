---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: foundations
tags: [architecture, system-design, components, infrastructure, deployment]
---

# System Architecture

## Purpose
Provide a high-level mental model of how the Members Module processes a request using an API‑first, command-driven design with strict club scoping and no local persistence layer.

## When You Need This
- Orienting as a new engineer
- Assessing impact of a feature change
- Locating the correct abstraction (Command vs Service vs Repository)
- Explaining flow to stakeholders

## Context / Diagram
```
Browser / Client
  ↓ HTTP (Symfony Controller)
Controller → Command Bus → Handler
                      ↓
                Repository (Guzzle)
                      ↓
                   BRS API
                      ↓
                Value Objects
                      ↓
                View Model / Twig
                      ↓
                  Response
                       ↺
                  Redis Cache
```

## Key Concepts
- API-First: All authoritative data originates from external BRS API endpoints
- Command Bus: Decouples intent (Command) from execution (Handler)
- Repository: Encapsulates outbound HTTP calls + response mapping + caching
- Value Object: Immutable domain representation created from API responses
- Club Context: Mandatory scoping derived from session; forbids cross-club leakage
- Caching: Redis-based, deterministic keys (see Repository & Caching Strategy)
- Frontend Bridge: Vue components + jQuery AJAX emit / listen DOM events

## Flow / Sequence
1. Request enters via Symfony routing and lightweight Controller
2. Controller extracts club context (session) and request parameters
3. Controller instantiates and dispatches a Command to the command bus
4. Handler validates prerequisites (club scope, required fields)
5. Handler coordinates one or more Repositories (read/write via external API)
6. Repositories check Redis cache (hit → hydrate Value Objects; miss → HTTP call)
7. Handler composes Value Objects into a View Model or returns domain result
8. Controller renders Twig or JSON; frontend (if applicable) hydrates Vue state
9. DOM events propagate updates to other components

## Rules & Constraints
- Club Context MUST be resolved before any repository call
- Handlers MUST NOT embed HTTP logic; only coordinate repositories & services
- Repositories MUST return Value Objects or simple primitives, never raw arrays
- Commands SHOULD remain thin: only intent + scalar/value object properties
- Controllers MUST stay passive: no business branching beyond dispatch & mapping
- Redis keys MUST follow canonical schema (refer to caching strategy doc)
- Value Objects MUST be immutable after construction

## Minimal Example
```php
// Controller snippet (simplified)
$command = new UpdateMemberContactCommand($clubId, $memberId, $newEmail);
$result  = $commandBus->handle($command);

// Handler (conceptual)
public function handle(UpdateMemberContactCommand $c): MemberContactVO {
    $profile = $this->memberRepository->fetchProfile($c->clubId(), $c->memberId());
    $updated = $this->memberRepository->updateEmail($c->clubId(), $c->memberId(), $c->email());
    return MemberContactVO::from($updated);
}
```

## Common Pitfalls
- Skipping club context validation inside handlers
- Embedding HTTP client calls directly in handlers or services
- Returning associative arrays instead of Value Objects
- Recomputing cache keys inconsistently across repositories
- Bloated Controllers performing orchestration logic

## See Also
- [Request Lifecycle](../foundations/request-lifecycle.md)
- [Commands & Handlers](../patterns/commands-and-handlers.md)
- [Repository & Caching Strategy](../patterns/repository-and-caching-strategy.md)
