---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: foundations
tags: [request-lifecycle, http-flow, middleware, controllers, processing]
---

# Request Lifecycle

## Purpose
Describe the end‑to‑end journey of an inbound HTTP request through controllers, command bus, handlers, repositories, caching, and response rendering under strict club scope.

## When You Need This
- Debugging latency or unexpected data
- Adding a new endpoint or controller action
- Tracing where to inject validation or transformation
- Performing performance or resilience reviews

## Context / Diagram
```
HTTP Request
   ↓ (Routing)
Controller → Build Command → Dispatch
                 ↓
           Command Bus → Handler
                              ↓
                        Repository → Redis Cache (check)
                              ↓ (miss)
                           BRS API (HTTP)
                              ↓
                        Value Objects
                              ↓
                        View Model / JSON
                              ↓
                          HTTP Response
```

## Key Concepts
- Thin Controller: Parameter extraction + command dispatch only
- Command Bus: Central dispatch enabling cross-cutting middleware (logging, timing)
- Handler Isolation: Business coordination, no transport or presentation logic
- Repository Boundary: External API access + caching + mapping
- Club Context Propagation: Flows from session to every repository call
- Idempotent Reads: Safe to retry fetch operations when timeouts occur

## Flow / Sequence
1. Routing matches path & method → designated Controller
2. Controller derives club context from session (fail → early 4xx)
3. Controller validates minimal surface (presence of required params)
4. Controller instantiates Command (pure data) and dispatches
5. Command Bus invokes Handler (optionally via middleware stack)
6. Handler orchestrates one or more Repositories (read/update external state)
7. Redis cache consulted before each API fetch; misses cause outbound HTTP
8. API responses mapped into Value Objects (immutable)
9. Handler returns domain result or View Model DTO
10. Controller serializes (Twig/JSON) and sets status & headers
11. Frontend scripts may emit DOM events to update live components

## Rules & Constraints
- Controllers MUST NOT call repositories directly
- Handlers MUST validate club context presence before repository interaction
- All repository calls MUST include explicit club identifier parameter
- Command Bus middleware SHOULD remain side-effect free (logging/metrics allowed)
- Responses MUST avoid leaking raw API payloads; use View Models or Value Objects
- Errors SHOULD be converted to standardized problem responses (see Error & Resilience)

## Minimal Example
```php
// Controller (simplified)
$cmd = new GetMemberProfileCommand($clubId, $memberId);
$profileVO = $commandBus->handle($cmd);
return $this->json(['member' => $profileVO->toArray()]);
```

## Common Pitfalls
- Performing heavy validation inside Controllers instead of Handler layer
- Swallowing repository exceptions without mapping to domain errors
- Returning raw associative arrays instead of Value Objects
- Forgetting to pass club scope causing cross-club data exposure risk
- Coupling Controller tests to repository behavior (test via command bus)

## See Also
- [System Architecture](../foundations/system-architecture.md)
- [Multi-Tenancy](../foundations/multi-tenancy.md)
- [Commands & Handlers](../patterns/commands-and-handlers.md)
