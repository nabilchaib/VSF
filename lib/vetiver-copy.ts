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
    title: 'A deep-rooted grass that helps communities slow water and hold soil.',
    bodyOne:
      'Vetiver is a practical plant used around the world to protect land and manage water. When planted in contour hedgerows, it helps slow runoff, keep soil in place, and make fragile places easier to work with.',
    bodyTwo:
      'VSF helps communities learn, test, and scale vetiver-based solutions through field work, technical support, partnerships, and public evidence.',
    cards: [
      {
        title: 'Why it is remarkable',
        body: 'It is low-cost, resilient, and adaptable across many soils and climates, so the idea can travel without heavy infrastructure.'
      },
      {
        title: 'What it can do',
        body: 'Reduce erosion, stabilize slopes, improve infiltration, and protect roads, fields, and vulnerable land.'
      },
      {
        title: 'How VSF helps',
        body: 'We support education, site design, planting, and the evidence needed to make the work credible.'
      },
      {
        title: 'What comes next',
        body: 'Visitors can learn, support a project, partner, or propose a new initiative once they understand the plant.'
      }
    ],
    primaryCta: 'Learn about vetiver',
    secondaryCta: 'Open the RDC hub'
  },
  fr: {
    eyebrow: 'Qu est-ce que le vetiver ?',
    title: 'Une graminee a racines profondes qui aide a ralentir l eau et retenir les sols.',
    bodyOne:
      'Le vetiver est une plante pratique utilisee dans le monde entier pour proteger les terres et gerer l eau. Plante en haies de contour, il aide a ralentir le ruissellement, maintenir les sols en place et rendre les espaces fragiles plus faciles a travailler.',
    bodyTwo:
      'VSF aide les communautes a apprendre, tester et developper des solutions basees sur le vetiver grace au terrain, au soutien technique, aux partenariats et aux preuves publiques.',
    cards: [
      {
        title: 'Pourquoi il compte',
        body: 'Il est peu couteux, resilient et adaptable a de nombreux sols et climats, ce qui permet de diffuser l idee sans infrastructure lourde.'
      },
      {
        title: 'Ce qu il peut faire',
        body: 'Reduire l erosion, stabiliser les pentes, ameliorer l infiltration et proteger les routes, les champs et les terres vulnerables.'
      },
      {
        title: 'Comment VSF aide',
        body: 'Nous soutenons la formation, la conception du site, la plantation et les preuves qui rendent le travail credible.'
      },
      {
        title: 'Et ensuite',
        body: 'Une fois la plante comprise, les visiteurs peuvent apprendre, soutenir un projet, devenir partenaire ou proposer une initiative.'
      }
    ],
    primaryCta: 'Decouvrir le vetiver',
    secondaryCta: 'Ouvrir le hub RDC'
  }
};

export const VETIVER_PROOF_POINTS: Record<Locale, VetiverProofPointsCopy> = {
  en: {
    eyebrow: 'Proof points',
    title: 'Working references VSF uses to explain why vetiver can help.',
    note: 'Treat these as working references from donor and project materials until source links or validation are attached.',
    points: [
      {
        value: '90%',
        label: 'Reported soil-loss reduction',
        body: 'A cited benchmark VSF uses to describe reported soil-loss reduction from vetiver hedgerows on vulnerable ground.'
      },
      {
        value: '70%',
        label: 'Reported runoff reduction',
        body: 'A cited benchmark used to explain how vetiver can help water stay where it is needed.'
      },
      {
        value: '357 CAD$/ha',
        label: 'Cost reference',
        body: 'A planning reference for comparing vetiver-based work with heavier infrastructure; verify before broad promotion.'
      }
    ]
  },
  fr: {
    eyebrow: 'Preuves publiques',
    title: 'Des references de travail que VSF utilise pour expliquer le vetiver.',
    note: 'Considerez-les comme des repères de travail, pas comme des affirmations finales, jusqu a ce que les sources soient ajoutees.',
    points: [
      {
        value: '90%',
        label: 'Reduction declaree de la perte de sol',
        body: 'Un repere cite que VSF utilise pour decrire la reduction declaree de la perte de sol avec les haies de vetiver.'
      },
      {
        value: '70%',
        label: 'Reduction declaree du ruissellement',
        body: 'Un repere cite pour expliquer comment le vetiver peut aider l eau a rester la ou elle est utile.'
      },
      {
        value: '357 CAD$/ha',
        label: 'Reference de cout',
        body: 'Une reference de planification pour comparer le travail base sur le vetiver a des infrastructures plus lourdes; a verifier avant une promotion large.'
      }
    ]
  }
};
