import { getContentEntry } from '@/lib/content';
import { buildHomepageMetadata } from '@/lib/homepage';
import { renderEntryPage } from '@/components/content-page';

export async function generateMetadata() {
  return buildHomepageMetadata('en');
}

export default async function HomePage() {
  const entry = await getContentEntry('en', []);
  return renderEntryPage(entry, 'en');
}
