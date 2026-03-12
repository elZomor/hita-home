export type Locale = 'en' | 'ar';

export interface Festival {
  id: string;
  name: string;
  url: string;
  variant: 'primary' | 'secondary' | 'tertiary';
}

export interface LocalizedContent {
  en: string;
  ar: string;
}

export interface FestivalContent extends Festival {
  title: LocalizedContent;
  description: LocalizedContent;
}
