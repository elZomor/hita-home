# HITA Festivals Portal

Official gateway to the Higher Institute of Theatrical Arts festivals. A production-ready Next.js web portal that provides elegant access to the Arab Festival and Global Festival websites.

## Overview

This is a standalone Next.js application that serves as the main entry point for HITA festivals. It does not replace or rebuild the existing festival websites - instead, it provides a polished, professional gateway that links to:

- **Arab Festival**: https://arab-festival.hita.play-cast.com/
- **Global Festival**: https://global-festival.hita.play-cast.com/

## Features

- **Bilingual Support**: Full Arabic (RTL) and English (LTR) localization
- **Theme Switching**: Dark and light mode with smooth transitions
- **Responsive Design**: Mobile-first design that works across all devices
- **Premium UI**: Elegant, theatrical design aesthetic
- **SEO Optimized**: Complete metadata and Open Graph tags
- **Accessible**: Semantic HTML and ARIA labels
- **Future-Ready**: React Query setup for API integration
- **Type Safe**: Full TypeScript implementation
- **Scalable**: Easy to add more festivals

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API for locale
- **Theme**: next-themes
- **Data Fetching**: @tanstack/react-query
- **Fonts**: System font stack

## Project Structure

```
app/
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # HeroSection, FestivalGrid, FestivalCard, InstitutionSection
│   └── ui/              # ThemeToggle, LanguageSwitcher, Container
├── config/
│   ├── festivals.ts     # Festival data configuration
│   └── locales.ts       # Localization messages
├── lib/
│   └── locale-context.tsx  # Locale context and hooks
├── providers/
│   └── providers.tsx    # App-wide providers
├── types/
│   └── index.ts         # TypeScript type definitions
├── layout.tsx           # Root layout with metadata
├── page.tsx             # Home page
└── globals.css          # Global styles and animations
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Configuration

### Adding New Festivals

To add a new festival, edit `app/config/festivals.ts`:

```typescript
{
  id: 'your-festival-id',
  name: 'Festival Name',
  url: 'https://your-festival.hita.play-cast.com/',
  variant: 'primary', // or 'secondary'
  title: {
    en: 'English Title',
    ar: 'العنوان بالعربية',
  },
  description: {
    en: 'English description',
    ar: 'الوصف بالعربية',
  },
}
```

### Updating Translations

Edit `app/config/locales.ts` to update or add new translations. The structure supports nested keys for organization:

```typescript
export const messages = {
  en: {
    // English translations
  },
  ar: {
    // Arabic translations
  },
};
```

## Design System

### Colors

- **Primary Gradient**: Amber to Rose (Arab Festival)
- **Secondary Gradient**: Blue to Purple (Global Festival)
- **Neutral**: System grays for text and backgrounds
- **Themes**: Full dark and light mode support

### Typography

- System font stack for optimal performance
- Clear hierarchy: 5xl-8xl for hero, 2xl-5xl for sections
- 150% line height for body text, 120% for headings

### Spacing

- 8px grid system
- Generous whitespace for premium feel
- Responsive padding and margins

### Animations

- Smooth theme transitions
- Hover effects on interactive elements
- Blob animations in hero section
- Scale and shadow transitions on cards

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

The site is optimized for Vercel's edge network and will deploy automatically.

### Environment Variables

No environment variables are required for the basic setup. The site is static and links to external festival portals.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Proper heading hierarchy

## Performance

- Server-side rendering
- Optimized images and fonts
- Minimal JavaScript bundle
- CSS optimization
- Fast page loads

## License

All rights reserved - Higher Institute of Theatrical Arts

## Support

For questions or issues, contact the HITA technical team.
