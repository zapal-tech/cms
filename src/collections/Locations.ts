import { CollectionConfig } from 'payload/types';

import { orderField } from 'fields/order';
import { phoneField } from 'fields/phone';
import { slugField } from 'fields/slug';
import { timezoneSelectField } from 'fields/timezoneSelect';

import { generalGroup } from 'utils/groups';
import { validateUrl } from 'utils/validators';

const Locations: CollectionConfig = {
  slug: 'locations',
  labels: {
    singular: {
      en: 'Location',
      ua: 'Локація',
    },
    plural: {
      en: 'Locations',
      ua: 'Локації',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['order', 'name', 'address', 'fullName'],
    group: generalGroup,
  },
  fields: [
    slugField(),
    orderField(),
    timezoneSelectField({ required: true, admin: { position: 'sidebar' } }),
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
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'address',
          label: {
            en: 'Address label',
            ua: 'Адреса',
          },
          localized: true,
          required: true,
        },
        {
          type: 'text',
          name: 'url',
          label: {
            en: 'Google Maps URL',
            ua: 'Посилання на Google Maps',
          },
          validate: validateUrl,
          required: true,
        },
      ],
    },
    {
      type: 'point',
      name: 'coordinates',
      label: {
        en: 'Coordinates',
        ua: 'Координати',
      },
      required: true,
    },
    {
      type: 'collapsible',
      label: {
        en: 'Contact',
        ua: 'Контактні дані',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'fullName',
              label: {
                en: 'Full name',
                ua: "Ім'я та прізвище",
              },
              localized: true,
              required: true,
            },
            {
              type: 'text',
              name: 'title',
              label: {
                en: 'Title',
                ua: 'Посада',
              },
              localized: true,
              required: true,
            },
          ],
        },
        {
          type: 'row',
          fields: [
            phoneField(),
            {
              type: 'email',
              name: 'email',
              label: {
                en: 'Email',
                ua: 'Електронна пошта',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default Locations;
