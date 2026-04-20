import type { Metadata } from 'next';

import { ProjectDetailPage, type ProjectDetailCopy } from '@/components/project-detail-page';
import { buildProjectMetadata, PROJECT_PATHS } from '@/lib/projects';
import { DONATE_URL, localePath } from '@/lib/site';

export function generateMetadata(): Metadata {
  return buildProjectMetadata({
    locale: 'fr',
    path: PROJECT_PATHS.sanRafael,
    title: 'San Rafael | Vetiver Sans Frontieres',
    description: 'San Rafael est un pilote vétiver actif à El Juego, à San Rafael, Antioquia, en Colombie.',
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
    subtitle: 'Un pilote vétiver vivant à El Juego, San Rafael, Antioquia, Colombie.',
    image: '2022/10/DSCF0117.jpeg',
    summaryEyebrow: 'Vue publique',
    summaryTitle: 'Un pilote public avec la première plantation en place.',
    summaryBody:
      'San Rafael montre le vétiver dans un site en activité à El Juego. La première plantation est déjà en place, et cette page explique le problème, la réponse et la prochaine phase en termes publics.',
    whyEyebrow: 'Pourquoi c’est important',
    whyTitle: 'Pourquoi ce projet compte.',
    whyPoints: [
      {
        title: 'Apprentissage réel',
        body: 'Le projet est lié à un contexte de terrain actif, pas à une note conceptuelle.'
      },
      {
        title: 'Progression visible',
        body: 'Le soutien aide à développer, documenter et renforcer ce qui a déjà commencé.'
      },
      {
        title: 'Utile pour la réplication',
        body: 'Ce qui est appris ici peut informer de futurs travaux de terrain et de futures expansions.'
      }
    ],
    nextEyebrow: 'Comment participer',
    nextTitle: 'Soutenir la prochaine phase ou continuer à parcourir le site.',
    nextBody:
      'Si vous voulez suivre le pilote, la prochaine étape est directe et publique.',
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
    footerTitle: 'Un pilote public avec la plantation en place.',
    footerBody:
      "San Rafael est pensé pour rester lisible sans exposer les détails sensibles du terrain. Il donne assez de contexte pour comprendre ce qui s'est passé, ce qui vient ensuite et pourquoi le projet compte.",
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
