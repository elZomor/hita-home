'use client';

import { useLocale } from '@/app/lib/locale-context';

export function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-sm font-semibold text-neutral-900 dark:text-white">
              {t.footer.hita}
            </span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {currentYear} {t.footer.hita}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
