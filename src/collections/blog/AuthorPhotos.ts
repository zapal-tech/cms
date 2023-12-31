import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { publicUploadCollectionWithoutApiAccess } from 'utils/access';
import { blogGroup } from 'utils/groups';
import { defaultPhotoMimeTypes } from 'utils/mimeTypes';

const AuthorPhotos: CollectionConfig = {
  slug: 'author-photos',
  labels: {
    singular: { en: "Author's photo", ua: 'Фото автора' },
    plural: { en: "Author's photos", ua: 'Фото авторів' },
  },
  upload: {
    resizeOptions: {
      width: 400,
      // Payload bug, does not resize when width and height are specified
      // height: 400,
    },
    mimeTypes: defaultPhotoMimeTypes,
    formatOptions: { format: 'webp', options: { quality: 80 } },
  },
  admin: {
    group: blogGroup,
    description: {
      en: 'All author photos need to be 1:1 aspect ratio',
      ua: 'Всі фото авторів повинні бути у співвідношенні сторін 1:1',
    },
  },
  access: {
    read: publicUploadCollectionWithoutApiAccess,
  },
  fields: [altField()],
};

export default AuthorPhotos;
