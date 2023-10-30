import { CollectionConfig } from 'payload/types';

import AuthorPhotos from 'collections/blog/AuthorPhotos';

import { slugField } from 'fields/slug';

import { blogGroup } from 'utils/groups';

const Authors: CollectionConfig = {
  slug: 'blog-authors',
  labels: {
    singular: {
      en: 'Author',
      ua: 'Автор',
    },
    plural: {
      en: 'Authors',
      ua: 'Автори',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
    group: blogGroup,
  },
  fields: [
    slugField(),
    {
      name: 'photo',
      label: {
        en: 'Photo',
        ua: 'Фото',
      },
      type: 'upload',
      relationTo: AuthorPhotos.slug,
      required: true,
    },
    {
      name: 'name',
      label: {
        en: 'Name',
        ua: "Ім'я",
      },
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'email',
      label: {
        en: 'Email',
        ua: 'Електронна пошта',
      },
      type: 'email',
      required: true,
    },
  ],
};

export default Authors;
