import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { generalGroup } from 'utils/groups';

const Common: GlobalConfig = {
  slug: 'common',
  label: {
    en: 'Common (translation)',
    ua: 'Загальне (переклад)',
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

export default Common;
