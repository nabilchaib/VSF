import type { Metadata } from 'next';

import { ProjectDetailPage, type ProjectDetailCopy } from '@/components/project-detail-page';
import { buildProjectMetadata, PROJECT_PATHS } from '@/lib/projects';
import { localePath } from '@/lib/site';

export function generateMetadata(): Metadata {
  return buildProjectMetadata({
    locale: 'en',
    path: PROJECT_PATHS.propose,
    title: 'Propose a project | Vetiver Without Borders',
    description: 'Use this route to propose a new vetiver project or emerging initiative.',
    image: '2022/10/IMG-20220616-WA0000-1024x768.jpg'
  });
}

export default function EnglishProjectProposalPage() {
  return <ProjectDetailPage locale="en" copy={copy.en} />;
}

const copy: Record<'en', ProjectDetailCopy> = {
  en: {
    eyebrow: 'Emerging projects',
    title: 'Propose a project',
    subtitle: 'Use this route for a new vetiver idea, local need, or early-stage initiative.',
    image: '2022/10/IMG-20220616-WA0000-1024x768.jpg',
    summaryEyebrow: 'Project intake',
    summaryTitle: 'A simple public route for first contact.',
    summaryBody:
      'This page keeps intake clear. Send the basics, and VSF can decide what fits next.',
    whyEyebrow: 'Why it matters',
    whyTitle: 'Why a proposal route helps.',
    whyPoints: [
      {
        title: 'A clear entry point',
        body: 'New ideas need a place to start.'
      },
      {
        title: 'Better fit checks',
        body: 'VSF can review the local need, lead, and practical path.'
      },
      {
        title: 'Less back-and-forth',
        body: 'A dedicated route reduces friction for communities and partners.'
      }
    ],
    nextEyebrow: 'What to include',
    nextTitle: 'Send the basics first.',
    nextBody: 'A short first message helps us understand whether the idea fits VSF and where it should go next.',
    nextSteps: [
      'Describe the location and local need.',
      'Name the people or group leading the work.',
      'Explain what support you are looking for.',
      'Share timing, constraints, or existing partners.'
    ],
    ctaLabel: 'Contact VSF',
    ctaHref: localePath('/about/contact', 'en'),
    supportNote: 'This route is for first contact. We can guide the next step from there.',
    footerTitle: 'Keep proposals simple, public, and readable.',
    footerBody:
      'The goal is not to replace careful project design. It is to make the first step clear so new ideas can enter the portfolio without confusion.',
    footerLinks: [
      {
        label: 'View the portfolio gateway',
        href: localePath('/projects', 'en')
      },
      {
        label: 'Learn about vetiver',
        href: localePath('/vetiver', 'en')
      }
    ]
  }
};
