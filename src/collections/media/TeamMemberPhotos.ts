import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { mediaGroup } from 'utils/groups';

const TeamMemberPhotos: CollectionConfig = {
  slug: 'team-member-photos',
  labels: {
    singular: { en: "Team member's photo", ua: 'Фото учасника команди' },
    plural: { en: 'Team photos', ua: 'Фото команди' },
  },
  upload: {
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/avif'],
    formatOptions: { format: 'webp', options: { lossless: true } },
    imageSizes: [
      {
        name: '700',
        width: 700,
        // Payload bug, does not resize when width and height are specified
        // height: 875,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
      {
        name: '800',
        width: 800,
        // Payload bug, does not resize when width and height are specified
        // height: 1000,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
      {
        name: '1200',
        width: 1200,
        // Payload bug, does not resize when width and height are specified
        // height: 1500,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
      {
        name: '1600',
        width: 1600,
        // Payload bug, does not resize when width and height are specified
        // height: 2000,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
    ],
  },
  admin: {
    group: mediaGroup,
    description: {
      en: 'All team member photos need to be 4:5 aspect ratio',
      ua: 'Всі фотографії членів команди повинні бути у співвідношенні сторін 4:5',
    },
  },
  fields: [altField()],
};

export default TeamMemberPhotos;
