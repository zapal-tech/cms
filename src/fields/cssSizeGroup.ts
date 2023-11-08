import { GroupField, SelectField } from 'payload/types';

import { cssUnitSelectField } from './cssUnitSelect';

export const cssSizeGroupField = (data?: Omit<GroupField, 'type' | 'fields'>): GroupField => ({
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'number',
          name: 'value',
          label: {
            en: 'Value',
            uk: 'Значення',
          },
          required: false,
          admin: { width: '50%' },
        },
        cssUnitSelectField({
          name: 'unit',
          defaultValue: undefined,
          required: false,
          admin: { width: '50%', isClearable: true },
        }),
      ],
    },
  ],
  ...data,
});
