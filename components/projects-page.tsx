import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { getMediaUrl, localePath, type Locale } from '@/lib/site';

export function ProjectsPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div>
      <PageHero title={t.title} subtitle={t.subtitle} image="2022/10/vlcsnap-2022-10-21-14h15m27s059-scaled.jpg" align="left" />

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2.2rem] border border-bark/10 bg-white p-7 shadow-card lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.introEyebrow}</p>
              <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold text-ink sm:text-4xl">{t.introTitle}</h2>
              <p className="mt-5 text-base leading-8 text-ink/72">{t.introBody}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={localePath('/vetiver', locale)} variant="secondary">
                  {t.introCta}
                </Button>
                <Button href={localePath('/projects/rdc', locale)} variant="tertiary" className="text-sm tracking-[0.16em]">
                  {t.hubCta}
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2.2rem] border border-bark/10 bg-[#f2ecdf] p-3 shadow-card">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem]">
                <Image
                  src={getMediaUrl('2022/10/vlcsnap-2022-10-21-14h15m27s059-scaled.jpg')}
                  alt={t.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f3ede2] py-14 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.processEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t.processTitle}</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.steps.map((step, index) => (
              <div key={step.title} className="rounded-[1.8rem] border border-bark/10 bg-white p-6 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/58">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="rounded-[2.3rem] border border-bark/10 bg-bark px-7 py-8 text-white shadow-soft lg:px-9">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface/76">{t.bandEyebrow}</p>
                <h2 className="mt-3 max-w-[16ch] text-3xl font-semibold sm:text-4xl">{t.bandTitle}</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">{t.bandBody}</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button href={localePath('/about/contact', locale)} variant="primary">
                  {t.bandCta}
                </Button>
                <Button href={localePath('/get-involved', locale)} variant="secondary" className="border-white/18 bg-white/10 text-white hover:border-white/28 hover:bg-white/14">
                  {t.secondaryCta}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

const copy = {
  en: {
    title: 'Vetiver projects',
    subtitle:
      'See how vetiver turns into practical projects, evidence, and partnership opportunities.',
    introEyebrow: 'Project intake',
    introTitle: 'Show vetiver in action.',
    introBody:
      'Projects are where a plain-language understanding of vetiver becomes a site plan, a field pilot, or a credible support path for donors and partners.',
    introCta: 'Learn vetiver',
    hubCta: 'Open RDC hub',
    imageAlt: 'Landscape showing a site where a land regeneration project could begin.',
    processEyebrow: 'Portfolio logic',
    processTitle: 'A straightforward path from vetiver basics to project support.',
    steps: [
      {
        title: 'Understand the plant',
        body: 'Start with vetiver as a practical tool for soil, water, slope stability, and land recovery.'
      },
      {
        title: 'Match it to the problem',
        body: 'Each project should connect a real site condition to a vetiver-based response that can be maintained locally.'
      },
      {
        title: 'Turn it into action',
        body: 'The result can be a pilot, a flagship project, or a support path that donors and partners can understand.'
      }
    ],
    bandEyebrow: 'Start the conversation',
    bandTitle: 'Bring us the site or the problem, and we start with vetiver.',
    bandBody:
      'If you are ready to propose a project or want to sponsor existing work, start with the vetiver explainer or the RDC hub and contact us from there.',
    bandCta: 'Contact us',
    secondaryCta: 'Get involved'
  },
  fr: {
    title: 'Projets vetiver',
    subtitle:
      'Voyez comment le vetiver se transforme en projets pratiques, en preuves et en opportunites de partenariat.',
    introEyebrow: 'Depot de projet',
    introTitle: 'Montrer le vetiver en action.',
    introBody:
      'Les projets sont l endroit ou la comprehension simple du vetiver devient un plan de site, un projet pilote ou un chemin de soutien credible pour les donateurs et partenaires.',
    introCta: 'Decouvrir le vetiver',
    hubCta: 'Ouvrir le hub RDC',
    imageAlt: 'Paysage montrant un site ou un projet de regeneration pourrait commencer.',
    processEyebrow: 'Logique du portefeuille',
    processTitle: 'Un chemin simple des bases du vetiver au soutien de projet.',
    steps: [
      {
        title: 'Comprendre la plante',
        body: 'Commencez par le vetiver comme outil pratique pour les sols, l eau, la stabilite des pentes et la restauration des terres.'
      },
      {
        title: 'Lier au probleme',
        body: 'Chaque projet doit relier une condition de site a une reponse basee sur le vetiver et maintenable localement.'
      },
      {
        title: 'Passer a l action',
        body: 'Le resultat peut etre un pilote, un projet phare ou un chemin de soutien que donateurs et partenaires comprennent.'
      }
    ],
    bandEyebrow: 'Commencer la discussion',
    bandTitle: 'Apportez-nous le site ou le probleme, et nous commencons par le vetiver.',
    bandBody:
      'Si vous etes pret a proposer un projet ou a parrainer un travail deja en cours, commencez par le vetiver ou le hub RDC puis contactez-nous.',
    bandCta: 'Contactez-nous',
    secondaryCta: 'Participer'
  }
} as const;
