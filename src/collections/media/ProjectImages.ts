import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { mediaGroup } from 'utils/groups';

const ProjectImages: CollectionConfig = {
  slug: 'project-images',
  labels: {
    singular: { en: "Project's image", ua: 'Зображення проєкту' },
    plural: { en: "Projects' images", ua: 'Зображення проєктів' },
  },
  upload: {
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/avif'],
    formatOptions: { format: 'webp', options: { lossless: true } },
    imageSizes: [
      {
        name: '700',
        width: 700,
        // Payload bug, does not resize when width and height are specified
        // height: 560,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
      {
        name: '800',
        width: 800,
        // Payload bug, does not resize when width and height are specified
        // height: 640,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
      {
        name: '1200',
        width: 1200,
        // Payload bug, does not resize when width and height are specified
        // height: 960,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
      {
        name: '1600',
        width: 1600,
        // Payload bug, does not resize when width and height are specified
        // height: 1280,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
    ],
  },
  admin: {
    group: mediaGroup,
    description: {
      en: 'All project images need to be 5:4 aspect ratio',
      ua: 'Всі зображення повинні бути у співвідношенні сторін 5:4',
    },
  },
  fields: [altField()],
};

export default ProjectImages;
