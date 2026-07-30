# Technical Design Document

## Overview

This design document specifies the technical architecture and implementation strategy for updating the PFP Canada website with a new logo, resolving critical UI errors, applying comprehensive design guidelines, and implementing an admin panel for job posting management. The system uses Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui components, and better-auth for authentication.

The implementation follows a phased approach:
1. Logo update and favicon generation
2. Critical UI error resolution
3. UI design guidelines application
4. Authentication system setup using better-auth
5. Job posting management system with JSON storage
6. Public job listings display

## Architecture

The PFP Canada website follows a layered Next.js architecture with clear separation between public routes, admin routes, authentication, and data persistence.

### High-Level System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Next.js App Router                       │
├─────────────────────────────────────────────────────────────┤
│  Public Routes          │         Admin Routes              │
│  ┌─────────────┐       │  ┌──────────────────────────┐    │
│  │ Home        │       │  │  /admin/login            │    │
│  │ Services    │       │  │  /admin/dashboard        │    │
│  │ Industries  │       │  │  /admin/jobs             │    │
│  │ Careers *   │       │  │  /admin/jobs/new         │    │
│  │ Contact     │       │  │  /admin/jobs/[id]/edit   │    │
│  └─────────────┘       │  └──────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            ▼                    ▼
           ┌────────────────────────┐   ┌────────────────┐
           │  better-auth Session   │   │  Job Storage   │
           │  Management            │   │  Service       │
           └────────────────────────┘   └────────────────┘
                                                 │
                                                 ▼
                                       ┌──────────────────┐
                                       │  jobs.json       │
                                       │  (filesystem)    │
                                       └──────────────────┘
```

### Component Architecture


```
┌──────────────────────────────────────────────────────────┐
│                    Layout Components                      │
├──────────────────────────────────────────────────────────┤
│  SiteHeader                                              │
│    ├── Logo (updated SVG)                                │
│    ├── Navigation (desktop dropdown)                     │
│    └── MobileMenu (Sheet component)                      │
│                                                           │
│  SiteFooter                                              │
│    ├── Logo (updated SVG)                                │
│    ├── FooterNav                                         │
│    └── CompanyInfo                                       │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                     Page Components                       │
├──────────────────────────────────────────────────────────┤
│  Careers Page (Public)                                   │
│    ├── JobListingCard[]                                  │
│    └── EmptyState (when no jobs)                         │
│                                                           │
│  Job Detail Page (Public)                                │
│    └── JobDetailView                                     │
│                                                           │
│  Admin Login Page                                        │
│    └── LoginForm                                         │
│                                                           │
│  Admin Jobs Dashboard                                    │
│    ├── JobsTable                                         │
│    └── CreateJobButton                                   │
│                                                           │
│  Admin Job Create/Edit Form                              │
│    └── JobForm (with validation)                         │
└──────────────────────────────────────────────────────────┘
```

## Phase 1: Logo Update

### Logo SVG Specification


The existing logo in `components/site-header.tsx` already implements a modern SVG design with:
- Shield outline with `#0284C7` (sky-600) stroke
- Flame gradient from `#991B1B` (red-800) to `#F59E0B` (amber-500)
- Inner flame with `#FEF08A` (yellow-200) highlight
- Responsive sizing using `size-10` container and `size-7` SVG

**Implementation Strategy:**
1. Extract logo SVG into standalone `components/logo.tsx` component
2. Create variants for header, footer, and favicon sizes
3. Export as React component with props for size and styling
4. Generate favicon variants (16x16, 32x32, 192x192, 512x512) from SVG
5. Update metadata in `app/layout.tsx` with favicon and Open Graph images

**Logo Component Interface:**

```typescript
// components/logo.tsx
interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'; // Preset sizes
  variant?: 'full' | 'icon-only'; // With or without text
  className?: string;
  linkTo?: string; // Optional link wrapper
}

export function Logo({ size = 'md', variant = 'full', className, linkTo }: LogoProps) {
  // Implementation
}
```

