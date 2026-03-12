# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (outputs static site)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Purpose**: A static Next.js 15 (App Router) portal that serves as a bilingual gateway to two external festival websites — Arab Festival and Global Festival — both hosted under `hita.play-cast.com`.

**Key design principle**: This portal is fully independent from the external festival sites. It links out to them but shares no code or state.

### Directory layout

```
app/
├── components/
│   ├── layout/     # Header, Footer
│   ├── sections/   # HeroSection, FestivalGrid, FestivalCard, InstitutionSection
│   └── ui/         # ThemeToggle, LanguageSwitcher, Container
├── config/
│   ├── festivals.ts   # Festival data — add new festivals here
│   └── locales.ts     # All en/ar translation strings
├── lib/
│   └── locale-context.tsx  # Custom locale context + useLocale hook
├── providers/
│   └── providers.tsx       # QueryClient, Theme, Locale providers
├── types/
│   └── index.ts            # Shared TypeScript types
├── layout.tsx   # Root layout with SEO metadata
├── page.tsx     # Single home page (statically generated)
└── globals.css  # Global styles, animations, Tailwind v4 imports
```

### State management

- **Theme**: `next-themes` with class-based dark mode (default: dark), persisted to localStorage
- **Locale**: Custom React Context in `lib/locale-context.tsx` (default: English), supports `en | ar` with RTL switching, persisted to localStorage
- **Server data**: `@tanstack/react-query` provider already set up (staleTime: 60s) for future API integration; currently unused

### Internationalization

Uses a hand-rolled locale system rather than a library. All translation strings live in `config/locales.ts`. The `useLocale()` hook (from `lib/locale-context.tsx`) returns `{ locale, setLocale, t, isRTL }`. RTL layout is applied by toggling `dir="rtl"` and Tailwind `rtl:` variants.

### Adding a festival

Edit `config/festivals.ts` — each entry needs `id`, `name`, `url`, `variant` (`'primary' | 'secondary'`), and bilingual `title`/`description` fields. The `FestivalGrid` and `FestivalCard` components render whatever is in that config automatically.

### Styling

Tailwind v4 via `@tailwindcss/postcss`. Uses `@import "tailwindcss"` syntax in `globals.css` (not the legacy `@tailwind` directives). Dark mode uses the `class` strategy. Path alias `@/*` maps to the repo root.
