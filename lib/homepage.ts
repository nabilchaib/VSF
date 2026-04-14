import type { Metadata } from 'next';

import { getAbsoluteUrl, getMediaUrl, SITE_NAME, type Locale } from '@/lib/site';

const HOME_PAGE_META: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'A remarkable plant for soil, water, and community resilience.',
    description:
      'Vetiver is a deep-rooted grass used to slow runoff, hold soil in place, and make fragile landscapes easier to work with.'
  },
  fr: {
    title: 'Une plante remarquable pour les sols, l eau et la resilience communautaire.',
    description:
      'Le vetiver est une graminee a racines profondes utilisee pour ralentir le ruissellement, retenir les sols et rendre les paysages fragiles plus faciles a travailler.'
  }
};

export function buildHomepageMetadata(locale: Locale): Metadata {
  const meta = HOME_PAGE_META[locale];
  const canonicalPath = locale === 'fr' ? '/fr' : '/';
  const canonical = getAbsoluteUrl(canonicalPath);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        en: getAbsoluteUrl('/'),
        fr: getAbsoluteUrl('/fr')
      }
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      type: 'website',
      images: [
        {
          url: getMediaUrl('2025/03/Vetiver-Highway.jpg')
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [getMediaUrl('2025/03/Vetiver-Highway.jpg')]
    }
  };
}
