import { notFound, permanentRedirect } from 'next/navigation';

import { buildEntryMetadata, findContentEntry, getAllEntries } from '@/lib/content';
import { renderEntryPage } from '@/components/content-page';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const entries = await getAllEntries();
  return entries
    .filter((entry) => entry.locale === 'fr' && entry.slug !== '')
    .map((entry) => ({ slug: entry.slug.split('/') }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const match = await findContentEntry('fr', slug);

  if (!match) {
    return {};
  }

  if (match.redirectTo) {
    return {};
  }

  return buildEntryMetadata(match.entry, 'fr');
}

export default async function FrenchCatchAllPage({ params }: Props) {
  const { slug } = await params;
  const match = await findContentEntry('fr', slug);

  if (!match) {
    notFound();
  }

  if (match.redirectTo) {
    permanentRedirect(match.redirectTo);
  }

  return renderEntryPage(match.entry, 'fr');
}
