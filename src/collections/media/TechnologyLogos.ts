import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { publicUploadCollectionWithoutApiAccess } from 'utils/access';
import { mediaGroup } from 'utils/groups';

const TechnologyLogos: CollectionConfig = {
  slug: 'technology-logos',
  labels: {
    singular: { en: 'Technology Logo', ua: 'Логотип технології' },
    plural: { en: 'Technology Logos', ua: 'Логотипи технологій' },
  },
  upload: {
    mimeTypes: ['image/svg+xml'],
  },
  access: {
    read: publicUploadCollectionWithoutApiAccess,
  },
  admin: {
    group: mediaGroup,
  },
  fields: [altField()],
};

export default TechnologyLogos;
