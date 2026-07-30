# Implementation Plan: PFP Canada Website Update

## Overview

This implementation plan covers five integrated phases to update the PFP Canada website with a new logo, resolve critical UI errors, apply comprehensive design guidelines, implement admin authentication and job management. The work is prioritized to address visual issues first (logo, UI errors, design polish) followed by backend features (authentication, job management).

## Phase 1: Logo Update and Favicon Generation

- [-] 1.1 Extract logo SVG into reusable component
  - Create `components/logo.tsx` component with size and variant props
  - Support 'sm', 'md', 'lg', 'xl' size variants
  - Support 'full' and 'icon-only' variants
  - Export LogoProps interface with className and linkTo optional props
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [-] 1.2 Generate favicon variants from logo SVG
  - Create favicon files (16x16, 32x32, 192x192, 512x512 PNG formats)
  - Generate Apple touch icon (180x180)
  - Generate Open Graph image (1200x630)
  - Place all assets in `/public/` directory with appropriate naming
  - _Requirements: 1.3_

- [~] 1.3 Update metadata and favicon configuration
  - Modify `app/layout.tsx` metadata export with favicon icons array
  - Add icons.icon array with 16x16 and 32x32 PNG variants
  - Add icons.apple with 180x180 Apple touch icon
  - Update openGraph.images array with 1200x630 OG image
  - Add twitter.images array referencing OG image
  - _Requirements: 1.3, 1.1_

- [~] 1.4 Update site header component with new Logo component
  - Replace inline SVG in `components/site-header.tsx` with Logo component
  - Use Logo with size='md' variant and full text variant
  - Ensure responsive sizing for mobile (size='sm' on mobile)
  - Apply consistent styling and spacing
  - _Requirements: 1.1, 1.4_

- [~] 1.5 Update site footer component with new Logo component
  - Replace inline SVG in `components/site-footer.tsx` with Logo component
  - Use Logo with size='sm' variant and icon-only variant
  - Wrap in Link component pointing to home page
  - Apply consistent spacing and alignment with footer layout
  - _Requirements: 1.2, 1.4_

- [~] 1.6 Verify logo rendering and responsiveness
  - Test logo at 320px (mobile), 768px (tablet), 1280px (desktop), 2560px (ultra-wide)
  - Verify favicon displays in browser tabs
  - Verify Apple touch icon on iOS devices
  - Verify Open Graph image in social sharing previews
  - _Requirements: 1.4, 1.5_

## Phase 2: Critical UI Error Resolution

- [-] 2.1 Audit and fix color contrast issues
  - Run color contrast checker on all text/background combinations
  - Check muted-foreground token against background for WCAG AA compliance
  - Adjust `--muted-foreground` CSS variable if contrast ratio < 4.5:1 for normal text
  - Verify interactive elements (buttons, links) meet 3:1 contrast minimum
  - Test on light and dark backgrounds
  - _Requirements: 2.1, 3.3_

- [~] 2.2 Implement visible focus states on all interactive elements
  - Audit `components/ui/button.tsx` for focus-visible ring utilities
  - Ensure all buttons have `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`
  - Update link components with visible focus states
  - Update form input components with visible focus states
  - Update Sheet trigger and dropdown menu items with focus states
  - Verify focus states visible when navigating with keyboard Tab key
  - _Requirements: 2.2_

- [~] 2.3 Fix responsive layout issues across viewport range
  - Test layout at viewport widths: 320px, 375px, 640px, 768px, 1024px, 1280px, 2560px
  - Fix header navigation dropdown overflow on narrow screens (< 640px)
  - Ensure mobile Sheet menu content doesn't overflow at 320px
  - Verify content grid layouts collapse appropriately at breakpoints
  - Fix any text wrapping issues that cause horizontal overflow
  - Ensure padding/margins maintain consistent spacing at all sizes
  - _Requirements: 2.3_

- [~] 2.4 Implement proper image aspect ratio preservation
  - Audit all Image components in codebase for explicit dimensions
  - Wrap images requiring aspect ratio in div with `aspect-ratio` class
  - Use `fill` prop with `object-cover` or `object-contain` as appropriate
  - Test image rendering doesn't distort at different viewport sizes
  - _Requirements: 2.4_

