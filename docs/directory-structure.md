---
status: stable
lastReviewed: 2025-10-08
owner: members-module-team
category: structure
tags: [directory-structure, codebase, organization, reference]
---

# Directory Structure

## Overview

The BRS Members Module follows a structured organization that separates concerns and promotes maintainability. This guide explains the purpose and contents of each directory.

## Root Directory Structure

```
brs-members-module/
├── assets/                 # Frontend assets and build configuration
├── bin/                   # Executable scripts and commands
├── config/                # Application configuration files
├── deploy/                # Deployment and infrastructure configuration
├── docker/                # Docker configuration for development
├── docs/                  # Documentation (this folder)
├── migrations/            # (Legacy) Historical migration scripts – not used at runtime (no local DB)
├── public/                # Publicly accessible files (entry point)
├── src/                   # PHP source code (main application)
├── templates/             # Twig template files
├── tests/                 # Test files
├── translations/          # Internationalization files
├── var/                   # Runtime files (cache, logs)
└── vendor/                # Composer dependencies
```

## Source Code Structure (`/src/`)

### Command Layer
```
src/Command/
├── Account/              # Account management commands
├── Authentication/       # Login/logout commands
├── Booking/             # Tee time booking commands
├── BuddyList/           # Buddy list management
├── ClubMessages/        # Club communication commands
├── ClubNews/            # News and announcements
├── Competition/         # Competition-related commands
├── CompetitionPurse/    # Competition purse management
├── Consents/            # User consent management
├── Credit/              # Credit/payment commands
├── Daylight/            # Daylight time calculations
├── Feedback/            # User feedback commands
├── GolfPlus/            # Golf+ feature commands
├── GreenFeeRates/       # Green fee pricing
├── HandicapMaster/      # Handicap management
├── Home/                # Dashboard/home page
├── Legals/              # Terms, privacy policy
├── MarketingPreferences/ # Marketing opt-in/out
├── Member/              # Member data commands
├── Membership/          # Membership management
├── Registration/        # Member registration
├── Scoring/             # Score entry and management
├── TeeSheet/            # Tee sheet display
├── TeeTimes/            # Tee time operations
└── WaitingList/         # Competition waiting lists

# Common command traits
├── HasClubTrait.php     # Provides club context
├── HasUserTrait.php     # Provides user context
```

### Handler Layer
```
src/Handler/
├── Account/             # Account management handlers
├── Authentication/      # Login/logout handlers
├── Booking/             # Booking business logic
├── BuddyList/           # Buddy list operations
├── ClubMessages/        # Club message handling
├── ClubNews/            # News management
├── Competition/         # Competition logic
├── CompetitionEntry/    # Competition entry processing
├── CompetitionPurse/    # Purse management
├── Consents/            # Consent processing
├── Credit/              # Credit operations
├── Daylight/            # Daylight calculations
├── Feedback/            # Feedback processing
├── GolfPlus/            # Golf+ features
├── GreenFeeRates/       # Rate calculations
├── HandicapMaster/      # Handicap processing
├── Home/                # Dashboard logic
├── Legals/              # Legal document serving
├── MarketingPreferences/ # Preference management
├── Member/              # Member operations
├── Membership/          # Membership logic
├── Registration/        # Registration processing
├── Scoring/             # Score processing
├── TeeSheet/            # Tee sheet generation
├── TeeTimes/            # Tee time operations
└── WaitingList/         # Waiting list management

# Common handler traits
├── GeneratesUrlsTrait.php    # URL generation
├── PreparesAlertsTrait.php   # Flash message preparation
└── RendersTemplatesTrait.php # Template rendering
```

