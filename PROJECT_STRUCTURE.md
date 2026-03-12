# Project Structure

Complete file tree and organization of the HITA Festivals Portal.

## Directory Tree

```
project/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Site header with logo and controls
│   │   │   └── Footer.tsx              # Site footer with copyright
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Hero with title and animated background
│   │   │   ├── FestivalGrid.tsx        # Grid container for festival cards
│   │   │   ├── FestivalCard.tsx        # Individual festival card component
│   │   │   └── InstitutionSection.tsx  # About HITA section
│   │   └── ui/
│   │       ├── ThemeToggle.tsx         # Dark/light mode switcher
│   │       ├── LanguageSwitcher.tsx    # English/Arabic switcher
│   │       └── Container.tsx           # Max-width wrapper component
│   ├── config/
│   │   ├── festivals.ts                # Festival data configuration
│   │   └── locales.ts                  # Translation messages
│   ├── lib/
│   │   └── locale-context.tsx          # Locale state management
│   ├── providers/
│   │   └── providers.tsx               # App-wide context providers
│   ├── types/
│   │   └── index.ts                    # TypeScript type definitions
│   ├── layout.tsx                      # Root layout with metadata
│   ├── page.tsx                        # Home page
│   └── globals.css                     # Global styles and animations
├── public/                             # Static assets (if needed)
├── node_modules/                       # Dependencies
├── .next/                              # Next.js build output
├── package.json                        # Project dependencies
├── tsconfig.json                       # TypeScript configuration
├── next.config.ts                      # Next.js configuration
├── postcss.config.mjs                  # PostCSS configuration
├── eslint.config.mjs                   # ESLint configuration
├── README.md                           # Project documentation
├── ARCHITECTURE.md                     # Architecture decisions
├── DEPLOYMENT.md                       # Deployment guide
└── PROJECT_STRUCTURE.md                # This file
```

## Component Relationships

```
page.tsx
├── Header
│   ├── Logo (inline)
│   ├── LanguageSwitcher
│   └── ThemeToggle
├── HeroSection
│   └── Container
├── FestivalGrid
│   ├── Container
│   └── FestivalCard (×2, dynamically generated)
├── InstitutionSection
│   └── Container
└── Footer
    └── Logo (inline)
```

## Data Flow

```
festivals.ts (config)
    ↓
FestivalGrid (maps over array)
    ↓
FestivalCard (receives festival prop)
    ↓
Uses locale context for translations
    ↓
Renders localized content
```

## Context Providers

```
layout.tsx
└── Providers
    ├── QueryClientProvider (React Query)
    ├── ThemeProvider (next-themes)
    └── LocaleProvider (custom)
        └── children (page content)
```

## State Management

### Theme State (next-themes)
- **Provider**: ThemeProvider in providers.tsx
- **Consumer**: ThemeToggle.tsx uses useTheme()
- **Storage**: localStorage key "theme"
- **Values**: "dark" | "light"

### Locale State (custom context)
- **Provider**: LocaleProvider in locale-context.tsx
- **Consumers**: All components use useLocale()
- **Storage**: localStorage key "locale"
- **Values**: "en" | "ar"

### React Query State
- **Provider**: QueryClientProvider in providers.tsx
- **Configuration**: 60s stale time, no refetch on window focus
- **Usage**: Ready for future API calls

## File Purposes

### Configuration Files

| File | Purpose |
|------|---------|
| `config/festivals.ts` | Festival data (titles, URLs, descriptions) |
| `config/locales.ts` | Translation strings for UI |
| `types/index.ts` | TypeScript interfaces and types |

### Component Files

| File | Purpose | Type |
|------|---------|------|
| `layout/Header.tsx` | Site header | Client |
| `layout/Footer.tsx` | Site footer | Client |
| `sections/HeroSection.tsx` | Hero section | Client |
| `sections/FestivalGrid.tsx` | Festival container | Client |
| `sections/FestivalCard.tsx` | Festival card | Client |
| `sections/InstitutionSection.tsx` | About section | Client |
| `ui/ThemeToggle.tsx` | Theme switcher | Client |
| `ui/LanguageSwitcher.tsx` | Language switcher | Client |
| `ui/Container.tsx` | Layout wrapper | Server |

