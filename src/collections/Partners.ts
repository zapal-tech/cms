import { CollectionConfig } from 'payload/types';

import { orderField } from 'fields/order';
import { slugField } from 'fields/slug';
import { urlField } from 'fields/url';

import { generalGroup } from 'utils/groups';
import { validateUrl } from 'utils/validators';

import PartnerLogos from './media/PartnerLogos';

const Partners: CollectionConfig = {
  slug: 'partners',
  labels: {
    singular: {
      en: 'Partner',
      ua: 'Партнер',
    },
    plural: {
      en: 'Partners',
      ua: 'Партнери',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'order', 'url', 'viewType'],
    group: generalGroup,
  },
  fields: [
    slugField(),
    orderField(),
    {
      type: 'select',
      name: 'viewType',
      label: {
        en: 'View type',
        ua: 'Тип відображення',
      },
      options: [
        {
          value: 'default',
          label: {
            en: 'Default',
            ua: 'Звичайний',
          },
        },
        {
          value: 'big',
          label: {
            en: 'Big',
            ua: 'Великий',
          },
        },
      ],
      required: true,
      admin: {
        position: 'sidebar',
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
      relationTo: PartnerLogos.slug,
    },
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'name',
          label: {
            en: 'Name',
            ua: 'Назва',
          },
          required: true,
        },
        urlField({
          label: {
            en: 'Website URL',
            ua: 'Посилання на сайт',
          },
          required: true,
        }),
      ],
    },
  ],
};

export default Partners;
