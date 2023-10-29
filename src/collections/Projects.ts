import payload from 'payload';
import { CollectionConfig } from 'payload/types';

import { orderField } from 'fields/order';
import { slugField } from 'fields/slug';

import { projectsGroup } from 'utils/groups';

import ProjectImages from './media/ProjectImages';

const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: {
      en: 'Project',
      ua: 'Проєкт',
    },
    plural: {
      en: 'Projects',
      ua: 'Проєкти',
    },
  },
  admin: {
    useAsTitle: 'preview.name',
    defaultColumns: ['slug', 'order'],
    group: projectsGroup,
  },
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 5,
  },
  endpoints: [
    {
      path: '/slug/:slug',
      method: 'get',
      handler: async (req, res) => {
        const data = await payload.find({
          collection: 'projects',
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
          name: 'preview',
          label: {
            en: 'Project Preview Card',
            ua: 'Картка проєкту',
          },
          fields: [
            {
              type: 'text',
              name: 'name',
              label: {
                en: 'Name',
                ua: 'Назва',
              },
              localized: true,
              required: true,
            },
            {
              type: 'text',
              name: 'description',
              label: {
                en: 'Description',
                ua: 'Опис',
              },
              localized: true,
              required: true,
            },
            {
              type: 'upload',
              name: 'image',
              label: {
                en: 'Image',
                ua: 'Зображення',
              },
              relationTo: ProjectImages.slug,
              required: true,
            },
          ],
        },
        {
          name: 'content',
          label: {
            en: 'Content',
            ua: 'Контент',
          },
          fields: [
            {
              type: 'text',
              name: 'name',
              label: {
                en: 'Name',
                ua: 'Назва',
              },
              localized: true,
              required: true,
            },
            {
              type: 'text',
              name: 'description',
              label: {
                en: 'Description',
                ua: 'Опис',
              },
              localized: true,
              required: true,
            },
          ],
        },
      ],
    },
    slugField(),
    orderField(),
  ],
};

export default Projects;
