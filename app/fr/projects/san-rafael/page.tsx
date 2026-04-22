import type { Metadata } from 'next';

import { ProjectDetailPage, type ProjectDetailCopy } from '@/components/project-detail-page';
import { buildProjectMetadata, PROJECT_PATHS } from '@/lib/projects';
import { DONATE_URL, localePath } from '@/lib/site';

export function generateMetadata(): Metadata {
  return buildProjectMetadata({
    locale: 'fr',
    path: PROJECT_PATHS.sanRafael,
    title: 'San Rafael | Vetiver Sans Frontieres',
    description: 'San Rafael est un site vétiver vivant de VSF à El Juego, San Rafael, Antioquia, Colombie — avec les 250 premiers plants déjà en terre.',
    image: '2026/04/san-rafael-1231.jpg'
  });
}

export default function FrenchSanRafaelProjectPage() {
  return <ProjectDetailPage locale="fr" copy={copy.fr} />;
}

const copy: Record<'fr', ProjectDetailCopy> = {
  fr: {
    eyebrow: 'Projet de terrain actif',
    title: 'San Rafael',
    subtitle: 'Un site vétiver vivant à El Juego, San Rafael, Antioquia, Colombie.',
    image: '2026/04/san-rafael-1231.jpg',
    gallery: ['2026/04/san-rafael-1233.jpg', '2026/04/san-rafael-1243.jpg'],
    summaryEyebrow: 'Vue du projet',
    summaryTitle: 'Un site vétiver actif, avec la plantation déjà en terre.',
    summaryBody:
      "San Rafael est un site vétiver vivant à El Juego. Les 250 premiers plants de vétiver sont déjà en terre, et cette page explique ce que le site demande, ce qui y pousse aujourd'hui, et ce que la prochaine phase permettrait de faire de plus.",
    whyEyebrow: 'Pourquoi c’est important',
    whyTitle: 'Pourquoi ce projet compte.',
    whyPoints: [
      {
        title: 'Ancré dans un site réel',
        body: "Le travail est rattaché à un contexte de terrain actif à El Juego, pas à une idée sur papier."
      },
      {
        title: 'Progression visible',
        body: 'Le soutien aujourd’hui permet d’étendre la plantation, de documenter les résultats et de renforcer ce qui a déjà pris racine.'
      },
      {
        title: 'Utile au-delà du site',
        body: 'Ce que nous apprenons ici peut nourrir de futures plantations et des sites similaires confrontés aux mêmes pressions sur le sol et l’eau.'
      }
    ],
    nextEyebrow: 'Comment participer',
    nextTitle: 'Soutenir la prochaine phase de plantation ou continuer à parcourir le site.',
    nextBody:
      'Si vous voulez suivre le projet, la prochaine étape est simple et directe.',
    nextSteps: [
      'Lire la page comme un exemple concret de vétiver dans un site de terrain réel.',
      'Financer la prochaine phase de plantation via le lien de don.',
      'Utiliser la page contact pour les questions de partenariat ou de suivi local.'
    ],
    ctaLabel: 'Soutenir San Rafael',
    ctaHref: DONATE_URL,
    ctaExternal: true,
    supportNote:
      'Pour les questions de partenariat ou de suivi local, passez par la page contact avant de contribuer.',
    footerTitle: 'Un vrai projet, avec la plantation déjà en terre.',
    footerBody:
      "San Rafael donne assez de contexte pour voir ce qui est déjà en place sur le site, ce dont la prochaine phase de plantation a besoin, et pourquoi ce travail compte pour les terres autour d'El Juego.",
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
