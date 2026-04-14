import { localePath, type Locale } from '@/lib/site';

export type ArticleIntent =
  | 'education'
  | 'field_evidence'
  | 'active_project'
  | 'services_or_partnership';

export type ArticleCtaTarget =
  | 'vetiver'
  | 'projects'
  | 'get-involved'
  | 'rdc'
  | 'san-rafael'
  | 'services'
  | 'contact';

export type ArticleRoute = {
  label: string;
  href: string;
  external?: boolean;
  variant: 'primary' | 'secondary' | 'tertiary';
};

export type ArticleEndCtaCopy = {
  eyebrow: string;
  title: string;
  body: string;
  primary: ArticleRoute;
  secondary: ArticleRoute;
  tertiary: ArticleRoute;
};

const TARGET_TO_PATH: Record<ArticleCtaTarget, string> = {
  vetiver: '/vetiver',
  projects: '/projects',
  'get-involved': '/get-involved',
  rdc: '/projects/rdc',
  'san-rafael': '/projects/san-rafael',
  services: '/about/services',
  contact: '/about/contact'
};

const TARGET_LABELS: Record<Locale, Record<ArticleCtaTarget, string>> = {
  en: {
    vetiver: 'Learn about vetiver',
    projects: 'Browse projects',
    'get-involved': 'Get involved',
    rdc: 'Open RDC hub',
    'san-rafael': 'View San Rafael',
    services: 'See services',
    contact: 'Contact VSF'
  },
  fr: {
    vetiver: 'Decouvrir le vetiver',
    projects: 'Parcourir les projets',
    'get-involved': 'Participer',
    rdc: 'Ouvrir le hub RDC',
    'san-rafael': 'Voir San Rafael',
    services: 'Voir les services',
    contact: 'Contacter VSF'
  }
};

const INTENT_LABELS: Record<Locale, Record<ArticleIntent, string>> = {
  en: {
    education: 'Learn',
    field_evidence: 'Project proof',
    active_project: 'Live project',
    services_or_partnership: 'Partnership'
  },
  fr: {
    education: 'Apprentissage',
    field_evidence: 'Preuves du projet',
    active_project: 'Projet en cours',
    services_or_partnership: 'Partenariat'
  }
};

const ARTICLE_END_CTA: Record<Locale, Record<ArticleIntent, ArticleEndCtaCopy>> = {
  en: {
    education: {
      eyebrow: 'Next step',
      title: 'Keep learning, then choose what fits.',
      body:
        'This story is a starting point. Learn more, browse projects, or get involved.',
      primary: { label: 'Learn about vetiver', href: '/vetiver', variant: 'primary' },
      secondary: { label: 'Browse projects', href: '/projects', variant: 'secondary' },
      tertiary: { label: 'Get involved', href: '/get-involved', variant: 'tertiary' }
    },
    field_evidence: {
      eyebrow: 'Project proof',
      title: 'See the RDC project.',
      body:
        'This story connects to public proof. The RDC hub keeps the work and the explanation together.',
      primary: { label: 'Open RDC hub', href: '/projects/rdc', variant: 'primary' },
      secondary: { label: 'View projects', href: '/projects', variant: 'secondary' },
      tertiary: { label: 'Support the work', href: '/get-involved', variant: 'tertiary' }
    },
    active_project: {
      eyebrow: 'Project update',
      title: 'Follow the live project.',
      body:
        'Open the project page to understand, support, or follow the work.',
      primary: { label: 'Browse projects', href: '/projects', variant: 'primary' },
      secondary: { label: 'Contact VSF', href: '/about/contact', variant: 'secondary' },
      tertiary: { label: 'Get involved', href: '/get-involved', variant: 'tertiary' }
    },
    services_or_partnership: {
      eyebrow: 'Partnership',
      title: 'Continue with services or contact.',
      body:
        'Choose the next step that fits your role and what you want to discuss.',
      primary: { label: 'See services', href: '/about/services', variant: 'primary' },
      secondary: { label: 'Contact VSF', href: '/about/contact', variant: 'secondary' },
      tertiary: { label: 'Browse projects', href: '/projects', variant: 'tertiary' }
    }
  },
  fr: {
    education: {
      eyebrow: 'Prochaine etape',
      title: 'Continuer a apprendre, puis choisir ce qui convient.',
      body:
        'Ce recit est un point de depart. Decouvrez le vetiver, parcourez les projets ou passez a l action.',
      primary: { label: 'Decouvrir le vetiver', href: '/vetiver', variant: 'primary' },
      secondary: { label: 'Parcourir les projets', href: '/projects', variant: 'secondary' },
      tertiary: { label: 'Participer', href: '/get-involved', variant: 'tertiary' }
    },
    field_evidence: {
      eyebrow: 'Preuves du projet',
      title: 'Voir le projet RDC.',
      body:
        'Ce recit renvoie aux preuves publiques. Le hub RDC garde le travail et l explication ensemble.',
      primary: { label: 'Ouvrir le hub RDC', href: '/projects/rdc', variant: 'primary' },
      secondary: { label: 'Voir les projets', href: '/projects', variant: 'secondary' },
      tertiary: { label: 'Soutenir le travail', href: '/get-involved', variant: 'tertiary' }
    },
    active_project: {
      eyebrow: 'Mise a jour de projet',
      title: 'Suivre le projet en cours.',
      body:
        'Ouvrez la page du projet pour comprendre, soutenir ou suivre le travail.',
      primary: { label: 'Parcourir les projets', href: '/projects', variant: 'primary' },
      secondary: { label: 'Contacter VSF', href: '/about/contact', variant: 'secondary' },
      tertiary: { label: 'Participer', href: '/get-involved', variant: 'tertiary' }
    },
    services_or_partnership: {
      eyebrow: 'Partenariat',
      title: 'Continuer par les services ou le contact.',
      body:
        'Choisissez la prochaine etape qui correspond a votre role et a ce que vous souhaitez discuter.',
      primary: { label: 'Voir les services', href: '/about/services', variant: 'primary' },
      secondary: { label: 'Contacter VSF', href: '/about/contact', variant: 'secondary' },
      tertiary: { label: 'Parcourir les projets', href: '/projects', variant: 'tertiary' }
    }
  }
};

function resolveTargetRoute(locale: Locale, target: ArticleCtaTarget): ArticleRoute {
  return {
    label: TARGET_LABELS[locale][target],
    href: TARGET_TO_PATH[target],
    variant: 'primary'
  };
}

export function getArticleIntent(intent?: ArticleIntent): ArticleIntent {
  return intent ?? 'education';
}

export function getArticleIntentLabel(locale: Locale, intent?: ArticleIntent) {
  return INTENT_LABELS[locale][getArticleIntent(intent)];
}

export function getArticleEndCtaCopy(
  locale: Locale,
  intent?: ArticleIntent,
  ctaTarget?: ArticleCtaTarget
): ArticleEndCtaCopy {
  const copy = ARTICLE_END_CTA[locale][getArticleIntent(intent)];

  if (!ctaTarget) {
    return copy;
  }

  return {
    ...copy,
    primary: resolveTargetRoute(locale, ctaTarget)
  };
}

export function getLocalizedArticleHref(href: string, locale: Locale) {
  return localePath(href, locale);
}
