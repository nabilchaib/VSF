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
      eyebrow: 'What is vetiver?',
      title: 'A practical grass for soil, water, and land.',
      body:
        'Vetiver is a deep-rooted grass used to slow runoff, hold soil in place, and make fragile ground easier to manage.',
      supportingBody:
        'Vetiver Without Borders helps communities learn, test, and apply vetiver-based solutions through field support, project partnerships, and public project pages.',
      donateLabel: 'Donate',
      involvedLabel: 'Get involved',
      learnMoreLabel: 'Learn what vetiver is',
      learnMoreHref: '/vetiver',
      imageAlt: 'Vetiver planted along a roadside to stabilize land and protect surrounding soil.',
      highlight:
        'Vetiver lasts when communities can understand it, try it in the field, and keep using it locally.'
    },
    impact: {
      eyebrow: 'How VSF helps',
      title: 'Turn understanding into practical field action.',
      body:
        'Your support helps VSF move from education to field delivery: site planning, local training, pilot support, and follow-through.',
      pillars: [
        {
          title: 'Learn',
          body: 'Visitors start with a plain-language explanation of vetiver before they are asked to support anything.'
        },
        {
          title: 'Test',
          body: 'Projects are shaped around site conditions so the solution fits the problem rather than forcing a generic template.'
        },
        {
          title: 'Support',
          body: 'Donors and partners can back field work, project visibility, and long-term follow-through.'
        }
      ],
      donateLabel: 'Donate',
      supportingLabel: 'Get involved'
    },
    stories: {
      eyebrow: 'Latest stories',
      title: 'Field stories, project updates, and practical vetiver lessons.',
      body:
        'Recent updates from projects and partners show how the work is moving on the ground.',
      ctaLabel: 'Read all stories'
    },
    getInvolved: {
      hubEyebrow: 'Take part',
      hubTitle: 'Choose the support path that fits you.',
      hubBody:
        'The support hub covers five routes: support VSF generally, support a field initiative, partner, propose, or follow and learn.',
      hubCta: 'Open support hub',
      projectsEyebrow: 'Current work',
      projectsTitle: 'Review live field initiatives.',
      projectsBody:
        'Projects are proof and campaign assets, not the whole strategy. Use them when you want to see what is active now.',
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
        eyebrow: "Qu'est-ce que le vétiver ?",
        title:
          "Une graminée pratique pour les sols, l'eau et les terres.",
        body:
        'Le vétiver est une graminée à racines profondes utilisée pour ralentir le ruissellement, retenir les sols et rendre les terres fragiles plus faciles à gérer.',
        supportingBody:
        'Vetiver Sans Frontières aide les communautés à apprendre, tester et appliquer des solutions basées sur le vétiver grâce au soutien de terrain, aux partenariats de projet et à des pages de projet publiques.',
        donateLabel: 'Faire un don',
        involvedLabel: 'Participer',
      learnMoreLabel: 'Découvrir le vetiver',
        learnMoreHref: '/vetiver',
      imageAlt: 'Vetiver planté le long d une route pour stabiliser les sols et protéger le terrain.',
        highlight:
        "Le vétiver dure quand les communautés peuvent le comprendre, l'essayer sur le terrain et continuer à l'utiliser localement."
      },
      impact: {
      eyebrow: 'Comment VSF aide',
      title: 'Transformer la compréhension en action concrète sur le terrain.',
      body:
        'Votre soutien aide VSF à passer de la formation à la mise en œuvre : planification du site, appui local, soutien aux projets pilotes et suivi.',
        pillars: [
        {
          title: 'Apprendre',
          body: "Les visiteurs commencent par une explication simple du vétiver avant qu'on leur demande de soutenir quoi que ce soit."
        },
        {
          title: 'Tester',
          body: 'Les projets sont adaptés aux conditions du site pour que la solution corresponde au problème.'
        },
        {
          title: 'Soutenir',
          body: 'Donateurs et partenaires peuvent appuyer le terrain, la visibilité des projets et le suivi dans le temps.'
        }
      ],
      donateLabel: 'Faire un don',
      supportingLabel: 'Participer'
    },
    stories: {
      eyebrow: 'Dernières actualités',
      title: 'Récits de terrain, mises à jour de projets et leçons pratiques sur le vetiver.',
      body:
        'Des nouvelles récentes des projets et des partenaires montrent comment le travail avance sur le terrain.',
      ctaLabel: 'Voir toutes les actualités'
    },
    getInvolved: {
      hubEyebrow: 'Passer à l action',
      hubTitle: 'Choisir la voie de soutien qui vous convient.',
      hubBody:
        'Le hub de soutien couvre cinq voies : soutenir VSF, appuyer une initiative de terrain, collaborer, proposer ou suivre et apprendre.',
      hubCta: 'Ouvrir le hub de soutien',
      projectsEyebrow: 'Travail actuel',
      projectsTitle: 'Consulter les initiatives de terrain en cours.',
      projectsBody:
      'Les projets sont des preuves et des éléments de campagne, pas toute la stratégie. Utilisez-les pour voir ce qui est actif maintenant.',
      projectsCta: 'Voir les projets',
      projectsHref: '/projects'
    },
    newsletter: {
      eyebrow: 'Infolettre',
      title: 'Restez proches des projets sur le terrain.',
      body:
        'Recevez des nouvelles de terrain, des récits de projets et les étapes importantes de Vetiver Sans Frontières.',
      note:
        'Une façon simple de suivre les progrès sans dépendance aux réseaux sociaux.'
    }
  }
} as const;
