import { Block, FilterOptions } from 'payload/types';

export const Media = ({ relationTo, filterOptions }: { relationTo: string; filterOptions?: FilterOptions }): Block => ({
  slug: 'media',
  labels: {
    plural: { en: 'Media', uk: 'Медіа' },
    singular: { en: 'Media', uk: 'Медіа' },
  },
  fields: [
    {
      type: 'upload',
      name: 'media',
      label: { en: 'Media', uk: 'Медіа' },
      relationTo,
      filterOptions,
      required: true,
    },
  ],
});
