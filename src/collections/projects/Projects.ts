import payload from 'payload';
import { CollectionConfig } from 'payload/types';

import { defaultLocale } from 'i18n';

import { CircleElement } from 'blocks/circleElement';
import { Columns } from 'blocks/columns';
import { RichText } from 'blocks/rich-text';
import { Slider } from 'blocks/slider';

import { countrySelectField } from 'fields/countrySelect';
import { orderField } from 'fields/order';
import { slugField } from 'fields/slug';
import { urlField } from 'fields/url';
import { yearField } from 'fields/year';

import { projectsGroup } from 'utils/groups';
import { revalidateUrl } from 'utils/revalidateUrl';

import ProjectAssets from './ProjectAssets';
import ProjectImages from './ProjectImages';

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
    defaultColumns: ['slug', 'order', 'status', 'createdAt', 'updatedAt'],
    group: projectsGroup,
  },
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation === 'update' && doc._status === 'published') {
          await revalidateUrl(`/${req.locale}/projects/${doc.slug}`);
          await revalidateUrl(`/${req.locale}/projects`);
          await revalidateUrl(`/${req.locale}`);

          if (req.locale === defaultLocale) {
            await revalidateUrl(`/projects/${doc.slug}`);
            await revalidateUrl(`/projects`);
            await revalidateUrl('/');
          }
        }

        return doc;
      },
    ],
  },
  access: {
    read: ({ req }): boolean => true,
  },
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 10,
  },
  endpoints: [
    {
      path: '/slug/:slug',
      method: 'get',
      handler: async (req, res) => {
        const data = await payload.find({
          collection: 'projects',
          locale: req.locale,
          fallbackLocale: 'en',
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
              type: 'textarea',
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
              relationTo: ProjectAssets.slug,
              required: true,
            },
            {
              type: 'group',
              name: 'details',
              label: {
                en: 'Project details',
                uk: 'Деталі проєкту',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    countrySelectField({
                      name: 'country',
                      label: {
                        en: 'Country',
                        uk: 'Країна',
                      },
                      required: true,
                      admin: {
                        width: '50%',
                      },
                    }),
                    urlField({
                      name: 'url',
                      label: {
                        en: 'Website URL',
                        uk: 'Посилання на сайт',
                      },
                      required: true,
                      admin: {
                        width: '50%',
                      },
                    }),
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    yearField({
                      name: 'startYear',
                      label: {
                        en: 'Start year',
                        uk: 'Рік початку співпраці',
                      },
                      required: true,
                      admin: {
                        placeholder: '1970',
                      },
                    }),
                    yearField({
                      name: 'endYear',
                      label: {
                        en: 'End year',
                        uk: 'Рік закінчення співпраці',
                      },
                      required: false,
                      admin: {
                        placeholder: 'Year or empty. Empty means "present"',
                      },
                    }),
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'text',
                      name: 'industry',
                      label: {
                        en: 'Industry',
                        uk: 'Індустрія',
                      },
                      localized: true,
                      required: true,
                    },
                    {
                      type: 'text',
                      name: 'projectType',
                      label: {
                        en: 'Project type',
                        uk: 'Тип проєкту',
                      },
                      localized: true,
                      required: true,
                    },
                  ],
                },
                {
                  type: 'text',
                  name: 'services',
                  label: {
                    en: 'Services provided',
                    uk: 'Надані послуги',
                  },
                  localized: true,
                  required: true,
                },
                {
                  type: 'text',
                  name: 'technologies',
                  label: {
                    en: 'Tech. stack',
                    uk: 'Технологічний стек',
                  },
                  required: true,
                  admin: {
                    placeholder: 'Next.js, Node.js, WebSockets, etc.',
                  },
                },
              ],
            },
            {
              type: 'blocks',
              name: 'layout',
              label: {
                en: 'Layout',
                ua: 'Розмітка',
              },
              required: true,
              admin: {
                initCollapsed: true,
              },
              blocks: [Slider, RichText, CircleElement, Columns({ relationTo: ProjectAssets.slug })],
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
