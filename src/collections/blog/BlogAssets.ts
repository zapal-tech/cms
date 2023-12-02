import { CollectionConfig } from 'payload/types';

import { blogGroup } from 'utils/groups';

const BlogAssets: CollectionConfig = {
  slug: 'blog-assets',
  labels: {
    singular: { en: 'Blog asset', ua: 'Файл блогу' },
    plural: { en: 'Blog assets', ua: 'Файли блогу' },
  },
  upload: true,
  access: {
    read: () => true,
  },
  admin: {
    group: blogGroup,
  },
  fields: [],
};

export default BlogAssets;
