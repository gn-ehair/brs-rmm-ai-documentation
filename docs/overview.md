---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: general
tags: [overview, architecture, symfony, vue, system-design]
---

# System Architecture Overview 

## Introduction

The BRS Members Module is a Symfony-based web application that provides golf club members with functionality to create and manage their bookings, view competitions, manage account details, and access club information.

## High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   External      │
│                 │    │                 │    │   Services      │
│ • Vue.js        │◄──►│ • Symfony 7.1   │◄──►│ • BRS Teesheet  │
│ • jQuery        │    │ • PHP 8.2       │    │   APIs          │
│ • Tailwind CSS  │    │ • Tactician     │    │ • Redis Cache   │
│ • Webpack       │    │ • Command Bus   │    │ • Payment APIs  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Core Components

### 1. **Request Flow**
```
HTTP Request → Controller → Command → Handler → Response
```

1. **Controller** receives HTTP requests and extracts parameters
2. **Command** object encapsulates the request data and intent
3. **Handler** processes the command and executes business logic
4. **Response** returned to the user (HTML view or JSON)

### 2. **Key Architectural Patterns**

#### Command Pattern (Tactician)
- **Commands**: Data transfer objects representing user intent
- **Handlers**: Business logic processors for specific commands
- **CommandBus**: Routes commands to appropriate handlers

#### Repository Pattern
- **Repositories**: Abstract data access layer
- **API Repositories**: Fetch data from external BRS APIs
- **Cached Repositories**: Add caching layer for performance

#### View/Model Separation
- **Models**: Domain objects representing business entities
- **Views**: Presentation objects for rendering templates
- **Decorators**: Transform models into view-ready data

## Directory Structure

```
src/
├── Command/          # Command objects (user intents)
├── Controller/       # HTTP request handlers
├── Handler/          # Business logic processors
├── Model/           # Domain models and entities
├── Repository/      # Data access abstraction
├── Service/         # Shared business services
├── View/            # Presentation layer objects
├── Form/            # Symfony form types
├── Request/         # API request objects
├── Exception/       # Custom exception classes
└── Support/         # Utility classes and helpers
```

## Data Flow

### Typical User Interaction Flow
1. **User Action** (e.g., book a tee time)
2. **Controller** creates appropriate Command
3. **CommandBus** routes to Handler
4. **Handler** validates and processes request
5. **Repository** fetches/stores data via APIs
6. **View Builder** prepares presentation data
7. **Template** renders final HTML response

### External Integration
- **BRS Teesheet APIs**: Primary data source for bookings, competitions, member data
- **Redis**: Session storage and API response caching
- **Payment Gateways**: Process booking payments
- **Authentication**: Member login and session management

## Key Technologies

### Backend Stack
- **Symfony 7.1**: Web framework providing routing, DI, templating
- **PHP 8.2**: Modern PHP with type declarations and performance improvements
- **Tactician**: Command bus implementation for CQRS pattern
<!-- Removed ORM reference: architecture is API-first with no local persistence layer -->
- **Guzzle**: HTTP client for API communications
- **JMS Serializer**: JSON serialization/deserialization
- **Carbon**: Enhanced DateTime handling

### Frontend Stack
- **Vue.js**: Component-based JavaScript framework
- **jQuery**: DOM manipulation and legacy compatibility
- **Tailwind CSS**: Utility-first CSS framework
- **Webpack Encore**: Asset compilation and optimization
- **SASS**: CSS preprocessing

### Infrastructure
- **Docker**: Development environment containerization
- **Redis**: Caching and session storage
- **Jenkins**: CI/CD pipeline
- **Datadog**: Application monitoring and logging

## Security & Performance

### Authentication
- Session-based authentication with club-specific contexts
- User authorization managed through BRS Teesheet APIs
- CSRF protection on form submissions

### Caching Strategy
- **API Response Caching**: Redis cache for external API calls
- **Club Configuration**: Cached for performance, clearable via query parameter
- **Session Storage**: Redis-based session management

### Performance Optimizations
- **Asset Optimization**: Webpack with CSS purging in production
- **API Batching**: Minimize external API calls where possible
- **Lazy Loading**: Vue components loaded on demand

## Development Workflow

### Adding New Features
1. Create Command object in `/src/Command/`
2. Implement Handler in `/src/Handler/`
3. Add Controller action in `/src/Controller/`
4. Create/update templates in `/templates/`
5. Add routing in `/config/routes/`
6. Write tests for business logic

### Testing Strategy
- **Unit Tests**: Handler business logic
- **Integration Tests**: Controller and API interactions
- **Frontend Tests**: Vue component functionality

## Deployment Architecture

### Environments
- **Production**: https://members.brsgolf.com
- **Release**: https://members.release.golfnowcloud.co.uk
- **Feature Branches**: Ephemeral environments (e.g., `feature/branch-name`)

### CI/CD Pipeline
1. **Code Push** to GitHub
2. **Jenkins** builds and tests
3. **Docker** containerization
4. **Deployment** to appropriate environment
5. **Health Checks** and monitoring

## Common Patterns

### Controller Pattern
```php
#[Route('/{club}/action', name: 'action', methods: ['GET'])]
public function action(Request $request): Response
{
    return $this->execute(
        new ActionCommand(
            $request->get('club'),
            $request->getSession()->get('user')
        )
    );
}
```

### Command/Handler Pattern
```php
// Command (data container)
class ActionCommand {
    use HasClubTrait, HasUserTrait;
    // ... constructor and getters
}

// Handler (business logic)
class ActionHandler {
    public function handle(ActionCommand $command): Response {
        // Business logic here
        return new Response($this->render('template.html.twig', $data));
    }
}
```

## Next Steps

For detailed implementation guides, see:
- [Command Pattern Documentation](./Foundations/command-pattern.md)
- [Feature Development Guide](./Guides/feature-golden-path.md)
- [System Architecture](./Foundations/system-architecture.md)
