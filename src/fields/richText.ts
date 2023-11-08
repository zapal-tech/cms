import { RichTextField } from 'payload/types';

export const richTextField = (data: Omit<RichTextField, 'type'>): RichTextField => ({
  type: 'richText',
  ...data,
});
