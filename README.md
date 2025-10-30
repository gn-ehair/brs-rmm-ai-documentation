# BRS AI Automation Documentation

This is the comprehensive documentation site for the **BRS AI Automation Project** - a hybrid AI documentation and automation system for golf software development. The site is built using [Docusaurus](https://docusaurus.io/), providing a modern, searchable, and navigable documentation experience.

## 🎯 Project Overview

The BRS AI Automation project focuses on:
- **AI-Enhanced Documentation**: Intelligent documentation generation and maintenance
- **Golf Software Development**: Specialized tools and patterns for the golf industry
- **Automation Workflows**: Streamlined development processes and deployment pipelines
- **Knowledge Management**: Centralized repository of architectural decisions and best practices

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

```bash
npm install
# or
yarn install
```

### Local Development

```bash
npm start
# or
yarn start
```

This starts a local development server at `http://localhost:3000` and opens your browser. Most changes are reflected live without restarting the server.

### Build for Production

```bash
npm run build
# or
yarn build
```

Generates static content into the `build` directory for deployment to any static hosting service.

## 📝 Editing Documentation

### Adding New Documents

1. **Create the file**: Place your new `.md` file in the appropriate directory under `docs/`:
   - `docs/Foundations/` - Core architecture and system design
   - `docs/Patterns/` - Implementation patterns and best practices
   - `docs/Data-model/` - Domain entities and data structures
   - `docs/Frontend/` - UI architecture and components
   - `docs/Quality/` - Testing, performance, and reliability
   - `docs/Guides/` - Step-by-step implementation guides
   - `docs/Operations/` - Deployment and operational procedures

2. **Add frontmatter**: Include metadata at the top of your file:
   ```yaml
   ---
   title: Your Document Title
   position: 1
   status: draft
   lastReviewed: 2025-10-30
   owner: your-team-name
   category: foundations
   tags: [relevant, keywords, here]
   ---
   ```

3. **Update navigation**: The sidebar navigation is automatically generated, but you may need to update `sidebars.ts` for custom ordering.

### Frontmatter Fields

- **title**: Display name in navigation and page header
- **position**: Ordering within the sidebar (optional)
- **status**: `draft`, `review`, or `published`
- **lastReviewed**: Date of last content review (YYYY-MM-DD format)
- **owner**: Team or individual responsible for the document
- **category**: Primary category for organization
- **tags**: Array of searchable keywords

### Content Guidelines

- Use clear, descriptive headings
- Include code examples where relevant
- Add cross-references with relative links: `[Link Text](../folder/file.md)`
- Keep content focused and scannable
- Update the `lastReviewed` date when making significant changes

## ✨ Special Features

### 🚧 Draft Warning System

The site includes an intelligent draft detection system that automatically displays warning banners for documents in draft status:

- **Visual Indicator**: Yellow warning banner appears at the top of draft documents
- **Clear Messaging**: "⚠️ This document is currently in draft status and may contain incomplete or outdated information."
- **Automatic Detection**: Based on the `status: draft` frontmatter field
- **No Manual Configuration**: Warnings appear/disappear automatically when you change the status

### 🏷️ Tag-Based Navigation

- **Browse by Tags**: Dedicated `/docs/tags` page for topic-based discovery
- **Auto-Generated**: Tag pages are automatically created from document frontmatter
- **Search Enhancement**: Tags improve content discoverability

### 📱 Responsive Design

- Mobile-friendly navigation and content display
- Optimized for both desktop and mobile development workflows
- Print-friendly styling for offline reference

### 🔍 Built-in Search

- Full-text search across all documentation
- Instant results as you type
- Keyboard shortcuts for power users

## 🗂️ Project Structure

```
├── docs/                    # Documentation content
│   ├── Foundations/         # System architecture & core concepts
│   ├── Patterns/           # Implementation patterns
│   ├── Data-model/         # Domain modeling
│   ├── Frontend/           # UI architecture
│   ├── Quality/            # Testing & performance
│   ├── Guides/             # Step-by-step guides
│   └── Operations/         # Deployment & ops
├── src/
│   ├── components/         # React components
│   ├── pages/             # Custom pages (homepage, etc.)
│   └── theme/             # Theme customizations
├── static/                # Static assets (images, files)
├── docusaurus.config.ts   # Site configuration
└── sidebars.ts           # Navigation structure
```

## 🔗 Key Links

- **Live Documentation**: [Start Here](./docs/README.md)
- **Project Jira**: [BRS-11809](https://golfnow.atlassian.net/browse/BRS-11809)
- **Docusaurus Docs**: [docusaurus.io](https://docusaurus.io/)

## 🛠️ Development Commands

```bash
# Type checking
npm run typecheck

# Clear cache
npm run clear

# Serve built site locally
npm run serve

# Generate Docusaurus types
npm run write-translations
```

## 📋 Contributing

1. **Check for drafts**: Use the draft warning system to identify content needing review
2. **Update metadata**: Keep `lastReviewed` dates current
3. **Test locally**: Always test changes with `npm start` before committing
4. **Follow conventions**: Use consistent naming and tagging patterns
5. **Cross-reference**: Link related documents to improve navigation

## 🎯 Roadmap

- **Phase 1**: Foundation Documentation ✅
- **Phase 2**: AI Integration Planning (In Progress)
- **Phase 3**: Automation Workflows
- **Phase 4**: Advanced Search & Discovery
