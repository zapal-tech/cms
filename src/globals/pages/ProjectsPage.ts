import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { pagesGroup } from 'utils/groups';

const ProjectsPage: GlobalConfig = {
  slug: 'projects-page',
  label: {
    en: 'Projects',
    ua: 'Проєкти',
  },
  admin: {
    group: pagesGroup,
  },
  versions: {
    drafts: {
      autosave: true,
    },
    max: 5,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [translationField()],
        },
      ],
    },
  ],
};

export default ProjectsPage;
