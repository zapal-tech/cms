import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { publicUploadCollectionWithoutApiAccess } from 'utils/access';
import { mediaGroup } from 'utils/groups';

const ServiceIcons: CollectionConfig = {
  slug: 'service-icons',
  labels: {
    singular: { en: 'Service icon', ua: 'Іконка послуги' },
    plural: { en: 'Service icons', ua: 'Іконки послуг' },
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

export default ServiceIcons;
