import { getRequestConfig } from 'next-intl/server';

import { defaultLocale } from '@/i18n/routing';
import en from '@/messages/en.json';
import fr from '@/messages/fr.json';

export default getRequestConfig(async () => {
  return {
    locale: defaultLocale,
    messages: en,
    formats: {}
  };
});

export const messageCatalog = {
  en,
  fr
};
