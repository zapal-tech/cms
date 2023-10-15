import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { generalGroup } from 'utils/groups';

const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: {
    en: 'Navigation',
    ua: 'Навігація',
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

export default Navigation;
