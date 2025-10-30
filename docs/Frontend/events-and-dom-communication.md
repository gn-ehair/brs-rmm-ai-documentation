---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: frontend
tags: [event-handling, dom-manipulation, component-communication, jquery]
---

# Events and DOM Communication

## Purpose
Explain the lightweight event-driven pattern enabling decoupled coordination among Vue components, legacy scripts, and server-rendered fragments.

## When You Need This
- Broadcasting data refresh completion
- Listening for entity updates from another component
- Migrating legacy jQuery callbacks to a consistent event model
- Designing test hooks for integration behavior

## Context / Diagram
```
Component / Script → CustomEvent(dispatch) → Window → Listeners (Components / Scripts) → State Update / Re-fetch
```

## Key Concepts
- CustomEvent: Native browser mechanism with `detail` payload
- Namespacing: Kebab-case with domain prefix for clarity
- One-Way Flow: Emitters do not expect responses (fire-and-forget)
- Idempotent Listeners: Safe to trigger multiple times without inconsistent state
- Testability: Events can be simulated in integration tests without heavy mocking

## Flow / Sequence
1. Component completes an operation (e.g., member email update)
2. Component constructs `CustomEvent('member-contact:updated', { detail })`
3. Event dispatched on `window` (or specific DOM node if scoping required)
4. Registered listeners filter by event type
5. Listener updates local state or triggers data re-fetch via AJAX
6. UI re-renders reactively

## Rules & Constraints
- Event names MUST be kebab-case; SHOULD include entity + action (`member-contact:updated`)
- Payloads SHOULD remain minimal (identifiers + changed fields) to reduce coupling
- Listeners MUST guard against missing/partial `detail` payloads
- Emitting component MUST NOT mutate another component's state directly
- Global listeners SHOULD be removed on component teardown to avoid leaks

## Minimal Example
```javascript
// Listener registration
window.addEventListener('member-contact:updated', (e) => {
  if(!e.detail || !e.detail.memberId) return;
  refreshMemberCard(e.detail.memberId);
});
```

## Common Pitfalls
- Overloading events with entire serialized objects instead of diffs
- Forgetting teardown in components leading to duplicate handlers
- Using inconsistent naming causing missed listeners
- Building synchronous request/response semantics atop events
- Emitting high-frequency events (e.g., on each keypress) harming performance

## See Also
- [Frontend Architecture](../frontend/frontend-architecture.md)
- [Testing Strategy](../quality/testing-strategy.md)
- [Feature Golden Path](../guides/feature-golden-path.md)
