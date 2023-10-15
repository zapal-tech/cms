import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { checkImageAspectRatio } from 'hooks/checkImageAspectRatio';

import { mediaGroup } from 'utils/groups';

const AuthorPhotos: CollectionConfig = {
  slug: 'author-photos',
  labels: {
    singular: { en: "Author's photo", ua: 'Фото автора' },
    plural: { en: "Author's photos", ua: 'Фото авторів' },
  },
  upload: {
    resizeOptions: {
      fastShrinkOnLoad: false,
      width: 400,
      height: 400,
    },
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/avif'],
    formatOptions: { format: 'webp', options: { smartSubsample: true, quality: 70 } },
  },
  admin: {
    group: mediaGroup,
    description: {
      en: 'ONLY 1:1 aspect ratio images are allowed, error will be thrown otherwise',
      ua: 'Дозволені тільки зображення зі співвідношенням сторін 1:1, інакше буде відображено повідомлення про помилку',
    },
  },
  hooks: {
    beforeValidate: [checkImageAspectRatio(1, 1)],
  },
  fields: [altField()],
};

export default AuthorPhotos;
