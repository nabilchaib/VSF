import Link from 'next/link';
import Image from 'next/image';

import { getHeroImageForEntry } from '@/components/page-hero';
import { getEntryPath, type ContentEntry } from '@/lib/content';
import { getArticleIntentLabel } from '@/lib/article-routing';
import { formatDate, resolveMediaAsset, type Locale } from '@/lib/site';

export function StoryCard({
  entry,
  locale
}: {
  entry: ContentEntry;
  locale: Locale;
}) {
  const imageSrc = getStoryImage(entry);
  const href = getEntryPath(entry);

  return (
    <Link
      href={href}
      className="group block h-full rounded-[1.8rem] border border-bark/10 bg-white shadow-card transition-shadow duration-200 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      aria-label={entry.title}
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[1.8rem]">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface/60">
          <Image
            src={imageSrc}
            alt={entry.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
            sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="flex h-full flex-col gap-4 p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bark/56">
            {getArticleIntentLabel(locale, entry.intent)}
          </p>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-bark/56">
            {formatDate(entry.publishedAt, locale)}
          </p>
          <h2 className="text-[1.55rem] font-semibold leading-[1.12] text-ink">{entry.title}</h2>
          <p className="story-excerpt-clamp text-[15px] leading-7 text-ink/68">{entry.description}</p>
          <span className="mt-auto inline-flex w-fit text-sm font-semibold tracking-[0.16em] text-bark underline decoration-bark/28 underline-offset-4 transition-colors group-hover:text-clay group-hover:decoration-clay/60">
            {locale === 'fr' ? 'Lire l histoire' : 'Read story'}
          </span>
        </div>
      </article>
    </Link>
  );
}

function getStoryImage(entry: ContentEntry) {
  return resolveMediaAsset(entry.ogImage ?? getHeroImageForEntry(entry.slug, entry.locale));
}
