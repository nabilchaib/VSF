import type { Metadata } from 'next';

import { SITE_NAME, type Locale, getAbsoluteUrl } from '@/lib/site';

export const RDC_PROJECT_PATH = {
  en: '/projects/rdc',
  fr: '/fr/projects/rdc'
} as const;

export const RDC_FLAGSHIP_STORY_PATH = {
  en: '/from-fire-to-future-understanding-and-breaking-the-cycle-of-slash-and-burn-agriculture',
  fr: '/fr/from-fire-to-future-understanding-and-breaking-the-cycle-of-slash-and-burn-agriculture'
} as const;

export type RdcSectionItem = {
  title: string;
  body: string;
};

export type RdcTimelineItem = {
  period: string;
  title: string;
  body: string;
};

export type RdcOwnerItem = {
  role: string;
  owner: string;
  responsibility: string;
};

export type RdcBudgetItem = {
  item: string;
  amount: string;
  note: string;
};

export type RdcDecisionItem = {
  date: string;
  decision: string;
  reason: string;
};

export type RdcEditorialItem = {
  title: string;
  status: 'idea' | 'draft' | 'published';
  owner: string;
  donationObjective: string;
  cta: string;
  path: string;
};

export type RdcFunnelItem = {
  article: string;
  landing: string;
  donationObjective: string;
  cta: string;
};

export type RdcFieldMetric = {
  label: string;
  unit: string;
  howMeasured: string;
};

export type RdcPilotItem = {
  title: string;
  status: string;
  goal: string;
  nextStep: string;
};

export type RdcSiteItem = {
  site: string;
  status: string;
  coordinates: string;
  validation: string;
};

export type RdcLocaleContent = {
  eyebrow: string;
  sectionEyebrow: string;
  title: string;
  subtitle: string;
  introTitle: string;
  introBody: string;
  primaryCta: string;
  secondaryCta: string;
  storyCta: string;
  whyTitle: string;
  whySubtitle: string;
  whyCards: RdcSectionItem[];
  layersTitle: string;
  layersSubtitle: string;
  layers: RdcSectionItem[];
  geographyTitle: string;
  geographySubtitle: string;
  geographyCards: RdcSectionItem[];
  fieldAnchorTitle: string;
  fieldAnchorSubtitle: string;
  fieldAnchorBody: string;
  fieldAnchorQuote: string;
  timelineTitle: string;
  timelineSubtitle: string;
  timeline: RdcTimelineItem[];
  ownersTitle: string;
  ownersSubtitle: string;
  owners: RdcOwnerItem[];
  budgetTitle: string;
  budgetSubtitle: string;
  budget: RdcBudgetItem[];
  budgetTotal: string;
  decisionsTitle: string;
  decisionsSubtitle: string;
  decisions: RdcDecisionItem[];
  editorialTitle: string;
  editorialSubtitle: string;
  editorial: RdcEditorialItem[];
  funnelTitle: string;
  funnelSubtitle: string;
  funnel: RdcFunnelItem[];
  dataTitle: string;
  dataSubtitle: string;
  dataIntro: string;
  fieldMetrics: RdcFieldMetric[];
  dataTemplate: string;
  pilotsTitle: string;
  pilotsSubtitle: string;
  pilots: RdcPilotItem[];
  sitesTitle: string;
  sitesSubtitle: string;
  sites: RdcSiteItem[];
  footerTitle: string;
  footerBody: string;
};

