import slugifyText from 'slugify';
import transliterateUkToEn from 'ua-en-translit';

export const slugify = (text: string): string => slugifyText(transliterateUkToEn(text), { locale: 'en', lower: true });
