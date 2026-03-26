import { GetInvolvedSection } from '@/components/get-involved-section';
import { HeroSection } from '@/components/hero-section';
import { ImpactSection } from '@/components/impact-section';
import { MissionSection } from '@/components/mission-section';
import { NewsletterSection } from '@/components/newsletter-section';
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
      <MissionSection locale={locale} copy={copy.mission} />
      <ImpactSection locale={locale} copy={copy.impact} />
      <StoriesPreview locale={locale} posts={posts} copy={copy.stories} />
      <GetInvolvedSection locale={locale} copy={copy.getInvolved} />
      <NewsletterSection locale={locale} copy={copy.newsletter} />
    </div>
  );
}

const homepageCopy = {
  en: {
    hero: {
      eyebrow: 'Regenerative action',
      title:
        'Helping communities restore land, protect water, and build climate resilience.',
      body:
        'Vetiver Without Borders works with communities facing climate stress to turn ecological restoration into practical, field-ready action.',
      supportingBody:
        'Using the Vetiver System, we pair local knowledge with proven environmental design to stabilize soil, retain water, and support long-term recovery.',
      donateLabel: 'Donate',
      involvedLabel: 'Get involved',
      learnMoreLabel: 'Learn more',
      imageAlt: 'Vetiver planted along a roadside to stabilize land and protect surrounding soil.',
      highlight:
        'Community-led projects that translate ecological science into credible, long-term protection for land and water.'
    },
    mission: {
      eyebrow: 'Our mission',
      title: 'Practical ecological tools for places under pressure.',
      bodyOne:
        'VSF helps partners apply Vetiver grass technology where erosion, runoff, and land degradation threaten livelihoods and local ecosystems.',
      bodyTwo:
        'Our approach stays grounded in implementation: train local teams, establish plant material, and build simple systems communities can maintain over time.',
      points: [
        {
          title: 'Soil protection',
          body: 'Vetiver hedgerows slow runoff, stabilize slopes, and reduce erosion on vulnerable land.'
        },
        {
          title: 'Water retention',
          body: 'Field layouts improve infiltration and help communities keep more water where it is needed.'
        },
        {
          title: 'Local capacity',
          body: 'Projects are designed to be taught, replicated, and maintained by local partners.'
        }
      ],
      ctaLabel: 'Learn more',
      imageAlt: 'A field project showing Vetiver used for land protection and restoration.'
    },
    impact: {
      eyebrow: 'Why support VSF',
      title: 'Support work that stays useful after the first intervention.',
      body:
        'Your support helps VSF build durable systems on the ground, from training and nursery development to project design and implementation support.',
      pillars: [
        {
          title: 'Low-tech, field-ready',
          body: 'Solutions are designed for real operating conditions, not idealized pilot environments.'
        },
        {
          title: 'Grounded in stewardship',
          body: 'Projects focus on land care, water security, and practical resilience for local communities.'
        },
        {
          title: 'Built to spread',
          body: 'Knowledge transfer and local ownership make each project more useful beyond a single site.'
        }
      ],
      donateLabel: 'Donate',
      supportingLabel: 'Get involved'
    },
    stories: {
      eyebrow: 'Latest stories',
      title: 'Field stories and lessons from current work.',
      body:
        'Recent updates from projects, partners, and regenerative work on the ground.',
      ctaLabel: 'Read all stories'
    },
    getInvolved: {
      involvedEyebrow: 'Take part',
      involvedTitle: 'Get involved in the work behind the mission.',
      involvedBody:
        'Whether you want to back a project, propose a collaboration, or support implementation, your participation helps credible ecological work move forward.',
      involvedCta: 'Get involved',
      partnerTitle: 'Partner with VSF',
      partnerBody:
        'We collaborate with organizations, practitioners, and local leaders who want practical, nonprofit-oriented solutions for land and water restoration.',
      contactLabel: 'Contact us'
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
      eyebrow: 'Action regenerative',
      title:
        'Aider les communautes a restaurer les sols, proteger l eau et renforcer leur resilience climatique.',
      body:
        'Vetiver Sans Frontieres travaille avec des communautes confrontees au stress climatique pour transformer la restauration ecologique en action concrete sur le terrain.',
      supportingBody:
        'Avec le Systeme Vetiver, nous combinons savoir local et solutions eprouvees pour stabiliser les sols, retenir l eau et soutenir une rehabilitation durable.',
      donateLabel: 'Faire un don',
      involvedLabel: 'Participer',
      learnMoreLabel: 'En savoir plus',
      imageAlt: 'Vetiver plante le long d une route pour stabiliser les sols et proteger le terrain.',
      highlight:
        'Des projets portes par les communautes qui traduisent la science ecologique en protection durable des sols et de l eau.'
    },
    mission: {
      eyebrow: 'Notre mission',
      title: 'Des outils ecologiques concrets pour les territoires sous pression.',
      bodyOne:
        'VSF aide ses partenaires a deployer la technologie du Vetiver la ou l erosion, le ruissellement et la degradation des terres menacent les moyens de subsistance et les ecosystemes.',
      bodyTwo:
        'Notre approche reste axee sur la mise en oeuvre: former les equipes locales, etablir le materiel vegetal et construire des systemes simples qui peuvent etre entretenus dans le temps.',
      points: [
        {
          title: 'Protection des sols',
          body: 'Les haies de Vetiver ralentissent le ruissellement, stabilisent les pentes et limitent l erosion.'
        },
        {
          title: 'Retention de l eau',
          body: 'Les amenagements de terrain ameliorent l infiltration et conservent davantage d eau sur place.'
        },
        {
          title: 'Capacite locale',
          body: 'Les projets sont pensés pour etre transmis, reproduits et maintenus par les partenaires locaux.'
        }
      ],
      ctaLabel: 'En savoir plus',
      imageAlt: 'Un projet de terrain utilisant le Vetiver pour proteger et restaurer les sols.'
    },
    impact: {
      eyebrow: 'Pourquoi soutenir VSF',
      title: 'Soutenir un travail utile bien apres la premiere intervention.',
      body:
        'Votre soutien aide VSF a construire des systemes durables sur le terrain, de la formation aux pepinieres en passant par la conception et l accompagnement des projets.',
      pillars: [
        {
          title: 'Simple et applicable',
          body: 'Les solutions sont concues pour les conditions reelles du terrain, pas pour des contextes ideaux.'
        },
        {
          title: 'Ancre dans le territoire',
          body: 'Les projets priorisent les sols, l eau et la resilience pratique des communautes.'
        },
        {
          title: 'Concu pour se diffuser',
          body: 'Le transfert de savoir et l appropriation locale donnent plus de portee a chaque projet.'
        }
      ],
      donateLabel: 'Faire un don',
      supportingLabel: 'Participer'
    },
    stories: {
      eyebrow: 'Dernieres actualites',
      title: 'Recits de terrain et apprentissages recents.',
      body:
        'Des nouvelles recentes des projets, des partenaires et du travail regeneratif sur le terrain.',
      ctaLabel: 'Voir toutes les actualites'
    },
    getInvolved: {
      involvedEyebrow: 'Passer a l action',
      involvedTitle: 'Contribuer au travail qui soutient la mission.',
      involvedBody:
        'Que vous souhaitiez appuyer un projet, proposer une collaboration ou soutenir la mise en oeuvre, votre participation aide des solutions credibles a avancer.',
      involvedCta: 'Participer',
      partnerTitle: 'Collaborer avec VSF',
      partnerBody:
        'Nous travaillons avec des organisations, des praticiens et des leaders locaux qui cherchent des solutions concretes et orientees terrain pour restaurer les sols et l eau.',
      contactLabel: 'Nous contacter'
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
