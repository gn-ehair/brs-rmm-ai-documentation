---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: quality
tags: [performance-optimization, observability, monitoring, metrics, datadog]
---

# Performance and Observability

## Purpose
Outline the instrumentation, metrics, and structural choices that ensure fast responses and actionable insights into latency, errors, and cache behavior.

## When You Need This
- Investigating latency regressions
- Adding metrics for a new command or repository method
- Planning performance budgets
- Tuning cache TTL values

## Context / Diagram
```
Request → Command Bus (timing) → Handler → Repository → Cache / API
                              ↘ Metrics / Traces ↗
```

## Key Concepts
- Latency Budget: Target maximum p95 for key endpoints
- Cache Hit Ratio: Primary leading indicator for read performance
- Command Timing: Middleware measurement per command execution
- Error Rate Segmentation: Differentiate transport vs validation failures
- Structured Logging: JSON logs with correlation identifiers (request + command)

## Flow / Sequence
1. Middleware records start timestamp for command
2. Repository logs cache hit/miss (increment counters)
3. Outbound HTTP call wrapped with timing + status capture
4. On completion, metrics emitted (duration, hit ratio adjustments, errors)
5. Aggregation pipeline (external) surfaces dashboards / alerts

## Rules & Constraints
- Timing metrics MUST exclude rendering time if measuring pure domain execution
- Cache metrics MUST record both numerator (hits) and denominator (total lookups)
- Log entries SHOULD include clubId for isolation analysis (avoid member PII)
- High-cardinality fields (e.g., memberId) MUST NOT become metric labels
- Slow threshold SHOULD default (e.g., >300ms handler processing) and be configurable

## Minimal Example
```php
$start = microtime(true);
$vo = $commandBus->handle($command);
$duration = (microtime(true) - $start) * 1000;
$metrics->timing('command.duration.ms', $duration, ['command'=> 'GetMemberProfile']);
```

## Common Pitfalls
- Label cardinality explosion in metrics backends
- Missing cache denominator causing inflated hit ratio interpretation
- Treating average latency as sufficient (ignoring tail p95/p99)
- Logging full payloads increasing cost and risk
- Adding instrumentation that materially slows hot paths

## See Also
- [Repository & Caching Strategy](../patterns/repository-and-caching-strategy.md)
- [Error and Resilience](../quality/error-and-resilience.md)
- [Security Overview](../foundations/security-overview.md)