### Controller Layer
```
src/Controller/
├── AccountController.php           # Account management
├── AuthenticationController.php    # Login/logout
├── BookingRulesController.php      # Booking rule display
├── BookingsController.php          # Booking management
├── BuddyListController.php         # Buddy list operations
├── ClubMessagesController.php      # Club messages
├── ClubNewsController.php          # News display
├── CompetitionEntryController.php  # Competition entries
├── CompetitionPurseController.php  # Competition purse
├── CompetitionsController.php      # Competition display
├── ConsentsController.php          # Consent management
├── CreditOverviewController.php    # Credit display
├── DaylightController.php          # Daylight data
├── DrawWaitingListController.php   # Draw waiting lists
├── FeedbackController.php          # User feedback
├── GolfPlusController.php          # Golf+ features
├── GreenFeeRatesController.php     # Rate display
├── HandicapMasterController.php    # Handicap display
├── HomeController.php              # Dashboard
├── LegalsController.php            # Legal documents
├── MarketingPreferencesController.php # Marketing prefs
├── MemberController.php            # Member data
├── MembershipController.php        # Membership info
├── RegisterController.php          # Registration
├── ScoringController.php           # Score entry
├── TeeSheetController.php          # Tee sheet display
├── TeeTimesController.php          # Tee time operations
└── WaitingListController.php       # Waiting lists

# Controller interfaces and traits
├── AuthorisedController.php    # Requires authentication
├── ConsentedController.php     # Requires consent
└── ExecutesCommandsTrait.php   # Command execution
```

### Model Layer
```
src/Model/
├── Alert.php                # Flash message model
├── Authorisation.php        # User authorization data
├── Booking.php              # Booking domain model
├── BuddyList.php            # Buddy list model
├── Club.php                 # Club domain model
├── ClubConfiguration.php    # Club settings model
├── Competition.php          # Competition domain model
├── Course.php               # Golf course model
├── GolfPassVideoTip.php     # Golf+ video tips
├── MemberBooking.php        # Member booking model
├── MemberSlot.php           # Booking slot model
├── Payment.php              # Payment model
├── PlayerType.php           # Player category model
├── TeeTime.php              # Tee time model
├── User.php                 # User domain model
└── WaitingListEntry.php     # Waiting list model
```

### Repository Layer
```
src/Repository/
├── ApiSourced/              # API-based repositories
│   ├── ClubRepository.php           # Club data from API
│   ├── CompetitionRepository.php    # Competition data
│   ├── MemberBookingRepository.php  # Booking data
│   ├── MemberRepository.php         # Member data
│   └── TeeTimeRepository.php        # Tee time data
├── ClubRepositoryInterface.php      # Club repository contract
├── CompetitionRepositoryInterface.php # Competition contract
├── MemberBookingRepositoryInterface.php # Booking contract
├── MemberRepositoryInterface.php    # Member contract
└── TeeTimeRepositoryInterface.php   # Tee time contract
```

### Service Layer
```
src/Service/
├── ApiClient/               # External API clients
├── AppLocator.php          # Service locator
├── ClubResolver.php        # Club context resolution
├── MercureService.php      # Real-time updates
└── RedisService.php        # Cache operations
```

### Request Layer
```
src/Request/
├── Competition/            # Competition API requests
├── Member/                # Member API requests
└── TeeTime/               # Tee time API requests
```

### Form Layer
```
src/Form/
├── AccountForm.php         # Account update form
├── BookingForm.php         # Booking creation form
├── CompetitionEntryForm.php # Competition entry
├── FeedbackForm.php        # User feedback form
├── LoginForm.php           # Authentication form
├── RegistrationForm.php    # Member registration
└── WaitingListForm.php     # Waiting list entry
```

### View Layer
```
src/View/
├── Builder/               # View builders for complex data
├── ClubView.php          # Club presentation model
├── CompetitionView.php   # Competition presentation
├── MemberBookingView.php # Booking presentation
└── TeeSheetView.php      # Tee sheet presentation
```

### Exception Layer
```
src/Exception/
├── ApiException.php              # API communication errors
├── CreateMemberBookingException.php # Booking creation errors
├── FetchClubNewsException.php    # News retrieval errors
├── FetchCompetitionsException.php # Competition errors
├── FetchMemberBookingsException.php # Booking retrieval
├── FetchTeeTimeException.php     # Tee time errors
├── InvalidFormDataException.php  # Form validation errors
├── LockTeeTimeException.php      # Tee time locking errors
└── UpdateMemberBookingException.php # Booking update errors
```

## Configuration Structure (`/config/`)

