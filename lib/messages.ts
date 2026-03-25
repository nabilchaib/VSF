import en from '@/messages/en.json';
import fr from '@/messages/fr.json';

import type { Locale } from '@/lib/site';

export function getMessageBundle(locale: Locale) {
  return locale === 'fr' ? fr : en;
}
