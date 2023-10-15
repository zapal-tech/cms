import { NumberField } from 'payload/types';

import { validateInteger } from 'utils/validators';

export const orderField = (
  data?: Omit<NumberField, 'type' | 'name' | 'required' | 'unique' | 'min' | 'label' | 'validate' | 'access'>,
): NumberField => ({
  name: 'order',
  label: {
    en: 'Order',
    ua: 'Порядок',
  },
  type: 'number',
  required: true,
  unique: true,
  index: true,
  min: 1,
  validate: validateInteger,
  admin: {
    position: 'sidebar',
    step: 1,
    autoComplete: 'off',
    ...data?.admin,
  },
});
