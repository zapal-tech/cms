import { TextField } from 'payload/types';

export const phoneField = (options?: Omit<TextField, 'type'>): TextField => ({
  type: 'text',
  name: 'phone',
  label: { en: 'Phone', ua: 'Телефон' },
  ...options,
});