### Provider Files

| File | Purpose |
|------|---------|
| `providers/providers.tsx` | Combines all providers |
| `lib/locale-context.tsx` | Locale context and hooks |

### Root Files

| File | Purpose |
|------|---------|
| `layout.tsx` | Root layout with metadata |
| `page.tsx` | Home page composition |
| `globals.css` | Global styles |

## Import Patterns

### Absolute Imports
All imports use `@/` alias pointing to app directory:

```typescript
import { Header } from '@/app/components/layout/Header';
import { festivals } from '@/app/config/festivals';
import { useLocale } from '@/app/lib/locale-context';
```

### Relative Imports
Not used to maintain consistency and ease refactoring.

## Styling Organization

### Global Styles (globals.css)
- Base styles (html, body)
- Custom animations (blob)
- Utility classes (animation-delay)

### Component Styles
- Inline Tailwind classes
- No external CSS modules
- Dark mode via `dark:` prefix
- RTL via `rtl:` prefix

## Type Definitions

### Core Types (`types/index.ts`)

```typescript
Locale                  // 'en' | 'ar'
Festival               // Base festival shape
LocalizedContent       // { en: string; ar: string }
FestivalContent        // Festival + LocalizedContent
Messages               // Translation structure
```

## Build Output

### Static Pages
- `/` - Home page (fully static)
- `/_not-found` - 404 page

### Build Artifacts
- `.next/` - Next.js build output
- `.next/static/` - Static assets
- `.next/server/` - Server bundles

## Environment

### No Environment Variables Required
All configuration is in code. No `.env` file needed for basic setup.

### Future Environment Variables
If adding external services:
```env
# Database (if using Supabase)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Analytics (if using Vercel)
NEXT_PUBLIC_ANALYTICS_ID=
```

## Key Files for Common Tasks

### Add New Festival
Edit: `app/config/festivals.ts`

### Update Translations
Edit: `app/config/locales.ts`

### Change Styling
Edit: Component files or `app/globals.css`

### Add New Component
Create: `app/components/{category}/{ComponentName}.tsx`

### Modify Layout
Edit: `app/layout.tsx` or `app/page.tsx`

### Configure Build
Edit: `next.config.ts`

### Update Dependencies
Edit: `package.json` then run `npm install`

## Naming Conventions

### Files
- Components: PascalCase (e.g., `FestivalCard.tsx`)
- Config: camelCase (e.g., `festivals.ts`)
- Docs: UPPERCASE (e.g., `README.md`)

### Components
- React components: PascalCase
- Hooks: camelCase with 'use' prefix
- Utilities: camelCase

### CSS Classes
- Tailwind utilities only
- No custom class names
- BEM not used (not needed with Tailwind)

### Constants
- UPPER_SNAKE_CASE for true constants
- camelCase for config objects

## Code Organization Principles

1. **Colocation**: Related files live together
2. **Single Responsibility**: Each file has one clear purpose
3. **Reusability**: UI components are generic and reusable
4. **Composition**: Complex UIs built from simple components
5. **Type Safety**: Everything is typed with TypeScript
6. **Accessibility**: Semantic HTML and ARIA labels throughout

## Testing Structure (Future)

```
__tests__/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── lib/
└── integration/
```

## Documentation Files

| File | Audience | Purpose |
|------|----------|---------|
| `README.md` | All | Quick start and overview |
| `ARCHITECTURE.md` | Developers | Technical decisions |
| `DEPLOYMENT.md` | DevOps | Deployment guide |
| `PROJECT_STRUCTURE.md` | Developers | File organization |

## Dependencies Overview

### Production Dependencies
- `next` - React framework
- `react` - UI library
- `react-dom` - React DOM renderer
- `@tanstack/react-query` - Data fetching
- `next-themes` - Theme management
- `tailwindcss` - Styling

### Development Dependencies
- `typescript` - Type checking
- `@types/*` - Type definitions
- `eslint` - Code linting
- `@tailwindcss/postcss` - PostCSS plugin

## Notes

- All components marked 'use client' because they use hooks
- Container is server component (no hooks)
- Static generation means no runtime overhead
- Future API calls won't require major refactoring
