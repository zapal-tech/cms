import { Block } from 'payload/types';

import { richTextField } from 'fields/richText';

export const RichText: Block = {
  slug: 'rich-text',
  labels: {
    singular: {
      en: 'Rich Text',
      uk: 'Текст',
    },
    plural: {
      en: 'Rich Texts',
      uk: 'Тексти',
    },
  },
  fields: [
    richTextField({
      name: 'content',
      label: {
        en: 'Rich text content',
        uk: 'Текстовий контент',
      },
      required: true,
      localized: true,
    }),
  ],
};
