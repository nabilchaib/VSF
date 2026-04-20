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
    eyebrow: 'Working references',
    title: 'Field-grounded figures VSF uses to explain vetiver impact.',
    note:
      'These figures are working references drawn from field and project materials. Keep them visible, but do not present them as final public claims until source links or validation are attached.',
    points: [
      {
        value: '90%',
        label: 'Reported soil-loss reduction',
        body: 'A working benchmark VSF uses to describe reported soil-loss reduction from vetiver hedgerows on vulnerable ground.'
      },
      {
        value: '70%',
        label: 'Reported runoff reduction',
        body: 'A working benchmark used to explain how vetiver can help water stay where it is needed.'
      },
      {
        value: '357 CAD$/ha',
        label: 'Cost reference',
        body: 'A planning reference for comparing vetiver-based work with heavier infrastructure; keep it as a working figure until validation is attached.'
      }
    ]
  },
  fr: {
    eyebrow: 'References de travail',
    title: 'Des chiffres de terrain que VSF utilise pour expliquer l impact du vetiver.',
    note:
      "Ces chiffres sont des references de travail tirees des documents de terrain et de projet. Gardez-les visibles, mais ne les presentez pas comme des affirmations publiques finales tant que des liens ou une validation ne sont ajoutes.",
    points: [
      {
        value: '90%',
        label: 'Réduction déclarée de la perte de sol',
        body: 'Un repère de travail que VSF utilise pour décrire la réduction déclarée de la perte de sol avec les haies de vetiver.'
      },
      {
        value: '70%',
        label: 'Réduction déclarée du ruissellement',
        body: "Un repère de travail pour expliquer comment le vetiver peut aider l'eau a rester la ou elle est utile."
      },
      {
        value: '357 CAD$/ha',
        label: 'Référence de coût',
        body: "Une référence de planification pour comparer le travail base sur le vetiver a des infrastructures plus lourdes; gardez-la comme chiffre de travail jusqu'a ce que la validation soit ajoutee."
      }
    ]
  }
};
