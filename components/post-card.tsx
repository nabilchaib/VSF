import { StoryCard } from '@/components/story-card';
import type { ContentEntry } from '@/lib/content';
import type { Locale } from '@/lib/site';

export function PostCard({ entry, locale }: { entry: ContentEntry; locale: Locale }) {
  return <StoryCard entry={entry} locale={locale} />;
}
