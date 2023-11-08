import { SelectField } from 'payload/types';

import timezones from 'assets/timezones.json';

const timezoneOptions = timezones.map(({ name, tzCode }) => ({
  label: { en: name.en, ua: name.uk },
  value: tzCode,
}));

export const timezoneSelectField = (data?: Omit<SelectField, 'type' | 'name' | 'options'>): SelectField => ({
  type: 'select',
  name: 'timeZone',
  label: { en: 'Timezone', ua: 'Часовий пояс' },
  options: timezoneOptions,
  ...data,
});
