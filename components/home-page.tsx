import Link from 'next/link';

import { FormEmbed } from '@/components/form-embed';
import { PostCard } from '@/components/post-card';
import type { ContentEntry } from '@/lib/content';
import { getMediaUrl, type Locale } from '@/lib/site';

type HomePageProps = {
  locale: Locale;
  posts: ContentEntry[];
};

export function HomePage({ locale, posts }: HomePageProps) {
  const t = copy[locale];

  return (
    <div className="pb-16">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-20 bg-brand-band opacity-90" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 38, 28, 0.42), rgba(20, 38, 28, 0.34)), url(${getMediaUrl(
              '2022/10/macro-photo-of-wet-green-grass-and-water-droplets-768x512.jpg'
            )})`
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(209,217,180,0.55),rgba(20,38,28,0.25)_70%,rgba(239,231,218,1))]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="brand-label mx-auto inline-block rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.28em] shadow-card backdrop-blur">
              {t.heroEyebrow}
            </p>
            <h1 className="mt-6 text-6xl font-black uppercase tracking-[-0.06em] text-secondary [text-shadow:0_2px_8px_rgba(0,0,0,0.4)] sm:text-7xl lg:text-[5.5rem]">
              Vetiver
            </h1>
            <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-semibold leading-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.5)] sm:text-3xl lg:text-4xl">
              {t.heroTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl rounded-[1.5rem] bg-surface/70 px-5 py-4 text-lg font-semibold leading-8 text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
              {t.heroSubtitle}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href={locale === 'fr' ? '/fr/get-involved' : '/get-involved'}
                className="brand-pill rounded-full border border-bark px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] shadow-soft hover:bg-clay"
              >
                {t.heroCta}
              </Link>
            </div>
          </div>

          <div className="brand-frame grid gap-6 rounded-[2rem] p-5 backdrop-blur md:grid-cols-[1.15fr_0.85fr] lg:p-8">
            <div className="space-y-5">
              <p className="text-lg leading-8 text-ink/80">{t.introOne}</p>
              <p className="text-lg leading-8 text-ink/80">{t.introTwo}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={locale === 'fr' ? '/fr/vetiver' : '/vetiver'}
                  className="brand-pill rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] hover:bg-clay"
                >
                  {t.learnMore}
                </Link>
                <a
                  href="https://www.facebook.com/profile.php?id=61553674826785"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-bark/15 bg-surface/40 px-5 py-3 text-sm font-medium text-bark hover:border-bark/30"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/company/vetiver-sans-frontieres/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-bark/15 bg-surface/40 px-5 py-3 text-sm font-medium text-bark hover:border-bark/30"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/vetiversansfrontieres/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-bark/15 bg-surface/40 px-5 py-3 text-sm font-medium text-bark hover:border-bark/30"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src={getMediaUrl('2025/03/Vetiver-Highway.jpg')}
                alt=""
                className="h-full min-h-[280px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 38, 28, 0.48), rgba(20, 38, 28, 0.48)), url(${getMediaUrl(
            '2022/10/dallas-reedy-LWdXKpVFSKg-unsplash-scaled.jpg'
          )})`
        }}
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center lg:px-10">
          <p className="max-w-3xl text-xl leading-9 text-white">{t.donateText}</p>
          <a
            href="https://www.zeffy.com/en-CA/donation-form/cbac2a62-15cb-4f94-866c-c860b1cfa606"
            target="_blank"
            rel="noreferrer"
            className="brand-pill mt-8 rounded-full px-8 py-4 text-base font-semibold uppercase tracking-[0.14em] shadow-soft hover:bg-clay"
          >
            {t.donateCta}
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <div className="text-center">
          <p className="mx-auto inline-block rounded-full bg-surface px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-bark">
            {t.projectsEyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-bold uppercase tracking-[-0.05em] text-ink">{t.projectsTitle}</h2>
          <p className="mt-4 text-lg text-ink/75">{t.projectsSubtitle}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} entry={post} locale={locale} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="rounded-[2rem] bg-surface p-8 shadow-card">
          <h2 className="text-4xl font-bold uppercase tracking-[-0.05em] text-ink">{t.involvedTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-ink/80">{t.involvedBody}</p>
          <div className="mt-8">
            <Link
              href={locale === 'fr' ? '/fr/get-involved' : '/get-involved'}
              className="brand-pill rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] hover:bg-clay"
            >
              {t.involvedCta}
            </Link>
          </div>
        </div>
        <div className="brand-frame rounded-[2rem] p-8">
          <h2 className="text-4xl font-bold uppercase tracking-[-0.05em] text-ink">{t.partnerTitle}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
            <img
              src={getMediaUrl('2022/10/vlcsnap-2022-10-21-14h15m27s059-scaled.jpg')}
              alt=""
              className="h-full min-h-[220px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="space-y-5">
              <p className="text-lg leading-8 text-ink/80">{t.partnerBody}</p>
              <p className="text-base font-semibold uppercase tracking-[0.18em] text-bark/60">{t.followLabel}</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/profile.php?id=61553674826785" target="_blank" rel="noreferrer" className="rounded-full border border-bark/15 bg-surface/40 px-4 py-2 text-sm text-bark">
                  Facebook
                </a>
                <a href="https://www.linkedin.com/company/vetiver-sans-frontieres/" target="_blank" rel="noreferrer" className="rounded-full border border-bark/15 bg-surface/40 px-4 py-2 text-sm text-bark">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/vetiversansfrontieres/" target="_blank" rel="noreferrer" className="rounded-full border border-bark/15 bg-surface/40 px-4 py-2 text-sm text-bark">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] bg-surface p-8 shadow-card">
          <div className="text-center">
            <h2 className="text-4xl font-bold uppercase tracking-[-0.05em] text-ink">{t.newsletterTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-ink/78">{t.newsletterBody}</p>
          </div>
          <div className="mt-8">
            <FormEmbed kind="newsletter" />
          </div>
        </div>
      </section>
    </div>
  );
}

