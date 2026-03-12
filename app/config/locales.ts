import { Locale } from '@/app/types';

export const defaultLocale: Locale = 'ar';

export const locales: Locale[] = ['en', 'ar'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
};

export const messages = {
  en: {
    site: {
      name: 'Higher Institute of Theatrical Arts',
      title: 'Higher Institute of Theatrical Arts Activities',
      description: 'Official gateway to the Higher Institute of Theatrical Arts festivals',
    },
    hero: {
      title: 'Institute Activities',
      subtitle: 'Choose and explore our various activities',
    },
    festivals: {
      title: 'Explore Our Activities',
      enterPortal: 'Explore',
    },
    institution: {
      title: 'Higher Institute of Theatrical Arts',
      description: 'The Higher Institute of Theatrical Arts is a leading cultural and educational institution dedicated to advancing theatrical arts, fostering creativity, and celebrating artistic excellence through festivals and programs.',
    },
    footer: {
      rights: 'All rights reserved.',
      hita: 'Higher Institute of Theatrical Arts',
    },
    accessibility: {
      languageSwitcher: 'Switch language',
      themeSwitcher: 'Toggle theme',
      logo: 'HITA Logo',
    },
  },
  ar: {
    site: {
      name: 'المعهد العالي للفنون المسرحية',
      title: 'أنشطة المعهد العالي للفنون المسرحية',
      description: 'البوابة الرسمية لمهرجانات المعهد العالي للفنون المسرحية',
    },
    hero: {
      title: 'أنشطة المعهد',
      subtitle: 'اختر واستكشف أنشطتنا المختلفة',
    },
    festivals: {
      title: 'استكشف أنشطتنا',
      enterPortal: 'استكشف',
    },
    institution: {
      title: 'المعهد العالي للفنون المسرحية',
      description: 'المعهد العالي للفنون المسرحية هو مؤسسة ثقافية وتعليمية رائدة مكرسة للنهوض بالفنون المسرحية وتعزيز الإبداع والاحتفال بالتميز الفني من خلال المهرجانات والبرامج.',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      hita: 'المعهد العالي للفنون المسرحية',
    },
    accessibility: {
      languageSwitcher: 'تبديل اللغة',
      themeSwitcher: 'تبديل المظهر',
      logo: 'شعار المعهد',
    },
  },
};

export type Messages = typeof messages.en;
