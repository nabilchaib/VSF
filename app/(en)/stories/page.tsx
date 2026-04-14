import type { Metadata } from 'next';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { StoryCard } from '@/components/story-card';
import { getEntriesByType } from '@/lib/content';
import { localePath } from '@/lib/site';
import { getAbsoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Stories',
  description:
    'Field stories, project updates, and clear next steps across vetiver, projects, and partnerships.'
};

export default async function StoriesPage() {
  const posts = await getEntriesByType('en', 'post');

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:px-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bark/70">Stories</p>
        <h1 className="text-4xl font-semibold text-bark md:text-5xl">Field stories that lead to a next step.</h1>
        <p className="max-w-2xl text-lg leading-8 text-ink/75">
          Articles from Vetiver Without Borders on field work, project updates, and the next route that fits the story.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <StoryCard key={post.slug} entry={post} locale="en" />
        ))}
      </div>
      <Container>
        <div className="rounded-[2.2rem] border border-bark/10 bg-white px-7 py-8 shadow-card lg:px-9">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">Looking for a next step?</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Choose the route that matches the story.</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-ink/72">
            Stories point to learning, project support, partnership, and new ideas. Pick the route that fits what you want to do next.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={localePath('/vetiver', 'en')} variant="secondary">
              Learn about vetiver
            </Button>
            <Button href={localePath('/projects', 'en')} variant="secondary">
              Browse projects
            </Button>
            <Button href={localePath('/get-involved', 'en')} variant="secondary">
              Get involved
            </Button>
          </div>
        </div>
      </Container>
      <link rel="canonical" href={getAbsoluteUrl('/stories')} />
    </section>
  );
}
