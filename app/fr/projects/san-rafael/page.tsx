import type { Metadata } from 'next';

import { ProjectDetailPage, type ProjectDetailCopy } from '@/components/project-detail-page';
import { buildProjectMetadata, PROJECT_PATHS } from '@/lib/projects';
import { DONATE_URL, localePath } from '@/lib/site';

export function generateMetadata(): Metadata {
  return buildProjectMetadata({
    locale: 'fr',
    path: PROJECT_PATHS.sanRafael,
    title: 'San Rafael | Vetiver Sans Frontieres',
    description: 'San Rafael est un pilote vetiver actif a El Juego, San Rafael, Antioquia, Colombie.',
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
    subtitle: 'Un pilote vetiver vivant a El Juego, San Rafael, Antioquia, Colombie.',
    image: '2022/10/DSCF0117.jpeg',
    summaryEyebrow: 'Vue publique',
    summaryTitle: 'Un pilote public avec une plantation deja en place.',
    summaryBody:
      'San Rafael montre le vetiver dans un site en activite a El Juego. Les 250 premiers plantules de vetiver ont deja ete plantes, et cette page explique le probleme, la reponse et la prochaine phase en termes publics.',
    whyEyebrow: 'Pourquoi c est important',
    whyTitle: 'Pourquoi ce projet tient seul.',
    whyPoints: [
      {
        title: 'Apprentissage reel',
        body: 'Le projet est lie a un contexte de terrain actif, pas a une note conceptuelle.'
      },
      {
        title: 'Progression visible',
        body: 'Le soutien aide a developper, documenter et renforcer ce qui a deja commence.'
      },
      {
        title: 'Utile pour la replication',
        body: 'Ce qui est appris ici peut informer de futurs travaux de terrain et de futures expansions.'
      }
    ],
    nextEyebrow: 'Comment participer',
    nextTitle: 'Soutenir la prochaine phase ou continuer a parcourir le site.',
    nextBody:
      'Si vous voulez suivre le pilote, la prochaine etape est directe et publique.',
    nextSteps: [
      'Revoir le projet comme exemple public de terrain.',
      'Soutenir la prochaine phase de plantation via le lien de don.',
      'Utiliser la page contact pour les questions de partenariat ou de site.'
    ],
    ctaLabel: 'Soutenir San Rafael',
    ctaHref: DONATE_URL,
    ctaExternal: true,
    supportNote:
      'Pour les questions de partenariat ou de suivi local, utilisez la page contact avant de contribuer.',
    footerTitle: 'Un pilote public avec la plantation deja en place.',
    footerBody:
      'San Rafael est pense pour rester lisible sans exposer les details sensibles du terrain. Il donne assez de contexte pour comprendre ce qui s est passe, ce qui vient ensuite et pourquoi le projet compte.',
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
