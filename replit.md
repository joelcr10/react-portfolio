# Portfolio Website - Developer Portfolio

## Overview

This is a modern, full-stack portfolio website designed to showcase professional work experience, projects, AWS certifications, and research publications. Built with React and Express, the application features a sophisticated design system inspired by Linear, Vercel, and Notion, with emphasis on typography-first hierarchy and visual project presentations. The site supports both light and dark themes with equal design refinement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and data fetching

**UI Component Library**
- **shadcn/ui** components built on Radix UI primitives for accessible, customizable UI elements
- **Tailwind CSS** for utility-first styling with custom design tokens
- Custom CSS variables for theme management supporting light/dark modes
- Component aliases configured for clean imports (`@/components`, `@/lib`, etc.)

**Design System**
- Typography-first approach using Inter/SF Pro Display with JetBrains Mono for code elements
- Responsive spacing system based on Tailwind's spacing primitives (4, 6, 8, 12, 16, 20, 24)
- Custom color system with HSL-based theme variables for seamless light/dark mode transitions
- Elevation effects using subtle background overlays (`--elevate-1`, `--elevate-2`)
- Border styling with opacity-based outlines for buttons and badges

**State Management**
- React Context API for theme state (ThemeProvider)
- Local storage persistence for theme preferences
- Custom hooks for mobile detection and toast notifications

**Visual Features**
- Animated cursor trail effect using HTML Canvas
- Gradient backgrounds with floating animated elements
- Smooth scroll navigation between sections
- Interactive project modals with detailed information

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Middleware for JSON parsing with raw body capture for webhook compatibility
- Request/response logging with timing information for API routes
- Session management using connect-pg-simple (configured but not actively used)

**Development Setup**
- Vite middleware integration in development mode for seamless frontend/backend development
- Hot module replacement (HMR) through Vite server
- Custom error overlay plugin for development
- Replit-specific plugins for cartographer and dev banner in development

**Storage Interface**
- Abstract IStorage interface defining CRUD operations for user management
- In-memory storage implementation (MemStorage) for development/testing
- Prepared for PostgreSQL migration with Drizzle ORM schema definitions
- UUID-based user identification

**API Structure**
- RESTful API routes prefixed with `/api`
- Modular route registration system in `server/routes.ts`
- Storage layer abstraction allowing easy database backend swapping

### Data Storage Solutions

**Current Implementation**
- In-memory Map-based storage for user data (development only)
- No persistence between server restarts

**Prepared Migration Path**
- **Drizzle ORM** configured with PostgreSQL dialect
- Database schema defined in `shared/schema.ts` with users table
- **Neon Database** serverless PostgreSQL integration ready via `@neondatabase/serverless`
- Zod schema validation integrated via drizzle-zod
- Migration files output to `./migrations` directory

**Schema Design**
- Users table with UUID primary key, username (unique), and password fields
- Insert schemas generated using drizzle-zod for runtime validation

### External Dependencies

**UI Component Libraries**
- **Radix UI**: Comprehensive collection of unstyled, accessible components (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, hover-card, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, tooltip)
- **cmdk**: Command palette component for search interfaces
- **embla-carousel-react**: Touch-friendly carousel/slider component
- **lucide-react**: Icon library for consistent iconography

**Form Management**
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Integration with Zod for schema validation

**Styling & Theming**
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management for components
- **clsx** + **tailwind-merge**: Conditional className composition

**Development Tools**
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Development mapping tool
- **@replit/vite-plugin-dev-banner**: Development environment banner

**Database & ORM**
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **drizzle-kit**: Migration and schema management toolkit
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-zod**: Zod schema generation from Drizzle schemas

**Utilities**
- **date-fns**: Modern date manipulation library
- **nanoid**: Compact unique ID generator
- **zod**: TypeScript-first schema validation

**Fonts**
- Google Fonts CDN: Architects Daughter, DM Sans, Fira Code, Geist Mono families loaded in HTML

**Build & Runtime**
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast JavaScript bundler for production server build
- **vite**: Frontend build tool and dev server
- **@vitejs/plugin-react**: React plugin for Vite with Fast Refresh