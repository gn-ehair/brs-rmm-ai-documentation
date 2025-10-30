---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: quality
tags: [testing-strategy, unit-tests, integration-tests, phpunit, quality-assurance]
---

# Testing Strategy

## Purpose
Provide a layered approach ensuring confidence in API-driven logic, isolation guarantees, caching correctness, and frontend event flows.

## When You Need This
- Writing tests for a new Command/Handler
- Adding a repository integration
- Evaluating coverage priorities
- Introducing a regression fix

## Context / Diagram
```
Unit (VO / small funcs)
  ↓
Handler Tests (mock repos)
  ↓
Repository Integration (HTTP stub / contract)
  ↓
End-to-End (Controller → Command Bus → Repo stub) + Frontend event assertions
```

## Key Concepts
- Fast Feedback: Majority of tests remain in-memory (no network) using mocks/stubs
- Contract Testing: Repository tests validate mapping against recorded API fixtures
- Deterministic Caching: Tests assert key format + TTL logic without external Redis dependence (in-memory adapter)
- Event Simulation: DOM CustomEvents dispatched in integration tests to verify listeners
- Fixture Discipline: Minimal, focused fixtures; avoid huge generic payloads

## Flow / Sequence
1. Unit: Validate Value Object construction & invariants
2. Handler: Use mocked repository interfaces returning curated VOs
3. Repository: Use HTTP fixture playback (golden responses) to ensure mapping correctness
4. Integration: Exercise full request lifecycle with stubbed HTTP layer
5. Frontend: Simulate event dispatch & assert reactive updates (where practical)

## Rules & Constraints
- Value Object tests MUST cover invalid payload scenarios
- Handler tests SHOULD avoid asserting internal repository call counts (focus on output)
- Repository contract tests MUST assert error mapping and required field handling
- Cached path tests MUST verify both hit and miss logic
- Test names SHOULD describe scenario and expected behavior succinctly
- DOM event tests MUST clean up listeners after execution

## Minimal Example
```php
public function testHandlerReturnsViewModel(): void {
  $repo = $this->createMock(MemberRepository::class);
  $repo->method('fetchProfile')->willReturn(MemberProfileVO::fromApiResponse($this->fixture('member_profile')));
  $handler = new GetMemberProfileHandler($repo);
  $vo = $handler->handle(new GetMemberProfileCommand('AB12','M123'));
  $this->assertSame('M123', $vo->toArray()['id']);
}
```

## Common Pitfalls
- Over-mocking leading to brittle behavior assertions
- Copying large JSON fixtures making diffs noisy
- Ignoring negative paths (timeouts, 4xx, stale cache) until production
- Mixing integration and unit concerns in single test class
- Failing to assert club scoping in repository tests

## See Also
- [Commands & Handlers](../Patterns/commands-and-handlers.md)
- [Repository & Caching Strategy](../Patterns/repository-and-caching-strategy.md)
- [Frontend Architecture](../Frontend/frontend-architecture.md)
