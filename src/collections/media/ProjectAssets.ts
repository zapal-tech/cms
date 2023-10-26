import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { publicUploadCollectionWithoutApiAccess } from 'utils/access';
import { projectsGroup } from 'utils/groups';

const ProjectAssets: CollectionConfig = {
  slug: 'project-assets',
  labels: {
    singular: { en: 'Project Asset', ua: 'Файл проєкту' },
    plural: { en: 'Project Assets', ua: 'Файли проєктів' },
  },
  upload: true,
  access: {
    read: publicUploadCollectionWithoutApiAccess,
  },
  admin: {
    group: projectsGroup,
  },
  fields: [altField()],
};

export default ProjectAssets;