export const RDC_PROJECT: Record<Locale, RdcLocaleContent> = {
  en: {
    eyebrow: 'RDC project hub',
    sectionEyebrow: 'Public view',
    title: 'Vetiver in the Congo Basin',
    subtitle:
      'A public hub for VSF’s RDC work: low-input vetiver systems as an alternative to costly, import-dependent agriculture in the Congo Basin.',
    introTitle: 'What this hub does',
    introBody:
      'This hub turns a real field initiative into a public home for donors and partners. It keeps the story and support together while sensitive operating details stay in working docs.',
    primaryCta: 'Support the project',
    secondaryCta: 'Explore the overview',
    storyCta: 'Read the flagship story',
    whyTitle: 'Why this matters now',
    whySubtitle: 'Imported-input agriculture is fragile and expensive. This project explores a lower-input path rooted in local resilience.',
    whyCards: [
      {
        title: 'Rising input costs',
        body: 'War, oil-price volatility, fertilizer costs, and import dependency make conventional agriculture more fragile and less affordable.'
      },
      {
        title: 'Low-input alternative',
        body: 'Vetiver supports a no-till, lower-input pathway that can reduce pressure on soils, labor, and external purchases.'
      },
      {
        title: 'Local value creation',
        body: 'Beyond field management, vetiver may support new local product pathways such as soap and future processing pilots.'
      }
    ],
    layersTitle: 'Public focus areas',
    layersSubtitle: 'These are the themes visitors should understand without needing internal detail.',
    layers: [
      {
        title: 'Field learning',
        body: 'Document how vetiver performs in real conditions through site learning, measurements, and visual proof.'
      },
      {
        title: 'Agricultural resilience',
        body: 'Show how vetiver can support land recovery, reduced erosion, lower labor pressure, and more stable production.'
      },
      {
        title: 'Editorial storytelling',
        body: 'Publish a seven-part public sequence that explains the problem, the alternative, and the field logic in accessible language.'
      },
      {
        title: 'Action pathways',
        body: 'Turn public understanding into support: fund evidence gathering, hectares, product pilots, and policy-facing work.'
      }
    ],
    geographyTitle: 'Grounded in real locations',
    geographySubtitle:
      'This work is already connected to multiple locations in RDC, with field notes, travel points, and emerging site clusters.',
    geographyCards: [
      {
        title: 'Multi-site learning',
        body: 'The project is linked to multiple provinces and field locations in RDC, which helps the learning stay grounded in real conditions.'
      },
      {
        title: 'Site validation in progress',
        body: 'Some locations are already documented through field travel, GPS records, and site reporting.'
      },
      {
        title: 'Geography as trust layer',
        body: 'As validation improves, public-facing geography can become more precise without exposing sensitive field details.'
      }
    ],
    fieldAnchorTitle: 'Field anchor',
    fieldAnchorSubtitle: 'The project grows through local field leadership.',
    fieldAnchorBody:
      'Eric Mpongo’s work on the ground gives this project its practical edge. The public hub should connect stories, site learning, and evidence themes back to real field conditions rather than abstract claims.',
    fieldAnchorQuote:
      'Field validation comes first. The public story must stay tied to what is actually happening on the ground.',
    timelineTitle: 'Public roadmap',
    timelineSubtitle: 'A simple three-phase view of the next steps.',
    timeline: [
      {
        period: 'Phase 1',
        title: 'Clarify the public case',
        body: 'Refine the public argument around slash-and-burn, no-till, low-input agriculture, and resilience.'
      },
      {
        period: 'Phase 2',
        title: 'Publish credible evidence themes',
        body: 'Release the flagship story and supporting pieces that connect field logic, agricultural practice, and donor relevance.'
      },
      {
        period: 'Phase 3',
        title: 'Convert support into operating capacity',
        body: 'Use the project hub, article flow, and donation pages to fund evidence gathering, validation, and early pilots.'
      }
    ],
    ownersTitle: 'Who is involved',
    ownersSubtitle: 'Public roles on the project.',
    owners: [
      {
        role: 'Editorial and web',
        owner: 'Nabil',
        responsibility: 'Maintains the public site and article flow.'
      },
      {
        role: 'Field leadership',
        owner: 'Eric',
        responsibility: 'Supports on-the-ground learning and evidence gathering.'
      },
      {
        role: 'Project stewardship',
        owner: 'VSF',
        responsibility: 'Keeps the project aligned with the organization’s mission.'
      },
      {
        role: 'Specialist support',
        owner: 'External',
        responsibility: 'Adds specialized input when needed.'
      }
    ],
    budgetTitle: 'Funding priorities',
    budgetSubtitle: 'High-level support areas for the public hub.',
    budget: [
      { item: 'Public storytelling', amount: 'TBD', note: 'Tracked in working docs' },
      { item: 'Field validation', amount: 'TBD', note: 'Tracked in working docs' }
    ],
    budgetTotal: 'TBD',
    decisionsTitle: 'Project notes',
    decisionsSubtitle: 'High-level choices that shape the public hub.',
    decisions: [
      {
        date: 'Current',
        decision: 'Keep the public hub narrative-led.',
        reason: 'It should bridge evidence, stories, and support.'
      }
    ],
    editorialTitle: 'Editorial plan',
    editorialSubtitle: 'Seven articles, one clear action each.',
    editorial: [
      {
        title: 'From Fire to Future: Breaking the Cycle of Slash-and-Burn Agriculture',
        status: 'published',
        owner: 'Eric and Nabil',
        donationObjective: 'Support field learning and public storytelling',
        cta: 'Support field learning',
        path: RDC_FLAGSHIP_STORY_PATH.en
      },
      {
        title: 'Why Fertilizers Are Not the Only Path for RDC Agriculture',
        status: 'draft',
        owner: 'Nabil',
        donationObjective: 'Support the explanatory article',
        cta: 'Back the explanatory article',
        path: RDC_PROJECT_PATH.en
      },
      {
        title: 'No-Till Agriculture with Vetiver: A Lower-Input Path',
        status: 'idea',
        owner: 'Eric',
        donationObjective: 'Support site validation',
        cta: 'Support site validation',
        path: RDC_PROJECT_PATH.en
      },
      {
        title: 'What the First Field Numbers Tell Us',
        status: 'draft',
        owner: 'VSF',
        donationObjective: 'Support the measurements',
        cta: 'Support the measurements',
        path: RDC_PROJECT_PATH.en
      },
      {
        title: 'Vetiver as a Resilience System, Not Just a Plant',
        status: 'idea',
        owner: 'Nabil',
        donationObjective: 'Support the resilience narrative',
        cta: 'Fund the policy brief',
        path: RDC_PROJECT_PATH.en
      },
      {
        title: 'Soap MVP: Testing Local Value Creation from Vetiver',
        status: 'idea',
        owner: 'VSF',
        donationObjective: 'Test local value creation from vetiver',
        cta: 'Support the soap pilot',
        path: RDC_PROJECT_PATH.en
      },
      {
        title: 'Reducing Dependency on Imported Agricultural Inputs',
        status: 'idea',
        owner: 'External',
        donationObjective: 'Fund the technical review',
        cta: 'Back feasibility work',
        path: RDC_PROJECT_PATH.en
      }
    ],
    funnelTitle: 'Support paths',
    funnelSubtitle: 'Every article should point to a distinct support object.',
    funnel: [
      {
        article: 'Flagship slash-and-burn story',
        landing: 'RDC hub overview',
        donationObjective: 'Support field learning and storytelling',
        cta: 'Support the story'
      },
      {
        article: 'Field numbers article',
        landing: 'Public metrics',
        donationObjective: 'Support site validation and measurement',
        cta: 'Support validation'
      },
      {
        article: 'Soap MVP article',
        landing: 'Product ideas',
        donationObjective: 'Back a concrete micro-pilot',
        cta: 'Back the soap pilot'
      },
      {
        article: 'Essential-oil feasibility article',
        landing: 'Product ideas',
        donationObjective: 'Fund a focused technical review',
        cta: 'Fund technical review'
      }
    ],
    dataTitle: 'What we track publicly',
    dataSubtitle: 'High-level indicators that keep the public story grounded.',
    dataIntro:
      'We publish high-level indicators only when they can be explained clearly and tied to observed field conditions.',
    fieldMetrics: [
      {
        label: 'Yield',
        unit: 'kg/ha or crop count',
        howMeasured: 'Compare vetiver-managed plots with the current conventional baseline.'
      },
      {
        label: 'Cost avoided',
        unit: 'CAD/ha',
        howMeasured: 'Track inputs, land clearing, or erosion-related costs that no longer need to be paid.'
      },
      {
        label: 'Labor reduction',
        unit: 'hours/ha',
        howMeasured: 'Measure hand weeding, land prep, and maintenance time before and after the change.'
      },
      {
        label: 'Conventional comparison',
        unit: 'qualitative + numeric',
        howMeasured: 'Compare the current conventional practice with the vetiver-based approach, noting both measured and observed differences.'
      }
    ],
    dataTemplate: 'Record the indicator, the comparison point, the observed change, and a short note.',
    pilotsTitle: 'Product ideas under review',
    pilotsSubtitle: 'Keep product ideas disciplined and small until field learning and basic feasibility justify deeper investment.',
    pilots: [
      {
        title: 'Soap MVP',
        status: 'idea',
        goal: 'Test whether a small vetiver-based soap can be produced, packaged, and explained simply.',
        nextStep: 'Define ingredients, make a small batch, and test the story with supporters.'
      },
      {
        title: 'Essential-oil feasibility',
        status: 'idea',
        goal: 'Check whether essential-oil extraction is realistic enough to justify a deeper technical review.',
        nextStep: 'List the constraints, sample the plant material, and ask an external reviewer to sanity-check the model.'
      }
    ],
    sitesTitle: 'Project sites',
    sitesSubtitle: 'Sites connected to the public hub.',
    sites: [
      {
        site: 'RDC multi-site work',
        status: 'internal',
        coordinates: 'Withheld',
        validation: 'Tracked in working notes'
      }
    ],
    footerTitle: 'Support a grounded alternative',
    footerBody:
      'This hub keeps the public story connected to real field work. Support helps VSF document results, strengthen the public case, and test practical next steps in RDC.'
  },
  fr: {
    eyebrow: 'Hub projet RDC',
    sectionEyebrow: 'Vue publique',
    title: 'Le vétiver dans le bassin du Congo',
    subtitle:
      'Un hub public pour le travail RDC de VSF : des systèmes vétiver à faibles intrants comme alternative à une agriculture coûteuse et dépendante des importations.',
    introTitle: 'Ce que fait ce hub',
    introBody:
      'Ce hub transforme une initiative de terrain réelle en espace public pour les donateurs et les partenaires. Il relie le recit et le soutien, tout en gardant les details sensibles dans les documents de travail.',
    primaryCta: 'Soutenir le projet',
    secondaryCta: 'Découvrir la vue d’ensemble',
    storyCta: 'Lire le récit phare',
    whyTitle: 'Pourquoi cela compte maintenant',
    whySubtitle:
      'Une agriculture dependante des importations est fragile et couteuse. Ce projet explore une voie a moindres intrants ancree dans la resilience locale.',
    whyCards: [
      {
        title: 'Hausse des coûts d’intrants',
        body: 'La guerre, la volatilite du prix du petrole, le cout des engrais et la dependance aux importations rendent l agriculture conventionnelle plus fragile et plus chere.'
      },
      {
        title: 'Alternative à faibles intrants',
        body: 'Le vetiver soutient une voie sans labour et a faibles intrants qui peut reduire la pression sur les sols, la main-d oeuvre et les achats externes.'
      },
      {
        title: 'Création de valeur locale',
        body: 'Au dela de la gestion des parcelles, le vetiver peut ouvrir des pistes de produits locaux, comme le savon et de futurs pilotes de transformation.'
      }
    ],
    layersTitle: 'Axes publics',
    layersSubtitle: 'Ces themes doivent etre compris sans avoir besoin de details internes.',
    layers: [
      {
        title: 'Apprentissage de terrain',
        body: 'Documenter la performance du vetiver en conditions reelles a travers l apprentissage par site, les mesures et les preuves visuelles.'
      },
      {
        title: 'Résilience agricole',
        body: 'Montrer comment le vetiver peut soutenir la restauration des terres, la reduction de l erosion, la baisse de la pression de travail et une production plus stable.'
      },
      {
        title: 'Narration éditoriale',
        body: 'Publier une serie publique en sept temps qui explique le probleme, l alternative et la logique de terrain dans un langage accessible.'
      },
      {
        title: 'Voies d’action',
        body: 'Transformer la comprehension publique en soutien : financer les preuves, les hectares, les produits pilotes et le travail de plaidoyer.'
      }
    ],
    geographyTitle: 'Ancré dans des lieux réels',
    geographySubtitle:
      'Ce travail est deja relie a plusieurs lieux en RDC, avec des notes de terrain, des points de passage et des groupes de sites emergents.',
    geographyCards: [
      {
        title: 'Apprentissage multi-sites',
        body: 'Le projet est relie a plusieurs provinces et lieux de terrain en RDC, ce qui aide a garder l apprentissage ancre dans des conditions reelles.'
      },
      {
        title: 'Validation de sites en cours',
        body: 'Certains lieux sont deja documentes par des deplacements terrain, des releves GPS et des rapports de site.'
      },
      {
        title: 'La géographie comme gage de confiance',
        body: 'A mesure que la validation progresse, la geographie publique peut devenir plus precise sans exposer les details sensibles.'
      }
    ],
    fieldAnchorTitle: 'Ancre terrain',
    fieldAnchorSubtitle: 'Le projet grandit grâce au leadership terrain local.',
    fieldAnchorBody:
      'Le travail d’Eric Mpongo sur le terrain donne à ce projet son ancrage pratique. Le hub public doit relier les récits, l’apprentissage des sites et les thèmes de preuve aux conditions réelles du terrain plutôt qu’à des affirmations abstraites.',
    fieldAnchorQuote:
      'La validation terrain vient d abord. Le recit public doit rester lie a ce qui se passe reellement sur le terrain.',
    timelineTitle: 'Feuille de route publique',
    timelineSubtitle: 'Une vue simple en trois phases des prochaines etapes.',
    timeline: [
      {
        period: 'Phase 1',
        title: 'Clarifier le cas public',
        body: 'Affiner l argument public autour du brulis, du sans labour, des faibles intrants et de la resilience.'
      },
      {
        period: 'Phase 2',
        title: 'Publier des thèmes de preuve crédibles',
        body: 'Diffuser le recit phare et les textes de soutien qui relient la logique de terrain, la pratique agricole et l interet des donateurs.'
      },
      {
        period: 'Phase 3',
        title: 'Convertir le soutien en capacité d’action',
        body: 'Utiliser le hub, le flux d articles et les pages de don pour financer les preuves, la validation et les premiers pilotes.'
      }
    ],
    ownersTitle: 'Qui est impliqué',
    ownersSubtitle: 'Roles publics sur le projet.',
    owners: [
      {
        role: 'Éditorial et web',
        owner: 'Nabil',
        responsibility: 'Maintient le site public et le flux d’articles.'
      },
      {
        role: 'Leadership terrain',
        owner: 'Eric',
        responsibility: 'Soutient l’apprentissage sur le terrain et la collecte de preuves.'
      },
      {
        role: 'Gouvernance du projet',
        owner: 'VSF',
        responsibility: 'Garde le projet aligné avec la mission de l’organisation.'
      },
      {
        role: 'Soutien spécialisé',
        owner: 'Externe',
        responsibility: 'Apporte un appui spécialisé au besoin.'
      }
    ],
    budgetTitle: 'Priorites de financement',
    budgetSubtitle: 'Des domaines de soutien a haut niveau pour le hub public.',
    budget: [
      { item: 'Recit public', amount: 'À déterminer', note: 'Suivi dans les documents de travail' },
      { item: 'Validation terrain', amount: 'À déterminer', note: 'Suivi dans les documents de travail' }
    ],
    budgetTotal: 'À déterminer',
    decisionsTitle: 'Notes de projet',
    decisionsSubtitle: 'Des choix de haut niveau qui orientent le hub public.',
    decisions: [
      {
        date: 'Actuel',
        decision: 'Garder le hub centré sur le récit.',
        reason: 'Il doit relier les preuves, les histoires et le soutien.'
      }
    ],
    editorialTitle: 'Plan editorial',
    editorialSubtitle: 'Sept articles, une seule action claire par article.',
    editorial: [
      {
        title: 'Du feu à l’avenir : briser le cycle du brûlis',
        status: 'published',
        owner: 'Eric et Nabil',
        donationObjective: 'Soutenir l apprentissage de terrain et le recit public',
        cta: 'Soutenir le recit',
        path: RDC_FLAGSHIP_STORY_PATH.fr
      },
      {
        title: 'Pourquoi les engrais ne sont pas la seule voie pour l’agriculture en RDC',
        status: 'draft',
        owner: 'Nabil',
        donationObjective: 'Soutenir l’article explicatif',
        cta: 'Soutenir l’article explicatif',
        path: RDC_PROJECT_PATH.fr
      },
      {
        title: 'Agriculture sans labour avec le vétiver : une voie à faibles intrants',
        status: 'idea',
        owner: 'Eric',
        donationObjective: 'Appuyer la validation des sites',
        cta: 'Appuyer la validation',
        path: RDC_PROJECT_PATH.fr
      },
      {
        title: 'Ce que les premières données de terrain nous disent',
        status: 'draft',
        owner: 'VSF',
        donationObjective: 'Soutenir les mesures',
        cta: 'Soutenir les mesures',
        path: RDC_PROJECT_PATH.fr
      },
      {
        title: 'Le vétiver comme système de résilience, pas seulement comme plante',
        status: 'idea',
        owner: 'Nabil',
        donationObjective: 'Soutenir le récit de résilience',
        cta: 'Financer la note de plaidoyer',
        path: RDC_PROJECT_PATH.fr
      },
      {
        title: 'MVP savon : tester la création de valeur locale à partir du vétiver',
        status: 'idea',
        owner: 'VSF',
        donationObjective: 'Tester la création de valeur locale à partir du vétiver',
        cta: 'Soutenir le pilote savon',
        path: RDC_PROJECT_PATH.fr
      },
      {
        title: 'Réduire la dépendance aux intrants agricoles importés',
        status: 'idea',
        owner: 'Externe',
        donationObjective: 'Financer la revue technique',
        cta: 'Financer l’étude de faisabilité',
        path: RDC_PROJECT_PATH.fr
      }
    ],
    funnelTitle: 'Voies de soutien',
    funnelSubtitle: 'Chaque article doit mener à un objet de soutien distinct.',
    funnel: [
      {
        article: 'Récit phare sur le brûlis',
        landing: 'Vue d’ensemble du hub RDC',
        donationObjective: 'Soutenir l apprentissage de terrain et le recit',
        cta: 'Soutenir le recit'
      },
      {
        article: 'Article sur les chiffres de terrain',
        landing: 'Métriques publiques',
        donationObjective: 'Soutenir la validation des sites et les mesures',
        cta: 'Soutenir la validation'
      },
      {
        article: 'Article sur le MVP savon',
        landing: 'Idées produits',
        donationObjective: 'Soutenir un micro-pilote concret',
        cta: 'Soutenir le pilote savon'
      },
      {
        article: 'Article sur la faisabilité de l’huile essentielle',
        landing: 'Idées produits',
        donationObjective: 'Financer une revue technique ciblée',
        cta: 'Financer la revue technique'
      }
    ],
    dataTitle: 'Ce que nous suivons publiquement',
    dataSubtitle: 'Des indicateurs generaux qui gardent le recit ancre dans le reel.',
    dataIntro:
      'Nous publions des indicateurs de haut niveau seulement lorsqu ils peuvent etre expliques clairement et relies a des conditions de terrain observees.',
    fieldMetrics: [
      {
        label: 'Rendement',
        unit: 'kg/ha ou nombre de cultures',
        howMeasured: 'Comparer les parcelles gerees avec vetiver au niveau de base conventionnel.'
      },
      {
        label: 'Coût évité',
        unit: 'CAD/ha',
        howMeasured: 'Suivre les intrants, le defrichage ou les couts lies a l erosion qui ne doivent plus etre payes.'
      },
      {
        label: 'Réduction de la main-d’œuvre',
        unit: 'heures/ha',
        howMeasured: 'Mesurer le desherbage manuel, la preparation du sol et le temps d entretien avant/apres.'
      },
      {
        label: 'Comparaison avec le conventionnel',
        unit: 'qualitatif + numérique',
        howMeasured: 'Comparer la pratique conventionnelle actuelle avec l approche vetiver, en notant les differences mesurees et observees.'
      }
    ],
    dataTemplate: 'Enregistrer l indicateur, le point de comparaison, le changement observe et une note courte.',
    pilotsTitle: 'Idées produits en revue',
    pilotsSubtitle: 'Garder les idées produit disciplinées et modestes tant que l apprentissage de terrain et la faisabilité de base ne justifient pas un investissement plus poussé.',
    pilots: [
      {
        title: 'MVP savon',
        status: 'idea',
        goal: 'Tester si un savon à base de vétiver peut être produit, emballé et expliqué simplement.',
        nextStep: 'Définir les ingrédients, faire un petit lot et tester le récit avec des soutiens.'
      },
      {
        title: 'Faisabilité huile essentielle',
        status: 'idea',
        goal: 'Vérifier si l’extraction d’huile essentielle est assez réaliste pour justifier une revue technique plus profonde.',
        nextStep: 'Lister les contraintes, échantillonner la matière première et demander un avis externe.'
      }
    ],
    sitesTitle: 'Sites du projet',
    sitesSubtitle: 'Sites lies au hub public.',
    sites: [
      {
        site: 'Travail multi-sites en RDC',
        status: 'interne',
        coordinates: 'Non publié',
        validation: 'Suivi dans les notes de travail'
      }
    ],
    footerTitle: 'Soutenir une alternative ancrée',
    footerBody:
      'Ce hub est conçu pour garder le recit public relie au travail de terrain. Le soutien aide VSF a documenter les resultats, renforcer le cas public et tester les prochaines etapes pratiques en RDC.'
  }
};

export function getRdcProjectPath(locale: Locale) {
  return RDC_PROJECT_PATH[locale];
}

export function getRdcFlagshipStoryPath(locale: Locale) {
  return RDC_FLAGSHIP_STORY_PATH[locale];
}

export function buildRdcMetadata(locale: Locale): Metadata {
  const copy = RDC_PROJECT[locale];
  const canonical = getAbsoluteUrl(getRdcProjectPath(locale));

  return {
    title: copy.title,
    description: copy.subtitle,
    alternates: {
      canonical,
      languages: {
        en: getAbsoluteUrl(RDC_PROJECT_PATH.en),
        fr: getAbsoluteUrl(RDC_PROJECT_PATH.fr)
      }
    },
    openGraph: {
      title: copy.title,
      description: copy.subtitle,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.subtitle
    }
  };
}
