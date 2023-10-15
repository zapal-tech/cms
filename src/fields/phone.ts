import { TextField } from 'payload/types';

import { phoneField as pluginPhoneField } from 'payload-plugin-phone-field';

export const phoneField = (options?: Omit<TextField, 'type'>, phoneOptions?: any) =>
  pluginPhoneField(
    { name: 'phone', label: { en: 'Phone', ua: 'Телефон' }, ...options },
    { smartCaret: true, withCountryCallingCode: true, international: true, countrySelectComponent: () => null },
  );
