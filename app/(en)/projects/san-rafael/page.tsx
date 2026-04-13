import type { Metadata } from 'next';

import { ProjectDetailPage, type ProjectDetailCopy } from '@/components/project-detail-page';
import { buildProjectMetadata, PROJECT_PATHS } from '@/lib/projects';
import { DONATE_URL, localePath } from '@/lib/site';

export function generateMetadata(): Metadata {
  return buildProjectMetadata({
    locale: 'en',
    path: PROJECT_PATHS.sanRafael,
    title: 'San Rafael | Vetiver Without Borders',
    description: 'San Rafael is an active field pilot and donor-ready path for vetiver work.',
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
    subtitle: 'A live vetiver path on the ground.',
    image: '2022/10/DSCF0117.jpeg',
    summaryEyebrow: 'Public overview',
    summaryTitle: 'A field pilot with a clear support path.',
    summaryBody:
      'San Rafael shows vetiver in a working site. The public page stays donor-safe while still making the pilot easy to understand.',
    whyEyebrow: 'Why it matters',
    whyTitle: 'Why this is a separate project path.',
    whyPoints: [
      {
        title: 'Real-site learning',
        body: 'It is tied to an active field setting, not a concept note.'
      },
      {
        title: 'Visible progress',
        body: 'Supporters can understand what the pilot is trying to do.'
      },
      {
        title: 'Useful for replication',
        body: 'What is learned here can inform future field work.'
      }
    ],
    nextEyebrow: 'Support route',
    nextTitle: 'Back the pilot or open the broader portfolio.',
    nextBody: 'If you want to support field learning, the next step is direct and public.',
    nextSteps: [
      'Review the pilot as a public field project.',
      'Support implementation through the donation path.',
      'Use the contact page for partnership questions.'
    ],
    ctaLabel: 'Support San Rafael',
    ctaHref: DONATE_URL,
    ctaExternal: true,
    supportNote: 'For partnership questions, use the contact page before contributing.',
    footerTitle: 'A pilot path that stays public.',
    footerBody:
      'San Rafael is meant to be readable without exposing sensitive field detail. It stays concrete enough to support and disciplined enough to learn from.',
    footerLinks: [
      {
        label: 'Open the portfolio gateway',
        href: localePath('/projects', 'en')
      },
      {
        label: 'Partner with VSF',
        href: localePath('/about/contact', 'en')
      }
    ]
  }
};
