import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { pagesGroup } from 'utils/groups';

const ScheduleMeetingPage: GlobalConfig = {
  slug: 'schedule-meeting-page',
  label: {
    en: 'Schedule Meeting',
    ua: 'Запланувати зустріч',
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

export default ScheduleMeetingPage;
