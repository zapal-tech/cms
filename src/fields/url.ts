import { TextField } from 'payload/types';

import { validateUrl } from 'utils/validators';

export const urlField = (data?: Partial<Omit<TextField, 'type'>>): TextField => ({
  type: 'text',
  name: 'url',
  label: {
    en: 'URL',
    ua: 'Посилання',
  },
  validate: validateUrl,
  required: false,
  ...data,
});
