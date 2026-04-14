import type { Metadata } from 'next';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { StoryCard } from '@/components/story-card';
import { getEntriesByType } from '@/lib/content';
import { localePath } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Actualités',
  description:
    'Articles de Vetiver Sans Frontieres sur le terrain, les projets et les prochaines étapes selon chaque récit.'
};

export default async function FrenchStoriesPage() {
  const posts = await getEntriesByType('fr', 'post');

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:px-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bark/70">Actualités</p>
        <h1 className="text-4xl font-semibold text-bark md:text-5xl">
          Des récits qui ouvrent sur une prochaine étape.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-ink/75">
          Articles de Vetiver Sans Frontieres sur le travail de terrain, les projets et la voie la plus utile après la lecture.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <StoryCard key={post.slug} entry={post} locale="fr" />
        ))}
      </div>
      <Container>
        <div className="rounded-[2.2rem] border border-bark/10 bg-white px-7 py-8 shadow-card lg:px-9">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">Vous cherchez la suite ?</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Choisissez la voie qui correspond au récit.</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-ink/72">
            Les récits orientent vers l'apprentissage, le soutien des projets, le partenariat et les nouvelles idées. Choisissez la suite qui vous convient.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={localePath('/vetiver', 'fr')} variant="secondary">
              Découvrir le vétiver
            </Button>
            <Button href={localePath('/projects', 'fr')} variant="secondary">
              Parcourir les projets
            </Button>
            <Button href={localePath('/get-involved', 'fr')} variant="secondary">
              Participer
            </Button>
            <Button href={localePath('/about/contact', 'fr')} variant="tertiary">
              Contacter VSF
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
