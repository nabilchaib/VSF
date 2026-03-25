import { buildEntryMetadata, getContentEntry } from '@/lib/content';
import { renderEntryPage } from '@/components/content-page';

export async function generateMetadata() {
  const entry = await getContentEntry('fr', []);
  return buildEntryMetadata(entry, 'fr');
}

export default async function FrenchHomePage() {
  const entry = await getContentEntry('fr', []);
  return renderEntryPage(entry, 'fr');
}
