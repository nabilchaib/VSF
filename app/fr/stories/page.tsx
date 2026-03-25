import type { Metadata } from 'next';

import { PostCard } from '@/components/post-card';
import { getEntriesByType } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Actualites',
  description:
    'Articles de Vetiver Without Borders sur la regeneration des sols, l adaptation climatique et les projets de terrain.'
};

export default async function FrenchStoriesPage() {
  const posts = await getEntriesByType('fr', 'post');

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:px-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bark/70">Actualites</p>
        <h1 className="text-4xl font-semibold text-bark md:text-5xl">
          Recits de terrain et enseignements pour la regeneration.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-ink/75">
          Articles de Vetiver Without Borders sur la regeneration des sols, l adaptation climatique, et les projets communautaires.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} entry={post} locale="fr" />
        ))}
      </div>
    </section>
  );
}
