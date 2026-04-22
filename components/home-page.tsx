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
      title: 'Helping communities stabilize fragile land and manage water with vetiver.',
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
      eyebrow: 'How vetiver helps',
      title: 'Reported outcomes from real field conditions.',
      body:
        'Every figure is flagged as reported, cited, or a planning reference. Treat them as working benchmarks, not guarantees — results vary by site and management.',
      stats: [
        {
          qualifier: 'Reported',
          value: '90%',
          body: 'Reported soil-loss reduction from vetiver hedgerows on vulnerable ground. Results vary by site and management.'
        },
        {
          qualifier: 'Reported',
          value: '3–5 m',
          body: 'Typical root depth observed in field conditions. That depth is what holds soil in place through heavy rain.'
        },
        {
          qualifier: 'Planning ref',
          value: '30+',
          body: 'Countries where vetiver is cited in land and water planning references.'
        }
      ]
    },
    stories: {
      eyebrow: 'Latest stories',
      title: 'Field stories, project updates, and practical vetiver lessons.',
      body:
        'Recent updates show field work, local results, and the places where vetiver is making a difference.',
      ctaLabel: 'Read all stories'
    },
    getInvolved: {
      hubEyebrow: 'Support the work',
      hubTitle: 'Donations go toward field work, training, and local partnerships.',
      hubBody:
        'Canadian tax receipts available for eligible donations. Every contribution supports reported project outcomes.',
      donateCta: 'Donate now',
      monthlyGivingCta: 'Monthly giving',
      partnerEyebrow: 'Partner with VSF',
      partnerTitle: 'Propose a project, partner, or stay connected.',
      partnerBody:
        'Organizations and field partners can reach out about proposed projects, cited planning references, or general collaboration.',
      contactCta: 'Contact VSF',
      stayConnectedCta: 'Stay connected'
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
        title: 'Aider les communautés à stabiliser les sols fragiles et mieux gérer l’eau grâce au vétiver.',
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
        eyebrow: "Comment le vétiver aide",
        title: "Résultats rapportés dans des conditions réelles de terrain.",
        body:
          "Chaque chiffre est identifié comme rapporté, cité ou référence de planification. Traitez-les comme des repères de travail, pas des garanties — les résultats varient selon le site et la gestion.",
        stats: [
          {
            qualifier: "Rapporté",
            value: "90%",
            body: "Réduction déclarée de la perte de sol par les haies de vétiver sur terrain vulnérable. Les résultats varient selon le site et la gestion."
          },
          {
            qualifier: "Rapporté",
            value: "3–5 m",
            body: "Profondeur de racine typique observée sur le terrain. Cette profondeur maintient le sol en place pendant les pluies intenses."
          },
          {
            qualifier: "Référence",
            value: "30+",
            body: "Pays où le vétiver est cité dans des références de planification foncière et hydraulique."
          }
        ]
    },
      stories: {
        eyebrow: 'Dernières actualités',
        title: 'Récits de terrain, mises à jour de projets et leçons pratiques sur le vétiver.',
        body:
          "Les mises à jour récentes montrent le travail sur le terrain, les résultats locaux et les lieux où le vétiver fait une différence.",
        ctaLabel: 'Voir toutes les actualités'
      },
      getInvolved: {
        hubEyebrow: "Soutenir le travail",
        hubTitle: "Les dons vont au travail de terrain, à la formation et aux partenariats locaux.",
        hubBody:
          "Reçus fiscaux canadiens disponibles pour les dons admissibles. Chaque contribution soutient des résultats de projet rapportés.",
        donateCta: "Faire un don",
        monthlyGivingCta: "Don mensuel",
        partnerEyebrow: "Partenariat avec VSF",
        partnerTitle: "Proposez un projet, devenez partenaire ou restez connecté.",
        partnerBody:
          "Les organisations et partenaires de terrain peuvent nous contacter pour des projets proposés, des références de planification ou une collaboration générale.",
        contactCta: "Contacter VSF",
        stayConnectedCta: "Rester connecté"
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
