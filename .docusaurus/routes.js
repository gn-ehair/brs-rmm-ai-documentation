import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a89'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '282'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/adr',
            component: ComponentCreator('/docs/tags/adr', '205'),
            exact: true
          },
          {
            path: '/docs/tags/api-shapes',
            component: ComponentCreator('/docs/tags/api-shapes', '3fa'),
            exact: true
          },
          {
            path: '/docs/tags/architecture',
            component: ComponentCreator('/docs/tags/architecture', '926'),
            exact: true
          },
          {
            path: '/docs/tags/architecture-decisions',
            component: ComponentCreator('/docs/tags/architecture-decisions', '267'),
            exact: true
          },
          {
            path: '/docs/tags/authentication',
            component: ComponentCreator('/docs/tags/authentication', '195'),
            exact: true
          },
          {
            path: '/docs/tags/authorization',
            component: ComponentCreator('/docs/tags/authorization', 'f88'),
            exact: true
          },
          {
            path: '/docs/tags/best-practices',
            component: ComponentCreator('/docs/tags/best-practices', 'd9a'),
            exact: true
          },
          {
            path: '/docs/tags/business-logic',
            component: ComponentCreator('/docs/tags/business-logic', '5ab'),
            exact: true
          },
          {
            path: '/docs/tags/caching-strategy',
            component: ComponentCreator('/docs/tags/caching-strategy', 'a2d'),
            exact: true
          },
          {
            path: '/docs/tags/club-isolation',
            component: ComponentCreator('/docs/tags/club-isolation', '0ef'),
            exact: true
          },
          {
            path: '/docs/tags/codebase',
            component: ComponentCreator('/docs/tags/codebase', '133'),
            exact: true
          },
          {
            path: '/docs/tags/coding-standards',
            component: ComponentCreator('/docs/tags/coding-standards', 'ea8'),
            exact: true
          },
          {
            path: '/docs/tags/command-handler-pattern',
            component: ComponentCreator('/docs/tags/command-handler-pattern', 'f0b'),
            exact: true
          },
          {
            path: '/docs/tags/command-pattern',
            component: ComponentCreator('/docs/tags/command-pattern', 'cb3'),
            exact: true
          },
          {
            path: '/docs/tags/component-communication',
            component: ComponentCreator('/docs/tags/component-communication', 'c0a'),
            exact: true
          },
          {
            path: '/docs/tags/components',
            component: ComponentCreator('/docs/tags/components', '2f9'),
            exact: true
          },
          {
            path: '/docs/tags/controllers',
            component: ComponentCreator('/docs/tags/controllers', '9c9'),
            exact: true
          },
          {
            path: '/docs/tags/cqrs',
            component: ComponentCreator('/docs/tags/cqrs', '205'),
            exact: true
          },
          {
            path: '/docs/tags/csrf',
            component: ComponentCreator('/docs/tags/csrf', 'c99'),
            exact: true
          },
          {
            path: '/docs/tags/data-access',
            component: ComponentCreator('/docs/tags/data-access', '277'),
            exact: true
          },
          {
            path: '/docs/tags/data-protection',
            component: ComponentCreator('/docs/tags/data-protection', 'd51'),
            exact: true
          },
          {
            path: '/docs/tags/data-separation',
            component: ComponentCreator('/docs/tags/data-separation', '2c0'),
            exact: true
          },
          {
            path: '/docs/tags/data-structures',
            component: ComponentCreator('/docs/tags/data-structures', 'ffc'),
            exact: true
          },
          {
            path: '/docs/tags/datadog',
            component: ComponentCreator('/docs/tags/datadog', '1eb'),
            exact: true
          },
          {
            path: '/docs/tags/decision-records',
            component: ComponentCreator('/docs/tags/decision-records', 'f36'),
            exact: true
          },
          {
            path: '/docs/tags/definitions',
            component: ComponentCreator('/docs/tags/definitions', '609'),
            exact: true
          },
          {
            path: '/docs/tags/dependencies',
            component: ComponentCreator('/docs/tags/dependencies', '12f'),
            exact: true
          },
          {
            path: '/docs/tags/deployment',
            component: ComponentCreator('/docs/tags/deployment', '6c0'),
            exact: true
          },
          {
            path: '/docs/tags/development-workflow',
            component: ComponentCreator('/docs/tags/development-workflow', '68f'),
            exact: true
          },
          {
            path: '/docs/tags/directory-structure',
            component: ComponentCreator('/docs/tags/directory-structure', '042'),
            exact: true
          },
          {
            path: '/docs/tags/dom-manipulation',
            component: ComponentCreator('/docs/tags/dom-manipulation', '2ed'),
            exact: true
          },
          {
            path: '/docs/tags/domain-modeling',
            component: ComponentCreator('/docs/tags/domain-modeling', 'd3a'),
            exact: true
          },
          {
            path: '/docs/tags/domain-primitives',
            component: ComponentCreator('/docs/tags/domain-primitives', '559'),
            exact: true
          },
          {
            path: '/docs/tags/entities',
            component: ComponentCreator('/docs/tags/entities', '3de'),
            exact: true
          },
          {
            path: '/docs/tags/error-handling',
            component: ComponentCreator('/docs/tags/error-handling', '715'),
            exact: true
          },
          {
            path: '/docs/tags/event-handling',
            component: ComponentCreator('/docs/tags/event-handling', '1f5'),
            exact: true
          },
          {
            path: '/docs/tags/fault-tolerance',
            component: ComponentCreator('/docs/tags/fault-tolerance', 'b3d'),
            exact: true
          },
          {
            path: '/docs/tags/feature-development',
            component: ComponentCreator('/docs/tags/feature-development', '503'),
            exact: true
          },
          {
            path: '/docs/tags/frontend-architecture',
            component: ComponentCreator('/docs/tags/frontend-architecture', '835'),
            exact: true
          },
          {
            path: '/docs/tags/getting-started',
            component: ComponentCreator('/docs/tags/getting-started', 'eda'),
            exact: true
          },
          {
            path: '/docs/tags/glossary',
            component: ComponentCreator('/docs/tags/glossary', '63a'),
            exact: true
          },
          {
            path: '/docs/tags/golden-path',
            component: ComponentCreator('/docs/tags/golden-path', '827'),
            exact: true
          },
          {
            path: '/docs/tags/governance',
            component: ComponentCreator('/docs/tags/governance', '811'),
            exact: true
          },
          {
            path: '/docs/tags/handlers',
            component: ComponentCreator('/docs/tags/handlers', 'f57'),
            exact: true
          },
          {
            path: '/docs/tags/history',
            component: ComponentCreator('/docs/tags/history', '41c'),
            exact: true
          },
          {
            path: '/docs/tags/http-flow',
            component: ComponentCreator('/docs/tags/http-flow', '966'),
            exact: true
          },
          {
            path: '/docs/tags/immutable-data',
            component: ComponentCreator('/docs/tags/immutable-data', '52a'),
            exact: true
          },
          {
            path: '/docs/tags/implementation',
            component: ComponentCreator('/docs/tags/implementation', '0a6'),
            exact: true
          },
          {
            path: '/docs/tags/infrastructure',
            component: ComponentCreator('/docs/tags/infrastructure', '49b'),
            exact: true
          },
          {
            path: '/docs/tags/integration-tests',
            component: ComponentCreator('/docs/tags/integration-tests', 'c43'),
            exact: true
          },
          {
            path: '/docs/tags/introduction',
            component: ComponentCreator('/docs/tags/introduction', '1be'),
            exact: true
          },
          {
            path: '/docs/tags/jquery',
            component: ComponentCreator('/docs/tags/jquery', '54b'),
            exact: true
          },
          {
            path: '/docs/tags/libraries',
            component: ComponentCreator('/docs/tags/libraries', '96c'),
            exact: true
          },
          {
            path: '/docs/tags/metrics',
            component: ComponentCreator('/docs/tags/metrics', '3db'),
            exact: true
          },
          {
            path: '/docs/tags/middleware',
            component: ComponentCreator('/docs/tags/middleware', 'c0f'),
            exact: true
          },
          {
            path: '/docs/tags/monitoring',
            component: ComponentCreator('/docs/tags/monitoring', '833'),
            exact: true
          },
          {
            path: '/docs/tags/multi-tenancy',
            component: ComponentCreator('/docs/tags/multi-tenancy', '6e3'),
            exact: true
          },
          {
            path: '/docs/tags/naming-conventions',
            component: ComponentCreator('/docs/tags/naming-conventions', '65d'),
            exact: true
          },
          {
            path: '/docs/tags/navigation',
            component: ComponentCreator('/docs/tags/navigation', 'ef9'),
            exact: true
          },
          {
            path: '/docs/tags/observability',
            component: ComponentCreator('/docs/tags/observability', '84a'),
            exact: true
          },
          {
            path: '/docs/tags/organization',
            component: ComponentCreator('/docs/tags/organization', '909'),
            exact: true
          },
          {
            path: '/docs/tags/overview',
            component: ComponentCreator('/docs/tags/overview', '24f'),
            exact: true
          },
          {
            path: '/docs/tags/packages',
            component: ComponentCreator('/docs/tags/packages', '1a2'),
            exact: true
          },
          {
            path: '/docs/tags/performance',
            component: ComponentCreator('/docs/tags/performance', '427'),
            exact: true
          },
          {
            path: '/docs/tags/performance-optimization',
            component: ComponentCreator('/docs/tags/performance-optimization', '503'),
            exact: true
          },
          {
            path: '/docs/tags/phpunit',
            component: ComponentCreator('/docs/tags/phpunit', 'f21'),
            exact: true
          },
          {
            path: '/docs/tags/processing',
            component: ComponentCreator('/docs/tags/processing', 'd28'),
            exact: true
          },
          {
            path: '/docs/tags/quality-assurance',
            component: ComponentCreator('/docs/tags/quality-assurance', '6ee'),
            exact: true
          },
          {
            path: '/docs/tags/recovery',
            component: ComponentCreator('/docs/tags/recovery', 'dff'),
            exact: true
          },
          {
            path: '/docs/tags/redis',
            component: ComponentCreator('/docs/tags/redis', '07c'),
            exact: true
          },
          {
            path: '/docs/tags/reference',
            component: ComponentCreator('/docs/tags/reference', '00b'),
            exact: true
          },
          {
            path: '/docs/tags/repository-pattern',
            component: ComponentCreator('/docs/tags/repository-pattern', '865'),
            exact: true
          },
          {
            path: '/docs/tags/request-lifecycle',
            component: ComponentCreator('/docs/tags/request-lifecycle', 'c60'),
            exact: true
          },
          {
            path: '/docs/tags/resilience',
            component: ComponentCreator('/docs/tags/resilience', 'a8f'),
            exact: true
          },
          {
            path: '/docs/tags/roadmap',
            component: ComponentCreator('/docs/tags/roadmap', 'f70'),
            exact: true
          },
          {
            path: '/docs/tags/security',
            component: ComponentCreator('/docs/tags/security', '056'),
            exact: true
          },
          {
            path: '/docs/tags/separation-of-concerns',
            component: ComponentCreator('/docs/tags/separation-of-concerns', '7d3'),
            exact: true
          },
          {
            path: '/docs/tags/serialization',
            component: ComponentCreator('/docs/tags/serialization', '9b2'),
            exact: true
          },
          {
            path: '/docs/tags/style-guide',
            component: ComponentCreator('/docs/tags/style-guide', 'ca4'),
            exact: true
          },
          {
            path: '/docs/tags/symfony',
            component: ComponentCreator('/docs/tags/symfony', 'cbd'),
            exact: true
          },
          {
            path: '/docs/tags/system-design',
            component: ComponentCreator('/docs/tags/system-design', '005'),
            exact: true
          },
          {
            path: '/docs/tags/tactician',
            component: ComponentCreator('/docs/tags/tactician', '9ad'),
            exact: true
          },
          {
            path: '/docs/tags/tailwind-css',
            component: ComponentCreator('/docs/tags/tailwind-css', '7e1'),
            exact: true
          },
          {
            path: '/docs/tags/tenant-management',
            component: ComponentCreator('/docs/tags/tenant-management', '11b'),
            exact: true
          },
          {
            path: '/docs/tags/terminology',
            component: ComponentCreator('/docs/tags/terminology', '137'),
            exact: true
          },
          {
            path: '/docs/tags/testing-strategy',
            component: ComponentCreator('/docs/tags/testing-strategy', 'e52'),
            exact: true
          },
          {
            path: '/docs/tags/tools',
            component: ComponentCreator('/docs/tags/tools', '669'),
            exact: true
          },
          {
            path: '/docs/tags/tutorial',
            component: ComponentCreator('/docs/tags/tutorial', '71f'),
            exact: true
          },
          {
            path: '/docs/tags/type-safety',
            component: ComponentCreator('/docs/tags/type-safety', '341'),
            exact: true
          },
          {
            path: '/docs/tags/unit-tests',
            component: ComponentCreator('/docs/tags/unit-tests', 'cca'),
            exact: true
          },
          {
            path: '/docs/tags/use-cases',
            component: ComponentCreator('/docs/tags/use-cases', 'f71'),
            exact: true
          },
          {
            path: '/docs/tags/validation',
            component: ComponentCreator('/docs/tags/validation', 'a17'),
            exact: true
          },
          {
            path: '/docs/tags/value-objects',
            component: ComponentCreator('/docs/tags/value-objects', '3cd'),
            exact: true
          },
          {
            path: '/docs/tags/vue',
            component: ComponentCreator('/docs/tags/vue', '819'),
            exact: true
          },
          {
            path: '/docs/tags/vue-js',
            component: ComponentCreator('/docs/tags/vue-js', '311'),
            exact: true
          },
          {
            path: '/docs/tags/webpack',
            component: ComponentCreator('/docs/tags/webpack', 'c51'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '730'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '12e'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/docs/Data-model/domain-and-data-shapes',
                component: ComponentCreator('/docs/Data-model/domain-and-data-shapes', '8ea'),
                exact: true,
                sidebar: "dataModelSidebar"
              },
              {
                path: '/docs/Data-model/value-objects',
                component: ComponentCreator('/docs/Data-model/value-objects', '821'),
                exact: true,
                sidebar: "dataModelSidebar"
              },
              {
                path: '/docs/dependencies',
                component: ComponentCreator('/docs/dependencies', '226'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/docs/directory-structure',
                component: ComponentCreator('/docs/directory-structure', 'c85'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/docs/Foundations/command-pattern',
                component: ComponentCreator('/docs/Foundations/command-pattern', '67d'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/docs/Foundations/conventions',
                component: ComponentCreator('/docs/Foundations/conventions', '5f5'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/docs/Foundations/multi-tenancy',
                component: ComponentCreator('/docs/Foundations/multi-tenancy', '073'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/docs/Foundations/request-lifecycle',
                component: ComponentCreator('/docs/Foundations/request-lifecycle', '5e0'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/docs/Foundations/security-overview',
                component: ComponentCreator('/docs/Foundations/security-overview', '6a8'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/docs/Foundations/system-architecture',
                component: ComponentCreator('/docs/Foundations/system-architecture', '7df'),
                exact: true,
                sidebar: "foundationsSidebar"
              },
              {
                path: '/docs/Frontend/events-and-dom-communication',
                component: ComponentCreator('/docs/Frontend/events-and-dom-communication', '500'),
                exact: true,
                sidebar: "frontendSidebar"
              },
              {
                path: '/docs/Frontend/frontend-architecture',
                component: ComponentCreator('/docs/Frontend/frontend-architecture', 'cca'),
                exact: true,
                sidebar: "frontendSidebar"
              },
              {
                path: '/docs/glossary',
                component: ComponentCreator('/docs/glossary', 'ce1'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/docs/Guides/feature-golden-path',
                component: ComponentCreator('/docs/Guides/feature-golden-path', '7e3'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/Operations/adr-index',
                component: ComponentCreator('/docs/Operations/adr-index', '31f'),
                exact: true,
                sidebar: "operationsSidebar"
              },
              {
                path: '/docs/overview',
                component: ComponentCreator('/docs/overview', 'f91'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/docs/Patterns/commands-and-handlers',
                component: ComponentCreator('/docs/Patterns/commands-and-handlers', '2d4'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/Patterns/repository-and-caching-strategy',
                component: ComponentCreator('/docs/Patterns/repository-and-caching-strategy', '3ac'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/Quality/error-and-resilience',
                component: ComponentCreator('/docs/Quality/error-and-resilience', '743'),
                exact: true,
                sidebar: "qualitySidebar"
              },
              {
                path: '/docs/Quality/performance-and-observability',
                component: ComponentCreator('/docs/Quality/performance-and-observability', 'c78'),
                exact: true,
                sidebar: "qualitySidebar"
              },
              {
                path: '/docs/Quality/testing-strategy',
                component: ComponentCreator('/docs/Quality/testing-strategy', '01a'),
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
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
