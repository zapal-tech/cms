import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { pagesGroup } from 'utils/groups';

const PrivacyPolicyPage: GlobalConfig = {
  slug: 'privacy-policy-page',
  label: {
    en: 'Privacy Policy',
    ua: 'Політика конфіденційності',
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

export default PrivacyPolicyPage;
