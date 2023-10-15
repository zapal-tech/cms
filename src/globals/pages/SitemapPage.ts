import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { pagesGroup } from 'utils/groups';

const SitemapPage: GlobalConfig = {
  slug: 'sitemap-page',
  label: {
    en: 'Sitemap',
    ua: 'Карта сайту',
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

export default SitemapPage;
