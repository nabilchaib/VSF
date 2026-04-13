import type { MetadataRoute } from 'next';

import { getAllEntries, getEntryPath } from '@/lib/content';
import { PROJECT_PATHS } from '@/lib/projects';
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
    },
    {
      url: getAbsoluteUrl(PROJECT_PATHS.rdc.en),
      lastModified: new Date(),
      alternates: {
        languages: {
          en: getAbsoluteUrl(PROJECT_PATHS.rdc.en),
          fr: getAbsoluteUrl(PROJECT_PATHS.rdc.fr)
        }
      }
    },
    {
      url: getAbsoluteUrl(PROJECT_PATHS.sanRafael.en),
      lastModified: new Date(),
      alternates: {
        languages: {
          en: getAbsoluteUrl(PROJECT_PATHS.sanRafael.en),
          fr: getAbsoluteUrl(PROJECT_PATHS.sanRafael.fr)
        }
      }
    },
    {
      url: getAbsoluteUrl(PROJECT_PATHS.propose.en),
      lastModified: new Date(),
      alternates: {
        languages: {
          en: getAbsoluteUrl(PROJECT_PATHS.propose.en),
          fr: getAbsoluteUrl(PROJECT_PATHS.propose.fr)
        }
      }
    },
    {
      url: getAbsoluteUrl(PROJECT_PATHS.rdc.fr),
      lastModified: new Date(),
      alternates: {
        languages: {
          en: getAbsoluteUrl(PROJECT_PATHS.rdc.en),
          fr: getAbsoluteUrl(PROJECT_PATHS.rdc.fr)
        }
      }
    },
    {
      url: getAbsoluteUrl(PROJECT_PATHS.sanRafael.fr),
      lastModified: new Date(),
      alternates: {
        languages: {
          en: getAbsoluteUrl(PROJECT_PATHS.sanRafael.en),
          fr: getAbsoluteUrl(PROJECT_PATHS.sanRafael.fr)
        }
      }
    },
    {
      url: getAbsoluteUrl(PROJECT_PATHS.propose.fr),
      lastModified: new Date(),
      alternates: {
        languages: {
          en: getAbsoluteUrl(PROJECT_PATHS.propose.en),
          fr: getAbsoluteUrl(PROJECT_PATHS.propose.fr)
        }
      }
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
