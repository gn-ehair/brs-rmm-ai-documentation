import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/brs-rmm-ai-documentation/markdown-page',
    component: ComponentCreator('/brs-rmm-ai-documentation/markdown-page', 'bc8'),
    exact: true
  },
  {
    path: '/brs-rmm-ai-documentation/docs',
    component: ComponentCreator('/brs-rmm-ai-documentation/docs', '1c3'),
    routes: [
      {
        path: '/brs-rmm-ai-documentation/docs',
        component: ComponentCreator('/brs-rmm-ai-documentation/docs', '886'),
        routes: [
          {
            path: '/brs-rmm-ai-documentation/docs/tags',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags', '570'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/adr',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/adr', 'da7'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/api-shapes',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/api-shapes', '2f8'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/architecture',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/architecture', '5b6'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/architecture-decisions',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/architecture-decisions', '6b5'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/authentication',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/authentication', '9d9'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/authorization',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/authorization', '48f'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/best-practices',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/best-practices', 'c8a'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/business-logic',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/business-logic', '4e4'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/caching-strategy',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/caching-strategy', 'fa2'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/club-isolation',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/club-isolation', '7d3'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/codebase',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/codebase', 'fa6'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/coding-standards',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/coding-standards', 'c93'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/command-handler-pattern',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/command-handler-pattern', 'fff'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/command-pattern',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/command-pattern', '5fc'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/component-communication',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/component-communication', '78b'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/components',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/components', '337'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/controllers',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/controllers', '693'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/cqrs',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/cqrs', 'a6e'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/csrf',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/csrf', '9b6'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/data-access',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/data-access', 'aa9'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/data-protection',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/data-protection', '895'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/data-separation',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/data-separation', 'efd'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/data-structures',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/data-structures', '962'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/datadog',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/datadog', '486'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/decision-records',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/decision-records', 'f8a'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/definitions',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/definitions', '633'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/dependencies',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/dependencies', '1b0'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/deployment',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/deployment', '3a8'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/development-workflow',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/development-workflow', 'e7d'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/directory-structure',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/directory-structure', '292'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/dom-manipulation',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/dom-manipulation', '14d'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/domain-modeling',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/domain-modeling', '2b3'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/domain-primitives',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/domain-primitives', '4cd'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/entities',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/entities', '3af'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/error-handling',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/error-handling', 'fe1'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/event-handling',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/event-handling', '14c'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/fault-tolerance',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/fault-tolerance', 'dea'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/feature-development',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/feature-development', '058'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/frontend-architecture',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/frontend-architecture', '661'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/getting-started',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/getting-started', 'afe'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/glossary',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/glossary', 'e33'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/golden-path',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/golden-path', 'db6'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/governance',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/governance', '25b'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/handlers',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/handlers', '418'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/history',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/history', 'daf'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/http-flow',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/http-flow', 'eda'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/immutable-data',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/immutable-data', '4d4'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/implementation',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/implementation', 'cb5'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/infrastructure',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/infrastructure', '01b'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/integration-tests',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/integration-tests', '77f'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/introduction',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/introduction', '6bb'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/jquery',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/jquery', 'bb4'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/libraries',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/libraries', '8ce'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/metrics',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/metrics', '873'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/middleware',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/middleware', '836'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/monitoring',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/monitoring', '046'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/multi-tenancy',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/multi-tenancy', 'e64'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/naming-conventions',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/naming-conventions', '5d0'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/navigation',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/navigation', 'cf4'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/observability',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/observability', '4f8'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/organization',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/organization', '21f'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/overview',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/overview', '70b'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/packages',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/packages', '6d2'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/performance',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/performance', 'd85'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/performance-optimization',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/performance-optimization', '866'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/phpunit',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/phpunit', '76d'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/processing',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/processing', '6e1'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/quality-assurance',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/quality-assurance', '956'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/recovery',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/recovery', '084'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/redis',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/redis', '796'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/reference',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/reference', '00a'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/repository-pattern',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/repository-pattern', 'ce6'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/request-lifecycle',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/request-lifecycle', 'ad7'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/resilience',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/resilience', 'e34'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/roadmap',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/roadmap', '059'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/security',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/security', '090'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/separation-of-concerns',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/separation-of-concerns', '7c5'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/serialization',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/serialization', '76b'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/style-guide',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/style-guide', 'add'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/symfony',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/symfony', '603'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/system-design',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/system-design', 'fc9'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/tactician',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/tactician', 'a70'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/tailwind-css',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/tailwind-css', 'cce'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/tenant-management',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/tenant-management', 'f1e'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/terminology',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/terminology', '769'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/testing-strategy',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/testing-strategy', 'f0d'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/tools',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/tools', 'e91'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/tutorial',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/tutorial', 'cf2'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/type-safety',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/type-safety', '4b7'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/unit-tests',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/unit-tests', '093'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/use-cases',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/use-cases', '87d'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/validation',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/validation', 'fa5'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/value-objects',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/value-objects', '947'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/vue',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/vue', '78d'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/vue-js',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/vue-js', '4ba'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs/tags/webpack',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs/tags/webpack', 'c6f'),
            exact: true
          },
          {
            path: '/brs-rmm-ai-documentation/docs',
            component: ComponentCreator('/brs-rmm-ai-documentation/docs', 'ccf'),
            routes: [
              {
                path: '/brs-rmm-ai-documentation/docs/',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/', '5b0'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Data-model/domain-and-data-shapes',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Data-model/domain-and-data-shapes', '9a4'),
                exact: true,
                sidebar: "dataModelSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Data-model/value-objects',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Data-model/value-objects', '1f0'),
                exact: true,
                sidebar: "dataModelSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/dependencies',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/dependencies', '6ea'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/directory-structure',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/directory-structure', 'b1e'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Foundations/command-pattern',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Foundations/command-pattern', 'd52'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Foundations/conventions',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Foundations/conventions', 'c27'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Foundations/multi-tenancy',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Foundations/multi-tenancy', '07b'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Foundations/request-lifecycle',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Foundations/request-lifecycle', '47e'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Foundations/security-overview',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Foundations/security-overview', '0f7'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Foundations/system-architecture',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Foundations/system-architecture', 'f11'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Frontend/events-and-dom-communication',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Frontend/events-and-dom-communication', '127'),
                exact: true,
                sidebar: "frontendSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Frontend/frontend-architecture',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Frontend/frontend-architecture', '5fb'),
                exact: true,
                sidebar: "frontendSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/glossary',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/glossary', 'dd8'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Guides/feature-golden-path',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Guides/feature-golden-path', '2b0'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Operations/adr-index',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Operations/adr-index', '018'),
                exact: true,
                sidebar: "operationsSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/overview',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/overview', '126'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Patterns/commands-and-handlers',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Patterns/commands-and-handlers', 'cab'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Patterns/repository-and-caching-strategy',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Patterns/repository-and-caching-strategy', '272'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Quality/error-and-resilience',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Quality/error-and-resilience', '107'),
                exact: true,
                sidebar: "qualitySidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Quality/performance-and-observability',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Quality/performance-and-observability', '707'),
                exact: true,
                sidebar: "qualitySidebar"
              },
              {
                path: '/brs-rmm-ai-documentation/docs/Quality/testing-strategy',
                component: ComponentCreator('/brs-rmm-ai-documentation/docs/Quality/testing-strategy', '11a'),
                exact: true,
                sidebar: "qualitySidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/brs-rmm-ai-documentation/',
    component: ComponentCreator('/brs-rmm-ai-documentation/', 'f35'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