**Responsive Sizes:**
- `sm`: 32px (mobile header, footer)
- `md`: 40px (desktop header) - current
- `lg`: 64px (hero sections)
- `xl`: 128px (promotional materials)

### Metadata Updates


Update `app/layout.tsx` metadata configuration:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'PFP Canada | Fire Protection Services in Western Canada',
    template: '%s | PFP Canada',
  },
  description: '...',
  keywords: [...],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://pfpcanada.com',
    siteName: 'PFP Canada',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PFP Canada - Fire Protection Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};
```

## Phase 2: Critical UI Error Resolution

### UI Error Categories and Solutions

#### 2.1 Color Contrast Compliance


**Current Color Palette (from globals.css):**
- `--foreground`: oklch(0.2 0.025 260) - Very dark blue (~#1a1f3d)
- `--background`: oklch(0.985 0.004 250) - Near white (~#fbfbfc)
- `--primary`: oklch(0.5 0.205 27) - Orange (~#c2410c)
- `--secondary`: oklch(0.18 0.03 260) - Very dark blue (~#111827)
- `--muted-foreground`: oklch(0.42 0.025 260) - Medium gray-blue
- `--accent`: oklch(0.55 0.09 230) - Blue (~#0284c7)

**Contrast Requirements (WCAG AA):**
- Normal text (< 18pt): 4.5:1
- Large text (≥ 18pt or ≥ 14pt bold): 3:1
- UI components: 3:1

**Audit Process:**
1. Test all text/background combinations in design tokens
2. Verify interactive elements have sufficient contrast in all states
3. Adjust muted-foreground if contrast is insufficient
4. Ensure link colors are distinguishable from body text

**Recommended Adjustments:**
```css
:root {
  /* If muted-foreground fails contrast on background */
  --muted-foreground: oklch(0.38 0.025 260); /* Darker for better contrast */
}
```

#### 2.2 Focus State Visibility

**Current Focus Implementation:**
The design system uses `outline-ring/50` in base styles. Verify all interactive elements inherit this properly.

**Focus State Standard:**
```typescript
// Ensure all interactive components use ring utilities
const focusClasses = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
```

**Components to Audit:**


- Button component (`components/ui/button.tsx`)
- Links in navigation and body content
- Form inputs in admin panel
- Sheet trigger buttons
- Dropdown menu items

#### 2.3 Responsive Layout Integrity

**Viewport Range:** 320px (small mobile) to 2560px (large desktop)

**Current Breakpoints (Tailwind 4):**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Layout Audit Points:**
1. **Header Navigation**: Verify dropdown menus don't overflow on narrow screens
2. **Mobile Menu (Sheet)**: Test at 320px width for content overflow
3. **Content Grid**: Ensure grid layouts collapse appropriately
4. **Image Containers**: Verify aspect-ratio utilities prevent distortion
5. **Text Wrapping**: Check long words don't cause horizontal overflow

**Responsive Container Strategy:**
```typescript
// Use consistent max-width and padding pattern
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

#### 2.4 Image Aspect Ratio Preservation

**Implementation:**
```typescript
// Use Next.js Image with explicit dimensions or fill with aspect-ratio container
<div className="relative aspect-video">
  <Image
    src={imageSrc}
    alt={alt}
    fill
    className="object-cover"
  />
</div>
```

#### 2.5 Consistent Navigation Styling


**Strategy:**
- Extract header and footer styles into shared constants
- Ensure navigation links use consistent hover/active states
- Use `font-display` class for uppercase navigation text
- Apply consistent tracking (`tracking-widest`) for nav items

```typescript
// lib/navigation-styles.ts
export const navLinkStyles = "px-3 py-2 font-display text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-primary";
export const mobileNavLinkStyles = "border-b border-border px-1 py-3 font-display text-lg uppercase tracking-[0.08em] text-foreground";
```

#### 2.6 Button and Link Interaction States

