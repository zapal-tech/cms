import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { generalGroup } from 'utils/groups';

const Footer: GlobalConfig = {
  slug: 'footer',
  label: {
    en: 'Footer',
    ua: 'Футер',
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

export default Footer;
