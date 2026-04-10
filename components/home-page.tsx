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
      title: 'A remarkable plant for soil, water, and community resilience.',
      body:
        'Vetiver is a deep-rooted grass used to slow runoff, hold soil in place, and make fragile landscapes easier to work with.',
      supportingBody:
        'Vetiver Without Borders helps communities learn, test, and apply vetiver-based solutions through field work, technical support, partnerships, and public evidence.',
      donateLabel: 'Donate',
      involvedLabel: 'Get involved',
      learnMoreLabel: 'Learn what vetiver is',
      learnMoreHref: '/vetiver',
      imageAlt: 'Vetiver planted along a roadside to stabilize land and protect surrounding soil.',
      highlight:
        'A practical plant-based technology becomes durable when communities can understand it, trust it, and maintain it locally.'
    },
    impact: {
      eyebrow: 'How VSF helps',
      title: 'Turn understanding into practical field action.',
      body:
        'Your support helps VSF move from education to implementation: site planning, local training, pilot support, and the evidence needed to keep the work credible.',
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
          body: 'Donors and partners can back field work, evidence gathering, and long-term follow-through.'
        }
      ],
      donateLabel: 'Donate',
      supportingLabel: 'Get involved'
    },
    stories: {
      eyebrow: 'Latest stories',
      title: 'Field stories, project evidence, and practical vetiver lessons.',
      body:
        'Recent updates from projects, partners, and the practical work of turning vetiver into action.',
      ctaLabel: 'Read all stories'
    },
    getInvolved: {
      involvedEyebrow: 'Take part',
      involvedTitle: 'Choose the next step that fits your interest.',
      involvedBody:
        'Whether you want to donate, sponsor a project, propose a collaboration, or simply learn more first, there is a path for you.',
      involvedCta: 'Get involved',
      partnerTitle: 'Sponsor the RDC hub',
      partnerBody:
        'Review the Congo Basin project path, then contact us if you want to support a specific initiative or the evidence work behind it.',
      partnerCta: 'Open RDC hub',
      partnerHref: '/projects/rdc'
    },
    newsletter: {
      eyebrow: 'Newsletter',
      title: 'Stay close to the projects on the ground.',
      body:
        'Receive field updates, project stories, and major milestones from Vetiver Without Borders.',
      note:
        'A concise way to follow progress without relying on social media.'
    }
  },
  fr: {
    hero: {
      eyebrow: 'Qu est-ce que le vetiver ?',
      title:
        'Une plante remarquable pour les sols, l eau et la resilience communautaire.',
      body:
        'Le vetiver est une graminee a racines profondes utilisee pour ralentir le ruissellement, retenir les sols et rendre les paysages fragiles plus faciles a travailler.',
      supportingBody:
        'Vetiver Sans Frontieres aide les communautes a apprendre, tester et appliquer des solutions basees sur le vetiver grace au terrain, au soutien technique, aux partenariats et aux preuves publiques.',
      donateLabel: 'Faire un don',
      involvedLabel: 'Participer',
      learnMoreLabel: 'Decouvrir le vetiver',
      learnMoreHref: '/vetiver',
      imageAlt: 'Vetiver plante le long d une route pour stabiliser les sols et proteger le terrain.',
      highlight:
        'Une technologie pratique devient durable quand les communautes peuvent la comprendre, lui faire confiance et la maintenir localement.'
    },
    impact: {
      eyebrow: 'Comment VSF aide',
      title: 'Transformer la comprehension en action concrete sur le terrain.',
      body:
        'Votre soutien aide VSF a passer de l education a la mise en oeuvre : planification du site, formation locale, appui aux projets pilotes et preuves necessaires pour garder la credibilite.',
      pillars: [
        {
          title: 'Apprendre',
          body: 'Les visiteurs commencent par une explication simple du vetiver avant qu on leur demande de soutenir quoi que ce soit.'
        },
        {
          title: 'Tester',
          body: 'Les projets sont adaptes aux conditions du site pour que la solution corresponde au probleme.'
        },
        {
          title: 'Soutenir',
          body: 'Donateurs et partenaires peuvent appuyer le terrain, les preuves et le suivi dans le temps.'
        }
      ],
      donateLabel: 'Faire un don',
      supportingLabel: 'Participer'
    },
    stories: {
      eyebrow: 'Dernieres actualites',
      title: 'Recits de terrain, preuves de projet et lecons pratiques sur le vetiver.',
      body:
        'Des nouvelles recentes des projets, des partenaires et du travail concret qui transforme le vetiver en action.',
      ctaLabel: 'Voir toutes les actualites'
    },
    getInvolved: {
      involvedEyebrow: 'Passer a l action',
      involvedTitle: 'Choisir la prochaine etape qui vous correspond.',
      involvedBody:
        'Que vous souhaitiez donner, parrainer un projet, proposer une collaboration ou commencer par comprendre la plante, il existe un chemin pour vous.',
      involvedCta: 'Participer',
      partnerTitle: 'Parrainer le hub RDC',
      partnerBody:
        'Consultez la trajectoire du projet Congo, puis contactez-nous si vous souhaitez soutenir une initiative precise ou le travail de preuves.',
      partnerCta: 'Ouvrir le hub RDC',
      partnerHref: '/projects/rdc'
    },
    newsletter: {
      eyebrow: 'Infolettre',
      title: 'Restez proches des projets sur le terrain.',
      body:
        'Recevez des nouvelles de terrain, des recits de projets et les etapes importantes de Vetiver Sans Frontieres.',
      note:
        'Une facon simple de suivre les progres sans dependance aux reseaux sociaux.'
    }
  }
} as const;
