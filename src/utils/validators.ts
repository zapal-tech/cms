import payload from 'payload';
import { Validate } from 'payload/types';

import { Namespace } from 'i18n';

import { getSlugifiableData } from './getSlugifiableData';
import { httpOrHttpsUrlRegEx, urlSlugRegEx } from './regex';

export const isValidSlug = (value: string): boolean => urlSlugRegEx.test(value);

export const validateSlug: Validate<string> = (value, options): true | string => {
  // update operation as workaround for autosaved docs
  if (!value && ['create', 'update'].includes(options.operation)) {
    if (getSlugifiableData(options.data)) return true;

    return options.t('slug.unableToAutofill', { ns: Namespace.VALIDATION });
  }

  if (isValidSlug(value)) return true;

  return options.t('slug.invalid', { ns: Namespace.VALIDATION });
};

export const validateInteger = (value: number, options): true | string => {
  if (!value || Number.isInteger(value)) return true;

  return options.t('number.integer', { ns: Namespace.VALIDATION });
};

export const validateUrl = (value: string, options): true | string => {
  if (!value) return true;

  try {
    httpOrHttpsUrlRegEx.exec(value);

    new URL(value);

    return true;
  } catch (error) {
    return options.t('url.invalid', { ns: Namespace.VALIDATION });
  }
};
