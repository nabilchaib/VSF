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
    eyebrow: 'Qu est-ce que le vetiver ?',
    title: 'Une graminee a racines profondes pour proteger les sols et l eau.',
    bodyOne:
      'Le vetiver est une graminee pratique utilisee dans le monde entier pour ralentir le ruissellement, retenir les sols et rendre les terres fragiles plus faciles a gerer.',
    bodyTwo:
      'VSF aide les communautes a apprendre, tester et appliquer des solutions basees sur le vetiver grace au soutien de terrain, aux partenariats de projet et a des exemples publics clairs.',
    cards: [
      {
        title: 'Pourquoi il se distingue',
        body: 'Il est peu couteux, resilient et adaptable a de nombreux sols et climats, ce qui permet de diffuser l idee sans infrastructure lourde.'
      },
      {
        title: 'Ce qu il peut faire',
        body: 'Reduire l erosion, stabiliser les pentes, ameliorer l infiltration et proteger les routes, les champs et les terres vulnerables.'
      },
      {
        title: 'Comment VSF aide',
        body: 'Nous soutenons la formation, la conception du site, la plantation et le suivi qui permet au travail de durer.'
      },
      {
        title: 'Et ensuite',
        body: 'Une fois la plante comprise, les visiteurs peuvent apprendre, soutenir un projet, devenir partenaire ou proposer une initiative.'
      }
    ],
    primaryCta: 'Decouvrir le vetiver',
    secondaryCta: 'Voir les projets'
  }
};

export const VETIVER_PROOF_POINTS: Record<Locale, VetiverProofPointsCopy> = {
  en: {
    eyebrow: 'Proof points',
    title: 'Working references VSF uses to explain why vetiver can help.',
    note:
      'Treat these as working references from donor and project materials until source links or validation are attached. Do not present them as final public claims until they are verified.',
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
    note:
      'Considerez-les comme des reperes de travail, pas comme des affirmations finales, jusqu a ce que les sources soient ajoutees. Ne les presentez pas comme des affirmations publiques finales tant qu elles ne sont pas verifiees.',
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
