import { notFound, permanentRedirect } from 'next/navigation';

import { buildEntryMetadata, findContentEntry, getAllEntries } from '@/lib/content';
import { renderEntryPage } from '@/components/content-page';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const entries = await getAllEntries();
  return entries
    .filter((entry) => entry.locale === 'en' && entry.slug !== '')
    .map((entry) => ({ slug: entry.slug.split('/') }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const match = await findContentEntry('en', slug);

  if (!match) {
    return {};
  }

  if (match.redirectTo) {
    return {};
  }

  return buildEntryMetadata(match.entry);
}

export default async function EnglishCatchAllPage({ params }: Props) {
  const { slug } = await params;
  const match = await findContentEntry('en', slug);

  if (!match) {
    notFound();
  }

  if (match.redirectTo) {
    permanentRedirect(match.redirectTo);
  }

  return renderEntryPage(match.entry, 'en');
}
