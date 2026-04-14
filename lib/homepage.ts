import type { Metadata } from 'next';

import { getAbsoluteUrl, getMediaUrl, SITE_NAME, type Locale } from '@/lib/site';

const HOME_PAGE_META: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Vetiver for soil, water, and resilience.',
    description:
      'Vetiver is a deep-rooted grass used to slow runoff, hold soil in place, and support practical land restoration.'
  },
  fr: {
    title: "Vétiver pour les sols, l'eau et la résilience.",
    description:
      "Le vétiver est une graminée à racines profondes utilisée pour ralentir le ruissellement, retenir les sols et soutenir une restauration pratique des terres."
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
