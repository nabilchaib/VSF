import DOMPurify from 'isomorphic-dompurify';

import { LEGACY_REDIRECTS } from '@/lib/redirects';
import { localePath, type Locale } from '@/lib/site';

const OLD_SITE = 'https://vetiversansfrontieres.org';
const OLD_UPLOADS = `${OLD_SITE}/wp-content/uploads/`;
const I0_PREFIX = 'https://i0.wp.com/vetiversansfrontieres.org/wp-content/uploads/';

function stripWpThumbnailSuffix(path: string) {
  return path.replace(/-\d+x\d+(\.[^.]+)$/, '$1');
}

function replaceOldMedia(url: string) {
  if (url.startsWith(OLD_UPLOADS)) {
    return `/media/${stripWpThumbnailSuffix(url.slice(OLD_UPLOADS.length))}`;
  }

  if (url.startsWith(I0_PREFIX)) {
    const suffix = url.slice(I0_PREFIX.length).split('?')[0];
    return `/media/${stripWpThumbnailSuffix(suffix)}`;
  }

  return url;
}

function normalizeInternalLink(url: string, locale: Locale) {
  if (!url.startsWith(OLD_SITE)) {
    return url;
  }

  let path = url.slice(OLD_SITE.length) || '/';
  path = path.replace(/\/$/, '') || '/';

  if (LEGACY_REDIRECTS[path]) {
    return LEGACY_REDIRECTS[path];
  }

  if (locale === 'fr' && !path.startsWith('/fr')) {
    if (path === '/about/contact') {
      return '/fr/contact';
    }

    if (path === '/about/services') {
      return '/fr/services';
    }

    return path === '/' ? '/fr' : `/fr${path}`;
  }

  if (locale === 'en' && path.startsWith('/fr')) {
    return path.replace(/^\/fr/, '') || '/';
  }

  return path;
}

export function transformLegacyHtml(html: string | undefined, locale: Locale) {
  const sanitized = DOMPurify.sanitize(html || '', {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['loading', 'target', 'rel', 'allow', 'allowfullscreen', 'frameborder'],
    FORBID_TAGS: ['script', 'style', 'form', 'input', 'textarea', 'select', 'button', 'link'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover']
  });

  const withoutLeadMedia = sanitized
    .replace(/^\s*(?:<p>\s*)?<img\b[^>]*\/?>(?:\s*<\/p>)?\s*/i, '')
    .replace(/^\s*<figure>[\s\S]*?<\/figure>\s*/i, '')
    .replace(/^\s*(?:<p>\s*(?:&nbsp;|\u00a0)?\s*<\/p>\s*)+/i, '');

  return withoutLeadMedia
    .replace(/\[wpforms id="10"\]/g, '')
    .replace(/srcset="[^"]*"/g, '')
    .replace(/sizes="[^"]*"/g, '')
    .replace(/<iframe([^>]*)><\/iframe>/g, '<iframe$1 loading="lazy"></iframe>')
    .replace(/href="#contact"/g, `href="${localePath('/about/contact', locale)}"`)
    .replace(/<a[^>]*href="#[^"]*"[^>]*>([\s\S]*?)<\/a>/g, '$1')
    .replace(/href="([^"]+)"/g, (_, url) => `href="${normalizeInternalLink(url, locale)}"`)
    .replace(/src="([^"]+)"/g, (_, url) => `src="${replaceOldMedia(url)}"`)
    .replace(/https:\/\/i0\.wp\.com\/vetiversansfrontieres\.org\/wp-content\/uploads\/([^"?]+)(?:\?[^"]*)?/g, (_, suffix) => `/media/${stripWpThumbnailSuffix(suffix)}`)
    .replace(/https:\/\/vetiversansfrontieres\.org\/wp-content\/uploads\/([^"]+)/g, (_, suffix) => `/media/${stripWpThumbnailSuffix(suffix)}`)
    .replace(/<a([^>]*?)>\s*Facebook\s*<\/a>/g, '<a$1 rel="noreferrer" target="_blank">Facebook</a>')
    .replace(/<a([^>]*?)>\s*Instagram\s*<\/a>/g, '<a$1 rel="noreferrer" target="_blank">Instagram</a>')
    .replace(/<a([^>]*?)>\s*Linkedin\s*<\/a>/g, '<a$1 rel="noreferrer" target="_blank">LinkedIn</a>');
}
