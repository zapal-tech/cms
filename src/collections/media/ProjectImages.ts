import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { checkImageAspectRatio } from 'hooks/checkImageAspectRatio';

import { mediaGroup } from 'utils/groups';

const ProjectImages: CollectionConfig = {
  slug: 'project-images',
  labels: {
    singular: { en: "Project's image", ua: 'Зображення проєкту' },
    plural: { en: "Projects' images", ua: 'Зображення проєктів' },
  },
  upload: {
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/avif'],
    formatOptions: { format: 'webp', options: { smartSubsample: true, quality: 85 } },
    imageSizes: [
      {
        name: '700',
        width: 700,
        height: 560,
      },
      {
        name: '800',
        width: 800,
        height: 640,
      },
      {
        name: '1200',
        width: 1200,
        height: 960,
      },
      {
        name: '1600',
        width: 1600,
        height: 1280,
      },
    ],
  },
  hooks: {
    beforeValidate: [checkImageAspectRatio(5, 4)],
  },
  admin: {
    group: mediaGroup,
    description: {
      en: 'ONLY 5:4 aspect ratio images are allowed, error will be thrown otherwise',
      ua: 'Дозволені тільки зображення зі співвідношенням сторін 5:4, інакше буде відображено повідомлення про помилку',
    },
  },
  fields: [altField()],
};

export default ProjectImages;
