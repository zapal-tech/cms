import payload from 'payload';
import type { FieldHook } from 'payload/types';

import { getSlugifiableData } from 'utils/getSlugifiableData';

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

  const autoSlugData = getSlugifiableData(data);
  const slug = slugify(autoSlugData);

  if (['create', 'update'].includes(operation) && autoSlugData && slug && !value?.length) return slug;

  return value;
};
