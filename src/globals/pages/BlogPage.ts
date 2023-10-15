import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { pagesGroup } from 'utils/groups';

const BlogPage: GlobalConfig = {
  slug: 'blog-page',
  label: {
    en: 'Blog',
    ua: 'Блог',
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

export default BlogPage;
