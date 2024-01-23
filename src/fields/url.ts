import { TextField } from 'payload/types';

import { validateUrl } from 'utils/validators';

export const urlField = (data?: Omit<TextField, 'type'>): TextField => ({
  type: 'text',
  label: {
    en: 'URL',
    ua: 'Посилання',
  },
  validate: validateUrl,
  required: false,
  ...data,
  admin: {
    placeholder: 'https://...',
    ...data?.admin,
  },
  hasMany: false,
  maxRows: undefined,
  minRows: undefined,
});