**Standard Button States:**
```typescript
// Default button (from shadcn/ui)
variant: "default" // bg-primary, hover:bg-primary/90
variant: "secondary" // bg-secondary, hover:bg-secondary/80
variant: "outline" // border-input, hover:bg-accent hover:text-accent-foreground
variant: "ghost" // hover:bg-accent hover:text-accent-foreground

// Ensure all custom buttons follow these patterns
```

**Link Hover States:**
```typescript
// Inline links
className="text-primary underline-offset-4 hover:underline"

// Navigation links
className="transition-colors hover:text-primary"
```

#### 2.7 Error Boundary Implementation

**Strategy:**
Create React Error Boundaries for major sections to catch component failures gracefully.

```typescript
// components/error-boundary.tsx
'use client';

import { Component, ReactNode } from 'react';


interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
          <p className="text-sm text-destructive">
            Something went wrong. Please refresh the page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

**Usage in Layouts:**
```typescript
// Wrap dynamic sections
<ErrorBoundary>
  <DynamicContent />
</ErrorBoundary>
```

## Phase 3: UI Design Guidelines Application

### Design Token System

The current implementation in `app/globals.css` already uses a comprehensive token system with CSS custom properties. The design guidelines application focuses on:


1. Consistent application of existing tokens
2. Auditing components for token compliance
3. Eliminating hardcoded values

### 3.1 Typography System

**Font Families:**
```css
/* Already defined in @theme inline */
--font-sans: var(--font-source-sans); /* Source Sans 3 */
--font-display: var(--font-oswald); /* Oswald */
```

**Typography Scale (Tailwind CSS 4 defaults with customizations):**
```typescript
// Text size classes to use consistently
text-xs      // 0.75rem (12px)
text-sm      // 0.875rem (14px)
text-base    // 1rem (16px)
text-lg      // 1.125rem (18px)
text-xl      // 1.25rem (20px)
text-2xl     // 1.5rem (24px)
text-3xl     // 1.875rem (30px)
text-4xl     // 2.25rem (36px)
text-5xl     // 3rem (48px)
```

**Application Rules:**
- Body text: `font-sans text-base` (Source Sans 3, 16px)
- Headings: `font-display` (Oswald)
- Navigation: `font-display text-sm uppercase tracking-widest`
- Small labels: `font-display text-xs uppercase tracking-[0.16em]`

### 3.2 Spacing Scale

**Current Implementation:**
Tailwind CSS 4 uses default spacing scale (0.25rem base unit).

**Consistent Spacing Patterns:**
```typescript
// Container padding
px-4 sm:px-6 lg:px-8

// Section spacing
py-12 sm:py-16 lg:py-24

