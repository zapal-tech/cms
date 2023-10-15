import { TextField } from 'payload/types';

export const altField = (data?: Omit<TextField, 'type' | 'name' | 'label'>): TextField => ({
  type: 'text',
  name: 'alt',
  label: {
    en: 'Alt Text',
    ua: 'Альтернативний текст',
  },
  ...data,
});
