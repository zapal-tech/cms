import { CollectionConfig } from 'payload/types';

import { orderField } from 'fields/order';
import { slugField } from 'fields/slug';

import { generalGroup } from 'utils/groups';
import { validateUrl } from 'utils/validators';

import TeamMemberPhotos from './media/TeamMemberPhotos';

const Team: CollectionConfig = {
  slug: 'team',
  labels: {
    singular: {
      en: 'Team Member',
      ua: 'Учасник команди',
    },
    plural: {
      en: 'Team Members',
      ua: 'Учасники команди',
    },
  },
  admin: {
    useAsTitle: 'firstName',
    defaultColumns: ['order', 'firstName', 'lastName', 'title', 'about'],
    group: generalGroup,
  },
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 10,
  },
  fields: [
    slugField(),
    orderField(),
    {
      name: 'photo',
      label: {
        en: 'Photo',
        ua: 'Фото',
      },
      type: 'upload',
      relationTo: TeamMemberPhotos.slug,
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          label: {
            en: 'First Name',
            ua: "Ім'я",
          },
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'lastName',
          label: {
            en: 'Last Name',
            ua: 'Прізвище',
          },
          type: 'text',
          localized: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: {
            en: 'Title',
            ua: 'Посада',
          },
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'fullTitle',
          label: {
            en: 'Full Title',
            ua: 'Повна посада',
          },
          type: 'text',
          required: true,
          localized: true,
        },
      ],
    },
    {
      name: 'about',
      label: {
        en: 'About',
        ua: 'Про себе',
      },
      type: 'textarea',
      localized: true,
      maxLength: 800,
    },
    {
      name: 'links',
      label: {
        en: 'Links',
        ua: 'Посилання',
      },
      labels: {
        singular: {
          en: 'Link',
          ua: 'Посилання',
        },
        plural: {
          en: 'Links',
          ua: 'Посилання',
        },
      },
      type: 'array',
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: ({ data }) => data?.name,
        },
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
            },
            {
              name: 'url',
              label: {
                en: 'URL',
                ua: 'Посилання',
              },
              type: 'text',
              validate: validateUrl,
              required: true,
            },
          ],
        },
      ],
      localized: true,
    },
  ],
};

export default Team;
