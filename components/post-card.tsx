import Link from 'next/link';

import { getEntryPath, type ContentEntry } from '@/lib/content';
import { formatDate, type Locale } from '@/lib/site';

export function PostCard({ entry, locale }: { entry: ContentEntry; locale: Locale }) {
  return (
    <article className="brand-frame flex h-full flex-col justify-between rounded-[2rem] p-6">
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-bark/60">{formatDate(entry.publishedAt, locale)}</p>
        <h2 className="text-2xl font-semibold uppercase tracking-[-0.04em] text-ink">{entry.title}</h2>
        <p className="text-base leading-7 text-ink/75">{entry.description}</p>
      </div>
      <Link
        href={getEntryPath(entry)}
        className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-clay hover:text-bark"
      >
        {locale === 'fr' ? 'Lire l article' : 'Read story'}
      </Link>
    </article>
  );
}
