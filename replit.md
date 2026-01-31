# CareerGuide

## Overview

CareerGuide is a web application that helps students navigate their career paths after completing different educational milestones (10th standard, 12th standard, etc.). The application presents hierarchical career options as an interactive tree structure, allowing users to explore various educational and professional pathways based on their current academic standing.

The core functionality includes:
- Browsing available career path starting points (e.g., "10th Standard")
- Interactive drill-down navigation through career options
- Breadcrumb-based navigation for backtracking
- Detailed information about each career node via hover cards

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state caching and synchronization
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite with React plugin

**Key Design Patterns**:
- Path aliasing (`@/` for client source, `@shared/` for shared code)
- Custom hooks for data fetching (`use-career-paths.ts`)
- Centralized query client configuration with error handling
- Component composition using shadcn/ui patterns

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Style**: RESTful JSON endpoints under `/api` prefix
- **Development**: Vite middleware for HMR during development
- **Production**: Static file serving from built assets

**API Structure**:
- `GET /api/career-paths` - List all career path root nodes
- `GET /api/career-paths/:id` - Get specific career path with full tree data

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated from Drizzle schemas via `drizzle-zod`
- **Storage Pattern**: Repository pattern with `IStorage` interface supporting both in-memory and database implementations

**Data Model**:
- `careerPaths` table with recursive JSON tree structure stored in `jsonb` column
- `CareerNode` type for tree nodes with id, label, optional description, and optional children

### Shared Code
- **Location**: `shared/` directory
- **Purpose**: Type definitions, schemas, and route contracts shared between frontend and backend
- **Route Contracts**: `shared/routes.ts` defines API paths and response types for type-safe client-server communication

## External Dependencies

### Database
- **PostgreSQL**: Primary database (connection via `DATABASE_URL` environment variable)
- **Connection Pooling**: `pg` package with connection pool
- **Migrations**: Drizzle Kit for schema migrations (`migrations/` directory)

### Third-Party Services
- No external API integrations currently implemented

### Key NPM Packages
- **UI**: Radix UI primitives, Lucide React icons, class-variance-authority
- **Data**: TanStack React Query, Zod validation
- **Animation**: Framer Motion, Embla Carousel
- **Database**: drizzle-orm, pg, connect-pg-simple (session storage)
- **Build**: esbuild (server bundling), Vite (client bundling)