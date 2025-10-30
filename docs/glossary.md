---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: foundations
tags: [glossary, terminology, definitions, reference]
---

# Glossary

Command – Object representing an intent; contains only data needed for execution.
Handler – Executes a specific Command by orchestrating repositories and services.
Repository – Abstraction wrapping outbound API calls plus caching and mapping.
Value Object – Immutable domain representation created from external API data.
View Model – Data prepared for templates or JSON responses, derived from Value Objects.
Club Context – Scope identifier ensuring operations apply to exactly one club.
BRS API – External authoritative service providing member and booking data.
Cache Key – Deterministic Redis key following the canonical schema.
Session – Server-side state holding authenticated member + club context.
DOM Event – Custom browser event used for decoupled component communication.
Feature Golden Path – Prescribed minimal steps to implement a typical feature.
Resilience – Ability to degrade gracefully under partial failures or latency.
