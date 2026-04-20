import type { Metadata } from 'next';

import { SITE_NAME, getAbsoluteUrl, resolveMediaReference, type Locale } from '@/lib/site';

export const PROJECT_PATHS = {
  gateway: {
    en: '/projects',
    fr: '/fr/projects'
  },
  rdc: {
    en: '/projects/rdc',
    fr: '/fr/projects/rdc'
  },
  sanRafael: {
    en: '/projects/san-rafael',
    fr: '/fr/projects/san-rafael'
  },
  propose: {
    en: '/projects/propose',
    fr: '/fr/projects/propose'
  }
} as const;

type ProjectPathMap = (typeof PROJECT_PATHS)[keyof typeof PROJECT_PATHS];

export function buildProjectMetadata({
  locale,
  path,
  title,
  description,
  image
}: {
  locale: Locale;
  path: ProjectPathMap;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const canonical = getAbsoluteUrl(path[locale]);
  const resolvedImage = image ? resolveMediaReference(image) : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: getAbsoluteUrl(path.en),
        fr: getAbsoluteUrl(path.fr)
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      type: 'website',
      images: resolvedImage ? [{ url: resolvedImage }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: resolvedImage ? [resolvedImage] : undefined
    }
  };
}
