import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { mediaGroup } from 'utils/groups';

const BlogMetaImages: CollectionConfig = {
  slug: 'blog-meta-images',
  labels: {
    singular: { en: 'Blog meta image', ua: 'Мета фото (блог)' },
    plural: { en: 'Blog meta images', ua: 'Мета фото (блог)' },
  },
  upload: {
    resizeOptions: {
      width: 1200,
      height: 630,
    },
    formatOptions: { format: 'webp', options: { smartSubsample: true, quality: 85 } },
    mimeTypes: ['image/webp', 'image/jpeg', 'image/png'],
  },
  admin: {
    group: mediaGroup,
  },
  fields: [],
};

export default BlogMetaImages;
