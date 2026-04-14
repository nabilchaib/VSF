import fs from 'node:fs/promises';
import { cache } from 'react';

import fg from 'fast-glob';
import matter from 'gray-matter';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { z } from 'zod';

import { SITE_NAME, getAbsoluteUrl, resolveMediaAsset, type EntryType, type Locale } from '@/lib/site';
import { trimSlashes } from '@/lib/utils';

const contentSchema = z.object({
  title: z.string(),
  slug: z.string(),
  locale: z.union([z.literal('en'), z.literal('fr')]),
  type: z.union([z.literal('page'), z.literal('post')]),
  description: z.string(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  ogImage: z.string().optional(),
  intent: z.union([
    z.literal('education'),
    z.literal('field_evidence'),
    z.literal('active_project'),
    z.literal('services_or_partnership')
  ]).optional(),
  ctaTarget: z.union([
    z.literal('vetiver'),
    z.literal('projects'),
    z.literal('get-involved'),
    z.literal('rdc'),
    z.literal('san-rafael'),
    z.literal('services'),
    z.literal('contact')
  ]).optional(),
  publishedAt: z.string(),
  updatedAt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  categories: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  legacyPaths: z.array(z.string()).default([])
});

export type ContentEntry = z.infer<typeof contentSchema> & {
  body: string;
  sourcePath: string;
};

type MatchResult =
  | {
      entry: ContentEntry;
      redirectTo?: undefined;
    }
  | {
      entry: ContentEntry;
      redirectTo: string;
    };

async function readEntry(filePath: string) {
  const raw = await fs.readFile(filePath, 'utf8');
  const parsed = matter(raw);
  const frontmatter = contentSchema.parse(parsed.data);
  return {
    ...frontmatter,
    body: parsed.content.trim(),
    sourcePath: filePath
  } satisfies ContentEntry;
}

export const getAllEntries = cache(async () => {
  const files = await fg('content/**/*.{mdx,md}', {
    cwd: process.cwd(),
    absolute: true
  });

  const entries = await Promise.all(files.map((filePath) => readEntry(filePath)));
  return entries.filter((entry) => !entry.draft);
});

export const getEntriesByType = cache(async (locale: Locale, type: EntryType) => {
  const entries = await getAllEntries();

  return entries
    .filter((entry) => entry.locale === locale && entry.type === type)
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
});

export async function findContentEntry(locale: Locale, slugSegments: string[]): Promise<MatchResult | null> {
  const slug = trimSlashes(slugSegments.join('/'));
  const entries = await getAllEntries();
  const localized = entries.filter((entry) => entry.locale === locale);

  const direct = localized.find((entry) => trimSlashes(entry.slug) === slug);

  if (direct) {
    return { entry: direct };
  }

  const legacy = localized.find((entry) =>
    entry.legacyPaths.some((legacyPath) => trimSlashes(legacyPath) === slug)
  );

  if (legacy) {
    return {
      entry: legacy,
      redirectTo: getEntryPath(legacy)
    };
  }

  return null;
}

export async function getContentEntry(locale: Locale, slugSegments: string[]) {
  const result = await findContentEntry(locale, slugSegments);

  if (!result) {
    notFound();
  }

  return result.entry;
}

export function getEntryPath(entry: Pick<ContentEntry, 'locale' | 'slug'>) {
  const slug = trimSlashes(entry.slug);

  if (entry.locale === 'fr') {
    return slug === '' ? '/fr' : `/fr/${slug}`;
  }

  return slug === '' ? '/' : `/${slug}`;
}

export function buildEntryMetadata(entry: ContentEntry, locale: Locale = entry.locale): Metadata {
  const title = entry.seoTitle || entry.title;
  const description = entry.seoDescription || entry.description;
  const canonical = getAbsoluteUrl(getEntryPath(entry));
  const alternatePath = getEntryPath({
    ...entry,
    locale: locale === 'fr' ? 'en' : 'fr'
  });
  const ogImage = entry.ogImage ? resolveMediaAsset(entry.ogImage) : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: getAbsoluteUrl(locale === 'en' ? getEntryPath(entry) : alternatePath),
        fr: getAbsoluteUrl(locale === 'fr' ? getEntryPath(entry) : alternatePath)
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      type: entry.type === 'post' ? 'article' : 'website',
      images: ogImage ? [{ url: ogImage }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined
    }
  };
}
