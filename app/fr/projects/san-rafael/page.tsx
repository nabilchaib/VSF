import type { Metadata } from 'next';

import { ProjectDetailPage, type ProjectDetailCopy } from '@/components/project-detail-page';
import { buildProjectMetadata, PROJECT_PATHS } from '@/lib/projects';
import { DONATE_URL, localePath } from '@/lib/site';

export function generateMetadata(): Metadata {
  return buildProjectMetadata({
    locale: 'fr',
    path: PROJECT_PATHS.sanRafael,
    title: 'San Rafael | Vetiver Sans Frontieres',
    description: 'San Rafael est un pilote de terrain actif et une voie pret-a-donner pour le vetiver.',
    image: '2022/10/DSCF0117.jpeg'
  });
}

export default function FrenchSanRafaelProjectPage() {
  return <ProjectDetailPage locale="fr" copy={copy.fr} />;
}

const copy: Record<'fr', ProjectDetailCopy> = {
  fr: {
    eyebrow: 'Pilote de terrain actif',
    title: 'San Rafael',
    subtitle: 'Une voie vetiver en activite sur le terrain.',
    image: '2022/10/DSCF0117.jpeg',
    summaryEyebrow: 'Vue publique',
    summaryTitle: 'Un pilote de terrain avec une voie de soutien claire.',
    summaryBody:
      'San Rafael montre le vetiver dans un site en activite. La page publique reste donor-safe tout en restant facile a comprendre.',
    whyEyebrow: 'Pourquoi c est important',
    whyTitle: 'Pourquoi cette voie est distincte.',
    whyPoints: [
      {
        title: 'Apprentissage reel',
        body: 'Le projet est lie a un contexte de terrain actif, pas a une note conceptuelle.'
      },
      {
        title: 'Progression visible',
        body: 'Les soutiens peuvent comprendre ce que le pilote cherche a faire.'
      },
      {
        title: 'Utile pour la replication',
        body: 'Ce qui est appris ici peut informer de futurs travaux de terrain.'
      }
    ],
    nextEyebrow: 'Voie de soutien',
    nextTitle: 'Soutenir le pilote ou ouvrir le portefeuille plus large.',
    nextBody:
      'Si vous voulez soutenir l apprentissage de terrain, la prochaine etape est directe et publique.',
    nextSteps: [
      'Revoir le pilote comme projet public de terrain.',
      'Soutenir la mise en oeuvre via la voie de don.',
      'Utiliser la page contact pour les questions de partenariat.'
    ],
    ctaLabel: 'Soutenir San Rafael',
    ctaHref: DONATE_URL,
    ctaExternal: true,
    supportNote:
      'Pour les questions de partenariat, utilisez la page contact avant de contribuer.',
    footerTitle: 'Une voie de pilote qui reste publique.',
    footerBody:
      'San Rafael est pense pour rester lisible sans exposer les details sensibles du terrain. Il reste assez concret pour etre soutenu et assez discipline pour etre appris.',
    footerLinks: [
      {
        label: 'Ouvrir le portail du portefeuille',
        href: localePath('/projects', 'fr')
      },
      {
        label: 'Collaborer avec VSF',
        href: localePath('/about/contact', 'fr')
      }
    ]
  }
};
