---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: foundations
tags: [security, authentication, authorization, csrf, data-protection]
---

# Security Overview

## Purpose
Summarize mechanisms protecting club-scoped data, session integrity, and safe external API interaction while minimizing attack surface.

## When You Need This
- Auditing access control decisions
- Adding new endpoints requiring authentication
- Reviewing event or caching implications on data exposure
- Investigating suspected data leakage

## Context / Diagram
```
Client → Session (Auth) → Controller → Command → Handler → Repository → BRS API
            ↑ Session Store (Redis)
```

## Key Concepts
- Session-Based Auth: Server-managed session associates user + club context
- Club Isolation: Mandatory inclusion of clubId across repository boundaries
- Least Exposure: Only required fields passed to frontend payloads
- Input Validation: Early rejection of malformed identifiers and formats
- Secure Caching: Redis keys segregated by club to prevent accidental overlap

## Flow / Sequence
1. Authentication populates session with user + club identifiers
2. Controller extracts club context; rejects if absent or mismatched
3. Command dispatched; Handler validates authorization (if contextual rules required)
4. Repository call includes explicit clubId in path and cache key
5. Response sanitized (remove internal-only fields) before serialization
6. Frontend receives minimal dataset; additional data fetched on demand

## Rules & Constraints
- All externally supplied identifiers MUST be validated (length, charset)
- Sensitive fields (emails, member IDs) MUST NOT appear in logs without masking
- Session fixation mitigation MUST regenerate session ID on privilege changes
- Cache keys MUST NOT include raw PII beyond necessary identifiers (avoid names)
- Error messages SHOULD avoid enumerating existence of resources (generic phrasing)

## Minimal Example
```php
if (!$session->has('club_id')) { throw new AccessDenied('Club context missing'); }
$clubId = $session->get('club_id');
$cmd = new GetMemberProfileCommand($clubId, $memberId);
$vo = $commandBus->handle($cmd);
```

## Common Pitfalls
- Trusting client-provided club identifiers without session cross-check
- Over-exposing full member profile when only summary needed
- Logging entire request payloads (increasing leak risk)
- Reusing cache keys across clubs leading to data bleed
- Accumulating ad-hoc authorization checks in controllers instead of handlers

## See Also
- [Multi-Tenancy](../foundations/multi-tenancy.md)
- [Request Lifecycle](../foundations/request-lifecycle.md)
- [Error and Resilience](../quality/error-and-resilience.md)
