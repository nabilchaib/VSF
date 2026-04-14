import type { Metadata } from 'next';

import { ProjectDetailPage, type ProjectDetailCopy } from '@/components/project-detail-page';
import { buildProjectMetadata, PROJECT_PATHS } from '@/lib/projects';
import { localePath } from '@/lib/site';

export function generateMetadata(): Metadata {
  return buildProjectMetadata({
    locale: 'fr',
    path: PROJECT_PATHS.propose,
    title: 'Proposer un projet | Vetiver Sans Frontieres',
    description: 'Utilisez cette voie pour proposer un nouveau projet vetiver ou une initiative emergente.',
    image: '2022/10/IMG-20220616-WA0000-1024x768.jpg'
  });
}

export default function FrenchProjectProposalPage() {
  return <ProjectDetailPage locale="fr" copy={copy.fr} />;
}

const copy: Record<'fr', ProjectDetailCopy> = {
  fr: {
    eyebrow: 'Projets emergents',
    title: 'Proposer un projet',
    subtitle: 'Utilisez cette voie pour une nouvelle idee vetiver, un besoin local ou une initiative en debut de parcours.',
    image: '2022/10/IMG-20220616-WA0000-1024x768.jpg',
    summaryEyebrow: 'Entree publique',
    summaryTitle: 'Une voie simple pour le premier contact.',
    summaryBody:
      'Cette page garde le premier contact clair. Envoyez les elements essentiels, et VSF pourra voir quelle suite convient.',
    whyEyebrow: 'Pourquoi c’est important',
    whyTitle: 'Pourquoi une voie de proposition aide.',
    whyPoints: [
      {
        title: 'Une entree claire',
        body: 'Les nouvelles idees ont besoin d un point de depart.'
      },
      {
        title: 'Meilleur ajustement',
        body: 'VSF peut examiner le besoin local, le porteur et la voie pratique.'
      },
      {
        title: 'Moins d allers-retours',
        body: 'Une voie dediee reduit la friction pour les communautes et les partenaires.'
      }
    ],
    nextEyebrow: 'Ce qu il faut inclure',
    nextTitle: 'Envoyez d abord les bases.',
    nextBody:
      'Un premier message court nous aide a comprendre le site, le besoin et le soutien que vous recherchez.',
    nextSteps: [
      'Decrivez le lieu et le besoin local.',
      'Nommez les personnes ou le groupe qui porte le travail.',
      'Expliquez le soutien que vous cherchez.',
      'Partagez le calendrier, les contraintes ou les partenaires deja presents.'
    ],
    ctaLabel: 'Contacter VSF',
    ctaHref: localePath('/about/contact', 'fr'),
    supportNote:
      'Cette voie sert au premier contact. Nous pouvons guider la suite a partir de la.',
    footerTitle: 'Gardez les propositions simples et lisibles.',
    footerBody:
      'Le but n est pas de remplacer une conception rigoureuse de projet. C est de rendre la premiere etape claire pour que les nouvelles idees entrent sans confusion.',
    footerLinks: [
      {
        label: 'Voir les projets',
        href: localePath('/projects', 'fr')
      },
      {
        label: 'Découvrir le vétiver',
        href: localePath('/vetiver', 'fr')
      }
    ]
  }
};
