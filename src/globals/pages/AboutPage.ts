import { GlobalConfig } from 'payload/types';

import { translationField } from 'fields/translation';

import { pagesGroup } from 'utils/groups';

const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: {
    en: 'About',
    ua: 'Про нас',
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
        },
      ],
    },
  ],
};

export default AboutPage;
