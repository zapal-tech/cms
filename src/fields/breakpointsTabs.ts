import { Field, Tab, TabsField } from 'payload/types';

const breakpoints = [
  {
    name: 'default',
    label: {
      en: 'Default (<390)',
      uk: 'За замовчуванням (<390)',
    },
  },
  {
    name: 'phone',
    label: {
      en: 'Phone (>390)',
      uk: 'Телефон (>390)',
    },
  },
  {
    name: 'large-phone',
    label: {
      en: 'Phone L (>576)',
      uk: 'Телефон L (>576)',
    },
  },
  {
    name: 'tablet',
    label: {
      en: 'Tablet (>768)',
      uk: 'Планшет (>768)',
    },
  },
  {
    name: 'large-tablet',
    label: {
      en: 'Tablet L (>1024)',
      uk: 'Планшет L (>1024)',
    },
  },
  {
    name: 'laptop',
    label: {
      en: 'Laptop (>1280)',
      uk: 'Ноутбук (>1280)',
    },
  },
  {
    name: 'large-laptop',
    label: {
      en: 'Laptop L (>1680)',
      uk: 'Ноутбук L (>1680)',
    },
  },
  {
    name: 'desktop',
    label: {
      en: 'Desktop (>1920)',
      uk: "Комп'ютер (>1920)",
    },
  },
];

export const breakpointsTabs = (
  fields: Field[],
  tab?: Omit<Tab, 'name' | 'label'>,
  tabsOptions?: Omit<TabsField, 'type' | 'tabs'>,
): TabsField => ({
  type: 'tabs',
  tabs: breakpoints.map((breakpoint) => ({
    name: breakpoint.name,
    label: breakpoint.label,
    ...tab,
    fields,
  })),
  ...tabsOptions,
});
