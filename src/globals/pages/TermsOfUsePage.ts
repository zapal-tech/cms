import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { pagesGroup } from 'utils/groups';

const TermsOfUsePage: GlobalConfig = {
  slug: 'terms-of-use-page',
  label: {
    en: 'Terms of Use',
    ua: 'Політика користування сайтом',
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

export default TermsOfUsePage;
