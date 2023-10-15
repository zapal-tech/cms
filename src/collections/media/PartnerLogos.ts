import { CollectionConfig } from 'payload/types';

import { altField } from 'fields/alt';

import { mediaGroup } from 'utils/groups';

const PartnerLogos: CollectionConfig = {
  slug: 'partner-logos',
  labels: {
    singular: { en: 'Partner Logo', ua: 'Логотип партнера' },
    plural: { en: 'Partner Logos', ua: 'Логотипи партнерів' },
  },
  upload: {
    mimeTypes: ['image/webp', 'image/jpeg', 'image/png', 'image/svg+xml'],
  },
  admin: {
    group: mediaGroup,
  },
  fields: [altField()],
};

export default PartnerLogos;
