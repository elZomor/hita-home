'use client';

import { Container } from '@/app/components/ui/Container';
import { FestivalCard } from '@/app/components/sections/FestivalCard';
import { festivals } from '@/app/config/festivals';
import { useLocale } from '@/app/lib/locale-context';

export function FestivalGrid() {
  const { t } = useLocale();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-900">
      <Container>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-12 md:mb-16 tracking-tight">
          {t.festivals.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto [&>*:last-child:nth-child(odd)]:lg:col-span-2 [&>*:last-child:nth-child(odd)]:lg:mx-auto [&>*:last-child:nth-child(odd)]:lg:w-[calc(50%-1.25rem)]">
          {festivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </div>
      </Container>
    </section>
  );
}
