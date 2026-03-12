'use client';

import { Container } from '@/app/components/ui/Container';
import { useLocale } from '@/app/lib/locale-context';

export function InstitutionSection() {
  const { t } = useLocale();

  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-rose-600 mb-6 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
            {t.institution.title}
          </h2>

          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {t.institution.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
