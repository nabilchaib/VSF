import { Button } from '@/components/button';
import { Section } from '@/components/section';
import { StoryCard } from '@/components/story-card';
import type { ContentEntry } from '@/lib/content';
import { localePath, type Locale } from '@/lib/site';

type StoriesPreviewCopy = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
};

export function StoriesPreview({
  locale,
  posts,
  copy
}: {
  locale: Locale;
  posts: ContentEntry[];
  copy: StoriesPreviewCopy;
}) {
  return (
    <Section className="bg-white/72 py-14 lg:py-20">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{copy.title}</h2>
          <p className="text-lg leading-8 text-ink/74">{copy.body}</p>
        </div>
        <Button
          href={localePath('/stories', locale)}
          variant="tertiary"
          className="w-fit text-sm tracking-[0.16em]"
        >
          {copy.ctaLabel}
        </Button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <StoryCard key={post.slug} entry={post} locale={locale} />
        ))}
      </div>
    </Section>
  );
}
