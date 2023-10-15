import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

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
  admin: {
    group: mediaGroup,
  },
  fields: [altField()],
};

export default ServiceIcons;
