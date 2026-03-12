import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import { Providers } from '@/app/providers/providers';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HITA Festivals | Higher Institute of Theatrical Arts',
  description:
    'Official gateway to the Higher Institute of Theatrical Arts festivals. Explore the Arab Festival and Global Festival portals.',
  keywords: [
    'HITA',
    'Higher Institute of Theatrical Arts',
    'Arab Festival',
    'Global Festival',
    'Theatre',
    'Arts',
    'Culture',
  ],
  authors: [{ name: 'Higher Institute of Theatrical Arts' }],
  openGraph: {
    title: 'HITA Festivals | Higher Institute of Theatrical Arts',
    description:
      'Official gateway to the Higher Institute of Theatrical Arts festivals. Explore the Arab Festival and Global Festival portals.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HITA Festivals | Higher Institute of Theatrical Arts',
    description:
      'Official gateway to the Higher Institute of Theatrical Arts festivals.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cairo.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
