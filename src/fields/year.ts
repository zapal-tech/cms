import { NumberField } from 'payload/types';

import { validateInteger } from 'utils/validators';

export const yearField = (data: Omit<NumberField, 'type' | 'validate' | 'hasMany'>): NumberField => ({
  type: 'number',
  label: {
    en: 'Year',
    ua: 'Рік',
  },
  min: 1970,
  hasMany: undefined,
  maxRows: undefined,
  minRows: undefined,
  unique: false,
  index: false,
  validate: validateInteger,
  ...data,
  admin: {
    step: 1,
    ...data?.admin,
  },
});
