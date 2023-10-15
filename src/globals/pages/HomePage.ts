import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { pagesGroup } from 'utils/groups';

const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: {
    en: 'Home',
    ua: 'Головна',
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

export default HomePage;
