'use client';

import { useLocale } from '@/app/lib/locale-context';
import { locales } from '@/app/config/locales';
import { Locale } from '@/app/types';

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  const next = locales.find((loc) => loc !== locale) as Locale;

  return (
    <button
      onClick={() => setLocale(next)}
      className="cursor-pointer flex items-center p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a47139] focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
      aria-label={t.accessibility.languageSwitcher}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 00.284 2.253" />
      </svg>
    </button>
  );
}
