import type { Metadata } from 'next';

import { getAbsoluteUrl, getMediaUrl, SITE_NAME, type Locale } from '@/lib/site';

const HOME_PAGE_META: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Helping communities stabilize fragile land and manage water with vetiver.',
    description:
      'Vetiver Without Borders helps communities and local partners use vetiver to protect soil, water, and land in real conditions.'
  },
  fr: {
    title: 'Aider les communautés à stabiliser les sols fragiles et mieux gérer l’eau grâce au vétiver.',
    description:
      "Vetiver Sans Frontières aide les communautés et les partenaires locaux à utiliser le vétiver pour protéger les sols, l’eau et les terres dans des conditions réelles."
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
