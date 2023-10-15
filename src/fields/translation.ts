import { JSONField } from 'payload/dist/fields/config/types';

export const translationField = (): JSONField => ({
  type: 'json',
  name: 'translation',
  label: {
    en: 'Translation',
    ua: 'Переклад',
  },
});
