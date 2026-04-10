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
                <Button href={localePath('/vetiver', locale)} variant="secondary">
                  {t.introCta}
                </Button>
                <Button href={localePath('/projects/rdc', locale)} variant="tertiary" className="text-sm tracking-[0.16em]">
                  {t.hubCta}
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
                <Button href={localePath('/get-involved', locale)} variant="secondary" className="border-white/18 bg-white/10 text-white hover:border-white/28 hover:bg-white/14">
                  {t.supportCta}
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

const copy = {
  en: {
    title: 'About VSF',
    subtitle:
      'Why VSF exists, how vetiver works, and how we turn practical plant knowledge into field action.',
    introEyebrow: 'Why VSF exists',
    introTitle: 'Vetiver first, then the organization.',
    introBodyOne:
      'Vetiver Without Borders exists to help communities understand vetiver and use it for soil, water, and land resilience.',
    introBodyTwo:
      'We support that work with education, technical guidance, project support, and public evidence that donors and partners can trust.',
    introCta: 'Learn vetiver',
    hubCta: 'Open RDC hub',
    secondaryCta: 'Donate',
    supportCta: 'Get involved',
    imageAltOne: 'VSF team and community members in a field setting.',
    valuesEyebrow: 'Our values',
    valuesTitle: 'Partnerships, evidence, and local ownership.',
    values: [
      {
        title: 'Partnerships',
        body: 'We collaborate with organizations and local stakeholders so projects are rooted in real needs and real capacity.'
      },
      {
        title: 'Evidence',
        body: 'We use practical proof points, project stories, and field learning to show what is working and why.'
      },
      {
        title: 'Local ownership',
        body: 'We design work that local teams can understand, maintain, and adapt after the first intervention.'
      }
    ],
    goalsEyebrow: 'Shared priorities',
    goals: ['Water', 'Climate adaptation', 'Land restoration', 'Evidence', 'Community resilience'],
    imageAltTwo: 'People gathering outdoors to support regenerative environmental work.',
    ctaEyebrow: 'Join the work',
    ctaTitle: 'Help turn vetiver knowledge into practical action.',
    ctaBody:
      'Support projects, sponsor field work, or help us extend technical support where it is most needed.'
  },
  fr: {
    title: 'A propos de VSF',
    subtitle:
      'Pourquoi VSF existe, comment le vetiver fonctionne et comment nous transformons ce savoir en action de terrain.',
    introEyebrow: 'Pourquoi VSF existe',
    introTitle: 'Le vetiver d abord, l organisation ensuite.',
    introBodyOne:
      'Vetiver Sans Frontieres existe pour aider les communautes a comprendre le vetiver et a l utiliser pour renforcer les sols, l eau et les paysages.',
    introBodyTwo:
      'Nous soutenons ce travail par la formation, l accompagnement technique, l appui aux projets et des preuves publiques fiables pour les donateurs et partenaires.',
    introCta: 'Decouvrir le vetiver',
    hubCta: 'Ouvrir le hub RDC',
    secondaryCta: 'Faire un don',
    supportCta: 'Participer',
    imageAltOne: 'Equipe VSF et membres de la communaute sur le terrain.',
    valuesEyebrow: 'Nos valeurs',
    valuesTitle: 'Partenariats, preuves et appropriation locale.',
    values: [
      {
        title: 'Partenariats',
        body: 'Nous collaborons avec des organisations et des acteurs locaux pour que les projets reposent sur de vrais besoins et de vraies capacites.'
      },
      {
        title: 'Preuves',
        body: 'Nous utilisons des reperes publics, des recits de projets et l apprentissage de terrain pour montrer ce qui fonctionne.'
      },
      {
        title: 'Appropriation locale',
        body: 'Nous concevons des actions que les equipes locales peuvent comprendre, entretenir et adapter apres la premiere intervention.'
      }
    ],
    goalsEyebrow: 'Priorites partagees',
    goals: ['Eau', 'Adaptation climatique', 'Restauration des terres', 'Preuves', 'Resilience communautaire'],
    imageAltTwo: 'Personnes rassemblees a l exterieur autour d un travail de regeneration.',
    ctaEyebrow: 'Rejoindre le travail',
    ctaTitle: 'Aidez a transformer le savoir sur le vetiver en action concrete.',
    ctaBody:
      'Soutenez des projets, appuyez le travail de terrain ou aidez-nous a etendre notre accompagnement technique.'
  }
} as const;
