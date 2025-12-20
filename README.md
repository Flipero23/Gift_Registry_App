# Gift Registry Application

A full-stack web application for managing gift registries, allowing users to create registries for events, add gift items, and manage guest lists with RSVP functionality.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Frontend Routes](#frontend-routes)
- [Security](#security)
- [Database](#database)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

The Gift Registry Application is a modern web application that enables users to:
- Create and manage gift registries for various events (weddings, birthdays, graduations, etc.)
- Add gift items to registries with details like name, price, quantity, and purchase status
- Manage guest lists with email addresses and RSVP tracking
- View, edit, and delete registries, items, and guests

The application follows a RESTful architecture with a Spring Boot backend and an Angular frontend, providing a clean separation of concerns and a scalable codebase.

## ✨ Features

- **Registry Management**
  - Create, read, update, and delete registries
  - Track event details (name, owner, date, description)
  - Associate multiple items and guests with each registry

- **Item Management**
  - Add items to registries with name, price, and quantity
  - Mark items as purchased
  - Update and delete items

- **Guest Management**
  - Add guests to registries with name and email
  - Track RSVP status
  - Update guest information

- **User Interface**
  - Modern, responsive Angular frontend with standalone components
  - Intuitive navigation with Angular Router
  - Advanced filtering and sorting capabilities
  - Real-time search functionality
  - Form validation (reactive and template-driven)
  - Comprehensive error handling and loading states
  - Dashboard with visual statistics (progress bars, percentages)
  - Empty states for better UX
  - Mobile-responsive design

- **Security**
  - API key authentication
  - CORS configuration for secure cross-origin requests

## 🛠 Technology Stack

### Backend
- **Java 21** - Programming language
- **Spring Boot 3.5.0** - Application framework
- **Spring Data JPA** - Data persistence
- **H2 Database** - In-memory database (development)
- **Maven** - Build and dependency management

### Frontend
- **Angular 20.3.0** - Modern frontend framework with standalone components
- **TypeScript 5.9.2** - Strongly typed programming language
- **RxJS 7.8.0** - Reactive programming library for async operations
- **Angular Router 20.3.0** - Client-side routing and navigation
- **Angular Forms 20.3.0** - Reactive and template-driven form handling
- **Angular Common 20.3.0** - Common directives, pipes, and services
- **Zone.js 0.15.0** - Angular's change detection mechanism
- **Angular CLI 20.3.10** - Command-line interface for development
- **Karma & Jasmine** - Testing framework and test runner
- **CSS3** - Modern styling with Grid, Flexbox, and custom properties

## 📁 Project Structure

```
Gift_Registry_App-1/
├── backend/
│   ├── Gift_Registry_API/
│   │   └── Gift_Registry/
│   │       ├── src/
│   │       │   └── main/
│   │       │       ├── java/
│   │       │       │   └── org/example3/
│   │       │       │       ├── Main.java                    # Application entry point
│   │       │       │       ├── controller/                  # REST controllers
│   │       │       │       │   ├── RegistryController.java
│   │       │       │       │   ├── ItemController.java
│   │       │       │       │   ├── GuestController.java
│   │       │       │       │   └── HomeController.java
│   │       │       │       ├── model/                       # Entity models
│   │       │       │       │   ├── Registry.java
│   │       │       │       │   ├── Item.java
│   │       │       │       │   └── Guest.java
│   │       │       │       ├── repository/                  # Data access layer
│   │       │       │       │   ├── RegistryRepository.java
│   │       │       │       │   ├── ItemRepository.java
│   │       │       │       │   └── GuestRepository.java
│   │       │       │       ├── service/                     # Business logic
│   │       │       │       │   ├── RegistryService.java
│   │       │       │       │   ├── ItemService.java
│   │       │       │       │   └── GuestService.java
│   │       │       │       ├── exception/                   # Exception handling
│   │       │       │       │   ├── GlobalExceptionHandler.java
│   │       │       │       │   └── ResourceNotFoundException.java
│   │       │       │       ├── ApiKeyInterceptor.java       # API key authentication
│   │       │       │       ├── ApiKeyProperties.java        # API key configuration
│   │       │       │       ├── CorsConfig.java              # CORS configuration
│   │       │       │       ├── DataInitializer.java         # Database initialization
│   │       │       │       └── WebMvcConfig.java            # Web configuration
│   │       │       └── resources/
│   │       │           └── application.properties            # Application configuration
│   │       ├── pom.xml                                       # Maven dependencies
│   │       └── Procfile                                      # Heroku deployment config
│   ├── mvnw                                                   # Maven wrapper (Unix)
│   └── mvnw.cmd                                               # Maven wrapper (Windows)
│
└── frontend/
    └── gift-registry/
        ├── src/
        │   ├── app/
        │   │   ├── api/                                      # API service layer
        │   │   │   ├── registry.api.ts                      # Registry CRUD operations
        │   │   │   ├── item.api.ts                          # Item operations
        │   │   │   ├── guest.api.ts                         # Guest operations
        │   │   │   └── api-key.interceptor.ts               # HTTP interceptor for API key
        │   │   ├── models/                                   # TypeScript interfaces
        │   │   │   └── registry.models.ts                   # Registry, Item, Guest types
        │   │   ├── pages/                                    # Page components (routes)
        │   │   │   ├── registry-list/                       # List all registries
        │   │   │   │   ├── registry-list.ts                 # Component logic
        │   │   │   │   ├── registry-list.html               # Template
        │   │   │   │   └── registry-list.css                # Styles
        │   │   │   ├── registry-create/                     # Create new registry
        │   │   │   │   ├── registry-create.ts
        │   │   │   │   ├── registry-create.html
        │   │   │   │   └── registry-create.css
        │   │   │   ├── registry-detail/                     # View registry details
        │   │   │   │   ├── registry-detail.ts
        │   │   │   │   ├── registry-detail.html
        │   │   │   │   └── registry-detail.css
        │   │   │   └── registry-edit/                       # Edit registry
        │   │   │       ├── registry-edit.ts
        │   │   │       ├── registry-edit.html
        │   │   │       └── registry-edit.css
        │   │   ├── shared/                                   # Reusable components
        │   │   │   ├── registry-form/                       # Form component
        │   │   │   │   ├── registry-form.ts
        │   │   │   │   ├── registry-form.html
        │   │   │   │   └── registry-form.css
        │   │   │   └── shared/navbar/                       # Navigation bar
        │   │   │       ├── navbar.ts
        │   │   │       ├── navbar.html
        │   │   │       └── navbar.css
        │   │   ├── app.ts                                    # Root component
        │   │   ├── app.html                                  # Root template
        │   │   ├── app.css                                   # Root styles
        │   │   ├── app.routes.ts                            # Route definitions
        │   │   └── app.config.ts                            # App configuration (providers)
        │   ├── index.html                                    # HTML entry point
        │   ├── main.ts                                       # Application bootstrap
        │   └── styles.css                                    # Global styles
        ├── public/
        │   └── favicon.ico                                   # Site icon
        ├── package.json                                      # NPM dependencies & scripts
        ├── package-lock.json                                 # Dependency lock file
        ├── angular.json                                      # Angular workspace config
        ├── tsconfig.json                                     # TypeScript config
        ├── tsconfig.app.json                                 # App-specific TS config
        ├── tsconfig.spec.json                                # Test-specific TS config
        └── README.md                                         # Frontend-specific docs
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Java Development Kit (JDK) 21** or higher
- **Node.js** (v18 or higher) and **npm** (v9 or higher)
- **Maven** 3.6+ (or use the included Maven wrapper)
- **Angular CLI** (will be installed via npm)

## 🚀 Installation & Setup

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend/Gift_Registry_API/Gift_Registry
   ```

2. **Build the project using Maven:**
   ```bash
   # On Windows
   ..\..\mvnw.cmd clean install
   
   # On Unix/Mac
   ../../mvnw clean install
   ```

   Or if you have Maven installed globally:
   ```bash
   mvn clean install
   ```

3. **Verify the build:**
   The build should complete successfully and create a JAR file in the `target/` directory.

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend/gift-registry
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   This will install all required packages including:
   - Angular core packages (v20.3.0)
   - Angular Router, Forms, Common modules
   - RxJS for reactive programming
   - TypeScript and Angular CLI
   - Development dependencies (testing, linting)

3. **Install Angular CLI globally (if not already installed):**
   ```bash
   npm install -g @angular/cli
   ```
   
   **Note**: The CLI is also available locally via `npx ng` or `npm run ng`

4. **Verify installation:**
   ```bash
   ng version
   ```
   
   You should see Angular CLI version 20.3.10 or higher.

5. **Configure API Base URL (if needed):**
   
   The API base URL is currently hardcoded in the API services as `http://localhost:8080`. To change it:
   - Edit `src/app/api/registry.api.ts`
   - Edit `src/app/api/item.api.ts`
   - Edit `src/app/api/guest.api.ts`
   
   Update the `baseUrl` property in each service, or consider using environment variables for different environments.

## 🏃 Running the Application

### Running the Backend

1. **Start the Spring Boot application:**
   ```bash
   cd backend/Gift_Registry_API/Gift_Registry
   
   # Using Maven wrapper
   ..\..\mvnw.cmd spring-boot:run
   
   # Or using Maven
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8080`

2. **Access H2 Console (optional):**
   - Navigate to `http://localhost:8080/h2-console`
   - JDBC URL: `jdbc:h2:mem:testdb`
   - Username: `sa`
   - Password: `password`

### Running the Frontend

1. **Start the Angular development server:**
   ```bash
   cd frontend/gift-registry
   npm start
   # or
   ng serve
   ```

2. **Development server options:**
   ```bash
   # Run on a different port
   ng serve --port 4201
   
   # Open browser automatically
   ng serve --open
   
   # Enable verbose logging
   ng serve --verbose
   
   # Disable live reload
   ng serve --live-reload=false
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4200`

4. **Development features:**
   - **Hot Module Replacement (HMR)**: Changes automatically reload in the browser
   - **Source Maps**: Debug TypeScript in browser DevTools
   - **Error Overlay**: Compilation errors displayed in browser
   - **Fast Refresh**: Preserves component state during development

### Frontend Development Workflow

**Available npm scripts:**
```bash
# Start development server
npm start          # or ng serve

# Build for production
npm run build      # or ng build

# Build with watch mode (for development)
npm run watch      # or ng build --watch

# Run unit tests
npm test           # or ng test

# Run linting
ng lint

# Generate new component
ng generate component component-name

# Generate new service
ng generate service service-name
```

**Development Tips:**
- The app uses standalone components - no need to declare in modules
- Use `inject()` function for dependency injection (modern Angular approach)
- Components are self-contained with their own template, styles, and logic
- API services are singletons (providedIn: 'root')
- All HTTP requests automatically include API key via interceptor

## 📚 API Documentation

The backend provides a RESTful API with the following endpoints. All requests require an `X-API-KEY` header with the value `1234`.

### Base URL
- **Local:** `http://localhost:8080`
- **Production:** `https://gift-registry-api-0cb9e5b67e33.herokuapp.com`

### Registry Endpoints

#### Get All Registries
```http
GET /registries
```

#### Get Registry by ID
```http
GET /registries/{id}
```

#### Create Registry
```http
POST /registries
Content-Type: application/json
X-API-KEY: 1234

{
  "eventName": "Graduation Party",
  "ownerName": "John Doe",
  "date": "2025-06-15",
  "description": "Graduation celebration gifts registry"
}
```

#### Update Registry
```http
PUT /registries/{id}
Content-Type: application/json
X-API-KEY: 1234

{
  "eventName": "Updated Event Name",
  "ownerName": "Updated Owner",
  "date": "2025-06-01",
  "description": "Updated description",
  "items": [],
  "guests": []
}
```

#### Delete Registry
```http
DELETE /registries/{id}
X-API-KEY: 1234
```

### Item Endpoints

#### Get All Items
```http
GET /items
```

#### Get Item by ID
```http
GET /items/{id}
```

#### Get Items by Registry ID
```http
GET /items/registry/{registryId}
```

#### Create Item in Registry
```http
POST /items/registry/{registryId}
Content-Type: application/json
X-API-KEY: 1234

{
  "name": "Smart Watch",
  "price": 150.00,
  "quantity": 1,
  "purchased": false
}
```

#### Update Item
```http
PUT /items/{id}
Content-Type: application/json
X-API-KEY: 1234

{
  "name": "Updated Item",
  "price": 50.0,
  "quantity": 2,
  "purchased": false
}
```

#### Mark Item as Purchased
```http
PATCH /items/{id}/purchase
X-API-KEY: 1234
```

#### Delete Item
```http
DELETE /items/{id}
X-API-KEY: 1234
```

### Guest Endpoints

#### Get All Guests
```http
GET /guests
```

#### Get Guest by ID
```http
GET /guests/{id}
```

#### Get Guests by Registry ID
```http
GET /guests/registry/{registryId}
```

#### Add Guest to Registry
```http
POST /guests/registry/{registryId}
Content-Type: application/json
X-API-KEY: 1234

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "hasRSVP": false
}
```

#### Update Guest
```http
PUT /guests/{id}
Content-Type: application/json
X-API-KEY: 1234

{
  "name": "Updated Name",
  "email": "updated@example.com",
  "hasRSVP": false
}
```

#### Mark Guest as RSVP'd
```http
PATCH /guests/{id}/rsvp
X-API-KEY: 1234
```

#### Delete Guest
```http
DELETE /guests/{id}
X-API-KEY: 1234
```

## 🎨 Frontend Architecture

The frontend is built with **Angular 20.3.0** using modern Angular features including standalone components, signals, and the new control flow syntax. The application follows a component-based architecture with clear separation of concerns.

### Architecture Overview

```
Frontend Architecture:
├── Components (Pages & Shared)
│   ├── Page Components (Feature-specific views)
│   └── Shared Components (Reusable UI elements)
├── Services (API Layer)
│   └── Injectable services for HTTP communication
├── Models (TypeScript Interfaces)
│   └── Type definitions for data structures
├── Interceptors (HTTP Middleware)
│   └── API key injection for authentication
└── Configuration
    ├── Routing configuration
    └── App configuration (providers, HTTP client)
```

### Key Frontend Features

- **Standalone Components**: All components are standalone (no NgModules)
- **Reactive Forms**: Form validation using Angular Reactive Forms
- **Template-driven Forms**: Quick forms using ngModel for simple inputs
- **RxJS Observables**: Asynchronous data handling with reactive programming
- **Dependency Injection**: Using `inject()` function for modern DI
- **Computed Properties**: Using getters for derived state
- **Error Handling**: Comprehensive error states and user feedback
- **Loading States**: Visual feedback during async operations
- **Responsive Design**: Mobile-friendly layouts with CSS Grid and Flexbox

### Component Structure

#### Page Components

**1. RegistryList Component** (`registry-list/`)
- **Purpose**: Displays all registries in a grid layout with filtering and sorting
- **Features**:
  - Search functionality (event name, owner, description)
  - Filter by owner name
  - Date range filtering (from/to)
  - Sort by date (ascending/descending) or name (A-Z/Z-A)
  - Filter for fully purchased registries
  - Empty state handling
  - Loading and error states
- **Key Methods**:
  - `fetchRegistries()`: Loads all registries from API
  - `visibleRegistries` (getter): Computed filtered and sorted list
  - `resetFilters()`: Clears all filter criteria

**2. RegistryDetail Component** (`registry-detail/`)
- **Purpose**: Detailed view of a single registry with items and guests management
- **Features**:
  - Registry information display
  - Dashboard with statistics (purchase percentage, RSVP percentage)
  - Add/remove items functionality
  - Add/remove guests functionality
  - Mark items as purchased
  - Mark guests as RSVP'd
  - Delete registry with confirmation
  - Progress bars for visual statistics
- **Key Methods**:
  - `loadRegistry()`: Fetches registry by ID
  - `addItem()`: Creates new item in registry
  - `addGuest()`: Adds new guest to registry
  - `markPurchased()`: Updates item purchase status
  - `markRsvp()`: Updates guest RSVP status
  - `deleteRegistry()`: Removes registry with confirmation
  - Computed properties: `totalItems`, `purchasedItems`, `purchasePercent`, `totalGuests`, `rsvpGuests`, `rsvpPercent`

**3. RegistryCreate Component** (`registry-create/`)
- **Purpose**: Form to create a new registry
- **Features**:
  - Uses shared `RegistryForm` component
  - Navigation to registry list after creation
  - Error handling

**4. RegistryEdit Component** (`registry-edit/`)
- **Purpose**: Form to edit existing registry
- **Features**:
  - Pre-populated form with existing data
  - Uses shared `RegistryForm` component
  - Navigation to detail view after update
  - Loading state while fetching registry data

#### Shared Components

**1. RegistryForm Component** (`shared/registry-form/`)
- **Purpose**: Reusable form for creating/editing registries
- **Features**:
  - Reactive forms with validation
  - Required field validation (eventName, ownerName, date)
  - Optional description field
  - Input/Output pattern for parent-child communication
  - Form state management (touched, invalid states)
- **Inputs**: `initialData` (Registry | null) - Pre-populate form
- **Outputs**: `submitForm` (EventEmitter) - Emits form data on submit

**2. Navbar Component** (`shared/shared/navbar/`)
- **Purpose**: Navigation bar with routing links
- **Features**:
  - RouterLink for navigation
  - Active route highlighting with RouterLinkActive
  - Consistent navigation across all pages

### API Services Layer

The application uses a service-based architecture for API communication. All services are injectable singletons using `providedIn: 'root'`.

**1. RegistryApi Service** (`api/registry.api.ts`)
```typescript
- getAll(): Observable<Registry[]>
- getById(id: number): Observable<Registry>
- create(data: Partial<Registry>): Observable<Registry>
- update(id: number, data: Partial<Registry>): Observable<Registry>
- delete(id: number): Observable<void>
```

**2. ItemApi Service** (`api/item.api.ts`)
```typescript
- purchase(itemId: number): Observable<void>
- addToRegistry(registryId: number, data: {...}): Observable<void>
```

**3. GuestApi Service** (`api/guest.api.ts`)
```typescript
- rsvp(guestId: number): Observable<void>
- addToRegistry(registryId: number, data: {...}): Observable<void>
```

### Data Models

TypeScript interfaces define the data structure:

```typescript
interface Registry {
  id: number;
  eventName: string;
  ownerName: string;
  date: string; // "YYYY-MM-DD"
  description: string;
  items: Item[];
  guests: Guest[];
}

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  purchased: boolean;
}

interface Guest {
  id: number;
  name: string;
  email: string;
  hasRSVP: boolean;
}
```

### HTTP Interceptor

**ApiKeyInterceptor** (`api/api-key.interceptor.ts`)
- Automatically adds `X-API-KEY: 1234` header to all HTTP requests
- Configured globally in `app.config.ts` using `withInterceptors()`
- Ensures all API calls are authenticated

### Routing Configuration

The application uses Angular Router with the following route structure:

```typescript
Routes:
├── '' → redirects to '/registries'
├── '/registries' → RegistryList component
├── '/registries/new' → RegistryCreate component
├── '/registries/:id' → RegistryDetail component
├── '/registries/:id/edit' → RegistryEdit component
└── '**' → catch-all redirects to '/registries'
```

**Route Features**:
- Path parameters for dynamic routes (`:id`)
- Redirects for default and invalid routes
- Lazy loading ready (can be implemented for production)

### State Management

The application uses **component-level state management** with RxJS Observables:

- **Data Fetching**: Components subscribe to API service Observables
- **Reactive Updates**: Components re-fetch data after mutations
- **Local State**: Component properties hold current state
- **Computed State**: Getters compute derived values (filtered lists, percentages)

**Example State Flow**:
```
User Action → Component Method → API Service → HTTP Request
                                      ↓
Component Subscription ← Observable Response ← Backend API
                                      ↓
UI Update (template re-renders)
```

### Form Handling

The application uses two form approaches:

1. **Reactive Forms** (RegistryForm component)
   - Type-safe form controls
   - Built-in validation
   - Programmatic form manipulation
   - Better for complex forms

2. **Template-driven Forms** (RegistryDetail for items/guests)
   - Quick setup with `[(ngModel)]`
   - Two-way data binding
   - Simpler for basic forms

### Error Handling

- **Component-level error states**: Each component has an `error` property
- **User-friendly messages**: Clear error messages displayed in UI
- **Loading states**: Visual feedback during async operations
- **Empty states**: Helpful messages when no data is available
- **Network error handling**: Checks for backend connectivity

### Styling Approach

- **Component-scoped styles**: Each component has its own CSS file
- **Global styles**: `styles.css` for application-wide styles
- **CSS Grid & Flexbox**: Modern layout techniques
- **Responsive design**: Mobile-first approach
- **Visual feedback**: Loading spinners, progress bars, status badges

### Development Features

- **Hot Module Replacement**: Automatic reload on file changes
- **TypeScript strict mode**: Type safety throughout
- **Standalone components**: No NgModule boilerplate
- **Modern Angular APIs**: Using latest Angular features
- **Component isolation**: Each component is self-contained

## 🗺 Frontend Routes

The Angular application uses the following routes:

- `/` - Redirects to `/registries`
- `/registries` - List all registries (RegistryList component)
  - Features: Search, filter, sort, and view all registries
- `/registries/new` - Create a new registry (RegistryCreate component)
  - Features: Form to create a new registry with validation
- `/registries/:id` - View registry details (RegistryDetail component)
  - Features: View registry, manage items and guests, see statistics
- `/registries/:id/edit` - Edit a registry (RegistryEdit component)
  - Features: Edit existing registry information
- `/**` - Catch-all route (redirects to `/registries`)

## 🔒 Security

### API Key Authentication

The application uses API key authentication for all API requests. The API key is configured in:

- **Backend:** `ApiKeyProperties.java` (currently hardcoded as `1234` for development)
- **Frontend:** `api-key.interceptor.ts` (automatically adds the header to all requests)

**Note:** In a production environment, the API key should be stored in environment variables or a secure configuration file, not hardcoded.

### CORS Configuration

CORS is configured to allow requests from `http://localhost:4200` (the Angular development server). The configuration allows:
- Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
- Headers: X-API-KEY, Content-Type

## 💾 Database

The application uses **H2 Database** (in-memory) for development. The database configuration is in `application.properties`:

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=password
spring.h2.console.enabled=true
```

### Database Schema

- **Registry** (id, eventName, ownerName, date, description)
- **Item** (id, name, price, quantity, purchased, registry_id)
- **Guest** (id, name, email, hasRSVP, registry_id)

### Relationships

- One Registry can have many Items (One-to-Many)
- One Registry can have many Guests (One-to-Many)
- Items and Guests have a Many-to-One relationship with Registry

## 🚢 Deployment

### Backend Deployment (Heroku)

The backend is configured for Heroku deployment:

1. **Build the JAR:**
   ```bash
   mvn clean package
   ```

2. **Deploy to Heroku:**
   - The `Procfile` specifies how to run the application
   - Ensure the `PORT` environment variable is set (Heroku sets this automatically)
   - Update CORS configuration to allow your frontend domain

### Frontend Deployment

1. **Build for production:**
   ```bash
   cd frontend/gift-registry
   ng build --configuration production
   ```
   
   This creates an optimized production build in the `dist/gift-registry/` directory with:
   - Minified JavaScript and CSS
   - Tree-shaking (removes unused code)
   - Ahead-of-Time (AOT) compilation
   - Optimized bundle sizes
   - Source maps (optional, for debugging)

2. **Build options:**
   ```bash
   # Production build (default)
   ng build
   
   # Development build (faster, larger bundle)
   ng build --configuration development
   
   # Build with base href for subdirectory deployment
   ng build --base-href /gift-registry/
   
   # Analyze bundle size
   ng build --stats-json
   # Then use webpack-bundle-analyzer or source-map-explorer
   ```

3. **Deploy the `dist/gift-registry/` folder** to your hosting service:
   
   **Netlify:**
   - Drag and drop the `dist/gift-registry` folder
   - Or connect GitHub repo and set build command: `ng build`
   - Set publish directory: `dist/gift-registry`
   
   **Vercel:**
   - Connect GitHub repo
   - Framework preset: Angular
   - Build command: `ng build`
   - Output directory: `dist/gift-registry`
   
   **AWS S3 + CloudFront:**
   - Upload `dist/gift-registry` contents to S3 bucket
   - Configure CloudFront distribution
   - Set up proper caching headers
   
   **GitHub Pages:**
   ```bash
   ng build --base-href /repository-name/
   # Deploy dist/gift-registry to gh-pages branch
   ```

4. **Update API base URL** for production:
   
   Before deploying, update the API base URL in:
   - `src/app/api/registry.api.ts`
   - `src/app/api/item.api.ts`
   - `src/app/api/guest.api.ts`
   
   Change from:
   ```typescript
   private readonly baseUrl = 'http://localhost:8080';
   ```
   
   To your production backend URL:
   ```typescript
   private readonly baseUrl = 'https://your-backend-url.com';
   ```
   
   **Better approach**: Use Angular environments:
   ```typescript
   // src/environments/environment.ts (development)
   export const environment = {
     apiUrl: 'http://localhost:8080'
   };
   
   // src/environments/environment.prod.ts (production)
   export const environment = {
     apiUrl: 'https://your-backend-url.com'
   };
   
   // Then in services:
   import { environment } from '../environments/environment';
   private readonly baseUrl = environment.apiUrl;
   ```

5. **Update CORS configuration** on backend to allow your frontend domain.

6. **Verify deployment:**
   - Check browser console for errors
   - Verify API calls are going to correct backend
   - Test all major features (CRUD operations)
   - Check mobile responsiveness

## 🧪 Testing

### Backend Tests
```bash
cd backend/Gift_Registry_API/Gift_Registry
mvn test
```

### Frontend Tests

**Run unit tests:**
```bash
cd frontend/gift-registry
ng test
```

**Test options:**
```bash
# Run tests once and exit
ng test --watch=false

# Run tests with code coverage
ng test --code-coverage

# Run tests in specific browser
ng test --browsers=ChromeHeadless

# Run tests in watch mode (default)
ng test --watch
```

**Test structure:**
- Test files: `*.spec.ts` alongside components
- Testing framework: Jasmine + Karma
- Test utilities: Angular Testing Utilities
- Mock services: Create test doubles for API services

**Example test file structure:**
```typescript
describe('RegistryListComponent', () => {
  let component: RegistryList;
  let fixture: ComponentFixture<RegistryList>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryList]
    }).compileComponents();
    
    fixture = TestBed.createComponent(RegistryList);
    component = fixture.componentInstance;
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## 📝 Additional Notes

### Frontend-Specific Notes

- **Standalone Components**: All Angular components are standalone (no NgModules required)
- **Modern Angular APIs**: Uses `inject()` for dependency injection instead of constructor injection
- **Reactive Programming**: Heavy use of RxJS Observables for async operations
- **Type Safety**: Full TypeScript coverage with strict type checking
- **Component Architecture**: Clear separation between page components and shared components
- **Form Validation**: Mix of reactive forms (complex) and template-driven forms (simple)
- **State Management**: Component-level state with computed properties (getters)
- **HTTP Interceptor**: Automatic API key injection for all HTTP requests
- **Error Handling**: Comprehensive error states in all components
- **Loading States**: Visual feedback during data fetching
- **Empty States**: User-friendly messages when no data is available

### Backend-Specific Notes

- The backend uses **Spring Data JPA** for database operations
- **Cascade operations** are configured for automatic deletion of related items and guests when a registry is deleted
- The application includes **global exception handling** for better error responses
- **Data initialization** can be configured in `DataInitializer.java` for seeding test data

### Development Tips

**Frontend:**
- Use Angular DevTools browser extension for debugging
- Leverage RxJS operators (map, filter, catchError) for data transformation
- Use computed properties (getters) for derived state instead of storing redundant data
- Keep components focused on presentation; business logic in services
- Use TypeScript interfaces for type safety across the application

**Full-Stack:**
- Ensure backend is running before starting frontend development
- API key must match between frontend interceptor and backend configuration
- CORS must be configured to allow frontend origin
- Use browser DevTools Network tab to debug API calls
- Check browser console for runtime errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for educational purposes.

---

**Happy Coding! 🎉**

