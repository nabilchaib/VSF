import type { Metadata } from 'next';

import { getAbsoluteUrl, getMediaUrl, SITE_NAME, type Locale } from '@/lib/site';

const HOME_PAGE_META: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Vetiver Without Borders | Practical resilience through vetiver',
    description:
      'Vetiver Without Borders helps communities and local partners understand, test, and apply vetiver-based solutions for soil, water, and practical land restoration.'
  },
  fr: {
    title: 'Vetiver Sans Frontieres | Resilience pratique avec le vetiver',
    description:
      "Vetiver Sans Frontieres aide les communautes et les partenaires locaux a comprendre, tester et appliquer des solutions a base de vetiver pour les sols, l'eau et la restauration pratique des terres."
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
