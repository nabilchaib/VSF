import Image from 'next/image';

import { Button } from '@/components/button';
import { getHeroImageForEntry } from '@/components/page-hero';
import { getEntryPath, type ContentEntry } from '@/lib/content';
import { getArticleIntentLabel } from '@/lib/article-routing';
import { formatDate, getMediaUrl, type Locale } from '@/lib/site';

export function StoryCard({
  entry,
  locale
}: {
  entry: ContentEntry;
  locale: Locale;
}) {
  const imageSrc = getStoryImage(entry);

  return (
    <article className="group overflow-hidden rounded-[1.8rem] border border-bark/10 bg-white shadow-card transition-shadow duration-200 hover:shadow-soft">
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
        <Button
          href={getEntryPath(entry)}
          variant="tertiary"
          className="mt-auto w-fit text-sm tracking-[0.16em]"
        >
          {locale === 'fr' ? 'Lire l histoire' : 'Read story'}
        </Button>
      </div>
    </article>
  );
}

function getStoryImage(entry: ContentEntry) {
  if (entry.ogImage) {
    return entry.ogImage.startsWith('http')
      ? entry.ogImage
      : getMediaUrl(entry.ogImage);
  }

  return getMediaUrl(getHeroImageForEntry(entry.slug, entry.locale));
}