- [~] 2.5 Ensure consistent header and footer styling across all pages
  - Verify SiteHeader component styling is identical on all pages
  - Verify SiteFooter component styling is identical on all pages
  - Check navigation link styles are consistent (hover, active, focus states)
  - Ensure header/footer maintain correct z-index layering
  - Verify no layout shift when pages have different content heights
  - _Requirements: 2.5_

- [~] 2.6 Apply consistent button and link interaction states
  - Create/update navigation link style constants in `lib/navigation-styles.ts`
  - Apply `navLinkStyles` to all header navigation links
  - Apply `mobileNavLinkStyles` to all mobile menu links
  - Verify all buttons use consistent variant styles from shadcn/ui
  - Ensure inline links use `text-primary underline-offset-4 hover:underline`
  - Test all interaction states: default, hover, active, focus, disabled
  - _Requirements: 2.6_

- [~] 2.7 Implement error boundaries for graceful error handling
  - Create `components/error-boundary.tsx` with React Error Boundary
  - Implement `getDerivedStateFromError` for error state management
  - Create fallback UI with error message and refresh prompt
  - Wrap major page sections (hero, content grid, dynamic lists) in ErrorBoundary
  - Test error boundary catches component failures gracefully
  - _Requirements: 2.7_

## Phase 3: UI Design Guidelines Application

- [~] 3.1 Audit and standardize typography across all components
  - Search codebase for hardcoded font sizes not using Tailwind scale classes
  - Replace with appropriate text-xs, text-sm, text-base, text-lg, text-xl, text-2xl classes
  - Apply font-display to all Oswald font text (navigation, headings, labels)
  - Apply font-sans to all Source Sans 3 text (body, descriptions)
  - Ensure uppercase navigation text uses `font-display text-sm uppercase tracking-widest`
  - Verify typography scale consistency across all pages
  - _Requirements: 3.1, 3.5_

- [~] 3.2 Standardize spacing and padding throughout components
  - Search for hardcoded padding/margin values (px-[17px], py-[22px] etc)
  - Replace with Tailwind spacing scale: px-4, py-6, gap-4, gap-8 etc
  - Apply consistent container padding: `px-4 sm:px-6 lg:px-8`
  - Apply consistent section spacing: `py-12 sm:py-16 lg:py-24`
  - Ensure vertical rhythm follows 4px base unit multiples
  - Verify no orphaned or inconsistent spacing values remain
  - _Requirements: 3.2_

- [~] 3.3 Apply consistent color system using design tokens
  - Audit all hardcoded color values (hex codes) in components
  - Replace background colors with bg-background, bg-card, or bg-muted
  - Replace text colors with text-foreground or text-muted-foreground
  - Replace button backgrounds with semantic variants (bg-primary, bg-secondary)
  - Replace border colors with border-border
  - Replace accent colors with text-accent for links and icons
  - Verify no raw Tailwind color utilities (text-blue-600) in component code
  - _Requirements: 3.3_

- [~] 3.4 Standardize border radius scale across all components
  - Audit all border radius values in components
  - Apply `rounded` (2px) to buttons and input fields
  - Apply `rounded-lg` (3px) to cards and modal containers
  - Verify consistency with CSS custom properties: --radius, --radius-md, --radius-lg
  - Replace hardcoded radius values with Tailwind utility classes
  - Test border radius maintains sharp, minimal aesthetic
  - _Requirements: 3.4_

- [~] 3.5 Implement consistent shadow/elevation system
  - Apply shadow-sm to card components
  - Apply shadow-md to dropdown menus
  - Apply shadow-lg to modal and floating overlay elements
  - Remove unnecessary shadows from buttons (flat design)
  - Verify shadow elevations create proper visual hierarchy
  - Test shadow rendering at different screen sizes and zoom levels
  - _Requirements: 3.7_

- [~] 3.6 Implement responsive grid layout system
  - Audit all grid components for responsive column patterns
  - Apply consistent grid pattern: `grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3`
  - Ensure gap spacing follows design scale (gap-6, gap-8)
  - Verify content containers use max-width wrapper: `mx-auto max-w-7xl px-4`
  - Test grid layouts at all breakpoints (sm, md, lg, xl, 2xl)
  - _Requirements: 3.6_

- [~] 3.7 Apply dossier-grid background utility consistently
  - Identify pages/sections that should use background grid pattern
  - Apply `dossier-grid` class to appropriate background containers
  - Verify grid pattern aligns with 28px grid system
  - Ensure grid opacity (18%) provides subtle visual texture
  - Test grid rendering doesn't interfere with content readability
  - _Requirements: 3.6_

