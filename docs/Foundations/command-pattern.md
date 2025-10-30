---
status: draft
lastReviewed: 2025-10-08
owner: members-module-team
category: patterns
tags: [command-pattern, cqrs, tactician, handlers, separation-of-concerns]
---

# Command Pattern with Tactician

## Overview

The BRS Members Module uses the **Command Pattern** implemented via the **Tactician library**. This pattern separates the request (command) from the business logic (handler), promoting clean separation of concerns and avoiding "fat controllers."

## Why Use Commands?

### Problems with Fat Controllers
```php
// ❌ Fat Controller Anti-pattern
public function bookTeeTime(Request $request): Response 
{
    // 50+ lines of validation, business logic, API calls, etc.
    $club = $this->getClub($request->get('club'));
    $user = $request->getSession()->get('user');
    
    // Validation logic...
    if (!$this->validateBookingRules($club, $user, $date, $time)) {
        // Error handling...
    }
    
    // API calls...
    $teeTime = $this->apiClient->fetchTeeTime($club, $date, $time);
    
    // More business logic...
    // Payment processing...
    // Email notifications...
    
    return $this->render('booking/success.html.twig', $data);
}
```

### Command Pattern Solution
```php
// ✅ Clean Controller with Commands
public function bookTeeTime(Request $request): Response 
{
    return $this->execute(
        new StoreBookingCommand(
            $request->get('club'),
            $request->getSession()->get('user'),
            $request->get('course'),
            $request->get('date'),
            $request->get('time'),
            $request->request->all(),
            $request->headers->get('referer')
        )
    );
}
```

## Command Structure

### Anatomy of a Command

Commands are **data transfer objects** that encapsulate user intent:

```php
<?php

namespace App\Command\Booking;

use App\Command\HasClubTrait;
use App\Command\HasUserTrait;
use App\Model\Club;
use App\Model\User;

class StoreBookingCommand
{
    use HasClubTrait;    // Provides club property and getter
    use HasUserTrait;    // Provides user property and getter
    
    private DateTime $dateTime;

    public function __construct(
        Club $club,
        User $user,
        private int $courseId,
        private string $date,
        private string $time,
        private array $data,
        private string $referer
    ) {
        $this->club = $club;
        $this->user = $user;
        $this->dateTime = DateTime::createFromFormat(
            'YmdHi',
            $this->getDate().$this->getTime()
        );
    }

    // Getters for all properties...
    public function getCourseId(): int { return $this->courseId; }
    public function getDate(): string { return $this->date; }
    public function getTime(): string { return $this->time; }
    public function getData(): array { return $this->data; }
    public function getReferer(): string { return $this->referer; }
    public function getDateTime(): DateTime { return $this->dateTime; }
}
```

### Common Command Traits

Most commands use these shared traits:

```php
// HasClubTrait - Provides club context
trait HasClubTrait {
    protected Club $club;
    
    public function getClub(): Club {
        return $this->club;
    }
}

// HasUserTrait - Provides user context  
trait HasUserTrait {
    protected User $user;
    
    public function getUser(): User {
        return $this->user;
    }
}
```

## Handler Structure

### Anatomy of a Handler

Handlers contain the **business logic** for processing commands:

```php
<?php

namespace App\Handler\Booking;

use App\Command\Booking\StoreBookingCommand;
use App\Exception\CreateMemberBookingException;
use App\Handler\RendersTemplatesTrait;
use App\Repository\MemberBookingRepositoryInterface;
use Symfony\Component\HttpFoundation\Response;

class StoreBookingHandler
{
    use RendersTemplatesTrait;  // Provides template rendering
    
    public function __construct(
        private MemberBookingRepositoryInterface $memberBookingRepository,
        private TeeTimeRepository $teeTimeRepository,
        private PaymentService $paymentService
    ) {}

    public function handle(StoreBookingCommand $command): Response
    {
        // 1. Validate the request
        $this->validateBookingRules($command);
        
        // 2. Fetch required data
        $teeTime = $this->teeTimeRepository->fetchTeeTime(
            $command->getClub(),
            $command->getDateTime()
        );
        
        // 3. Process business logic
        $booking = $this->createBooking($command, $teeTime);
        
        // 4. Handle payments if required
        if ($booking->requiresPayment()) {
            $this->paymentService->processPayment($booking);
        }
        
        // 5. Store the booking
        $this->memberBookingRepository->store($booking);
        
        // 6. Return response
        return new Response(
            $this->render('booking/confirmation.html.twig', [
                'booking' => $booking,
                'club' => $command->getClub()
            ])
        );
    }
    
    private function validateBookingRules(StoreBookingCommand $command): void
    {
        // Validation logic...
    }
    
    private function createBooking(StoreBookingCommand $command, TeeTime $teeTime): MemberBooking
    {
        // Booking creation logic...
    }
}
```

### Handler Traits

Common functionality is shared via traits:

```php
// RendersTemplatesTrait - Template rendering
trait RendersTemplatesTrait {
    private Environment $twig;
    
    protected function render(string $template, array $context = []): string {
        return $this->twig->render($template, $context);
    }
}

// PreparesAlertsTrait - Flash messages
trait PreparesAlertsTrait {
    protected function prepareAlert(string $type, string $title, string $message): void {
        // Alert preparation logic...
    }
}

// GeneratesUrlsTrait - URL generation
trait GeneratesUrlsTrait {
    private UrlGeneratorInterface $router;
    
    protected function generateUrl(string $route, array $parameters = []): string {
        return $this->router->generate($route, $parameters);
    }
}
```

