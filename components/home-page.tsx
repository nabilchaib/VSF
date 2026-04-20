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
      title: 'Helping communities protect soil, water, and land with vetiver.',
      body:
        'VSF helps communities and local partners use vetiver to protect soil, water, and land in real conditions.',
      supportingBody:
        'That work supports practical land restoration, local resilience, and solutions people can keep using on the ground.',
      donateLabel: 'Donate',
      involvedLabel: 'Get involved',
      learnMoreLabel: 'Learn what vetiver is',
      learnMoreHref: '/#vetiver-explainer',
      imageAlt: 'Vetiver planted along a roadside to stabilize land and protect surrounding soil.',
      highlight:
        'A practical plant matters when it helps protect fragile land without heavy infrastructure.'
    },
    impact: {
      eyebrow: 'How VSF helps',
      title: 'Turn understanding into practical field action.',
      body:
        'Your support helps VSF deliver site planning, local training, pilot support, and follow-through for communities using vetiver.',
      pillars: [
        {
          title: 'Learn',
          body: 'Vetiver is explained clearly and concretely, so first-time visitors can see how it protects soil and water.'
        },
        {
          title: 'Test',
          body: 'Projects are shaped around site conditions so the solution fits the problem rather than forcing a generic template.'
        },
        {
          title: 'Support',
          body: 'If you want to help, your support goes toward field work, project visibility, and long-term follow-through.'
        }
      ],
      donateLabel: 'Donate',
      supportingLabel: 'Get involved'
    },
    stories: {
      eyebrow: 'Latest stories',
      title: 'Field stories, project updates, and practical vetiver lessons.',
      body:
        'Recent updates show field work, local results, and the places where vetiver is making a difference.',
      ctaLabel: 'Read all stories'
    },
    getInvolved: {
      hubEyebrow: 'How to help',
      hubTitle: 'Support the work that protects soil, water, and land.',
      hubBody:
        'Donate, partner, propose a project, or stay connected to the field work.',
      hubCta: 'See ways to help',
      projectsEyebrow: 'Current work',
      projectsTitle: 'See active projects.',
      projectsBody:
        'Discover active field work and the places where support is already making a difference.',
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
        eyebrow: 'Bienvenue chez Vetiver Sans Frontières',
        title: 'Aider les communautés à protéger les sols, l’eau et les terres grâce au vétiver.',
        body:
          "Vetiver Sans Frontières aide les communautés et les partenaires locaux à utiliser le vétiver pour protéger les sols, l'eau et les terres dans des conditions réelles.",
        supportingBody:
          'Ce travail soutient une restauration concrète des terres, une résilience locale plus forte et des solutions de terrain durables.',
        donateLabel: 'Faire un don',
        involvedLabel: 'Participer',
        learnMoreLabel: 'Découvrir le vétiver',
        learnMoreHref: '/#vetiver-explainer',
        imageAlt: "Vetiver planté le long d'une route pour stabiliser les sols et protéger le terrain.",
        highlight:
          "Une plante utile compte lorsqu'elle aide à protéger des terres fragiles sans infrastructure lourde."
      },
      impact: {
        eyebrow: 'Comment VSF aide',
        title: 'Transformer la compréhension en action concrète sur le terrain.',
        body:
          "Votre soutien aide VSF à offrir la planification du site, la formation locale, l'appui aux projets pilotes et le suivi aux communautés qui utilisent le vétiver.",
        pillars: [
          {
            title: 'Apprendre',
            body: 'Le vétiver est expliqué clairement et concrètement, afin que les nouveaux visiteurs comprennent comment il protège les sols et l’eau.'
          },
          {
            title: 'Tester',
            body: 'Les projets sont adaptés aux conditions du site pour que la solution corresponde vraiment au besoin.'
          },
          {
            title: 'Soutenir',
            body: 'Si vous souhaitez aider, votre soutien va vers le terrain, la visibilité des projets et le suivi dans le temps.'
          }
        ],
        donateLabel: 'Faire un don',
        supportingLabel: 'Participer'
    },
      stories: {
        eyebrow: 'Dernières actualités',
        title: 'Récits de terrain, mises à jour de projets et leçons pratiques sur le vétiver.',
        body:
          "Les mises à jour récentes montrent le travail sur le terrain, les résultats locaux et les lieux où le vétiver fait une différence.",
        ctaLabel: 'Voir toutes les actualités'
      },
      getInvolved: {
        hubEyebrow: 'Comment aider',
        hubTitle: 'Soutenez un travail qui protège les sols, l’eau et les terres.',
        hubBody:
          'Faites un don, devenez partenaire, proposez un projet ou suivez le travail de terrain.',
        hubCta: 'Voir les façons d’aider',
        projectsEyebrow: 'Travail actuel',
        projectsTitle: 'Voir les projets actifs.',
        projectsBody:
          'Découvrez le travail en cours sur le terrain et les lieux où le soutien fait déjà une différence.',
        projectsCta: 'Voir les projets',
        projectsHref: '/projects'
      },
      newsletter: {
        eyebrow: 'Infolettre',
        title: 'Restez au plus près des projets sur le terrain.',
        body:
          'Recevez des nouvelles de terrain, des récits de projet et les étapes clés de Vetiver Sans Frontières.',
        note:
          'Une façon simple de suivre les progrès sans dépendre des réseaux sociaux.'
      }
  }
} as const;
