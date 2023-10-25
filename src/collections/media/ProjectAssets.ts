import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { publicUploadCollectionWithoutApiAccess } from 'utils/access';
import { mediaGroup } from 'utils/groups';

const ProjectAssets: CollectionConfig = {
  slug: 'project-assets',
  labels: {
    singular: { en: 'Project Asset', ua: 'Дані проєкту' },
    plural: { en: 'Project Assets', ua: 'Дані проєкту' },
  },
  upload: {
    mimeTypes: ['image/webp', 'image/jpeg', 'image/png', 'image/svg+xml'],
  },
  access: {
    read: publicUploadCollectionWithoutApiAccess,
  },
  admin: {
    group: mediaGroup,
  },
  fields: [altField()],
};

export default ProjectAssets;
