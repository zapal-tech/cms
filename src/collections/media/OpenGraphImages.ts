import { CollectionConfig } from 'payload/types';

import { publicUploadCollectionWithoutApiAccess } from 'utils/access';
import { mediaGroup } from 'utils/groups';

const OpenGraphImages: CollectionConfig = {
  slug: 'open-graph-images',
  labels: {
    singular: { en: 'Open Graph image', ua: 'Open Graph зображення' },
    plural: { en: 'Open Graph images', ua: 'Open Graph зображення' },
  },
  upload: {
    resizeOptions: {
      width: 1200,
    },
    formatOptions: { format: 'webp', options: { quality: 80 } },
    mimeTypes: ['image/webp', 'image/jpeg', 'image/png', 'image/svg+xml'],
  },
  access: {
    read: publicUploadCollectionWithoutApiAccess,
  },
  admin: {
    description: {
      en: '1200x630 preview image for the link',
      ua: '1200x630 зображення попереднього перегляду посилання',
    },
    group: mediaGroup,
  },
  fields: [],
};

export default OpenGraphImages;
