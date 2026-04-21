import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { VetiverExplainerSection } from '@/components/vetiver-explainer-section';
import { VetiverProofPoints } from '@/components/vetiver-proof-points';
import { getMediaUrl, localePath, type Locale } from '@/lib/site';

export function VetiverPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        image="2024/02/IMG-20240131-WA0016-1536x1152.jpg"
        align="left"
      />

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-bark/10 bg-[#f2ecdf] p-3 shadow-card">
              <div className="relative aspect-square overflow-hidden rounded-[1.6rem]">
                <Image
                  src={getMediaUrl('2024/02/IMG-20240131-WA0023-1024x768.jpg')}
                  alt={t.imageAltOne}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                />
              </div>
            </div>
            <div className="rounded-[2.2rem] border border-bark/10 bg-white p-7 shadow-card lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.introEyebrow}</p>
              <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold text-ink sm:text-4xl">{t.introTitle}</h2>
              <p className="mt-5 text-base leading-8 text-ink/72">{t.introBodyOne}</p>
              <p className="mt-4 text-base leading-8 text-ink/68">{t.introBodyTwo}</p>
            </div>
          </div>
        </Container>
      </section>

      <VetiverExplainerSection locale={locale} />
      <VetiverProofPoints locale={locale} />

      <section className="bg-cream py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.benefitsEyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t.benefitsTitle}</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {t.benefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-[1.8rem] border border-bark/10 bg-white p-5 shadow-card">
                    <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/70">{benefit.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2.2rem] border border-bark/10 bg-white p-3 shadow-card">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] sm:aspect-[16/11] lg:aspect-[4/5]">
                <Image
                  src={getMediaUrl('2024/01/WhatsApp-Image-2024-01-31-at-09.26.30-1024x768.jpeg')}
                  alt={t.imageAltTwo}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="rounded-[2.3rem] border border-bark/10 bg-bark px-7 py-8 text-white shadow-soft lg:px-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface/76">{t.ctaEyebrow}</p>
            <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold sm:text-4xl">{t.ctaTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">{t.ctaBody}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={localePath('/about/contact', locale)} variant="primary">
                {t.cta}
              </Button>
              <Button href={localePath('/get-involved', locale)} variant="secondary" className="border-white/18 bg-white/10 text-white hover:border-white/28 hover:bg-white/14">
                {t.secondaryCta}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

const copy = {
  en: {
    title: 'What is vetiver?',
    subtitle:
      'A practical grass for soil protection, water management, slope stability, and land restoration.',
    introEyebrow: 'Why vetiver matters',
    introTitle: 'A plain-language guide to what vetiver is and what it can do.',
    introBodyOne:
      'Vetiver is a deep-rooted grass that can slow runoff, hold soil in place, and make fragile landscapes easier to manage.',
    introBodyTwo:
      'The Vetiver System uses that plant in a simple, field-ready way so communities can respond to erosion, runoff, slope instability, and degraded land.',
    benefitsEyebrow: 'Benefits of vetiver grass',
    benefitsTitle: 'Environmental protection with practical local value.',
    benefits: [
      { title: 'Soil and water conservation', body: 'Can help reduce erosion, improve infiltration, and support stronger water retention in vulnerable landscapes.' },
      { title: 'Slope stabilization', body: 'Can help protect steep slopes and infrastructure from landslides and surface failure.' },
      { title: 'Runoff control', body: 'Can slow moving water so the landscape can absorb more of it instead of losing it.' },
      { title: 'Land rehabilitation', body: 'Can support recovery on degraded ground where a low-cost, durable approach is needed.' },
      { title: 'Agricultural resilience', body: 'Can support crop production by protecting soil and helping fields keep moisture longer.' },
      { title: 'Local value', body: 'May contribute to local economies through handicrafts, animal feed, and processing pilots.' }
    ],
    imageAltOne: 'Real field photo showing vetiver planting and preparation work.',
    imageAltTwo: 'Vetiver in a dry field showing real-world resilience and site conditions.',
    ctaEyebrow: 'Apply the system',
    ctaTitle: 'Learn what vetiver is before choosing the next step.',
    ctaBody:
      'If you want to discuss how vetiver could help protect land, water, or infrastructure in a specific context, contact us and we can start from the site conditions. If you want to keep browsing, the projects and support pages are the next best places to continue.',
    cta: 'Contact us',
    secondaryCta: 'Get involved'
  },
  fr: {
    title: "Qu'est-ce que le vétiver ?",
    subtitle:
      'Une graminée pratique pour protéger les sols, mieux gérer l’eau, stabiliser les pentes et restaurer les terres.',
    introEyebrow: 'Pourquoi le vetiver compte',
    introTitle: 'Un guide simple pour comprendre le vétiver et ce qu’il peut faire.',
    introBodyOne:
      'Le vétiver est une graminée à racines profondes qui peut ralentir le ruissellement, retenir les sols et rendre les paysages fragiles plus faciles à gérer.',
    introBodyTwo:
      'Le système vétiver utilise cette plante de façon simple et de terrain pour aider les communautés à répondre à l’érosion, au ruissellement, à l’instabilité des pentes et à la dégradation des terres.',
    benefitsEyebrow: 'Bénéfices du vétiver',
    benefitsTitle: 'Une protection environnementale avec une valeur locale concrète.',
    benefits: [
      { title: 'Conservation des sols et de l’eau', body: 'Peut aider à réduire l’érosion, améliorer l’infiltration et soutenir une meilleure rétention d’eau sur les terrains sensibles.' },
      { title: 'Stabilisation des pentes', body: 'Peut aider à protéger les pentes et les infrastructures contre les glissements et les ruptures de surface.' },
      { title: 'Contrôle du ruissellement', body: 'Peut ralentir l’eau qui circule pour qu’une plus grande partie soit absorbée par le paysage.' },
      { title: 'Réhabilitation des terres', body: 'Peut soutenir la remise en état des sols dégradés quand une solution peu coûteuse et durable est nécessaire.' },
      { title: 'Résilience agricole', body: 'Peut soutenir la production en protégeant les sols et en aidant les champs à garder l’humidité plus longtemps.' },
      { title: 'Valeur locale', body: 'Peut contribuer aux économies locales par l’artisanat, l’alimentation animale et des pistes de transformation.' }
    ],
    imageAltOne: 'Photo de terrain montrant la plantation et la préparation du vétiver.',
    imageAltTwo: 'Vétiver dans un champ sec montrant des conditions de terrain réelles.',
    ctaEyebrow: 'Mettre en œuvre le système',
    ctaTitle: "Comprenez d'abord le vétiver avant de choisir la prochaine étape.",
    ctaBody:
      "Si vous souhaitez discuter de l'usage du vétiver pour protéger des sols, de l'eau ou des infrastructures, contactez-nous et nous partirons des conditions du site. Si vous voulez continuer à explorer, les pages projets et soutien sont les meilleures étapes suivantes.",
    cta: 'Contactez-nous',
    secondaryCta: 'Participer'
  }
} as const;
