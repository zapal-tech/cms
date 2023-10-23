import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { mediaGroup } from 'utils/groups';

const AuthorPhotos: CollectionConfig = {
  slug: 'author-photos',
  labels: {
    singular: { en: "Author's photo", ua: 'Фото автора' },
    plural: { en: "Author's photos", ua: 'Фото авторів' },
  },
  upload: {
    resizeOptions: {
      width: 400,
      height: 400,
    },
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/avif'],
    formatOptions: { format: 'webp', options: { smartSubsample: true, quality: 85 } },
  },
  admin: {
    group: mediaGroup,
    description: {
      en: 'All author photos need to be 1:1 aspect ratio',
      ua: 'Всі фото авторів повинні бути у співвідношенні сторін 1:1',
    },
  },
  fields: [altField()],
};

export default AuthorPhotos;
