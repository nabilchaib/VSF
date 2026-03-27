import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
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
                <Button href={localePath('/get-involved', locale)} variant="secondary">
                  {t.primaryCta}
                </Button>
                <Button href={DONATE_URL} external target="_blank" rel="noreferrer">
                  {t.secondaryCta}
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
              <div className="grid gap-4 sm:grid-cols-2">
                <MetricCard value="0" label={t.metricOne} />
                <MetricCard value="0" label={t.metricTwo} />
              </div>
            </div>
          </div>
        </Container>
      </section>

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
                <Button href={localePath('/get-involved', locale)} variant="secondary" className="border-white/18 bg-white/10 text-white hover:border-white/28 hover:bg-white/14">
                  {t.primaryCta}
                </Button>
                <Button href={DONATE_URL} external target="_blank" rel="noreferrer">
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

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.6rem] border border-bark/10 bg-white px-5 py-5 shadow-card">
      <p className="text-3xl font-semibold text-bark">{value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ink/62">{label}</p>
    </div>
  );
}

const copy = {
  en: {
    title: 'About',
    subtitle:
      'Empowering communities for sustainable change through practical land regeneration, climate adaptation, and field support.',
    introEyebrow: 'About VSF',
    introTitle: 'Environmental regeneration with communities at the center.',
    introBodyOne:
      'Vetiver Without Borders is a Canadian registered charity working locally and internationally to strengthen resilience against climate stress.',
    introBodyTwo:
      'We develop and share practical applications of the Vetiver System through innovation, research, technical support, and long-term environmental stewardship.',
    primaryCta: 'Get involved',
    secondaryCta: 'Donate',
    imageAltOne: 'VSF team and community members in a field setting.',
    metricOne: 'Trained students',
    metricTwo: 'Completed projects',
    valuesEyebrow: 'Our values',
    valuesTitle: 'Partnerships, inclusion, and durable environmental impact.',
    values: [
      {
        title: 'Powerful partnerships',
        body: 'We collaborate with organizations and local stakeholders to expand reach, deepen expertise, and support durable outcomes.'
      },
      {
        title: 'Inclusion',
        body: 'We aim to involve women, girls, and diverse local participants so knowledge, skills, and regeneration techniques can be truly shared and reused.'
      },
      {
        title: 'Environmental leadership',
        body: 'VSF keeps pushing practical regeneration methods that can help communities protect land, water, and long-term resilience.'
      }
    ],
    goalsEyebrow: 'Shared priorities',
    goals: ['Water', 'Climate adaptation', 'Land restoration', 'Inclusive participation', 'Community resilience'],
    imageAltTwo: 'People gathering outdoors to support regenerative environmental work.',
    ctaEyebrow: 'Join the movement',
    ctaTitle: 'Build a greener and more resilient future with VSF.',
    ctaBody:
      'Real change begins with collective action. Support projects, sponsor field work, or help us extend technical support where it is most needed.'
  },
  fr: {
    title: 'A propos',
    subtitle:
      'Renforcer les communautes pour un changement durable grace a la regeneration des terres, l adaptation climatique et l accompagnement de terrain.',
    introEyebrow: 'A propos de VSF',
    introTitle: 'Une regeneration environnementale ancree dans les communautes.',
    introBodyOne:
      'Vetiver Sans Frontieres est un organisme caritatif canadien qui travaille au niveau local et international pour renforcer la resilience face au stress climatique.',
    introBodyTwo:
      'Nous developpons et diffusons des usages concrets du Systeme Vetiver par l innovation, la recherche, le soutien technique et une approche durable de la conservation.',
    primaryCta: 'Participer',
    secondaryCta: 'Faire un don',
    imageAltOne: 'Equipe VSF et membres de la communaute sur le terrain.',
    metricOne: 'Etudiants formes',
    metricTwo: 'Projets realises',
    valuesEyebrow: 'Nos valeurs',
    valuesTitle: 'Partenariats, inclusion et impact environnemental durable.',
    values: [
      {
        title: 'Partenariats solides',
        body: 'Nous collaborons avec des organisations et des acteurs locaux pour elargir la portee des projets et soutenir des resultats durables.'
      },
      {
        title: 'Inclusion',
        body: 'Nous cherchons a impliquer les femmes, les filles et une grande diversite de participants afin que les savoirs puissent etre appropries et retransmis.'
      },
      {
        title: 'Leadership environnemental',
        body: 'VSF poursuit des approches concretes de regeneration pour aider les communautes a proteger les sols, l eau et leur resilience.'
      }
    ],
    goalsEyebrow: 'Priorites partagees',
    goals: ['Eau', 'Adaptation climatique', 'Restauration des terres', 'Participation inclusive', 'Resilience communautaire'],
    imageAltTwo: 'Personnes rassemblees a l exterieur autour d un travail de regeneration.',
    ctaEyebrow: 'Rejoindre le mouvement',
    ctaTitle: 'Construire avec VSF un avenir plus vert et plus resilient.',
    ctaBody:
      'Le changement commence par l action collective. Soutenez des projets, appuyez le travail de terrain ou aidez-nous a etendre notre accompagnement technique.'
  }
} as const;
