import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { pagesGroup } from 'utils/groups';

const SupportUkrainePage: GlobalConfig = {
  slug: 'support-ukraine-page',
  label: {
    en: 'Support Ukraine',
    ua: 'Підтримка України',
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

export default SupportUkrainePage;
