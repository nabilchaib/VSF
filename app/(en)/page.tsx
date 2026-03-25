import { buildEntryMetadata, getContentEntry } from '@/lib/content';
import { renderEntryPage } from '@/components/content-page';

export async function generateMetadata() {
  const entry = await getContentEntry('en', []);
  return buildEntryMetadata(entry);
}

export default async function HomePage() {
  const entry = await getContentEntry('en', []);
  return renderEntryPage(entry, 'en');
}
