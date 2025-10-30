---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: quality
tags: [error-handling, resilience, fault-tolerance, recovery, monitoring]
---

# Error and Resilience

## Purpose
Define how the module detects, classifies, and handles failures while preserving a fast, consistent user experience under partial outages or latency spikes.

## When You Need This
- Adding new repository methods with external calls
- Designing retry / fallback logic
- Standardizing error responses for frontend consumption
- Performing incident post-mortems

## Context / Diagram
```
Handler → Repository → Cache → BRS API
                     ↑        ↓ (timeout / 5xx)
              Fallback (stale) ← Circuit Evaluation
```

## Key Concepts
- Error Taxonomy: Distinguish client (4xx), server (5xx), timeout, validation, and resilience policy errors
- Circuit Breaker (Conceptual): Middleware can short‑circuit repeated failing endpoints (future enhancement)
- Graceful Degradation: Use last-known good cached data when fresh fetch fails (if TTL not hard-expired)
- Idempotent Retries: Safe repetition of read operations on transient failures
- Standard Response Shape: Consistent JSON error envelope consumed by frontend

## Flow / Sequence
1. Repository executes HTTP call wrapped with timeout
2. Transport or 5xx error triggers exception mapping to domain exception
3. Handler decides fallback path: attempt stale cache if available
4. If fallback served, mark response metadata for observability
5. Controller renders problem document or successful degraded data
6. Frontend may emit an event to notify user of partial data freshness

## Rules & Constraints
- Timeouts MUST be explicit per request (no infinite waits)
- Handlers SHOULD prefer stale-but-recent cache over outright failure for read paths
- Write operations MUST NOT use stale cache fallback
- Domain exceptions MUST include a stable machine code (e.g., `member.not_found`)
- Error responses MUST avoid leaking underlying transport stack details
- Retrying SHOULD be capped (e.g., single immediate retry) to avoid thundering herd

## Minimal Example
```php
try {
  return $repo->fetchProfile($clubId, $memberId);
} catch (MemberUpstreamTimeout $e) {
  if ($stale = $repo->fetchProfileStale($clubId, $memberId)) {
    return $stale; // degraded
  }
    throw new MemberUnavailableProblem('Timeout contacting upstream');
}
```

## Common Pitfalls
- Treating all exceptions the same (losing actionable classification)
- Over-retrying synchronous calls increasing latency
- Serving arbitrarily old cached content as fallback
- Logging sensitive payload fragments
- Swallowing exceptions and returning null (ambiguous failure)

## See Also
- [Repository & Caching Strategy](../patterns/repository-and-caching-strategy.md)
- [Testing Strategy](../quality/testing-strategy.md)
- [Performance and Observability](../quality/performance-and-observability.md)
