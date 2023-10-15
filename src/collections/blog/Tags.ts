import { CollectionConfig } from 'payload/types';

import { slugField } from 'fields/slug';

import { blogGroup } from 'utils/groups';

const Tags: CollectionConfig = {
  slug: 'blog-tags',
  labels: {
    singular: {
      en: 'Tag',
      ua: 'Тег',
    },
    plural: {
      en: 'Tags',
      ua: 'Теги',
    },
  },
  admin: {
    useAsTitle: 'name',
    group: blogGroup,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          label: {
            en: 'Name',
            ua: 'Назва',
          },
          type: 'text',
          required: true,
          localized: true,
        },
        slugField({ admin: { position: undefined } }),
      ],
    },
  ],
};

export default Tags;
