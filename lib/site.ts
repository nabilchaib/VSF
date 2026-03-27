export type Locale = 'en' | 'fr';
export type EntryType = 'page' | 'post';

export const SITE_NAME = 'Vetiver Without Borders';
export const SITE_DESCRIPTION =
  'Vetiver Without Borders helps communities facing climate stress rebuild land, protect water, and regenerate local resilience through the Vetiver System.';
export const DONATE_URL = 'https://www.zeffy.com/en-CA/donation-form/cbac2a62-15cb-4f94-866c-c860b1cfa606';
export const CONTACT_EMAIL = 'info@vetiversansfrontieres.org';
export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61553674826785' },
  { label: 'Instagram', href: 'https://www.instagram.com/vetiversansfrontieres/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vetiver-sans-frontieres/' }
] as const;
const LEGACY_MEDIA_BASE_URL = 'https://vetiversansfrontieres.org/wp-content/uploads';

export const NAV_ITEMS = [
  {
    key: 'about',
    href: {
      en: '/about',
      fr: '/fr/about'
    }
  },
  {
    key: 'projects',
    href: {
      en: '/projects',
      fr: '/fr/projects'
    }
  },
  {
    key: 'services',
    href: {
      en: '/about/services',
      fr: '/fr/services'
    }
  },
  {
    key: 'stories',
    href: {
      en: '/stories',
      fr: '/fr/stories'
    }
  },
  {
    key: 'contact',
    href: {
      en: '/about/contact',
      fr: '/fr/contact'
    }
  }
] as const;

const FR_ALIASES: Record<string, string> = {
  '/about/contact': '/fr/contact',
  '/about/services': '/fr/services',
  '/stories': '/fr/stories'
};

const EN_ALIASES: Record<string, string> = {
  '/fr/contact': '/about/contact',
  '/fr/services': '/about/services',
  '/fr/stories': '/stories'
};

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://vetiversansfrontieres.org';
}

export function getAbsoluteUrl(path: string) {
  return `${getSiteUrl()}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getMediaBaseUrl() {
  const configured = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.replace(/\/$/, '');

  if (configured) {
    return configured;
  }

  return LEGACY_MEDIA_BASE_URL;
}

export function getMediaUrl(path: string) {
  const cleanPath = path.replace(/^\/+/, '');
  return `${getMediaBaseUrl()}/${cleanPath}`;
}

export function resolveMediaAsset(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  if (path.startsWith('/media/')) {
    return getMediaUrl(path.slice('/media/'.length));
  }

  return path;
}

export function localePath(enPath: string, locale: Locale): string {
  if (locale === 'en') return enPath;
  if (FR_ALIASES[enPath]) return FR_ALIASES[enPath];
  return enPath === '/' ? '/fr' : `/fr${enPath}`;
}

export function getAlternatePath(pathname: string, targetLocale: Locale) {
  const cleanPath = pathname === '' ? '/' : pathname.replace(/\/$/, '') || '/';

  if (targetLocale === 'fr') {
    if (FR_ALIASES[cleanPath]) {
      return FR_ALIASES[cleanPath];
    }

    if (cleanPath.startsWith('/fr')) {
      return cleanPath;
    }

    return cleanPath === '/' ? '/fr' : `/fr${cleanPath}`;
  }

  if (EN_ALIASES[cleanPath]) {
    return EN_ALIASES[cleanPath];
  }

  if (cleanPath === '/fr' || cleanPath === '/fr/') {
    return '/';
  }

  return cleanPath.replace(/^\/fr/, '') || '/';
}

export function formatDate(date: string, locale: Locale) {
  const formatter = new Intl.DateTimeFormat(locale === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return formatter.format(new Date(date));
}
