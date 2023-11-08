import { SelectField } from 'payload/types';

import countries from 'assets/countries.json';

const countryOptions = countries.map(({ name, value }) => ({
  label: { en: name.en, ua: name.uk },
  value,
}));

export const countrySelectField = (data?: Omit<SelectField, 'type' | 'options'>): SelectField => ({
  type: 'select',
  name: 'country',
  label: { en: 'Country', ua: 'Країна' },
  options: countryOptions,
  ...data,
});
