import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { DONATE_URL, localePath, type Locale } from '@/lib/site';

type RouteAction = {
  label: string;
  href: string;
  external?: boolean;
  variant: 'primary' | 'secondary' | 'tertiary';
};

type RouteCard = {
  eyebrow: string;
  title: string;
  body: string;
  featured?: boolean;
  actions: RouteAction[];
};

type PageCopy = {
  title: string;
  subtitle: string;
  routesEyebrow: string;
  routesTitle: string;
  routesBody: string;
  routes: RouteCard[];
};

export function GetInvolvedPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        image="2026/02/Gemini_Generated_Image_7fcdjg7fcdjg7fcd-scaled.webp"
        align="left"
      />

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/58">
                {t.routesEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
                {t.routesTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-ink/72">{t.routesBody}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {t.routes.map((route) => (
                <RouteCardView key={route.title} locale={locale} route={route} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function RouteCardView({ locale, route }: { locale: Locale; route: RouteCard }) {
  const featured = Boolean(route.featured);

  return (
    <article
      className={[
        'flex h-full flex-col rounded-[2.2rem] border border-bark/10 px-6 py-7 shadow-card lg:px-7',
        featured ? 'bg-bark text-white shadow-soft xl:col-span-2' : 'bg-white text-ink'
      ].join(' ')}
    >
      <p
        className={[
          'text-sm font-semibold uppercase tracking-[0.2em]',
          featured ? 'text-surface/74' : 'text-bark/58'
        ].join(' ')}
      >
        {route.eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-semibold leading-tight">{route.title}</h3>
      <p className={['mt-4 text-base leading-8', featured ? 'text-white/76' : 'text-ink/72'].join(' ')}>
        {route.body}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {route.actions.map((action) => (
          <Button
            key={action.label}
            href={action.external ? action.href : localePath(action.href, locale)}
            external={action.external}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noreferrer' : undefined}
            variant={action.variant}
            className={
              featured && action.variant !== 'primary'
                ? 'border-white/14 bg-white/10 text-white hover:border-white/24 hover:bg-white/14'
                : undefined
            }
          >
            {action.label}
          </Button>
        ))}
      </div>
    </article>
  );
}

const copy: Record<Locale, PageCopy> = {
  en: {
    title: 'Choose how to take part',
    subtitle:
      'Start with the path that fits your role. This hub routes support, partnerships, project ideas, and learning without depending on any single project.',
    routesEyebrow: 'Five routes',
    routesTitle: 'One hub, five clear next steps.',
    routesBody:
      'Support VSF generally, back a field initiative, partner, propose a project, or follow and learn first.',
    routes: [
      {
        eyebrow: 'Support VSF',
        title: 'Donate to the work itself.',
        body: 'Use this route when you want to back the organization directly and help keep the field work moving.',
        featured: true,
        actions: [
          {
            label: 'Donate now',
            href: DONATE_URL,
            external: true,
            variant: 'primary'
          }
        ]
      },
      {
        eyebrow: 'Support a field initiative',
        title: 'Review current projects.',
        body: 'Use this route when you want to back a specific field effort or see what is active now.',
        actions: [
          {
            label: 'See current initiatives',
            href: '/projects',
            variant: 'secondary'
          }
        ]
      },
      {
        eyebrow: 'Partner with VSF',
        title: 'Start a collaboration conversation.',
        body: 'Use this route for institutional support, technical exchange, or a partnership fit check.',
        actions: [
          {
            label: 'Contact VSF',
            href: '/about/contact',
            variant: 'secondary'
          }
        ]
      },
      {
        eyebrow: 'Propose a project',
        title: 'Share a local need or site idea.',
        body: 'Use this route if you have a location, problem, or project concept you want VSF to review.',
        actions: [
          {
            label: 'Propose a project',
            href: '/projects/propose',
            variant: 'secondary'
          }
        ]
      },
      {
        eyebrow: 'Follow and learn',
        title: 'Learn the vetiver system before you act.',
        body: 'Use this route if you want context first. Read the vetiver guide, then follow field stories and updates.',
        actions: [
          {
            label: 'Learn about vetiver',
            href: '/vetiver',
            variant: 'secondary'
          },
          {
            label: 'Read stories',
            href: '/stories',
            variant: 'tertiary'
          }
        ]
      }
    ]
  },
  fr: {
    title: 'Choisissez comment participer',
    subtitle:
      'Commencez par la voie qui correspond a votre role. Ce hub oriente le soutien, les partenariats, les idees de projet et l apprentissage sans dependre d un seul projet.',
    routesEyebrow: 'Cinq voies',
    routesTitle: 'Un hub, cinq prochaines etapes claires.',
    routesBody:
      'Soutenez VSF, appuyez une initiative de terrain, collaborez, proposez un projet, ou commencez par suivre et apprendre.',
    routes: [
      {
        eyebrow: 'Soutenir VSF',
        title: 'Faire un don pour le travail lui-meme.',
        body: 'Utilisez cette voie si vous voulez soutenir directement l organisation et aider le travail de terrain a avancer.',
        featured: true,
        actions: [
          {
            label: 'Faire un don',
            href: DONATE_URL,
            external: true,
            variant: 'primary'
          }
        ]
      },
      {
        eyebrow: 'Soutenir une initiative de terrain',
        title: 'Consulter les projets en cours.',
        body: 'Utilisez cette voie si vous voulez appuyer un effort precis sur le terrain ou voir ce qui est actif maintenant.',
        actions: [
          {
            label: 'Voir les initiatives',
            href: '/projects',
            variant: 'secondary'
          }
        ]
      },
      {
        eyebrow: 'Collaborer avec VSF',
        title: 'Lancer une discussion de collaboration.',
        body: 'Utilisez cette voie pour un soutien institutionnel, un echange technique ou verifier l adequation d un partenariat.',
        actions: [
          {
            label: 'Contacter VSF',
            href: '/about/contact',
            variant: 'secondary'
          }
        ]
      },
      {
        eyebrow: 'Proposer un projet',
        title: 'Partager un besoin local ou une idee de site.',
        body: 'Utilisez cette voie si vous avez un lieu, un probleme ou un concept de projet que VSF doit examiner.',
        actions: [
          {
            label: 'Proposer un projet',
            href: '/projects/propose',
            variant: 'secondary'
          }
        ]
      },
      {
        eyebrow: 'Suivre et apprendre',
        title: 'Comprendre le systeme vetiver avant d agir.',
        body: 'Utilisez cette voie si vous voulez d abord du contexte. Lisez le guide vetiver, puis suivez les recits et les mises a jour.',
        actions: [
          {
            label: 'Decouvrir le vetiver',
            href: '/vetiver',
            variant: 'secondary'
          },
          {
            label: 'Lire les recits',
            href: '/stories',
            variant: 'tertiary'
          }
        ]
      }
    ]
  }
};
