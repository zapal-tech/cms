import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { publicUploadCollectionWithoutApiAccess } from 'utils/access';
import { projectsGroup } from 'utils/groups';
import { defaultPhotoMimeTypes } from 'utils/mimeTypes';

const ProjectAssets: CollectionConfig = {
  slug: 'project-assets',
  labels: {
    singular: { en: 'Project Asset', ua: 'Файл проєкту' },
    plural: { en: 'Project Assets', ua: 'Файли проєктів' },
  },
  upload: {
    formatOptions: { format: 'webp', options: { lossless: true } },
    mimeTypes: [...defaultPhotoMimeTypes, 'video/mp4', 'video/webm', 'application/pdf'],
    imageSizes: [
      {
        name: '700',
        width: 700,
        formatOptions: { format: 'webp', options: { quality: 80 } },
      },
      {
        name: '800',
        width: 1440,
        formatOptions: { format: 'webp', options: { quality: 80 } },
      },
      {
        name: '1200',
        width: 1920,
        formatOptions: { format: 'webp', options: { quality: 80 } },
      },
      {
        name: '1600',
        width: 2560,
        formatOptions: { format: 'webp', options: { quality: 80 } },
      },
    ],
  },
  access: {
    read: () => true,
  },
  admin: {
    group: projectsGroup,
  },
  fields: [altField()],
};

export default ProjectAssets;