## Phase 4: Admin Authentication System (better-auth)

- [-] 4.1 Set up better-auth configuration and database
  - Create `lib/auth/` directory structure
  - Create `lib/auth/config.ts` with betterAuth configuration
  - Configure Drizzle ORM adapter for PostgreSQL
  - Set up email/password authentication (no email verification for now)
  - Configure session expiry: 7 days with 24-hour update interval
  - Create `lib/db.ts` database client using pg Pool
  - _Requirements: 4.1, 4.7, 6.1_

- [~] 4.2 Configure environment variables for authentication
  - Add DATABASE_URL environment variable (PostgreSQL connection string)
  - Add BETTER_AUTH_SECRET (32+ character random string)
  - Add BETTER_AUTH_URL (http://localhost:3000 for dev, https://pfpcanada.com for prod)
  - Document environment variables in .env.example
  - Verify environment variables are not committed to version control
  - _Requirements: 4.1_

- [~] 4.3 Create authentication API route handler
  - Create `app/api/auth/[...all]/route.ts`
  - Import auth configuration and toNextJsHandler from better-auth
  - Export GET and POST handlers from toNextJsHandler(auth)
  - Verify API route handles all better-auth endpoints
  - Test API route is accessible at /api/auth/*
  - _Requirements: 4.1_

- [~] 4.4 Create client-side auth hooks and utilities
  - Create `lib/auth/client.ts` with createAuthClient
  - Export useSession hook for component access to current session
  - Export signIn, signOut functions for authentication operations
  - Configure baseURL to use NEXT_PUBLIC_APP_URL or localhost
  - Create auth hooks with proper TypeScript types
  - _Requirements: 4.1_

- [~] 4.5 Build admin login page
  - Create `app/admin/login/page.tsx` as client component
  - Implement LoginForm with email and password input fields
  - Add form validation (email format, password required)
  - Call signIn.email() with credentials and callbackURL
  - Display error message on authentication failure
  - Redirect to /admin/dashboard on successful login
  - Style login form with Card component and proper spacing
  - _Requirements: 4.1, 4.2, 4.3_

- [~] 4.6 Implement route protection middleware
  - Create/update `middleware.ts` at root level
  - Protect all /admin/* routes except /admin/login
  - Redirect unauthenticated users to /admin/login with callbackUrl
  - Redirect authenticated users away from /admin/login to dashboard
  - Configure matcher for admin routes
  - Verify middleware intercepts requests before route handlers
  - _Requirements: 4.4, 4.5_

- [~] 4.7 Create session provider for app root layout
  - Create `components/providers/session-provider.tsx`
  - Wrap BetterAuthSessionProvider component
  - Update `app/layout.tsx` to wrap children with SessionProvider
  - Verify session is accessible throughout application
  - Test session provider doesn't cause hydration mismatches
  - _Requirements: 4.1, 4.5_

- [~] 4.8 Create admin dashboard layout and header
  - Create `app/admin/dashboard/page.tsx`
  - Implement AdminHeader with logo, user email, and logout button
  - Create AdminSidebar navigation with links to Jobs management
  - Add user session display with logout functionality
  - Implement responsive layout (sidebar collapse on mobile)
  - Style with consistent design tokens and spacing
  - _Requirements: 4.5_

## Phase 5: Job Posting Management System

- [-] 5.1 Create job data types and interfaces
  - Create `lib/jobs/types.ts` with Job interface
  - Define Job properties: id, title, location, summary, description, requirements[], status, timestamps
  - Create JobStatus type: 'active' | 'inactive' | 'draft'
  - Define CreateJobInput and UpdateJobInput types
  - Export all types for use across admin and public components
  - _Requirements: 5.1, 5.2, 6.1_

- [~] 5.2 Implement JSON file-based job storage service
  - Create `lib/jobs/storage.ts` with file-based persistence
  - Implement ensureDataFile() to create jobs.json on first access
  - Implement readJobs() and writeJobs() for file I/O
  - Implement getAllJobs() - returns all jobs including inactive
  - Implement getActiveJobs() - returns only active jobs for public display
  - Implement getJobById(id) - returns single job by ID
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_

- [~] 5.3 Implement job CRUD operations
  - Implement createJob(input) - generates UUID, appends to JSON file
  - Implement updateJob(id, input) - modifies existing job in JSON file
  - Implement deleteJob(id) - removes job from JSON file
  - Add timestamp management (createdAt, updatedAt)
  - Handle ID validation and error cases (job not found)
  - Export all storage functions from module
  - _Requirements: 6.2, 6.3, 6.4_

- [~] 5.4 Create job management API routes
  - Create `app/api/admin/jobs/route.ts` for GET (list) and POST (create) operations
  - Create `app/api/admin/jobs/[id]/route.ts` for GET, PUT, DELETE operations
  - Implement route protection (verify authenticated user)
  - GET /api/admin/jobs - returns all jobs (admin only)
  - POST /api/admin/jobs - creates new job (admin only)
  - GET /api/admin/jobs/[id] - returns single job (admin only)
  - PUT /api/admin/jobs/[id] - updates job (admin only)
  - DELETE /api/admin/jobs/[id] - deletes job (admin only)
  - Implement error handling and validation
  - _Requirements: 5.1, 5.3, 6.1_

- [~] 5.5 Create public job API route for careers page
  - Create `app/api/jobs/route.ts` for GET operation only (public)
  - Return only active jobs (status === 'active')
  - Include job fields: id, title, location, summary, status
  - Exclude admin fields (createdAt, updatedAt)
  - Implement caching headers for performance
  - Handle empty results gracefully
  - _Requirements: 6.5, 7.1, 7.2_

- [~] 5.6 Build admin jobs dashboard page
  - Create `app/admin/dashboard/jobs/page.tsx`
  - Implement JobsTable component showing: title, location, status, actions
  - Add table columns: Title | Location | Status | Actions
  - Implement action buttons: Edit, Delete, Toggle Status
  - Fetch jobs list from /api/admin/jobs on page load
  - Display loading state while fetching
  - Display empty state with "Create Job" button when no jobs exist
  - Apply consistent styling with design tokens
  - _Requirements: 5.1_

- [~] 5.7 Build admin job creation form
  - Create `app/admin/dashboard/jobs/new/page.tsx`
  - Create `components/admin/job-form.tsx` reusable form component
  - Implement form fields: title, location, summary, description, requirements, status
  - Add form validation (required fields, email format etc)
  - Implement requirements array field (add/remove items)
  - Display validation error messages
  - Submit to POST /api/admin/jobs
  - Redirect to /admin/dashboard/jobs on successful creation
  - _Requirements: 5.2, 5.3, 5.8_

- [~] 5.8 Build admin job editing interface
  - Create `app/admin/dashboard/jobs/[id]/edit/page.tsx`
  - Reuse JobForm component with edit mode
  - Pre-populate form with existing job data
  - Fetch job data from /api/admin/jobs/[id]
  - Submit changes to PUT /api/admin/jobs/[id]
  - Redirect to /admin/dashboard/jobs on successful update
  - Display loading state while fetching job data
  - _Requirements: 5.4, 5.5_

- [~] 5.9 Build admin job deletion interface
  - Add delete confirmation dialog to JobsTable
  - Implement ConfirmDialog component with warning message
  - Send DELETE request to /api/admin/jobs/[id]
  - Remove deleted job from table
  - Display success/error toast notification
  - Prevent accidental deletion with confirmation step
  - _Requirements: 5.6_

- [~] 5.10 Build public careers page job listing
  - Create/update `app/careers/page.tsx` with job listings display
  - Fetch active jobs from /api/jobs (public endpoint)
  - Create `components/job-listing-card.tsx` component
  - Display job cards with: title, location, summary
  - Add click handler to navigate to job detail page
  - Implement job-not-found empty state with message
  - Apply responsive grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
  - _Requirements: 7.1, 7.3, 7.5, 7.6_

- [~] 5.11 Build public job detail page
  - Create `app/careers/[id]/page.tsx` for individual job detail view
  - Fetch job from /api/jobs endpoint (public) or from storage
  - Display full job details: title, location, full description, requirements list
  - Add "Back to Listings" link
  - Display "Job not found" if ID doesn't exist
  - Apply card-based layout with consistent spacing
  - _Requirements: 7.4, 7.3, 7.5_

- [~] 5.12 Add logout functionality to admin dashboard
  - Implement logout button in AdminHeader component
  - Call signOut() from auth client
  - Redirect to /admin/login after logout
  - Clear session data
  - Test session is properly terminated
  - _Requirements: 4.6_

## Checkpoint Tasks

- [~] 6. Checkpoint - Verify Phase 1 & 2 Complete
  - Ensure logo displays correctly in header, footer, favicon, and social metadata
  - Run accessibility audit verifying WCAG AA color contrast
  - Test focus states on all interactive elements keyboard navigation
  - Verify responsive layout at 320px, 768px, 1280px, 2560px viewports
  - Ensure all images display without distortion
  - Check error boundaries catch component failures gracefully
  - Ask the user if questions arise.

- [~] 7. Checkpoint - Verify Phase 3 Complete
  - Verify all typography uses correct font families and scales
  - Confirm all spacing and padding follows design scale
  - Verify all colors use design tokens (no hardcoded hex values)
  - Check border radius consistency
  - Verify shadow elevations are appropriate
  - Run visual regression test comparing to design mockups
  - Ask the user if questions arise.

- [~] 8. Checkpoint - Verify Phase 4 Complete
  - Test login form accepts valid credentials and authenticates
  - Verify invalid credentials display error message
  - Test /admin/dashboard redirects unauthenticated users to login
  - Verify logout clears session and redirects to login
  - Test session persists across page navigation
  - Verify middleware protects admin routes from unauthenticated access
  - Ask the user if questions arise.

- [~] 9. Checkpoint - Verify Phase 5 Complete
  - Test job creation form validates required fields
  - Verify created jobs appear in admin dashboard list
  - Test job editing saves changes correctly
  - Verify job deletion removes from database
  - Test public careers page displays active jobs only
  - Verify job detail page loads with full job information
  - Test job list is empty when no active jobs exist
  - Ask the user if questions arise.

## Notes

- All TypeScript components should use proper type annotations
- Database operations should include error handling and validation
- API routes should verify authentication before modifying data
- Form validation should provide clear error messages to users
- Responsive design tested at all specified breakpoints
- Tasks marked with `*` are optional testing sub-tasks and can be deferred for MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation between phases
- Phase 1-2 (visual) should complete before Phase 4-5 (backend features)
- File paths use forward slashes and are relative to project root


## Task Dependency Graph

```json
{
  "waves": [
    {
      "id": 0,
      "tasks": ["1.1", "1.2", "2.1", "4.1", "5.1"]
    },
    {
      "id": 1,
      "tasks": ["1.3", "1.4", "1.5", "2.2", "2.3", "4.2", "5.2"]
    },
    {
      "id": 2,
      "tasks": ["1.6", "2.4", "2.5", "2.6", "4.3", "4.4", "5.3"]
    },
    {
      "id": 3,
      "tasks": ["2.7", "3.1", "3.2", "4.5", "4.6", "5.4"]
    },
    {
      "id": 4,
      "tasks": ["3.3", "3.4", "3.5", "4.7", "4.8", "5.5"]
    },
    {
      "id": 5,
      "tasks": ["3.6", "3.7", "5.6", "5.7"]
    },
    {
      "id": 6,
      "tasks": ["5.8", "5.9", "5.10"]
    },
    {
      "id": 7,
      "tasks": ["5.11", "5.12"]
    }
  ]
}
```

## Wave Execution Strategy

**Wave 0** (Foundation): Extract logo component, set up auth config, initialize database, define job data types
**Wave 1** (Logo Integration): Update metadata, integrate logo in header/footer, implement focus states, configure auth environment
**Wave 2** (UI Polish): Test logo responsiveness, fix responsive layouts, set up auth API and client
**Wave 3** (Guidelines & Auth): Standardize typography, build login form, implement route protection, create storage layer
**Wave 4** (Design System & Admin): Apply color/spacing tokens, set up session provider, create admin dashboard
**Wave 5** (Admin Features): Finalize design guidelines, build job CRUD forms and dashboard
**Wave 6** (Admin Completion): Complete job editing, deletion, and listing interfaces
**Wave 7** (Public Display): Build public job listings and detail pages, add logout functionality

This dependency graph ensures:
- Logo and UI foundation complete before visual polish
- Authentication infrastructure ready before admin routes
- Job storage layer ready before CRUD operations
- Admin interface complete before public features
- All checkpoints can be reached incrementally
