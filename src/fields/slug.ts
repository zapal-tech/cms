import { TextField } from 'payload/types';

import { slugifyNameHook } from 'hooks/slugifyName';

import { adminAccessLevel } from 'utils/access';
import { validateSlug } from 'utils/validators';

export const slugField = (
  data?: Omit<TextField, 'type' | 'name' | 'required' | 'label' | 'validate' | 'access'>,
): TextField => ({
  ...data,
  label: {
    en: 'URL Slug',
    ua: 'URL Slug',
  },
  type: 'text',
  name: 'slug',
  index: true,
  unique: true,
  validate: validateSlug,
  hooks: {
    ...data?.hooks,
    beforeValidate: [slugifyNameHook, ...(data?.hooks?.beforeValidate || [])],
  },
  access: {
    update: adminAccessLevel,
  },
  admin: {
    position: 'sidebar',
    autoComplete: 'off',
    ...data?.admin,
  },
  hasMany: false,
  maxRows: undefined,
  minRows: undefined,
});
