# Architecture Documentation

This document explains the architectural decisions, design patterns, and structure of the HITA Festivals Portal.

## Overview

The HITA Festivals Portal is a standalone Next.js application designed as an elegant gateway to two existing festival websites. It follows modern React and Next.js best practices while maintaining simplicity and extensibility.

## Core Principles

1. **Separation of Concerns**: Clear boundaries between the gateway portal and external festival sites
2. **Scalability**: Easy to add new festivals without major refactoring
3. **Maintainability**: Clean code structure with reusable components
4. **Performance**: Static generation where possible, minimal runtime overhead
5. **Accessibility**: WCAG-compliant, keyboard navigable, screen reader friendly
6. **Internationalization**: Built-in RTL/LTR support for Arabic and English

## Technology Choices

### Next.js 15 with App Router

**Why**: Latest stable version with modern features, excellent performance, and great developer experience.

**Benefits**:
- Server Components by default (better performance)
- Built-in routing with file-system convention
- Automatic code splitting and optimization
- Great TypeScript support
- Easy deployment to Vercel

### TypeScript

**Why**: Type safety prevents bugs and improves developer experience.

**Benefits**:
- Catch errors at compile time
- Better IDE support and autocomplete
- Self-documenting code through types
- Easier refactoring

### Tailwind CSS

**Why**: Utility-first CSS framework that's fast to write and easy to maintain.

**Benefits**:
- Consistent design system
- No CSS naming conflicts
- Excellent RTL support through `rtl:` variants
- Dark mode through `dark:` variants
- Production build purges unused styles

### React Query (@tanstack/react-query)

**Why**: Industry-standard data fetching library, even though we're mostly static now.

**Benefits**:
- Future-ready for API integration
- Built-in caching and state management
- Excellent TypeScript support
- Easy to add data fetching later

### next-themes

**Why**: Best-in-class theme management for Next.js.

**Benefits**:
- No flash of unstyled content
- System preference detection
- Automatic storage persistence
- Works perfectly with Server Components

## Project Structure

```
app/
├── components/         # UI components
│   ├── layout/        # Page-level layout components
│   ├── sections/      # Content section components
│   └── ui/           # Reusable UI elements
├── config/           # Configuration files
├── lib/              # Utility functions and contexts
├── providers/        # React context providers
├── types/            # TypeScript type definitions
├── layout.tsx        # Root layout
├── page.tsx          # Home page
└── globals.css       # Global styles
```

### Component Organization

**Layout Components** (`components/layout/`):
- Header: Site-wide navigation with branding
- Footer: Site-wide footer with credits

**Section Components** (`components/sections/`):
- HeroSection: Main hero with title and subtitle
- FestivalGrid: Container for festival cards
- FestivalCard: Individual festival presentation
- InstitutionSection: About HITA

**UI Components** (`components/ui/`):
- ThemeToggle: Dark/light mode switcher
- LanguageSwitcher: Language selection
- Container: Consistent max-width wrapper

### Configuration

**festivals.ts**: Central source of truth for festival data
- Easy to add new festivals
- Localized content for each festival
- Typed with TypeScript interfaces

**locales.ts**: All translations in one place
- Nested structure for organization
- Easy to add new languages
- Type-safe translation keys

## State Management

### Theme State (next-themes)

- Managed by ThemeProvider
- Persisted to localStorage
- Accessible via `useTheme()` hook
- No prop drilling needed

### Locale State (React Context)

- Custom LocaleContext and Provider
- Persisted to localStorage
- Updates document direction (RTL/LTR)
- Accessible via `useLocale()` hook

**Why Custom Context vs Library**:
- Simple requirements don't need heavy i18n library
- Full control over RTL/LTR behavior
- Easy to understand and modify
- No external dependencies for core functionality

## Internationalization

### Approach

We use a custom implementation rather than `next-intl` or `react-i18next` because:

1. **Simplicity**: Only 2 languages with straightforward requirements
2. **Performance**: No extra libraries to load
3. **Flexibility**: Complete control over RTL/LTR switching
4. **Maintainability**: Easy to understand for future developers

### RTL/LTR Handling

- Automatic `dir` attribute on `<html>` tag
- Tailwind's `rtl:` and `ltr:` variants for layout
- Bidirectional arrow icons in navigation
- Proper spacing adjustments for Arabic text

### How It Works

1. User selects language via LanguageSwitcher
2. LocaleContext updates current locale
3. Document direction updated via `useEffect`
4. All text re-renders with new language
5. Preference saved to localStorage

## Styling Strategy

### Tailwind Configuration

Using Tailwind v4 (latest) with default configuration:
- No custom config file needed
- Uses new `@import "tailwindcss"` syntax
- Custom utilities defined in CSS when needed

### Design System

**Colors**:
- Neutral grays for text and backgrounds
- Amber → Rose gradient for Arab Festival
- Blue → Purple gradient for Global Festival
- Semantic dark mode colors

**Typography**:
- System font stack for performance
- Clear hierarchy with consistent scale
- Proper line heights for readability

**Spacing**:
- 8px base unit (Tailwind default)
- Consistent padding and margins
- Responsive adjustments via breakpoints

**Animations**:
- CSS keyframes for blob animation
- Tailwind transitions for hover states
- Smooth theme transitions

### Dark Mode

- Class-based (not media query based)
- User preference takes priority
- Carefully chosen colors for both modes
- No jarring transitions

## Performance Optimizations

### Static Generation

- Homepage is fully static (○ in build output)
- No server-side runtime needed
- Fastest possible load times
- Great for CDN caching

