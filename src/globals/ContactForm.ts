import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { generalGroup } from 'utils/groups';

const ContactForm: GlobalConfig = {
  slug: 'contact-form',
  label: {
    en: 'Contact form (localization)',
    ua: 'Форма контактів (локалізація)',
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
  fields: [translationField()],
};

export default ContactForm;
