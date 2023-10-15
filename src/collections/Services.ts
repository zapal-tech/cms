import { CollectionConfig } from 'payload/types';

import { orderField } from 'fields/order';
import { slugField } from 'fields/slug';

import { generalGroup } from 'utils/groups';

import ServiceIcons from './media/ServiceIcons';

const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: {
      en: 'Service',
      ua: 'Послуга',
    },
    plural: {
      en: 'Services',
      ua: 'Послуги',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['order', 'name', 'description'],
    group: generalGroup,
  },
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 5,
  },
  fields: [
    slugField(),
    orderField(),
    {
      name: 'icon',
      label: {
        en: 'Icon',
        ua: 'Іконка',
      },
      type: 'upload',
      required: true,
      relationTo: ServiceIcons.slug,
    },
    {
      type: 'text',
      name: 'name',
      label: {
        en: 'Name',
        ua: 'Назва',
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
      required: true,
      localized: true,
    },
  ],
};

export default Services;
