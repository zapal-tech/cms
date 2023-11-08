import { GlobalConfig } from 'payload/types';

import Team from 'collections/Team';

import { urlField } from 'fields/url';

import { projectsGroup } from 'utils/groups';

const ProjectFooter: GlobalConfig = {
  slug: 'project-footer',
  label: {
    en: 'Project Footer',
    ua: 'Футер проєкту',
  },
  admin: {
    group: projectsGroup,
  },
  versions: {
    drafts: {
      autosave: true,
    },
    max: 5,
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: {
        en: 'Title (Call to action)',
        uk: 'Заголовок (Заклик до дії)',
      },
      required: true,
      localized: true,
    },
    {
      type: 'textarea',
      name: 'description',
      label: {
        en: "Description (contact person's message)",
        uk: 'Опис (повідомлення контактної особи)',
      },
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'contactFormButton',
      label: {
        en: 'Contact form button',
        uk: 'Кнопка контактної форми',
      },
      required: true,
      localized: true,
    },
    {
      type: 'group',
      name: 'link',
      label: {
        en: 'Schedule a meeting button',
        uk: 'Кнопка запису на зустріч',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'label',
              label: {
                en: 'Link label',
                uk: 'Надпис посилання',
              },
              required: true,
              localized: true,
            },
            urlField({
              name: 'url',
              label: {
                en: 'Schedule a meeting URL',
                uk: 'Посилання на сторінку планування зустрічі',
              },
              required: true,
              localized: true,
            }),
          ],
        },
      ],
    },
    {
      type: 'relationship',
      name: 'contact',
      label: {
        en: 'Contact person',
        uk: 'Контактна особа',
      },
      relationTo: Team.slug,
      hasMany: false,
    },
  ],
};

export default ProjectFooter;