// Component gaps
gap-2   // 0.5rem (8px) - tight
gap-4   // 1rem (16px) - default
gap-6   // 1.5rem (24px) - comfortable
gap-8   // 2rem (32px) - spacious
```


**Audit Strategy:**
1. Search for hardcoded padding/margin values (e.g., `p-[17px]`)
2. Replace with standard spacing scale values
3. Ensure consistent vertical rhythm (multiples of 4px)

### 3.3 Color System

**Design Tokens (from globals.css):**
```css
:root {
  /* Semantic colors */
  --background: oklch(0.985 0.004 250);      /* Near white */
  --foreground: oklch(0.2 0.025 260);        /* Dark blue-gray */
  --primary: oklch(0.5 0.205 27);            /* Orange #c2410c */
  --primary-foreground: oklch(0.99 0.01 90); /* White */
  --secondary: oklch(0.18 0.03 260);         /* Very dark blue */
  --secondary-foreground: oklch(0.97 0.01 250); /* Off-white */
  --accent: oklch(0.55 0.09 230);            /* Sky blue #0284c7 */
  --muted: oklch(0.945 0.008 250);           /* Light gray */
  --border: oklch(0.82 0.02 260);            /* Medium gray */
}
```

**Application Rules:**
- Primary CTA buttons: `bg-primary text-primary-foreground`
- Secondary buttons: `bg-secondary text-secondary-foreground`
- Text: `text-foreground`, `text-muted-foreground` (secondary text)
- Borders: `border-border`
- Backgrounds: `bg-background`, `bg-card`, `bg-muted`
- Accent elements (links, icons): `text-accent`

**Never Use:**
- Hardcoded hex colors
- Raw Tailwind color scales (e.g., `text-blue-600`) except in exceptional cases

### 3.4 Border Radius Scale

**Current System:**
```css
--radius: 0.125rem; /* 2px - very sharp, architectural feel */
--radius-sm: calc(var(--radius) * 0.5);  /* 1px */
--radius-md: var(--radius);              /* 2px */
--radius-lg: calc(var(--radius) * 1.5);  /* 3px */
--radius-xl: calc(var(--radius) * 2);    /* 4px */
```


**Application:**
- Buttons: `rounded` (uses --radius-md, 2px)
- Cards: `rounded-lg` (3px)
- Modals/Sheets: `rounded-lg` or `rounded-none` for full-screen
- Input fields: `rounded-md` (2px)

**Design Philosophy:**
The sharp, minimal radius (2px base) aligns with the industrial/professional brand identity for fire protection services.

### 3.5 Shadow/Elevation System

**Tailwind CSS 4 Shadow Scale:**
```typescript
shadow-sm    // Subtle elevation for cards
shadow       // Default elevation for dropdowns
shadow-md    // Moderate elevation for modals
shadow-lg    // High elevation for floating elements
```

**Application Rules:**
- Cards: `shadow-sm`
- Dropdown menus: `shadow-md`
- Modals/Sheets: `shadow-lg`
- Buttons: No shadow by default (flat design)

### 3.6 Grid System

**Container Pattern:**
```typescript
// Maximum width with responsive padding
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
```

**Grid Layouts:**
```typescript
// Responsive grid for cards/items
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
```

**Background Grid (Utility):**
The design already includes a `dossier-grid` utility for background grids:
```css
.dossier-grid {
  background-image:
    linear-gradient(to right, color-mix(in oklch, var(--rule) 18%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--rule) 18%, transparent) 1px, transparent 1px);
  background-size: 28px 28px;
}
```


## Phase 4: Authentication System (better-auth)

### better-auth Configuration

**Installation:**
```bash
pnpm add better-auth drizzle-orm pg
pnpm add -D @types/pg
```

**Configuration File Structure:**
```
/lib/auth/
  ├── config.ts        # better-auth configuration
  ├── client.ts        # Client-side auth hooks
  └── middleware.ts    # Route protection middleware
```

### 4.1 Auth Configuration

```typescript
// lib/auth/config.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // PostgreSQL
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // Set true for production
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // Update session every 24 hours
  },
  advanced: {
    cookiePrefix: "pfp_auth",
  },
});
```

### 4.2 Database Setup

**Database Schema:**
better-auth automatically creates required tables:
- `user` - User accounts (id, email, hashedPassword, emailVerified, createdAt, updatedAt)
- `session` - Active sessions (id, userId, expiresAt, ipAddress, userAgent)
- `account` - OAuth accounts (if using OAuth providers in future)

**Environment Variables:**


```env
# .env.local
DATABASE_URL="postgresql://user:password@localhost:5432/pfpcanada"
BETTER_AUTH_SECRET="generate-a-secure-random-string-at-least-32-chars"
BETTER_AUTH_URL="http://localhost:3000" # Production: https://pfpcanada.com
```

**Database Client:**
```typescript
// lib/db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
```

### 4.3 API Route

better-auth requires a single API route to handle all auth operations:

```typescript
// app/api/auth/[...all]/route.ts
import { auth } from "@/lib/auth/config";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

### 4.4 Client-Side Auth Hooks

```typescript
// lib/auth/client.ts
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

export const {
  signIn,
  signOut,
  signUp,
  useSession,
} = authClient;
```

### 4.5 Login Page Implementation


```typescript
// app/admin/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from '@/lib/auth/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data, error } = await signIn.email({
        email,
        password,
        callbackURL: '/admin/dashboard',
      });

      if (error) {
        setError('Invalid email or password');
        setLoading(false);
        return;
      }

      router.push('/admin/dashboard');
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center font-display text-2xl">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
```

