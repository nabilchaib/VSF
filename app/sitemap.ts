import type { MetadataRoute } from 'next';

import { getAllEntries, getEntryPath } from '@/lib/content';
import { getAbsoluteUrl } from '@/lib/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = await getAllEntries();

  const posts = entries.filter((e) => e.type === 'post');
  const latestPostDate = posts.length
    ? new Date(Math.max(...posts.map((p) => new Date(p.updatedAt || p.publishedAt).getTime())))
    : new Date();

  const items: MetadataRoute.Sitemap = [
    {
      url: getAbsoluteUrl('/stories'),
      lastModified: latestPostDate
    },
    {
      url: getAbsoluteUrl('/fr/stories'),
      lastModified: latestPostDate
    }
  ];

  for (const entry of entries) {
    items.push({
      url: getAbsoluteUrl(getEntryPath(entry)),
      lastModified: entry.updatedAt ? new Date(entry.updatedAt) : new Date(entry.publishedAt),
      alternates: {
        languages: {
          en: getAbsoluteUrl(getEntryPath({ ...entry, locale: 'en' })),
          fr: getAbsoluteUrl(getEntryPath({ ...entry, locale: 'fr' }))
        }
      }
    });
  }

  return items;
}
