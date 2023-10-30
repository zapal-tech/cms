import { Admin } from 'payload/generated-types';
import { CollectionConfig } from 'payload/types';

import { Role } from 'types/role';

import { generalGroup } from 'utils/groups';

const Admins: CollectionConfig = {
  slug: 'admins',
  labels: {
    singular: {
      en: 'Admin',
      ua: 'Адмін',
    },
    plural: {
      en: 'Admins',
      ua: 'Адміни',
    },
  },
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'name',
    disableDuplicate: true,
    hidden: ({ user }) => (user as any as Admin).role !== Role.ROOT,
    defaultColumns: ['name', 'title', 'email'],
    group: generalGroup,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          label: {
            en: 'Name',
            ua: "Ім'я",
          },
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          label: {
            en: 'Title',
            ua: 'Посада',
          },
          type: 'text',
        },
      ],
    },
    {
      type: 'select',
      name: 'role',
      label: {
        en: 'Role',
        ua: 'Роль',
      },
      options: [
        {
          value: Role.ROOT,
          label: {
            en: "Mthrfckn' sudo root",
            ua: 'Супер адмін, мать його',
          },
        },
        {
          value: Role.ADMIN,
          label: {
            en: 'Admin',
            ua: 'Адмін',
          },
        },
        {
          value: Role.SERVICE,
          label: {
            en: 'Service',
            ua: 'Сервіс',
          },
        },
      ],
      required: true,
    },
  ],
};

export default Admins;