### 4.6 Route Protection Middleware


```typescript
// middleware.ts (root level)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/auth/config';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Redirect authenticated users away from login
  if (pathname === '/admin/login') {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (session) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
```

### 4.7 Session Provider

```typescript
// components/providers/session-provider.tsx
'use client';

import { SessionProvider as BetterAuthSessionProvider } from 'better-auth/react';

export function SessionProvider({ children }: { children: React.ReactNode }) {
  return (
    <BetterAuthSessionProvider>
      {children}
    </BetterAuthSessionProvider>
  );
}
```

Update root layout:


```typescript
// app/layout.tsx
import { SessionProvider } from '@/components/providers/session-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`light ${sourceSans.variable} ${oswald.variable}`}>
      <body className="bg-background font-sans antialiased">
        <SessionProvider>
          {children}
        </SessionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
```

## Phase 5: Job Posting Management System

### 5.1 Data Model

```typescript
// lib/jobs/types.ts
export type JobStatus = 'active' | 'inactive' | 'draft';

export interface Job {
  id: string;                    // UUID
  title: string;                 // e.g., "Fire Alarm Technician"
  location: string;              // e.g., "Calgary, AB"
  summary: string;               // Short description for listings
  description: string;           // Full HTML or Markdown description
  requirements: string[];        // Array of requirement strings
  status: JobStatus;
  createdAt: string;             // ISO 8601 timestamp
  updatedAt: string;             // ISO 8601 timestamp
}

export interface CreateJobInput {
  title: string;
  location: string;
  summary: string;
  description: string;
  requirements: string[];
  status: JobStatus;
}

export type UpdateJobInput = Partial<CreateJobInput>;
```

### 5.2 JSON Storage Service


```typescript
// lib/jobs/storage.ts
import { promises as fs } from 'fs';
import { join } from 'path';
import { randomUUID } from 'crypto';
import type { Job, CreateJobInput, UpdateJobInput } from './types';

const DATA_DIR = join(process.cwd(), 'data');
const JOBS_FILE = join(DATA_DIR, 'jobs.json');

async function ensureDataFile(): Promise<void> {
  try {
    await fs.access(JOBS_FILE);
  } catch {
    // File doesn't exist, create it with empty array
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(JOBS_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

async function readJobs(): Promise<Job[]> {
  await ensureDataFile();
  const data = await fs.readFile(JOBS_FILE, 'utf-8');
  return JSON.parse(data);
}

async function writeJobs(jobs: Job[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(JOBS_FILE, JSON.stringify(jobs, null, 2), 'utf-8');
}

export async function getAllJobs(): Promise<Job[]> {
  return readJobs();
}

export async function getActiveJobs(): Promise<Job[]> {
  const jobs = await readJobs();
  return jobs.filter(job => job.status === 'active');
}

export async function getJobById(id: string): Promise<Job | null> {
  const jobs = await readJobs();
  return jobs.find(job => job.id === id) || null;
}

export async function createJob(input: CreateJobInput): Promise<Job> {
  const jobs = await readJobs();
  
  const newJob: Job = {
    id: randomUUID(),
    ...input,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  jobs.push(newJob);
  await writeJobs(jobs);
  
  return newJob;
}

export async function updateJob(id: string, input: UpdateJobInput): Promise<Job | null> {
  const jobs = await readJobs();
  const index = jobs.findIndex(job => job.id === id);
  
  if (index === -1) {
    return null;
  }
  
  jobs[index] = {
    ...jobs[index],
    ...input,
    updatedAt: new Date().toISOString(),
  };
  
  await writeJobs(jobs);
  return jobs[index];
}

export async function deleteJob(id: string): Promise<boolean> {
  const jobs = await readJobs();
  const filteredJobs = jobs.filter(job => job.id !== id);
  
  if (filteredJobs.length === jobs.length) {
    return false; // Job not found
  }
  
  await writeJobs(filteredJobs);
  return true;
}
```

### 5.3 API Routes

