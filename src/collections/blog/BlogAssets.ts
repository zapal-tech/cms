import { CollectionConfig } from 'payload/types';

import { publicUploadCollectionWithoutApiAccess } from 'utils/access';
import { blogGroup } from 'utils/groups';

const BlogAssets: CollectionConfig = {
  slug: 'blog-assets',
  labels: {
    singular: { en: 'Blog asset', ua: 'Файл блогу' },
    plural: { en: 'Blog assets', ua: 'Файли блогу' },
  },
  upload: true,
  access: {
    read: publicUploadCollectionWithoutApiAccess,
  },
  admin: {
    group: blogGroup,
  },
  fields: [],
};

export default BlogAssets;
