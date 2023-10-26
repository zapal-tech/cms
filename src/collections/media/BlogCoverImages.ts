import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { publicUploadCollectionWithoutApiAccess } from 'utils/access';
import { blogGroup } from 'utils/groups';
import { defaultPhotoMimeTypes } from 'utils/mimeTypes';

const BlogCoverImages: CollectionConfig = {
  slug: 'blog-cover-images',
  labels: {
    singular: { en: 'Blog cover image', ua: 'Мета фото (блог)' },
    plural: { en: 'Blog cover images', ua: 'Мета фото (блог)' },
  },
  upload: {
    formatOptions: { format: 'webp', options: { lossless: true } },
    mimeTypes: defaultPhotoMimeTypes,
    imageSizes: [
      {
        name: '700',
        width: 700,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
      {
        name: '800',
        width: 800,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
      {
        name: '1200',
        width: 1200,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
      {
        name: '1600',
        width: 1600,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
    ],
  },
  access: {
    read: publicUploadCollectionWithoutApiAccess,
  },
  admin: {
    group: blogGroup,
  },
  fields: [altField()],
};

export default BlogCoverImages;
