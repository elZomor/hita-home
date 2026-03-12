'use client';

import { FestivalContent } from '@/app/types';
import { useLocale } from '@/app/lib/locale-context';

interface FestivalCardProps {
  festival: FestivalContent;
}

export function FestivalCard({ festival }: FestivalCardProps) {
  const { getLocalizedText, t } = useLocale();

  const variantStyles = {
    primary: {
      gradient: 'from-[#a47139] to-[#682745]',
      hover: 'group-hover:from-[#8f5f2e] group-hover:to-[#58203a]',
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    secondary: {
      gradient: 'from-[#059669] to-[#14b8a6]',
      hover: 'group-hover:from-[#047857] group-hover:to-[#0d9488]',
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    tertiary: {
      gradient: 'from-[#f59e0b] to-[#b45309]',
      hover: 'group-hover:from-[#d97706] group-hover:to-[#92400e]',
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  };

  const styles = variantStyles[festival.variant];

  return (
    <a
      href={festival.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative h-full bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-transparent hover:scale-[1.02]">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} ${styles.hover} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300`}
        />

        <div className="relative p-8 md:p-10 flex flex-col h-full items-center text-center">
          <div className="flex flex-col items-center mb-6">
            <div
              className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${styles.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="text-white">{styles.icon}</div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-0 tracking-tight text-center">
              {getLocalizedText(festival.title)}
            </h3>
          </div>

          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed flex-grow">
            {getLocalizedText(festival.description)}
          </p>

          <div className="flex items-center gap-3 text-neutral-900 dark:text-white font-semibold group-hover:gap-4 transition-all duration-300">
            <span>{t.festivals.enterPortal}</span>
            <svg
              className="w-5 h-5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}
