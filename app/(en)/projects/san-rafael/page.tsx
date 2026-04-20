import type { Metadata } from 'next';

import { ProjectDetailPage, type ProjectDetailCopy } from '@/components/project-detail-page';
import { buildProjectMetadata, PROJECT_PATHS } from '@/lib/projects';
import { DONATE_URL, localePath } from '@/lib/site';

export function generateMetadata(): Metadata {
  return buildProjectMetadata({
    locale: 'en',
    path: PROJECT_PATHS.sanRafael,
    title: 'San Rafael | Vetiver Without Borders',
    description: 'San Rafael is an active vetiver pilot in El Juego, San Rafael, Antioquia, Colombia.',
    image: '2022/10/DSCF0117.jpeg'
  });
}

export default function EnglishSanRafaelProjectPage() {
  return <ProjectDetailPage locale="en" copy={copy.en} />;
}

const copy: Record<'en', ProjectDetailCopy> = {
  en: {
    eyebrow: 'Active field pilot',
    title: 'San Rafael',
    subtitle: 'A live vetiver pilot in El Juego, San Rafael, Antioquia, Colombia.',
    image: '2022/10/DSCF0117.jpeg',
    summaryEyebrow: 'Public overview',
    summaryTitle: 'A public pilot with real planting already in the ground.',
    summaryBody:
      'San Rafael shows vetiver in a working site in El Juego. The first batch of 250 vetiver slips has already been planted, and this page explains the problem, the response, and the next phase in public terms.',
    whyEyebrow: 'Why it matters',
    whyTitle: 'Why this project stands on its own.',
    whyPoints: [
      {
        title: 'Real-site learning',
        body: 'It is tied to an active field setting, not a concept note.'
      },
      {
        title: 'Visible progress',
        body: 'Support now helps expand, document, and strengthen what has already started.'
      },
      {
        title: 'Useful for replication',
        body: 'What is learned here can inform future field work and later expansion.'
      }
    ],
    nextEyebrow: 'How to engage',
    nextTitle: 'Support the next phase or keep browsing.',
    nextBody: 'If you want to follow the pilot, the next step is direct and public.',
    nextSteps: [
      'Review the project as a public field example.',
      'Support the next planting phase through the donation link.',
      'Use the contact page for partnership or site questions.'
    ],
    ctaLabel: 'Support San Rafael',
    ctaHref: DONATE_URL,
    ctaExternal: true,
    supportNote: 'For partnership or local follow-up, use the contact page before contributing.',
    footerTitle: 'A public pilot with planting in the ground.',
    footerBody:
      'San Rafael is meant to stay readable without exposing sensitive field detail. It gives supporters enough context to see what has happened, what comes next, and why the project matters.',
    footerLinks: [
      {
        label: 'Open the projects page',
        href: localePath('/projects', 'en')
      },
      {
        label: 'Partner with VSF',
        href: localePath('/about/contact', 'en')
      }
    ]
  }
};
