import { CollectionConfig } from 'payload/types';

import { orderField } from 'fields/order';
import { slugField } from 'fields/slug';

import { generalGroup } from 'utils/groups';

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
    defaultColumns: ['order', 'preview.name'],
    group: generalGroup,
  },
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 5,
  },
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
