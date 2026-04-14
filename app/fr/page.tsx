import { getContentEntry } from '@/lib/content';
import { buildHomepageMetadata } from '@/lib/homepage';
import { renderEntryPage } from '@/components/content-page';

export async function generateMetadata() {
  return buildHomepageMetadata('fr');
}

export default async function FrenchHomePage() {
  const entry = await getContentEntry('fr', []);
  return renderEntryPage(entry, 'fr');
}
