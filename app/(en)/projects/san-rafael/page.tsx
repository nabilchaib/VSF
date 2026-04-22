import type { Metadata } from 'next';

import { ProjectDetailPage, type ProjectDetailCopy } from '@/components/project-detail-page';
import { buildProjectMetadata, PROJECT_PATHS } from '@/lib/projects';
import { DONATE_URL, localePath } from '@/lib/site';

export function generateMetadata(): Metadata {
  return buildProjectMetadata({
    locale: 'en',
    path: PROJECT_PATHS.sanRafael,
    title: 'San Rafael | Vetiver Without Borders',
    description: 'San Rafael is a live VSF vetiver site in El Juego, San Rafael, Antioquia, Colombia — with the first 250 slips already planted.',
    image: '2026/04/san-rafael-1231.jpg'
  });
}

export default function EnglishSanRafaelProjectPage() {
  return <ProjectDetailPage locale="en" copy={copy.en} />;
}

const copy: Record<'en', ProjectDetailCopy> = {
  en: {
    eyebrow: 'Active field project',
    title: 'San Rafael',
    subtitle: 'A live vetiver site in El Juego, San Rafael, Antioquia, Colombia.',
    image: '2026/04/san-rafael-1231.jpg',
    gallery: ['2026/04/san-rafael-1233.jpg', '2026/04/san-rafael-1243.jpg'],
    summaryEyebrow: 'Project overview',
    summaryTitle: 'A working vetiver site, with planting already in the ground.',
    summaryBody:
      'San Rafael is a live vetiver site in El Juego. The first 250 vetiver slips have been planted, and this page walks through what the land needs, what is in the ground today, and what the next phase would add.',
    whyEyebrow: 'Why it matters',
    whyTitle: 'Why this project stands on its own.',
    whyPoints: [
      {
        title: 'Grounded in a real site',
        body: 'The work is tied to an active field setting in El Juego, not an idea on paper.'
      },
      {
        title: 'Visible progress',
        body: 'Support today helps expand the planting, document results, and strengthen what is already taking root.'
      },
      {
        title: 'Useful beyond this site',
        body: 'What we learn here can shape future plantings and similar sites facing the same soil and water pressures.'
      }
    ],
    nextEyebrow: 'How to engage',
    nextTitle: 'Support the next planting phase or keep browsing.',
    nextBody: 'If you want to follow the project, the next step is simple and direct.',
    nextSteps: [
      'Read the site as a concrete example of vetiver in a real field setting.',
      'Fund the next planting phase through the donation link.',
      'Use the contact page for partnership or local follow-up questions.'
    ],
    ctaLabel: 'Support San Rafael',
    ctaHref: DONATE_URL,
    ctaExternal: true,
    supportNote: 'For partnership or local follow-up, reach out through the contact page before contributing.',
    footerTitle: 'A real project, with planting already in the ground.',
    footerBody:
      'San Rafael gives you enough context to see what has already happened on the site, what the next planting phase needs, and why the work matters for the land around El Juego.',
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
