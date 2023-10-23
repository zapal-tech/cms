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
    formatOptions: { format: 'webp', options: { smartSubsample: true, quality: 85 } },
    imageSizes: [
      {
        name: '700',
        width: 700,
        height: 875,
      },
      {
        name: '800',
        width: 800,
        height: 1000,
      },
      {
        name: '1200',
        width: 1200,
        height: 1500,
      },
      {
        name: '1600',
        width: 1600,
        height: 2000,
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
