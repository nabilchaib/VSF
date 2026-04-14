import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { VetiverProofPoints } from '@/components/vetiver-proof-points';
import { DONATE_URL, getMediaUrl, localePath, type Locale } from '@/lib/site';

export function AboutPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div>
      <PageHero title={t.title} subtitle={t.subtitle} image="2022/10/IMG-20220616-WA0000-1024x768.jpg" align="left" />

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[2.2rem] border border-bark/10 bg-white p-7 shadow-card lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.introEyebrow}</p>
              <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold text-ink sm:text-4xl">{t.introTitle}</h2>
              <p className="mt-5 text-base leading-8 text-ink/72">{t.introBodyOne}</p>
              <p className="mt-4 text-base leading-8 text-ink/68">{t.introBodyTwo}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={DONATE_URL} external target="_blank" rel="noreferrer">
                  {t.donateCta}
                </Button>
                <Button href={localePath('/get-involved', locale)} variant="secondary">
                  {t.involvedCta}
                </Button>
              </div>
              <div className="pt-3">
                <Button href={localePath('/vetiver', locale)} variant="tertiary" className="text-sm tracking-[0.16em]">
                  {t.introCta}
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[2.2rem] border border-bark/10 bg-[#f2ecdf] p-3 shadow-card">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={getMediaUrl('2022/10/DSCF0117.jpeg')}
                    alt={t.imageAltOne}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <VetiverProofPoints locale={locale} />

      <section className="bg-[#f3ede2] py-14 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.valuesEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t.valuesTitle}</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.values.map((value) => (
              <div key={value.title} className="rounded-[1.8rem] border border-bark/10 bg-white p-6 shadow-card">
                <h3 className="text-xl font-semibold text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{value.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[2.1rem] border border-bark/10 bg-white px-6 py-6 shadow-card lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/58">{t.goalsEyebrow}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {t.goals.map((goal) => (
                <span key={goal} className="rounded-full border border-bark/10 bg-surface/55 px-4 py-2 text-sm text-ink/70">
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-bark/10 bg-[#eef1e4] p-3 shadow-card">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] sm:aspect-[16/11] lg:aspect-[4/5]">
                <Image
                  src={getMediaUrl('2022/11/ivan-bandura-Oei00n8F5JQ-unsplash-scaled.jpg')}
                  alt={t.imageAltTwo}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-[2.2rem] border border-bark/10 bg-bark px-7 py-8 text-white shadow-soft lg:px-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface/76">{t.ctaEyebrow}</p>
              <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold sm:text-4xl">{t.ctaTitle}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">{t.ctaBody}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={DONATE_URL} external target="_blank" rel="noreferrer">
                  {t.secondaryCta}
                </Button>
                <Button href={localePath('/get-involved', locale)} variant="secondary" className="border-white/18 bg-white/10 text-white hover:border-white/28 hover:bg-white/14">
                  {t.supportCta}
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
    title: 'About VSF',
    subtitle:
      'Why vetiver matters, why VSF exists, and how the work becomes field action.',
    introEyebrow: 'Why VSF exists',
    introTitle: 'Vetiver first, then the organization.',
    introBodyOne:
      'Vetiver Without Borders exists to help communities understand vetiver and use it for soil, water, and land protection.',
    introBodyTwo:
      'We support that work with education, field guidance, project support, and public project pages people can trust.',
    introCta: 'Learn vetiver',
    donateCta: 'Donate',
    involvedCta: 'Get involved',
    secondaryCta: 'Donate',
    supportCta: 'Get involved',
    imageAltOne: 'VSF team and community members in a field setting.',
    valuesEyebrow: 'How VSF works',
    valuesTitle: 'Education, guidance, and project support.',
    values: [
      {
        title: 'Education',
        body: 'We help people understand vetiver before asking them to act on it.'
      },
      {
        title: 'Field guidance',
        body: 'We shape work around site conditions and local capacity so the solution fits the problem.'
      },
      {
        title: 'Project support',
        body: 'We support follow-through so projects stay credible and useful after the first step.'
      }
    ],
    goalsEyebrow: 'Where it applies',
    goals: ['Soil', 'Water', 'Slopes', 'Fields', 'Roads'],
    imageAltTwo: 'People gathering outdoors to support regenerative environmental work.',
    ctaEyebrow: 'Join the work',
    ctaTitle: 'Help turn vetiver knowledge into practical action.',
    ctaBody:
      'Support projects, sponsor field work, or help us extend technical support where it is most needed.'
  },
  fr: {
    title: 'A propos de VSF',
    subtitle:
      'Pourquoi le vetiver compte, pourquoi VSF existe et comment le travail devient action de terrain.',
    introEyebrow: 'Pourquoi VSF existe',
    introTitle: 'Le vetiver d abord, l organisation ensuite.',
    introBodyOne:
      'Vetiver Sans Frontieres existe pour aider les communautes a comprendre le vetiver et a l utiliser pour proteger les sols, l eau et les terres.',
    introBodyTwo:
      'Nous soutenons ce travail par la formation, le soutien de terrain, l appui aux projets et des pages de projet publiques fiables.',
    introCta: 'Decouvrir le vetiver',
    donateCta: 'Faire un don',
    involvedCta: 'Participer',
    secondaryCta: 'Faire un don',
    supportCta: 'Participer',
    imageAltOne: 'Equipe VSF et membres de la communaute sur le terrain.',
    valuesEyebrow: 'Comment VSF travaille',
    valuesTitle: 'Formation, accompagnement et soutien de projet.',
    values: [
      {
        title: 'Formation',
        body: 'Nous aidons les gens a comprendre le vetiver avant de leur demander d agir.'
      },
      {
        title: 'Soutien de terrain',
        body: 'Nous adaptons le travail aux conditions du site et aux capacites locales pour que la solution corresponde au probleme.'
      },
      {
        title: 'Soutien de projet',
        body: 'Nous soutenons le suivi pour que les projets restent credibles et utiles apres la premiere etape.'
      }
    ],
    goalsEyebrow: 'Domaines d application',
    goals: ['Sols', 'Eau', 'Pentes', 'Champs', 'Routes'],
    imageAltTwo: 'Personnes rassemblees a l exterieur autour d un travail de regeneration.',
    ctaEyebrow: 'Rejoindre le travail',
    ctaTitle: 'Aidez a transformer le savoir sur le vetiver en action concrete.',
    ctaBody:
      'Soutenez des projets, appuyez le travail de terrain ou aidez-nous a etendre notre accompagnement technique.'
  }
} as const;
