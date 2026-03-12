import { FestivalContent } from '@/app/types';

export const festivals: FestivalContent[] = [
  {
    id: 'arab-festival',
    name: 'Arab Festival',
    url: 'https://arab-festival.hita.play-cast.com/',
    variant: 'primary',
    title: {
      en: 'Arab Festival',
      ar: 'المهرجان العربي',
    },
    description: {
      en: 'Explore the Arab Festival portal, schedules, content, and festival updates',
      ar: 'اكتشف بوابة المهرجان العربي والجداول الزمنية والمحتوى وتحديثات المهرجان',
    },
  },
  {
    id: 'global-festival',
    name: 'Global Festival',
    url: 'https://global-festival.hita.play-cast.com/',
    variant: 'secondary',
    title: {
      en: 'Global Festival',
      ar: 'المهرجان العالمي',
    },
    description: {
      en: 'Explore the Global Festival portal, schedules, content, and festival updates',
      ar: 'اكتشف بوابة المهرجان العالمي والجداول الزمنية والمحتوى وتحديثات المهرجان',
    },
  },
  {
    id: 'actogram',
    name: 'Actogram',
    url: 'https://actogram.play-cast.com',
    variant: 'tertiary',
    title: {
      en: 'Actogram',
      ar: 'Actogram',
    },
    description: {
      en: 'Connect with talented artists, discover new opportunities, and showcase your talents to the world.',
      ar: 'تواصل مع فنانين موهوبين، اكتشف فرص جديدة، واظهر مواهبك للعالم.',
    },
  },
];
