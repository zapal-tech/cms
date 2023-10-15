import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { generalGroup } from 'utils/groups';

const Languages: GlobalConfig = {
  slug: 'languages',
  label: {
    en: 'Languages',
    ua: 'Мови',
  },
  admin: {
    group: generalGroup,
  },
  fields: [translationField()],
};

export default Languages;
