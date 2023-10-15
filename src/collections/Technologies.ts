import { CollectionConfig } from 'payload/types';

import { orderField } from 'fields/order';
import { slugField } from 'fields/slug';

import { generalGroup } from 'utils/groups';

import TechnologyLogos from './media/TechnologyLogos';

const Technologies: CollectionConfig = {
  slug: 'technologies',
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 5,
  },
  labels: {
    singular: {
      en: 'Technology',
      ua: 'Технологія',
    },
    plural: {
      en: 'Technologies',
      ua: 'Технології',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['order', 'name'],
    group: generalGroup,
  },
  fields: [
    slugField(),
    orderField(),
    {
      name: 'name',
      label: {
        en: 'Name',
        ua: 'Назва',
      },
      type: 'text',
      required: true,
      localized: true,
      admin: {
        autoComplete: 'off',
      },
    },
    {
      name: 'logo',
      label: {
        en: 'Logo',
        ua: 'Лого',
      },
      type: 'upload',
      required: true,
      relationTo: TechnologyLogos.slug,
    },
    {
      name: 'description',
      label: {
        en: 'Description',
        ua: 'Опис',
      },
      type: 'textarea',
      maxLength: 350,
      required: true,
      localized: true,
    },
  ],
};

export default Technologies;