```
config/
├── bundles.php              # Bundle registration
├── preload.php             # PHP preloading
├── routes.yaml             # Main routing configuration
├── services.yaml           # Dependency injection
├── packages/               # Package-specific configuration
│   ├── asset_mapper.yaml       # Asset management
│   ├── cache.yaml              # Caching configuration
│   ├── doctrine.yaml           # (Legacy placeholder) remove if DB not reinstated
│   ├── framework.yaml          # Symfony framework
│   ├── jms_serializer.yaml     # JSON serialization
│   ├── league_tactician.yaml   # Command bus
│   ├── monolog.yaml            # Logging
│   ├── security.yaml           # Security configuration
│   ├── snc_redis.yaml          # Redis configuration
│   ├── twig.yaml               # Template engine
│   └── webpack_encore.yaml     # Asset building
├── routes/                 # Environment-specific routes
└── serializer/             # JMS serializer mappings
```

## Template Structure (`/templates/`)

```
templates/
├── bundles/               # Bundle template overrides
├── layouts/              # Base layouts
│   ├── main.html.twig        # Main application layout
│   └── auth.html.twig        # Authentication layout
├── pages/                # Full page templates
├── partials/             # Reusable template components
│   ├── navigation.html.twig  # Main navigation
│   ├── footer.html.twig      # Page footer
│   └── alerts.html.twig      # Flash messages
└── sections/             # Feature-specific templates
    ├── account/              # Account management
    ├── booking/              # Booking templates
    ├── competition/          # Competition templates
    ├── home/                 # Dashboard templates
    └── member/               # Member templates
```

## Frontend Structure (`/assets/`)

```
assets/
├── app.js                # Main JavaScript entry point
├── css/                  # Stylesheets
│   └── app.scss             # Main SASS file
├── js/                   # JavaScript files
│   ├── app.js               # Application JavaScript
│   ├── components/          # Vue.js components
│   ├── sections/            # Page-specific JavaScript
│   └── services/            # JavaScript services
└── vendor/               # Third-party frontend assets
```

## Test Structure (`/tests/`)

```
tests/
├── bootstrap.php         # Test bootstrap
├── Command/              # Command tests
├── Controller/           # Controller tests
├── Handler/              # Handler tests (main business logic)
├── Model/                # Model tests
├── Repository/           # Repository tests
└── Service/              # Service tests
```

## Naming Conventions

### Commands
- **Action + Context**: `ShowBookingsCommand`, `StoreBookingCommand`
- **Verb-first naming**: `Create`, `Update`, `Delete`, `Show`, `Provide`
- **Specific context**: Include domain (`Booking`, `Competition`, etc.)

### Handlers
- **Matching command name**: `ShowBookingsHandler` for `ShowBookingsCommand`
- **Single responsibility**: One handler per command
- **Business logic container**: Contains all processing logic

### Controllers
- **Domain-based**: `BookingsController`, `CompetitionsController`
- **Thin controllers**: Minimal logic, delegate to commands
- **RESTful when possible**: Standard HTTP methods and naming

### Models
- **Domain entities**: Represent real-world concepts
- **Immutable when possible**: Use readonly properties
- **Rich domain models**: Include behavior, not just data

### Repositories
- **Interface-based**: All repositories implement interfaces
- **API-first boundary**: Abstract away external API details (no local DB layer)
- **Caching layer**: Built into API repositories

## File Organization Rules

1. **One class per file**: Each PHP class in its own file
2. **Namespace matches directory**: PSR-4 autoloading
3. **Consistent naming**: Follow established patterns
4. **Logical grouping**: Group related functionality together
5. **Clear dependencies**: Explicit constructor injection

## Adding New Features

When adding new functionality:

1. **Create command** in appropriate `Command/` subdirectory
2. **Implement handler** in matching `Handler/` subdirectory  
3. **Add controller action** in relevant controller
4. **Create templates** in appropriate `templates/` section
5. **Add tests** for business logic in handlers
6. **Update routing** if needed

This structure promotes:
- **Clear separation of concerns**
- **Easy navigation and discovery**
- **Consistent patterns across features**
- **Testable business logic**
- **Maintainable codebase**
