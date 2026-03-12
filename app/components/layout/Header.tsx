'use client';

import { ThemeToggle } from '@/app/components/ui/ThemeToggle';
import { LanguageSwitcher } from '@/app/components/ui/LanguageSwitcher';
import { useLocale } from '@/app/lib/locale-context';

export function Header() {
  const { t } = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-[#a47139] to-[#682745] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg md:text-xl">H</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm md:text-base font-bold text-neutral-900 dark:text-white tracking-tight leading-tight max-w-[180px] md:max-w-xs">
                {t.site.name}
              </h1>
              <span className="text-xs text-neutral-600 dark:text-neutral-400 hidden sm:block">
                {t.site.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
