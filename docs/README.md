---
title: Start Here 
position: 1
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: index
tags: [getting-started, navigation, introduction, roadmap]
---

# Architecture Documentation Index

## Start Here (Onboarding Path)
1. Foundations: [System Architecture](./Foundations/system-architecture.md)
2. Flow: [Request Lifecycle](./Foundations/request-lifecycle.md)
3. Isolation: [Multi-Tenancy](./Foundations/multi-tenancy.md)
4. Patterns: [Commands & Handlers](./Patterns/commands-and-handlers.md)
5. Data Access & Speed: [Repository & Caching Strategy](./Patterns/repository-and-caching-strategy.md)
6. Data Modeling: [Value Objects](./Data-model/value-objects.md)
7. Delivery Guide: [Feature Golden Path](./Guides/feature-golden-path.md)

## Categories

### Foundations
- [System Architecture](./Foundations/system-architecture.md)
- [Request Lifecycle](./Foundations/request-lifecycle.md)
- [Multi-Tenancy](./Foundations/multi-tenancy.md)
- [Security Overview](./Foundations/security-overview.md)
- [Conventions](./Foundations/conventions.md)

### Patterns
- [Commands & Handlers](./Patterns/commands-and-handlers.md)
- [Repository & Caching Strategy](./Patterns/repository-and-caching-strategy.md)

### Data Model
- [Domain and Data Shapes](./Data-model/domain-and-data-shapes.md)
- [Value Objects](./Data-model/value-objects.md)

### Frontend
- [Frontend Architecture](./Frontend/frontend-architecture.md)
- [Events and DOM Communication](./Frontend/events-and-dom-communication.md)

### Quality
- [Testing Strategy](./Quality/testing-strategy.md)
- [Error and Resilience](./Quality/error-and-resilience.md)
- [Performance and Observability](./Quality/performance-and-observability.md)

### Guides
- [Feature Golden Path](./Guides/feature-golden-path.md)

### Operations / Governance
- [ADR Index](./Operations/adr-index.md)
- [Glossary](./glossary.md)

## Review Cadence
- Q1: Foundations + Patterns
- Q2: Frontend + Quality
- Q3: Performance + Security
- Q4: Guides + ADRs + Conventions

## Status Table (Snapshot)
| Doc | Category | Status | Last Reviewed |
|-----|----------|--------|---------------|
| System Architecture | foundations | draft | 2025-10-08 |
| Request Lifecycle | foundations | draft | 2025-10-08 |
| Multi-Tenancy | foundations | draft | 2025-10-08 |
| Security Overview | foundations | draft | 2025-10-08 |
| Conventions | foundations | draft | 2025-10-08 |
| Commands & Handlers | patterns | draft | 2025-10-08 |
| Repository & Caching Strategy | patterns | draft | 2025-10-08 |
| Domain and Data Shapes | data-model | draft | 2025-10-08 |
| Value Objects | data-model | draft | 2025-10-08 |
| Frontend Architecture | frontend | draft | 2025-10-08 |
| Events & DOM Communication | frontend | draft | 2025-10-08 |
| Testing Strategy | quality | draft | 2025-10-08 |
| Error & Resilience | quality | draft | 2025-10-08 |
| Performance & Observability | quality | draft | 2025-10-08 |
| Feature Golden Path | guides | draft | 2025-10-08 |
| ADR Index | operations | draft | 2025-10-08 |
| Glossary | foundations | draft | 2025-10-08 |

## Banned Concepts (Not Used Internally)
- Local relational database / SQL layer
- ORM persistence entities
- Direct storage outside Redis cache/session

## Adding a New Doc
1. Place in appropriate category directory
2. Add frontmatter with category + tags
3. Update this index (Status Table)
4. Add minimal See Also links (≤3)

## See Also
- [Glossary](./glossary.md)
- [Conventions](./Foundations/conventions.md)
