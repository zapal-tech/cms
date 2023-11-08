import { Block } from 'payload/types';

import ProjectAssets from 'collections/projects/ProjectAssets';

export const Slider: Block = {
  slug: 'slider',
  labels: {
    singular: {
      en: 'Slider',
      uk: 'Слайдер',
    },
    plural: {
      en: 'Sliders',
      uk: 'Слайдери',
    },
  },
  fields: [
    {
      type: 'group',
      name: 'options',
      label: {
        en: 'Options',
        uk: 'Опції',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'checkbox',
              name: 'autoplay',
              label: {
                en: 'Autoplay',
                uk: 'Авто програвання',
              },
              defaultValue: false,
            },
            {
              type: 'checkbox',
              name: 'loop',
              label: {
                en: 'Loop',
                uk: 'Зациклити',
              },
              defaultValue: true,
            },
            {
              type: 'select',
              name: 'animation',
              label: {
                en: 'Animation',
                uk: 'Анімація',
              },
              defaultValue: 'slide',
              options: [
                {
                  value: 'slide',
                  label: {
                    en: 'Slide',
                    uk: 'Слайд',
                  },
                },
                {
                  value: 'fade',
                  label: {
                    en: 'Fade',
                    uk: 'Фейд',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'slides',
      labels: {
        singular: {
          en: 'Slide',
          uk: 'Слайд',
        },
        plural: {
          en: 'Slides',
          uk: 'Слайди',
        },
      },
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Slide Image',
          type: 'upload',
          filterOptions: {
            mimeType: { contains: 'image' },
          },
          relationTo: ProjectAssets.slug,
          required: false,
        },
      ],
    },
  ],
};
