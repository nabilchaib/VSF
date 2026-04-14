import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { getMediaUrl, localePath, type Locale } from '@/lib/site';

export function ServicesPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        image="2022/10/DSCF0117.jpeg"
        align="left"
      />

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="rounded-[2.2rem] border border-bark/10 bg-white p-7 shadow-card lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">
                {t.introEyebrow}
              </p>
              <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold text-ink sm:text-4xl">
                {t.introTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-ink/72">{t.introBody}</p>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-ink/70">
                {t.summaryPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-[1.2rem] border border-bark/8 bg-surface/40 px-4 py-3"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[2.2rem] border border-bark/10 bg-[#f2ecdf] p-3 shadow-card">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem]">
                <Image
                  src={getMediaUrl('2022/10/DSCF0117.jpeg')}
                  alt={t.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f3ede2] py-14 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">
              {t.servicesEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              {t.servicesTitle}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.serviceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.8rem] border border-bark/10 bg-white p-6 shadow-card"
              >
                <h3 className="text-xl font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{card.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="rounded-[2.2rem] border border-bark/10 bg-white p-7 shadow-card lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">
                {t.deliveryEyebrow}
              </p>
              <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold text-ink sm:text-4xl">
                {t.deliveryTitle}
              </h2>
              <div className="mt-6 grid gap-4">
                {t.deliveryCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.4rem] border border-bark/8 bg-[#f8f5ee] px-5 py-5"
                  >
                    <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/70">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[2rem] border border-bark/10 bg-white p-3 shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={getMediaUrl('2022/10/42149b3ff0cd4818b102e0124e2d88bd.jpg')}
                    alt={t.imageAltTwo}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] border border-bark/10 bg-white p-3 shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={getMediaUrl('2022/11/agriculture-asia-go-back-1822446.jpg')}
                    alt={t.imageAltThree}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4efe5] py-14 lg:py-20">
        <Container>
          <div className="rounded-[2.3rem] border border-bark/10 bg-bark px-7 py-8 text-white shadow-soft lg:px-9">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface/76">
                  {t.ctaEyebrow}
                </p>
                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold sm:text-4xl">
                  {t.ctaTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                  {t.ctaBody}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button href={localePath('/about/contact', locale)} variant="primary">
                  {t.cta}
                </Button>
                <Button href={localePath('/projects', locale)} variant="secondary" className="border-white/18 bg-white/10 text-white hover:border-white/28 hover:bg-white/14">
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
    title: 'Vetiver services',
    subtitle:
      'Practical Vetiver-based support for site assessment, implementation, and partner-led land work.',
    introEyebrow: 'What we offer',
    introTitle: 'A partnership path for sites, stewards, and institutions.',
    introBody:
      'We start from the problem on the ground - erosion, runoff, slope instability, or land degradation - and shape a practical response around vetiver.',
    summaryPoints: [
      'Site assessment and planning',
      'Slope protection and erosion control',
      'Rainwater management',
      'Training and handoff',
      'Partner implementation support',
      'Long-term maintenance planning'
    ],
    imageAlt: 'Site conditions showing where Vetiver-based environmental services can be applied.',
    servicesEyebrow: 'Core service areas',
    servicesTitle: 'How vetiver can support a site or partnership.',
    serviceCards: [
      {
        title: 'Site assessment',
        body: 'We review slope, runoff, and land-use conditions to see where vetiver can reduce risk and improve resilience.'
      },
      {
        title: 'Implementation support',
        body: 'We help move projects from concept to planting with practical guidance, spacing logic, and local handoff.'
      },
      {
        title: 'Training and handoff',
        body: 'We support local teams so the systems can be taught, maintained, and reused after the initial intervention.'
      },
      {
        title: 'Environmental design',
        body: 'We connect ecological function, land stability, and practical implementation in one site plan.'
      },
      {
        title: 'Who it serves',
        body: 'Anyone whose work affects the landscape can benefit, from local initiatives and farms to institutions, builders, and community organizations.'
      },
      {
        title: 'Maintenance planning',
        body: 'We help integrate Vetiver into realistic planning frameworks that can be maintained and adapted over time.'
      }
    ],
    deliveryEyebrow: 'How we deliver',
    deliveryTitle: 'Field-oriented support, not abstract consulting.',
    deliveryCards: [
      {
        title: 'Site-specific thinking',
        body: 'We focus on how Vetiver can actually fit local conditions, existing infrastructure, and environmental constraints.'
      },
      {
        title: 'Implementation guidance',
        body: 'Project leaders receive practical support that helps turn concepts into stable, maintainable interventions.'
      },
      {
        title: 'Long-term durability',
        body: 'Our work aims to improve durability, reduce environmental risk, and support more sustainable land management over time.'
      }
    ],
    imageAltTwo: 'Landscape affected by instability where Vetiver can help mitigate damage.',
    imageAltThree: 'People working in agriculture and land stewardship contexts supported by training.',
    ctaEyebrow: 'Work with VSF',
    ctaTitle: 'Talk through a site or partnership idea.',
    ctaBody:
      'Contact us to discuss your site, project, or collaboration request and see whether vetiver is the right fit.',
    cta: 'Contact us',
    secondaryCta: 'View projects'
  },
  fr: {
    title: 'Services vetiver',
    subtitle:
      'Soutien pratique base sur le Vetiver pour l evaluation du site, la mise en oeuvre et le travail de terrain porte par des partenaires.',
    introEyebrow: 'Ce que nous proposons',
    introTitle: 'Une voie de partenariat pour les sites, les responsables et les institutions.',
    introBody:
      'Nous partons du probleme sur le terrain - erosion, ruissellement, instabilite des pentes ou degradation des terres - pour construire une reponse pratique autour du vetiver.',
    summaryPoints: [
      'Evaluation et planification du site',
      'Protection des pentes et controle de l erosion',
      'Gestion des eaux de pluie',
      'Formation et transfert',
      'Appui a la mise en oeuvre par les partenaires',
      'Planification de l entretien a long terme'
    ],
    imageAlt: 'Conditions de site montrant ou des services bases sur le Vetiver peuvent etre appliques.',
    servicesEyebrow: 'Domaines de service',
    servicesTitle: 'Comment le vetiver peut soutenir un site ou un partenariat.',
    serviceCards: [
      {
        title: 'Protection des infrastructures',
        body: 'Nous utilisons le Vetiver comme outil de bioingenierie pour integrer une protection environnementale durable aux projets et aux sites.'
      },
      {
        title: 'Reduction des risques naturels',
        body: 'Le Vetiver peut aider a limiter les dommages lies aux tempetes, glissements, inondations et dunes instables.'
      },
      {
        title: 'Conception environnementale',
        body: 'Nous aidons a construire des strategies de site qui relient fonction ecologique, stabilite des terres et durabilite.'
      },
      {
        title: 'Formation et assistance technique',
        body: 'Nous accompagnons les porteurs de projet et les equipes qui souhaitent implementer le Vetiver de facon pratique sur le terrain.'
      },
      {
        title: 'Qui cela sert',
        body: 'Toute personne ou organisation qui agit sur le paysage peut en beneficier, des initiatives locales aux institutions et organisations communautaires.'
      },
      {
        title: 'Planification de l entretien',
        body: 'Nous aidons a integrer le Vetiver dans des cadres de planification realistes, maintenables et evolutifs.'
      }
    ],
    deliveryEyebrow: 'Notre approche',
    deliveryTitle: 'Un accompagnement de terrain, pas un conseil abstrait.',
    deliveryCards: [
      {
        title: 'Lecture du site',
        body: 'Nous partons des conditions locales, des usages existants et des contraintes environnementales reelles.'
      },
      {
        title: 'Appui a la mise en oeuvre',
        body: 'Les porteurs de projet recoivent un soutien pratique pour transformer une idee en intervention stable et maintenable.'
      },
      {
        title: 'Durabilite dans le temps',
        body: 'Notre objectif est de reduire les risques environnementaux et de soutenir une gestion plus durable des paysages.'
      }
    ],
    imageAltTwo: 'Paysage expose a l instabilite ou le Vetiver peut aider a reduire les dommages.',
    imageAltThree: 'Personnes travaillant dans des contextes agricoles soutenus par la formation.',
    ctaEyebrow: 'Travailler avec VSF',
    ctaTitle: 'Parlez-nous d un site ou d une idee de partenariat.',
    ctaBody:
      'Contactez-nous pour discuter de votre site, de votre projet ou de votre demande de collaboration et voir si le vetiver convient.',
    cta: 'Contactez-nous',
    secondaryCta: 'Voir les projets'
  }
} as const;
