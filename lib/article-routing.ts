import { localePath, type Locale } from '@/lib/site';

export type ArticleIntent =
  | 'education'
  | 'field_evidence'
  | 'active_project'
  | 'services_or_partnership';

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

const INTENT_LABELS: Record<Locale, Record<ArticleIntent, string>> = {
  en: {
    education: 'Education',
    field_evidence: 'Field evidence',
    active_project: 'Active project',
    services_or_partnership: 'Services or partnership'
  },
  fr: {
    education: 'Apprentissage',
    field_evidence: 'Preuves de terrain',
    active_project: 'Projet actif',
    services_or_partnership: 'Services ou partenariat'
  }
};

const ARTICLE_END_CTA: Record<Locale, Record<ArticleIntent, ArticleEndCtaCopy>> = {
  en: {
    education: {
      eyebrow: 'Next step',
      title: 'Keep learning, then choose a path.',
      body:
        'This story is a starting point. Use the links below to learn more, review the projects layer, or get involved.',
      primary: {
        label: 'Learn about vetiver',
        href: '/vetiver',
        variant: 'primary'
      },
      secondary: {
        label: 'Browse projects',
        href: '/projects',
        variant: 'secondary'
      },
      tertiary: {
        label: 'Get involved',
        href: '/get-involved',
        variant: 'tertiary'
      }
    },
    field_evidence: {
      eyebrow: 'Evidence path',
      title: 'See the flagship proof layer.',
      body:
        'This story points to field evidence. The next step is the RDC hub, where public proof stays connected to the work on the ground.',
      primary: {
        label: 'Open RDC hub',
        href: '/projects/rdc',
        variant: 'primary'
      },
      secondary: {
        label: 'View projects',
        href: '/projects',
        variant: 'secondary'
      },
      tertiary: {
        label: 'Support the work',
        href: '/get-involved',
        variant: 'tertiary'
      }
    },
    active_project: {
      eyebrow: 'Active project',
      title: 'Follow the live project path.',
      body:
        'This story connects to an active field route. Open the project page if you want to understand, support, or follow the work.',
      primary: {
        label: 'View San Rafael',
        href: '/projects/san-rafael',
        variant: 'primary'
      },
      secondary: {
        label: 'Browse projects',
        href: '/projects',
        variant: 'secondary'
      },
      tertiary: {
        label: 'Contact VSF',
        href: '/about/contact',
        variant: 'tertiary'
      }
    },
    services_or_partnership: {
      eyebrow: 'Partnership path',
      title: 'Continue through services or contact.',
      body:
        'This story points to collaboration. Choose the next step that fits your role and what you want to discuss.',
      primary: {
        label: 'See services',
        href: '/about/services',
        variant: 'primary'
      },
      secondary: {
        label: 'Contact VSF',
        href: '/about/contact',
        variant: 'secondary'
      },
      tertiary: {
        label: 'Browse projects',
        href: '/projects',
        variant: 'tertiary'
      }
    }
  },
  fr: {
    education: {
      eyebrow: 'Prochaine etape',
      title: 'Continuer a apprendre, puis choisir une voie.',
      body:
        'Ce recit est un point de depart. Utilisez les liens ci-dessous pour decouvrir le vetiver, parcourir les projets ou passer a l action.',
      primary: {
        label: 'Decouvrir le vetiver',
        href: '/vetiver',
        variant: 'primary'
      },
      secondary: {
        label: 'Parcourir les projets',
        href: '/projects',
        variant: 'secondary'
      },
      tertiary: {
        label: 'Participer',
        href: '/get-involved',
        variant: 'tertiary'
      }
    },
    field_evidence: {
      eyebrow: 'Chemin de preuves',
      title: 'Voir la couche de preuve phare.',
      body:
        'Ce recit pointe vers les preuves de terrain. La prochaine etape est le hub RDC, ou les preuves publiques restent reliees au travail sur le terrain.',
      primary: {
        label: 'Ouvrir le hub RDC',
        href: '/projects/rdc',
        variant: 'primary'
      },
      secondary: {
        label: 'Voir les projets',
        href: '/projects',
        variant: 'secondary'
      },
      tertiary: {
        label: 'Soutenir le travail',
        href: '/get-involved',
        variant: 'tertiary'
      }
    },
    active_project: {
      eyebrow: 'Projet actif',
      title: 'Suivre un projet en cours.',
      body:
        'Ce recit est lie a une voie de terrain active. Ouvrez la page du projet si vous voulez comprendre, soutenir ou suivre le travail.',
      primary: {
        label: 'Voir San Rafael',
        href: '/projects/san-rafael',
        variant: 'primary'
      },
      secondary: {
        label: 'Parcourir les projets',
        href: '/projects',
        variant: 'secondary'
      },
      tertiary: {
        label: 'Contacter VSF',
        href: '/about/contact',
        variant: 'tertiary'
      }
    },
    services_or_partnership: {
      eyebrow: 'Partenariat',
      title: 'Continuer par les services ou le contact.',
      body:
        'Ce recit pointe vers la collaboration. Choisissez la prochaine etape qui correspond a votre role et a ce que vous souhaitez discuter.',
      primary: {
        label: 'Voir les services',
        href: '/about/services',
        variant: 'primary'
      },
      secondary: {
        label: 'Contacter VSF',
        href: '/about/contact',
        variant: 'secondary'
      },
      tertiary: {
        label: 'Parcourir les projets',
        href: '/projects',
        variant: 'tertiary'
      }
    }
  }
};

export function getArticleIntent(intent?: ArticleIntent): ArticleIntent {
  return intent ?? 'education';
}

export function getArticleIntentLabel(locale: Locale, intent?: ArticleIntent) {
  return INTENT_LABELS[locale][getArticleIntent(intent)];
}

export function getArticleEndCtaCopy(locale: Locale, intent?: ArticleIntent): ArticleEndCtaCopy {
  return ARTICLE_END_CTA[locale][getArticleIntent(intent)];
}

export function getLocalizedArticleHref(href: string, locale: Locale) {
  return localePath(href, locale);
}
