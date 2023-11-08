import { CollectionConfig } from 'payload/types';

import { Role } from 'types/role';

import { contactFormLeadNotification } from 'hooks/contactFormLeadNotification';

import { adminAccessLevel, onlyServiceAccess, rootAccessLevel } from 'utils/access';
import { generalGroup } from 'utils/groups';

const ContactFormLeads: CollectionConfig = {
  slug: 'contact-form-leads',
  labels: {
    singular: {
      en: 'Contact Forms Lead',
      ua: 'Лід з сайту',
    },
    plural: {
      en: 'Contact Forms Leads',
      ua: 'Ліди з сайту',
    },
  },
  access: {
    create: onlyServiceAccess,
    read: adminAccessLevel,
    update: rootAccessLevel,
    delete: rootAccessLevel,
  },
  admin: {
    useAsTitle: 'firstName',
    defaultColumns: ['firstName', 'lastName', 'email', 'company', 'message'],
    description: {
      en: 'Leads from the website contact form',
      ua: "Ліди з форми зворотного зв'язку на сайті",
    },
    hidden: ({ user }) => ![Role.ROOT, Role.ADMIN].includes(user?.role as Role),
    group: generalGroup,
  },
  hooks: {
    afterOperation: [contactFormLeadNotification],
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'firstName',
          label: {
            en: 'First Name',
            ua: "Ім'я",
          },
          required: true,
        },
        {
          name: 'lastName',
          label: {
            en: 'Last Name',
            ua: 'Прізвище',
          },
          type: 'text',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'email',
          name: 'email',
          label: {
            en: 'Email',
            ua: 'Електронна пошта',
          },
          required: true,
        },
        {
          type: 'text',
          name: 'company',
          label: {
            en: 'Company',
            ua: 'Компанія',
          },
        },
      ],
    },
    {
      type: 'textarea',
      name: 'message',
      label: {
        en: 'Message',
        ua: 'Повідомлення',
      },
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'comeFromPage',
          label: {
            en: 'Come from page',
            ua: 'Відправив форму зі сторінки',
          },
        },
        {
          type: 'select',
          name: 'comeFromLanguage',
          label: {
            en: 'Come from language',
            ua: 'Відправив форму з мови',
          },
          required: true,
          options: [
            {
              value: 'en',
              label: {
                en: 'English',
                ua: 'Англійська',
              },
            },
            {
              value: 'uk',
              label: {
                en: 'Ukrainian',
                ua: 'Українська',
              },
            },
            {
              value: 'unknown',
              label: {
                en: 'Unknown',
                ua: 'Невідомо',
              },
            },
          ],
          defaultValue: 'unknown',
        },
      ],
    },
  ],
};

export default ContactFormLeads;
