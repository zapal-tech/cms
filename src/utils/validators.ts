import { Validate } from 'payload/types';

import { Namespace } from 'types/namespace';

import { httpOrHttpsUrlRegEx, urlSlugRegEx } from './regex';

export const isValidSlug = (value: string): boolean => urlSlugRegEx.test(value);

export const validateSlug: Validate<string> = (value, options): true | string => {
  if (!value && options.operation === 'create') {
    if (options.data.name) return true;

    return options.t('slug.unableToAutofill', { ns: Namespace.VALIDATION });
  }

  if (isValidSlug(value)) return true;

  return options.t('slug.invalid', { ns: Namespace.VALIDATION });
};

export const validateInteger = (value: number, options): true | string => {
  if (Number.isInteger(value)) return true;

  return options.t('number.integer', { ns: Namespace.VALIDATION });
};

export const validateUrl = (value: string, options): true | string => {
  try {
    httpOrHttpsUrlRegEx.exec(value);

    new URL(value);

    return true;
  } catch (error) {
    return options.t('url.invalid', { ns: Namespace.VALIDATION });
  }
};
