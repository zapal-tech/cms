import { GlobalConfig } from 'payload/types';

import { phoneField } from 'payload-plugin-phone-field';

import { generalGroup } from 'utils/groups';

const GeneralInfo: GlobalConfig = {
  slug: 'general',
  label: {
    en: 'General Info',
    ua: 'Загальна інформація',
  },
  admin: {
    group: generalGroup,
  },
  versions: {
    drafts: {
      autosave: true,
    },
    max: 5,
  },
  fields: [
    phoneField({
      name: 'phone',
      label: {
        en: 'Phone',
        ua: 'Телефон',
      },
      required: true,
    }),
    {
      name: 'email',
      label: {
        en: 'Email',
        ua: 'Електронна пошта',
      },
      type: 'email',
      required: true,
    },
  ],
};

export default GeneralInfo;
