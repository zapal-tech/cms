import { Block } from 'payload/types';

import { breakpointsTabs } from 'fields/breakpointsTabs';
import { cssSizeGroupField } from 'fields/cssSizeGroup';

export const CircleElement: Block = {
  slug: 'circle-element',
  labels: {
    singular: {
      en: 'Circle Element',
      uk: 'Елемент "Коло"',
    },
    plural: {
      en: 'Circle Elements',
      uk: 'Елементи "Коло"',
    },
  },
  fields: [
    {
      type: 'text',
      name: 'color',
      label: {
        en: 'Color',
        uk: 'Колір',
      },
      required: true,
    },
    breakpointsTabs([
      {
        type: 'checkbox',
        name: 'show',
        label: {
          en: 'Show',
          uk: 'Показати',
        },
        defaultValue: true,
        required: true,
      },
      cssSizeGroupField({
        name: 'x',
        label: {
          en: 'Position X',
          uk: 'Позиція X',
        },
      }),
      cssSizeGroupField({
        name: 'y',
        label: {
          en: 'Position Y',
          uk: 'Позиція Y',
        },
      }),
      cssSizeGroupField({
        name: 'blur',
        label: {
          en: 'Blur',
          uk: 'Розмиття',
        },
      }),
      cssSizeGroupField({
        name: 'diameter',
        label: {
          en: 'Diameter',
          uk: 'Діаметр',
        },
      }),
    ]),
  ],
};