const copy = {
  en: {
    heroEyebrow: 'Regenerative action',
    heroTitle:
      'At Vetiver Without Borders, we help communities facing climate stress rebuild their land, protect their water, and secure their future.',
    heroSubtitle:
      'Using the Vetiver System, we combine science, engineering, and local knowledge to transform proven ecological solutions into real, lasting impact on the ground.',
    heroCta: 'Support Regenerative Action',
    introOne:
      'Vetiver Without Borders is an environmental charity specializing in Vetiver grass technology. Our innovative approach strengthens the earth, purifies water, and drives sustainable land rehabilitation to combat climate change and soil erosion.',
    introTwo:
      'Join our efforts to combat climate change by promoting Vetiver grass technology. This cost-effective environmental conservation solution manages rainwater, controls soil erosion, and enhances soil and water quality worldwide.',
    learnMore: 'Learn More',
    donateText:
      'Join VSF in environmental regeneration. Witness the transformation of our ongoing and completed projects, and help create a sustainable future by supporting field action directly.',
    donateCta: 'Donate here',
    projectsEyebrow: 'Field stories',
    projectsTitle: 'Projects',
    projectsSubtitle: 'Follow our latest stories and stay close to the projects on the ground.',
    involvedTitle: 'Get Involved, Make a Difference',
    involvedBody:
      'We believe in the power of collective action. Whether you want to propose a project, sponsor an initiative, or support our work in any way you can, your participation helps resilient solutions take root.',
    involvedCta: 'Get involved',
    partnerTitle: 'Partner with Us',
    partnerBody:
      'Collaboration is key to lasting impact. VSF works hand in hand with organizations and stakeholders who share a vision for greener, more resilient communities.',
    followLabel: 'Follow us to stay updated',
    newsletterTitle: 'Subscribe to our newsletter',
    newsletterBody:
      'Get notified about our latest developments and projects through a hosted sign-up flow configured for the new stack.'
  },
  fr: {
    heroEyebrow: 'Action regenerative',
    heroTitle:
      'Chez Vetiver Sans Frontieres, nous aidons les communautes confrontees au stress climatique a restaurer leurs terres, proteger leur eau et renforcer leur avenir.',
    heroSubtitle:
      'Grace au Systeme Vetiver, nous combinons science, ingenierie et savoir local pour transformer des solutions ecologiques eprouvees en impact durable sur le terrain.',
    heroCta: 'Soutenir l action regenerative',
    introOne:
      'Vetiver Sans Frontieres est un organisme environnemental qui se specialise dans la technologie du vetiver. Notre approche renforce les sols, purifie l eau et soutient la rehabilitation durable des terres.',
    introTwo:
      'Rejoignez nos efforts pour lutter contre le changement climatique en favorisant des solutions concretes de conservation et de regeneration des sols et de l eau.',
    learnMore: 'En savoir plus',
    donateText:
      'Participez a la regeneration environnementale avec VSF. Soutenez nos projets de terrain et aidez-nous a construire un futur plus durable.',
    donateCta: 'Faire un don',
    projectsEyebrow: 'Actualites terrain',
    projectsTitle: 'Projets',
    projectsSubtitle: 'Suivez nos actualites et restez proches des projets sur le terrain.',
    involvedTitle: 'Impliquez-vous, faites une difference',
    involvedBody:
      'Nous croyons au pouvoir de l action collective. Que vous souhaitiez proposer un projet, soutenir une initiative ou contribuer a notre mission, votre participation compte.',
    involvedCta: 'Participer',
    partnerTitle: 'Partenaires',
    partnerBody:
      'La collaboration est essentielle pour obtenir un impact durable. VSF travaille avec des organisations et des partenaires qui partagent une vision commune de regeneration.',
    followLabel: 'Suivez-nous',
    newsletterTitle: 'Abonnez-vous a notre newsletter',
    newsletterBody:
      'Recevez nos dernieres actualites et suivez l evolution de nos projets grace a un formulaire heberge configure pour la nouvelle plateforme.'
  }
} as const;
