import type { Locale } from '@/lib/site';

export type VetiverExplainerCard = {
  title: string;
  body: string;
};

export type VetiverProofPoint = {
  value: string;
  label: string;
  body: string;
};

type VetiverExplainerCopy = {
  eyebrow: string;
  title: string;
  bodyOne: string;
  bodyTwo: string;
  cards: VetiverExplainerCard[];
  primaryCta: string;
  secondaryCta: string;
};

type VetiverProofPointsCopy = {
  eyebrow: string;
  title: string;
  note: string;
  points: VetiverProofPoint[];
};

export const VETIVER_EXPLAINER: Record<Locale, VetiverExplainerCopy> = {
  en: {
    eyebrow: 'What is vetiver?',
    title: 'A deep-rooted grass for soil and water protection.',
    bodyOne:
      'Vetiver is a practical grass used around the world to slow runoff, hold soil in place, and make fragile ground easier to manage.',
    bodyTwo:
      'VSF helps communities learn, test, and apply vetiver-based solutions through field support, project partnerships, and clear public examples.',
    cards: [
      {
        title: 'Why it stands out',
        body: 'It is low-cost, resilient, and adaptable across many soils and climates, so the idea can travel without heavy infrastructure.'
      },
      {
        title: 'What it can do',
        body: 'Reduce erosion, stabilize slopes, improve infiltration, and protect roads, fields, and vulnerable land.'
      },
      {
        title: 'How VSF helps',
        body: 'We support education, site design, planting, and the follow-through needed to make the work stick.'
      },
      {
        title: 'What comes next',
        body: 'Visitors can learn, support a project, partner, or propose a new initiative once they understand the plant.'
      }
    ],
    primaryCta: 'Learn about vetiver',
    secondaryCta: 'See current projects'
  },
  fr: {
    eyebrow: "Qu'est-ce que le vétiver ?",
    title: 'Une graminée à racines profondes pour protéger les sols et l’eau.',
    bodyOne:
      'Le vétiver est une graminée pratique utilisée dans le monde entier pour ralentir le ruissellement, retenir les sols et rendre les terres fragiles plus faciles à gérer.',
    bodyTwo:
      'VSF aide les communautés à apprendre, tester et appliquer des solutions basées sur le vétiver grâce au soutien de terrain, aux partenariats de projet et à des exemples publics clairs.',
    cards: [
      {
        title: 'Pourquoi il se distingue',
        body: "Il est peu coûteux, résilient et adaptable à de nombreux sols et climats, ce qui permet de diffuser l’idée sans infrastructure lourde."
      },
      {
        title: 'Ce qu’il peut faire',
        body: 'Réduire l’érosion, stabiliser les pentes, améliorer l’infiltration et protéger les routes, les champs et les terres vulnérables.'
      },
      {
        title: 'Comment VSF aide',
        body: 'Nous soutenons la formation, la conception du site, la plantation et le suivi qui permettent au travail de durer.'
      },
      {
        title: 'Et ensuite',
        body: 'Une fois la plante comprise, les visiteurs peuvent apprendre, soutenir un projet, devenir partenaire ou proposer une initiative.'
      }
    ],
    primaryCta: 'Découvrir le vétiver',
    secondaryCta: 'Voir les projets'
  }
};

export const VETIVER_PROOF_POINTS: Record<Locale, VetiverProofPointsCopy> = {
  en: {
    eyebrow: 'Proof points',
    title: 'Working references VSF uses to explain why vetiver can help.',
    note:
      'Treat these as working references from donor and project materials. They are reported figures, not universal guarantees, and should stay labeled that way until a source link or validation is attached.',
    points: [
      {
        value: '90%',
        label: 'Reported soil-loss reduction',
        body: 'A cited benchmark VSF uses to describe reported soil-loss reduction from vetiver hedgerows on vulnerable ground. Results vary by site and management.'
      },
      {
        value: '70%',
        label: 'Reported runoff reduction',
        body: 'A cited benchmark used to explain how vetiver can help water stay where it is needed. Treat it as a reported reference, not a promise.'
      },
      {
        value: '357 CAD$/ha',
        label: 'Cost reference',
        body: 'A planning reference for comparing vetiver-based work with heavier infrastructure; verify before broad promotion and keep it context-specific.'
      }
    ]
  },
  fr: {
    eyebrow: 'Preuves publiques',
    title: 'Des références de travail que VSF utilise pour expliquer le vétiver.',
    note:
      'Considérez-les comme des repères de travail. Ce sont des chiffres rapportés, pas des garanties universelles, et il faut les garder ainsi jusqu’à ce qu’une source soit ajoutée.',
    points: [
      {
        value: '90%',
        label: 'Réduction déclarée de la perte de sol',
        body: 'Un repère cité que VSF utilise pour décrire la réduction déclarée de la perte de sol avec les haies de vétiver. Les résultats varient selon le site et la gestion.'
      },
      {
        value: '70%',
        label: 'Réduction déclarée du ruissellement',
        body: 'Un repère cité pour expliquer comment le vétiver peut aider l’eau à rester là où elle est utile. Considérez-le comme une référence rapportée, pas comme une promesse.'
      },
      {
        value: '357 CAD$/ha',
        label: 'Référence de coût',
        body: 'Une référence de planification pour comparer le travail basé sur le vétiver à des infrastructures plus lourdes; à vérifier avant une promotion large et à garder liée au contexte.'
      }
    ]
  }
};
