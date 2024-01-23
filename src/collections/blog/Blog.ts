import payload from 'payload';
import { CollectionConfig } from 'payload/types';

import { defaultLocale } from 'i18n';

import BlogCoverImages from 'collections/blog/BlogCoverImages';

import { richTextField } from 'fields/richText';
import { slugField } from 'fields/slug';

import { blogGroup } from 'utils/groups';
import { revalidateUrl } from 'utils/revalidateUrl';

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
      en: 'Blog',
      ua: 'Блог',
    },
  },
  admin: {
    useAsTitle: 'content.title',
    group: blogGroup,
    defaultColumns: ['slug', 'order', 'status', 'createdAt', 'updatedAt'],
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'update' && doc._status === 'published') {
          await revalidateUrl(`/blog/${doc.slug}`);
          await revalidateUrl(`/blog`);
          await revalidateUrl('/');
        }

        return doc;
      },
    ],
  },
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 10,
  },
  access: {
    read: () => true,
  },
  endpoints: [
    {
      path: '/slug/:slug',
      method: 'get',
      handler: async (req, res) => {
        const data = await payload.find({
          collection: 'blog-posts',
          locale: req.locale,
          fallbackLocale: 'en',
          where: { slug: { equals: req.params.slug } },
          limit: 1,
        });

        if (data.docs.length) return res.status(200).send(data.docs[0]);

        res.status(404).send({ error: 'Not found' });
      },
    },
  ],
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
              required: true,
              localized: true,
            },
            {
              type: 'textarea',
              name: 'description',
              label: {
                en: 'Description',
                ua: 'Опис',
              },
              localized: true,
            },
            {
              type: 'row',
              fields: [
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
                  localized: true,
                },
                {
                  name: 'author',
                  label: {
                    en: 'Author',
                    ua: 'Автор',
                  },
                  type: 'relationship',
                  relationTo: Authors.slug,
                  hasMany: false,
                  required: true,
                  localized: true,
                },
              ],
            },
            {
              type: 'upload',
              name: 'cover',
              relationTo: BlogCoverImages.slug,
              label: {
                en: 'Cover',
                ua: 'Обкладинка',
              },
              localized: true,
            },
            richTextField({ name: 'content', localized: true }),
          ],
        },
      ],
    },
    slugField(),
  ],
};

export default Blog;
