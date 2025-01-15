export enum Namespace {
  VALIDATION = 'validation',
}

export enum Locales {
  ENGLISH = 'en',
  UKRAINIAN = 'uk',
  FRENCH = 'fr',
}

export const defaultLocale = Locales.ENGLISH;
export const locales = [
  {
    label: {
      en: 'English',
      uk: 'Англійська',
      fr: 'Anglais',
    },
    code: Locales.ENGLISH,
  },
  {
    label: {
      en: 'Ukrainian',
      uk: 'Українська',
      fr: 'Ukrainien',
    },
    code: Locales.UKRAINIAN,
  },
  {
    label: {
      en: 'French',
      uk: 'Французька',
      fr: 'Français',
    },
    code: Locales.FRENCH,
  },
];
