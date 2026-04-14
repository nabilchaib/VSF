import type { Metadata } from 'next';

import { ProjectDetailPage, type ProjectDetailCopy } from '@/components/project-detail-page';
import { buildProjectMetadata, PROJECT_PATHS } from '@/lib/projects';
import { DONATE_URL, localePath } from '@/lib/site';

export function generateMetadata(): Metadata {
  return buildProjectMetadata({
    locale: 'fr',
    path: PROJECT_PATHS.sanRafael,
    title: 'San Rafael | Vetiver Sans Frontieres',
    description: 'San Rafael est un projet de terrain public pour le vetiver.',
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
    subtitle: 'Un projet vetiver vivant sur le terrain.',
    image: '2022/10/DSCF0117.jpeg',
    summaryEyebrow: 'Vue publique',
    summaryTitle: 'Un projet de terrain avec une explication publique claire.',
    summaryBody:
      'San Rafael montre le vetiver dans un site en activite. La page explique le travail en termes publics sans exposer plus de details que necessaire.',
    whyEyebrow: 'Pourquoi c est important',
    whyTitle: 'Pourquoi ce projet tient seul.',
    whyPoints: [
      {
        title: 'Apprentissage reel',
        body: 'Le projet est lie a un contexte de terrain actif, pas a une note conceptuelle.'
      },
      {
        title: 'Progression visible',
        body: 'Les soutiens peuvent comprendre ce que le projet cherche a faire.'
      },
      {
        title: 'Utile pour la replication',
        body: 'Ce qui est appris ici peut informer de futurs travaux de terrain.'
      }
    ],
    nextEyebrow: 'Comment participer',
    nextTitle: 'Soutenir le projet ou continuer a parcourir le site.',
    nextBody:
      'Si vous voulez suivre le projet, la prochaine etape est directe et publique.',
    nextSteps: [
      'Revoir le projet comme exemple public de terrain.',
      'Soutenir la mise en oeuvre via le lien de don.',
      'Utiliser la page contact pour les questions de partenariat.'
    ],
    ctaLabel: 'Soutenir San Rafael',
    ctaHref: DONATE_URL,
    ctaExternal: true,
    supportNote:
      'Pour les questions de partenariat, utilisez la page contact avant de contribuer.',
    footerTitle: 'Un projet de terrain public.',
    footerBody:
      'San Rafael est pense pour rester lisible sans exposer les details sensibles du terrain. Il reste assez concret pour etre soutenu et assez clair pour etre compris.',
    footerLinks: [
      {
        label: 'Ouvrir la page projets',
        href: localePath('/projects', 'fr')
      },
      {
        label: 'Collaborer avec VSF',
        href: localePath('/about/contact', 'fr')
      }
    ]
  }
};