### Code Splitting

- Automatic by Next.js
- Each component loaded only when needed
- Client components marked with 'use client'

### Asset Optimization

- System fonts (no web font downloads)
- SVG icons inline (no extra requests)
- Minimal JavaScript bundle

### Future Optimizations

When adding dynamic features:
- Use React Query for data caching
- Implement ISR (Incremental Static Regeneration)
- Add `loading.tsx` for Suspense boundaries

## Extensibility

### Adding a New Festival

1. Add entry to `app/config/festivals.ts`:
```typescript
{
  id: 'new-festival',
  name: 'New Festival',
  url: 'https://new-festival.hita.play-cast.com/',
  variant: 'primary', // or create new variant
  title: {
    en: 'New Festival',
    ar: 'المهرجان الجديد',
  },
  description: {
    en: 'Description in English',
    ar: 'الوصف بالعربية',
  },
}
```

2. The card will automatically appear in the grid
3. No other code changes needed

### Adding a New Variant

To add a new visual style for festivals:

1. Edit `app/components/sections/FestivalCard.tsx`
2. Add new entry to `variantStyles` object
3. Update TypeScript type in `app/types/index.ts`

### Adding a New Language

1. Add locale to `app/config/locales.ts`:
```typescript
export const locales = ['en', 'ar', 'fr'];
```

2. Add translations to `messages` object
3. Add locale name to `localeNames`
4. Update type in `app/types/index.ts`

### Adding API Integration

React Query is already set up:

```typescript
// In any component
'use client';
import { useQuery } from '@tanstack/react-query';

function MyComponent() {
  const { data } = useQuery({
    queryKey: ['festivals'],
    queryFn: () => fetch('/api/festivals').then(r => r.json()),
  });
}
```

## Testing Strategy

### Manual Testing Checklist

- [ ] Theme toggle works in both languages
- [ ] Language switcher updates all text
- [ ] RTL layout correct for Arabic
- [ ] Festival links open correctly
- [ ] Mobile responsive
- [ ] Keyboard navigation works
- [ ] Dark mode colors readable
- [ ] Animations smooth
- [ ] No console errors

### Future Automated Testing

Recommended additions:
- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright or Cypress
- **Visual Regression**: Percy or Chromatic
- **Accessibility**: axe-core or Pa11y

## Security Considerations

### Current Implementation

- No user data collection
- No authentication needed
- External links use `rel="noopener noreferrer"`
- No sensitive data in codebase
- Static site = minimal attack surface

### Best Practices Followed

1. All external URLs properly sanitized
2. TypeScript prevents many common bugs
3. No inline scripts or styles
4. CSP-friendly code
5. No eval() or dangerous patterns

## Deployment Architecture

### Recommended: Vercel

```
GitHub Repo → Vercel → Edge Network → Users
```

**Benefits**:
- Automatic deployments on push
- Edge caching worldwide
- Automatic HTTPS
- Preview deployments
- Zero configuration

### Alternative: Static Hosting

```
Build → Static Files → CDN/Nginx → Users
```

**Process**:
1. `npm run build` creates `.next` folder
2. `npm start` serves production build
3. Can be proxied through nginx
4. Can be deployed to any static host

## Accessibility Features

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- `<header>`, `<main>`, `<footer>`, `<section>` tags
- `<nav>` for navigation areas

### ARIA Labels

- Buttons have descriptive labels
- Toggle states indicated
- Language clearly announced
- Focus management proper

### Keyboard Navigation

- Tab order logical
- Focus visible
- No keyboard traps
- Enter/Space activate buttons

### Screen Readers

- Meaningful alt text
- Status changes announced
- Link purposes clear
- Landmarks properly used

## Browser Compatibility

### Target Browsers

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

### Polyfills Not Needed

Modern browsers support:
- CSS Grid and Flexbox
- CSS Custom Properties
- Async/await
- ES6 modules

### Graceful Degradation

- Works without JavaScript (static HTML)
- Theme defaults to dark mode
- Language defaults to English
- Animations can be disabled

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Update Next.js
npm install next@latest react@latest react-dom@latest
```

### Content Updates

- Festival data: Edit `config/festivals.ts`
- Translations: Edit `config/locales.ts`
- Styles: Edit component files
- No rebuild needed for content (use CMS in future)

### Monitoring

Recommended:
- Vercel Analytics for traffic
- Sentry for error tracking
- Lighthouse for performance
- Google Search Console for SEO

## Future Enhancements

### Phase 2 Features

1. **CMS Integration**
   - Move festival data to Supabase
   - Allow non-technical updates
   - Keep TypeScript types

2. **Analytics**
   - Track festival link clicks
   - Monitor language preferences
   - Measure engagement

3. **Enhanced Animations**
   - Framer Motion for page transitions
   - More sophisticated hover effects
   - Loading states

4. **Search Functionality**
   - Quick festival finder
   - Keyboard shortcuts
   - Recent selections

5. **Social Features**
   - Share festival links
   - Social media cards
   - Festival calendars

### Technical Debt

None currently. Built with best practices from day one.

## Conclusion

This architecture provides:
- **Simplicity**: Easy to understand and modify
- **Scalability**: Ready to grow with new festivals
- **Performance**: Fast load times and smooth interactions
- **Maintainability**: Clean code and clear patterns
- **Accessibility**: Works for everyone
- **Internationalization**: Proper RTL/LTR support

The portal successfully acts as an elegant gateway while maintaining complete independence from the festival websites it links to.