## Command Bus Configuration

The command bus automatically routes commands to handlers:

```yaml
# config/services.yaml
services:
    # Command Bus
    League\Tactician\CommandBus:
        arguments:
            - '@tactician.middleware.command_handler'

    # Auto-wire handlers
    App\Handler\:
        resource: '../src/Handler/'
        tags: ['tactician.handler']
```

## Command Categories

### By Domain Area

| Domain | Purpose | Examples |
|--------|---------|----------|
| **Authentication** | User login/logout | `LoginCommand`, `LogoutCommand` |
| **Booking** | Tee time management | `StoreBookingCommand`, `DeleteBookingCommand` |
| **Competition** | Competition entries | `EnterCompetitionCommand`, `ShowCompetitionsCommand` |
| **Account** | User account management | `ShowAccountDetailsCommand`, `UpdateAccountDetailsCommand` |
| **TeeSheet** | Tee sheet display | `ShowTeeSheetCommand`, `ProvideTeeSheetDataCommand` |

### By Action Type

| Type | Purpose | Examples |
|------|---------|----------|
| **Show** | Display pages | `ShowHomeCommand`, `ShowBookingsCommand` |
| **Provide** | API data endpoints | `ProvideTeeSheetDataCommand`, `ProvideBuddyListDataCommand` |
| **Store/Update** | Data modification | `StoreBookingCommand`, `UpdateAccountDetailsCommand` |
| **Delete/Remove** | Data removal | `DeleteBookingCommand`, `RemoveWaitingListEntryCommand` |

## Best Practices

### Command Naming
- Use descriptive verbs: `Show`, `Store`, `Update`, `Delete`, `Provide`
- Include domain context: `ShowBookingCommand` not just `ShowCommand`
- Be specific: `StoreBookingCommand` not `BookingCommand`

### Command Structure
```php
// ✅ Good Command Structure
class StoreBookingCommand
{
    use HasClubTrait, HasUserTrait;
    
    public function __construct(
        Club $club,
        User $user,
        private readonly int $courseId,
        private readonly string $date,
        private readonly string $time,
        private readonly array $formData
    ) {
        $this->club = $club;
        $this->user = $user;
    }
    
    // Only getters, no business logic
    public function getCourseId(): int { return $this->courseId; }
}
```

### Handler Structure
```php
// ✅ Good Handler Structure  
class StoreBookingHandler
{
    public function __construct(
        private SomeRepository $repository,
        private SomeService $service
    ) {}
    
    public function handle(StoreBookingCommand $command): Response
    {
        // 1. Validate
        // 2. Process
        // 3. Store
        // 4. Return response
    }
    
    // Private methods for complex logic
    private function validateBookingRules(): void { }
}
```

### Testing Commands and Handlers

```php
class StoreBookingHandlerTest extends TestCase
{
    public function testHandleCreatesBookingSuccessfully(): void
    {
        // Arrange
        $command = new StoreBookingCommand(
            $this->createClub(),
            $this->createUser(),
            1, // courseId
            '20250901', // date
            '1000', // time
            [] // formData
        );
        
        // Act
        $response = $this->handler->handle($command);
        
        // Assert
        $this->assertInstanceOf(Response::class, $response);
        $this->assertStringContainsString('booking confirmed', $response->getContent());
    }
}
```

## Common Patterns

### Form Handling Pattern
```php
// Controller
public function booking(Request $request): Response
{
    if ($request->getMethod() === 'POST') {
        return $this->execute(
            new StoreBookingCommand(/* ... form data ... */)
        );
    }
    
    return $this->execute(
        new ShowBookingFormCommand(/* ... */)
    );
}
```

### API Data Pattern
```php
// Provide data for AJAX requests
#[Route('/{club}/bookings/data', methods: ['GET'])]
public function bookingsData(Request $request): Response
{
    return $this->execute(
        new ProvideBookingsDataCommand(
            $request->get('club'),
            $request->getSession()->get('user')
        )
    );
}
```

### Redirect After Processing Pattern
```php
// Handler returns redirect response
public function handle(DeleteBookingCommand $command): Response
{
    $this->memberBookingRepository->delete($command->getBookingId());
    
    $this->prepareAlert(
        Alert::TYPE_SUCCESS,
        'Booking Deleted',
        'Your booking has been successfully deleted.'
    );
    
    return new RedirectResponse(
        $this->generateUrl('bookings', ['club' => $command->getClub()->getId()])
    );
}
```

## Migration Guide

### Converting Fat Controllers

When you encounter a fat controller:

1. **Identify the intent** - What is the user trying to do?
2. **Create a command** - Extract parameters into a command object
3. **Create a handler** - Move business logic to a handler
4. **Update controller** - Replace logic with command execution
5. **Add tests** - Test the handler logic

### Example Migration

```php
// Before: Fat Controller
public function updateAccount(Request $request): Response 
{
    $club = $this->getClub($request->get('club'));
    $user = $request->getSession()->get('user');
    $formData = $request->request->all()['account_form'];
    
    // 30+ lines of validation and processing...
    
    return $this->render('account/updated.html.twig', $data);
}

// After: Command Pattern
public function updateAccount(Request $request): Response 
{
    return $this->execute(
        new UpdateAccountDetailsCommand(
            $request->get('club'),
            $request->getSession()->get('user'),
            $request->request->all()['account_form']
        )
    );
}
```

This pattern keeps controllers thin, makes business logic testable, and promotes code reusability across the application.
