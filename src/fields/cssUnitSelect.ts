import { SelectField } from 'payload/types';

export const cssUnitSelectField = (data?: Omit<SelectField, 'type' | 'options'>): SelectField => ({
  type: 'select',
  label: {
    en: 'Units',
    uk: 'Одиниці',
  },
  options: [
    {
      label: 'px',
      value: 'px',
    },
    {
      label: 'rem',
      value: 'rem',
    },
    {
      label: '%',
      value: '%',
    },
    {
      label: 'vw',
      value: 'vw',
    },
  ],
  ...data,
});
