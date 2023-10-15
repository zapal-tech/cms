import type { FieldHook, TextField } from 'payload/types';

import { slugify } from '../utils/helpers';

type DocumentType = {
  id: string;
  name: string;
  firstName: string;
  content?: Record<string, string>;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

type SlugifyNameHook = FieldHook<DocumentType, string, any>;

export const slugifyNameHook: SlugifyNameHook = (args) => {
  const { value, data, operation } = args;

  const autoSlugData = data.name || data.firstName || data.title || data.content?.name;

  if (operation === 'create' && autoSlugData && !value?.length) return slugify(autoSlugData);

  return value;
};
