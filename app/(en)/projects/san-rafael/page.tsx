import type { Metadata } from 'next';

import { ProjectDetailPage, type ProjectDetailCopy } from '@/components/project-detail-page';
import { buildProjectMetadata, PROJECT_PATHS } from '@/lib/projects';
import { DONATE_URL, localePath } from '@/lib/site';

export function generateMetadata(): Metadata {
  return buildProjectMetadata({
    locale: 'en',
    path: PROJECT_PATHS.sanRafael,
    title: 'San Rafael | Vetiver Without Borders',
    description: 'San Rafael is a public field project for vetiver work.',
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
    subtitle: 'A live vetiver project on the ground.',
    image: '2022/10/DSCF0117.jpeg',
    summaryEyebrow: 'Public overview',
    summaryTitle: 'A field project with a clear public explanation.',
    summaryBody:
      'San Rafael shows vetiver in a working site. The page explains the work in public terms without exposing more detail than a visitor needs.',
    whyEyebrow: 'Why it matters',
    whyTitle: 'Why this project stands on its own.',
    whyPoints: [
      {
        title: 'Real-site learning',
        body: 'It is tied to an active field setting, not a concept note.'
      },
      {
        title: 'Visible progress',
        body: 'Supporters can understand what the project is trying to do.'
      },
      {
        title: 'Useful for replication',
        body: 'What is learned here can inform future field work.'
      }
    ],
    nextEyebrow: 'How to engage',
    nextTitle: 'Support the project or keep browsing.',
    nextBody: 'If you want to follow the project, the next step is direct and public.',
    nextSteps: [
      'Review the project as a public field example.',
      'Support implementation through the donation link.',
      'Use the contact page for partnership questions.'
    ],
    ctaLabel: 'Support San Rafael',
    ctaHref: DONATE_URL,
    ctaExternal: true,
    supportNote: 'For partnership questions, use the contact page before contributing.',
    footerTitle: 'A public field project.',
    footerBody:
      'San Rafael is meant to be readable without exposing sensitive field detail. It stays concrete enough to support and clear enough to learn from.',
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
