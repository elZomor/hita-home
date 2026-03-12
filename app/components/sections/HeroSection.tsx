'use client';

import { Container } from '@/app/components/ui/Container';
import { useLocale } from '@/app/lib/locale-context';

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf6ee] via-white to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900" />

      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 ltr:left-10 rtl:right-10 w-72 h-72 bg-[#a47139] rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob" />
        <div className="absolute top-40 ltr:right-10 rtl:left-10 w-72 h-72 bg-[#682745] rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-60 ltr:left-1/3 rtl:right-1/3 w-72 h-72 bg-[#059669] rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
