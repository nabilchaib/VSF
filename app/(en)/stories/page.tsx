import type { Metadata } from 'next';

import { PostCard } from '@/components/post-card';
import { getEntriesByType } from '@/lib/content';
import { getAbsoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Stories',
  description: 'Field stories, regenerative agriculture notes, and Vetiver Without Borders updates.'
};

export default async function StoriesPage() {
  const posts = await getEntriesByType('en', 'post');

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:px-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bark/70">Stories</p>
        <h1 className="text-4xl font-semibold text-bark md:text-5xl">Field updates and practical lessons from the ground.</h1>
        <p className="max-w-2xl text-lg leading-8 text-ink/75">
          Articles from Vetiver Without Borders on soil regeneration, climate adaptation, community work, and project implementation.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} entry={post} locale="en" />
        ))}
      </div>
      <link rel="canonical" href={getAbsoluteUrl('/stories')} />
    </section>
  );
}
