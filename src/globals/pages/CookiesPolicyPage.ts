import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { pagesGroup } from 'utils/groups';

const CookiesPolicyPage: GlobalConfig = {
  slug: 'cookies-policy-page',
  label: {
    en: 'Cookies Policy',
    ua: 'Політика щодо файлів cookie',
  },
  admin: {
    group: pagesGroup,
  },
  versions: {
    drafts: {
      autosave: true,
    },
    max: 5,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [translationField()],
        },
      ],
    },
  ],
};

export default CookiesPolicyPage;
