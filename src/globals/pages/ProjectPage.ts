import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { pagesGroup } from 'utils/groups';

const ProjectPage: GlobalConfig = {
  slug: 'project-page',
  label: {
    en: 'Project',
    ua: 'Проєкт',
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
  fields: [translationField()],
};

export default ProjectPage;
