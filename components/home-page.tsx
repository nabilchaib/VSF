import { VetiverExplainerSection } from '@/components/vetiver-explainer-section';
import { VetiverProofPoints } from '@/components/vetiver-proof-points';
import { GetInvolvedSection } from '@/components/get-involved-section';
import { HeroSection } from '@/components/hero-section';
import { ImpactSection } from '@/components/impact-section';
import { NewsletterSection } from '@/components/newsletter-section';
import { RdcProjectPromo } from '@/components/rdc-project-hub';
import { StoriesPreview } from '@/components/stories-preview';
import type { ContentEntry } from '@/lib/content';
import type { Locale } from '@/lib/site';

type HomePageProps = {
  locale: Locale;
  posts: ContentEntry[];
};

export function HomePage({ locale, posts }: HomePageProps) {
  const copy = homepageCopy[locale];

  return (
    <div className="pb-16 lg:pb-20">
      <HeroSection locale={locale} copy={copy.hero} />
      <VetiverExplainerSection locale={locale} />
      <VetiverProofPoints locale={locale} />
      <ImpactSection locale={locale} copy={copy.impact} />
      <RdcProjectPromo locale={locale} />
      <StoriesPreview locale={locale} posts={posts} copy={copy.stories} />
      <GetInvolvedSection locale={locale} copy={copy.getInvolved} />
      <NewsletterSection locale={locale} copy={copy.newsletter} />
    </div>
  );
}

const homepageCopy = {
  en: {
    hero: {
      eyebrow: 'Welcome to Vetiver Without Borders',
      title: 'Helping communities turn vetiver into practical resilience.',
      body:
        'VSF works with communities and local partners to understand, test, and apply vetiver-based solutions for soil, water, and land restoration.',
      supportingBody:
        'Start with the explainer below, then choose a path to donate, get involved, review current projects, or follow recent stories.',
      donateLabel: 'Donate',
      involvedLabel: 'Get involved',
      learnMoreLabel: 'Learn what vetiver is',
      learnMoreHref: '/#vetiver-explainer',
      imageAlt: 'Vetiver planted along a roadside to stabilize land and protect surrounding soil.',
      highlight:
        'Practical change starts when a community can understand the plant, test it in context, and keep using it locally.'
    },
    impact: {
      eyebrow: 'How VSF helps',
      title: 'Turn understanding into practical field action.',
      body:
        'Your support helps VSF turn learning into field delivery: site planning, local training, pilot support, and follow-through.',
      pillars: [
        {
          title: 'Learn',
          body: 'Start with a plain-language explanation of vetiver, then choose the next step that fits you.'
        },
        {
          title: 'Test',
          body: 'Projects are shaped around site conditions so the solution fits the problem rather than forcing a generic template.'
        },
        {
          title: 'Support',
          body: 'If you want to help, you can back field work, project visibility, and long-term follow-through.'
        }
      ],
      donateLabel: 'Donate',
      supportingLabel: 'Get involved'
    },
    stories: {
      eyebrow: 'Latest stories',
      title: 'Field stories, project updates, and practical vetiver lessons.',
      body:
        'Recent updates show how vetiver work is moving from explanation into practice.',
      ctaLabel: 'Read all stories'
    },
    getInvolved: {
      hubEyebrow: 'Take part',
      hubTitle: 'Choose the support path that fits you.',
      hubBody:
        'Use the support hub to choose the next step: donate, back a field initiative, partner, propose, or follow along.',
      hubCta: 'Open support hub',
      projectsEyebrow: 'Current work',
      projectsTitle: 'Review live field initiatives.',
      projectsBody:
        'Projects show what is active now and where support is being applied.',
      projectsCta: 'See current projects',
      projectsHref: '/projects'
    },
    newsletter: {
      eyebrow: 'Newsletter',
      title: 'Stay close to the projects on the ground.',
      body:
        'Receive field updates, project stories, and important milestones from Vetiver Without Borders.',
      note:
        'A concise way to follow progress without relying on social media.'
    }
  },
    fr: {
      hero: {
        eyebrow: 'Bienvenue chez Vetiver Sans Frontieres',
        title: 'Aider les communautes a transformer le vetiver en resilience concrete.',
        body:
          "Vetiver Sans Frontieres travaille avec les communautes et les partenaires locaux pour comprendre, tester et appliquer des solutions a base de vetiver pour les sols, l'eau et la restauration des terres.",
        supportingBody:
          "Commencez par l'explication ci-dessous, puis choisissez une voie pour faire un don, participer, consulter les projets en cours ou suivre les recits recents.",
        donateLabel: 'Faire un don',
        involvedLabel: 'Participer',
        learnMoreLabel: 'Decouvrir le vetiver',
        learnMoreHref: '/#vetiver-explainer',
        imageAlt: "Vetiver plante le long d'une route pour stabiliser les sols et proteger le terrain.",
        highlight:
          "Le changement concret commence quand une communaute peut comprendre la plante, la tester dans son contexte et continuer a l'utiliser localement."
      },
      impact: {
        eyebrow: 'Comment VSF aide',
        title: 'Transformer la compréhension en action concrète sur le terrain.',
        body:
          "Votre soutien aide VSF a transformer la comprehension en mise en oeuvre sur le terrain : planification du site, formation locale, appui aux projets pilotes et suivi.",
        pillars: [
          {
            title: 'Apprendre',
            body: 'Commencez par une explication simple du vetiver, puis choisissez la prochaine etape qui vous convient.'
          },
          {
            title: 'Tester',
            body: 'Les projets sont adaptes aux conditions du site pour que la solution corresponde au probleme.'
          },
          {
            title: 'Soutenir',
            body: 'Si vous souhaitez aider, vous pouvez appuyer le terrain, la visibilite des projets et le suivi dans le temps.'
          }
        ],
        donateLabel: 'Faire un don',
        supportingLabel: 'Participer'
    },
      stories: {
        eyebrow: 'Dernières actualités',
        title: 'Récits de terrain, mises à jour de projets et leçons pratiques sur le vétiver.',
        body:
          "Les mises a jour recentes montrent comment le travail sur le vetiver passe de l'explication a la pratique.",
        ctaLabel: 'Voir toutes les actualités'
      },
      getInvolved: {
        hubEyebrow: 'Passer à l’action',
        hubTitle: 'Choisir la voie de soutien qui vous convient.',
        hubBody:
          'Le hub de soutien vous aide a choisir la prochaine etape : don, appui a une initiative de terrain, partenariat, proposition ou suivi.',
        hubCta: 'Ouvrir le hub de soutien',
        projectsEyebrow: 'Travail actuel',
        projectsTitle: 'Consulter les initiatives de terrain en cours.',
        projectsBody:
          'Les projets montrent ce qui est actif maintenant et ou le soutien est applique.',
        projectsCta: 'Voir les projets',
        projectsHref: '/projects'
      },
      newsletter: {
        eyebrow: 'Infolettre',
        title: 'Restez proches des projets sur le terrain.',
        body:
          'Recevez des nouvelles de terrain, des recits de projet et les etapes cles de Vetiver Sans Frontieres.',
        note:
        'Une façon simple de suivre les progrès sans dépendance aux réseaux sociaux.'
      }
  }
} as const;
