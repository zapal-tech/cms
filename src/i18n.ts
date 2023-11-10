export enum Namespace {
  VALIDATION = 'validation',
}

export enum Locales {
  ENGLISH = 'en',
  UKRAINIAN = 'uk',
}

export const defaultLocale = Locales.ENGLISH;
export const locales = [
  {
    label: {
      en: 'English',
      uk: 'Англійська',
    },
    code: Locales.ENGLISH,
  },
  {
    label: {
      en: 'Ukrainian',
      uk: 'Українська',
    },
    code: Locales.UKRAINIAN,
  },
];
