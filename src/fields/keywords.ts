import { TextField } from 'payload/types';

export const keywordsField = (data?: Omit<TextField, 'type' | 'name' | 'label'>): TextField => ({
  type: 'text',
  name: 'keywords',
  label: {
    en: 'Keywords',
    ua: 'Ключові слова',
  },
  ...data,
});
