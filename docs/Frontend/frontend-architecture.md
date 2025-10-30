---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: frontend
tags: [vue-js, frontend-architecture, components, tailwind-css, webpack]
---

# Frontend Architecture

## Purpose
Describe how legacy jQuery AJAX, Vue 2 components, Tailwind styling, and custom DOM events interoperate to deliver interactive club-scoped member experiences.

## When You Need This
- Building or refactoring a Vue component
- Emitting or listening for cross-component events
- Deciding where to place client-side state vs server rendering
- Evaluating test coverage strategy (unit vs integration)

## Context / Diagram
```
Server Render (Twig) → Vue Bootstrap (app.js) → Component Tree
         ↑                     ↓
  View Model JSON ← AJAX (jQuery) ← API Endpoint
                               ↓
                         DOM Events (notify updates)
```

## Key Concepts
- Progressive Enhancement: Server-rendered HTML baseline; Vue augments interactivity
- Global Registration: Components registered in `app.js` for uniform availability
- Event Bus via DOM: Native CustomEvents instead of a Vue event bus for decoupling
- State Source of Truth: Server still authoritative; client caches ephemeral UI state
- Tailwind Utility Styling: Consistent styling; SCSS for shared abstractions

## Flow / Sequence
1. Server responds with HTML + initial embedded JSON (if needed)
2. `app.js` mounts Vue root; registers global components
3. Components request incremental data via jQuery AJAX endpoints
4. Successful responses mapped into local component state
5. Components emit DOM CustomEvents for cross-component updates
6. Listeners selectively update state or re-fetch data

## Rules & Constraints
- Components MUST avoid direct DOM manipulation when Vue reactive binding suffices
- AJAX calls MUST include club context parameters (server validated)
- DOM event names MUST be kebab-case and namespaced if broad (`member-profile:updated`)
- Shared formatting logic SHOULD reside in utility modules, not inline in templates
- Long-running spinners SHOULD auto-timeout with user feedback
- CSS class proliferation SHOULD be minimized via Tailwind composition utilities

## Minimal Example
```javascript
// Emitting a DOM event after AJAX update
$.post('/member/contact/update', payload).done(data => {
  const evt = new CustomEvent('member-contact:updated', { detail: data });
  window.dispatchEvent(evt);
});
```

## Common Pitfalls
- Mixing jQuery DOM mutations inside Vue-managed regions
- Emitting overly generic events leading to accidental listener collisions
- Allowing stale embedded JSON to override fresh AJAX state
- Tight coupling between components via direct refs instead of events
- Styling drift from inconsistent utility class usage

## See Also
- [Events and DOM Communication](../Frontend/events-and-dom-communication.md)
- [Testing Strategy](../Quality/testing-strategy.md)
- [Feature Golden Path](../Guides/feature-golden-path.md)
