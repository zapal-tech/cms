import { CollectionConfig } from 'payload/types';

import { richTextField } from 'fields/richText';
import { slugField } from 'fields/slug';

import { blogGroup } from 'utils/groups';

import Authors from './Authors';
import Tags from './Tags';

const Blog: CollectionConfig = {
  slug: 'blog-posts',
  labels: {
    singular: {
      en: 'Post',
      ua: 'Пост',
    },
    plural: {
      en: 'Post',
      ua: 'Пости',
    },
  },
  admin: {
    useAsTitle: 'content.title',
    group: blogGroup,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          label: {
            en: 'Content',
            ua: 'Контент',
          },
          fields: [
            {
              type: 'text',
              name: 'title',
              label: {
                en: 'Title',
                ua: 'Заголовок',
              },
            },
            {
              name: 'tags',
              label: {
                en: 'Tags',
                ua: 'Теги',
              },
              type: 'relationship',
              relationTo: Tags.slug,
              hasMany: true,
              required: true,
            },
            {
              name: 'author',
              label: {
                en: 'Author',
                ua: 'Автор',
              },
              admin: {
                position: 'sidebar',
              },
              type: 'relationship',
              relationTo: Authors.slug,
              hasMany: false,
              required: true,
            },
            richTextField({ name: 'content' }),
          ],
        },
      ],
    },
    slugField(),
  ],
};

export default Blog;
