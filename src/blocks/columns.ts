import { Block, FilterOptions } from 'payload/types';

import { Media } from './media';
import { RichText } from './rich-text';

export const Columns = ({
  relationTo,
  filterOptions,
}: {
  relationTo: string;
  filterOptions?: FilterOptions;
}): Block => ({
  slug: 'columns',
  fields: [
    {
      type: 'array',
      name: 'columns',
      label: {
        en: 'Columns',
        uk: 'Колонки',
      },
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          type: 'blocks',
          name: 'blocks',
          maxRows: 1,
          minRows: 1,
          blocks: [RichText, Media({ relationTo, filterOptions })],
        },
      ],
      admin: {
        width: '50%',
      },
    },
  ],
});
