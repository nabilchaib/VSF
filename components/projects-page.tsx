import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { getMediaUrl, type Locale } from '@/lib/site';

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
              <Button href={locale === 'fr' ? '/fr/contact' : '/about/contact'} variant="secondary" className="mt-7">
                {t.cta}
              </Button>
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/54">0{index + 1}</p>
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
                <Button href={locale === 'fr' ? '/fr/contact' : '/about/contact'} variant="primary">
                  {t.cta}
                </Button>
                <Button href={locale === 'fr' ? '/fr/get-involved' : '/get-involved'} variant="secondary" className="border-white/18 bg-white/10 text-white hover:border-white/28 hover:bg-white/14">
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
    title: 'Projects',
    subtitle:
      'Present a project, explain the local need, and explore how VSF can support resilient action on the ground.',
    introEyebrow: 'Project intake',
    introTitle: 'Turn a local need into a credible project proposal.',
    introBody:
      'It is simple to present a project to our foundation. Committees review submissions based on their potential impact on the community and the clarity of the local leadership behind them.',
    cta: 'Contact us',
    imageAlt: 'Landscape showing a site where a land regeneration project could begin.',
    processEyebrow: 'How it works',
    processTitle: 'A straightforward path from idea to field support.',
    steps: [
      {
        title: 'Describe the local challenge',
        body: 'Explain the land, water, or resilience issue your community or organization is trying to address.'
      },
      {
        title: 'Share the project context',
        body: 'Tell us who is involved, what support already exists, and how the work could be implemented responsibly.'
      },
      {
        title: 'Discuss fit with VSF',
        body: 'We review the impact potential and explore whether the project aligns with VSF field action and technical capacity.'
      }
    ],
    bandEyebrow: 'Start the conversation',
    bandTitle: 'Write us today to discuss how your project could move forward.',
    bandBody:
      'If you are ready to propose a project or want to test whether an idea is viable, contact us and we can begin with the local context and expected impact.',
    secondaryCta: 'Get involved'
  },
  fr: {
    title: 'Projets',
    subtitle:
      'Presentez un projet, decrivez le besoin local et voyez comment VSF peut soutenir une action resiliente sur le terrain.',
    introEyebrow: 'Depot de projet',
    introTitle: 'Transformer un besoin local en proposition de projet credible.',
    introBody:
      'Il est simple de presenter un projet a notre fondation. Les comites examinent les propositions selon leur impact potentiel sur la communaute et la clarte du leadership local.',
    cta: 'Contactez-nous',
    imageAlt: 'Paysage montrant un site ou un projet de regeneration pourrait commencer.',
    processEyebrow: 'Comment cela fonctionne',
    processTitle: 'Un chemin simple de l idee au soutien de terrain.',
    steps: [
      {
        title: 'Decrire le defi local',
        body: 'Expliquez le probleme de sol, d eau ou de resilience que votre communaute ou organisation cherche a traiter.'
      },
      {
        title: 'Partager le contexte du projet',
        body: 'Precisez les acteurs impliques, les ressources deja presentes et les conditions de mise en oeuvre.'
      },
      {
        title: 'Evaluer l adequation avec VSF',
        body: 'Nous examinons le potentiel d impact et la compatibilite du projet avec notre action de terrain et notre appui technique.'
      }
    ],
    bandEyebrow: 'Commencer la discussion',
    bandTitle: 'Ecrivez-nous des aujourd hui pour faire avancer votre projet.',
    bandBody:
      'Si vous etes pret a proposer un projet ou a verifier si une idee est realiste, contactez-nous pour commencer par le contexte local et l impact attendu.',
    secondaryCta: 'Participer'
  }
} as const;
