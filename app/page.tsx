import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { FestivalGrid } from '@/app/components/sections/FestivalGrid';
import { InstitutionSection } from '@/app/components/sections/InstitutionSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Header />
      <main>
        <HeroSection />
        <FestivalGrid />
        <InstitutionSection />
      </main>
      <Footer />
    </div>
  );
}
