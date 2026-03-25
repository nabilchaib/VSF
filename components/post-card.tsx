import Link from 'next/link';

import { getEntryPath, type ContentEntry } from '@/lib/content';
import { formatDate, type Locale } from '@/lib/site';

export function PostCard({ entry, locale }: { entry: ContentEntry; locale: Locale }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-[2rem] border border-bark/10 bg-white/80 p-6 shadow-soft">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bark/55">{formatDate(entry.publishedAt, locale)}</p>
        <h2 className="text-2xl font-semibold text-bark">{entry.title}</h2>
        <p className="text-base leading-7 text-ink/75">{entry.description}</p>
      </div>
      <Link
        href={getEntryPath(entry)}
        className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-moss hover:text-bark"
      >
        {locale === 'fr' ? 'Lire l article' : 'Read story'}
      </Link>
    </article>
  );
}
