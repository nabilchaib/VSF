import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import type { Locale } from '@/lib/site';
import { getMediaUrl } from '@/lib/site';

export function VetiverPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div>
      <PageHero title={t.title} subtitle={t.subtitle} image="2024/10/DALL·E-2024-10-01-14.24.48-A-small-rural-community-involved-in-planting-and-harvesting-Vetiver-grass.-Local-farmers-are-working-in-the-fields-cutting-and-bundling-the-grass.-Th.webp" align="left" />

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-bark/10 bg-[#f2ecdf] p-3 shadow-card">
              <div className="relative aspect-square overflow-hidden rounded-[1.6rem]">
                <Image
                  src={getMediaUrl('2024/10/DALL·E-2024-10-01-14.51.12-A-detailed-artistic-illustration-of-a-single-Vetiver-grass-plant-with-very-deep-and-vertical-roots.-The-roots-should-extend-straight-down-into-the-so.webp')}
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

      <section className="bg-[#f3ede2] py-14 lg:py-20">
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
                  src={getMediaUrl('2024/10/DALL·E-2024-10-01-15.50.27-A-realistic-image-of-Vetiver-grass-in-an-arid-environment-emphasizing-its-role-as-an-economic-benefactor.-The-Vetiver-grass-should-be-depicted-with-i.webp')}
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
            <div className="mt-7">
              <Button href={locale === 'fr' ? '/fr/contact' : '/about/contact'} variant="primary">
                {t.cta}
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
    title: 'Vetiver',
    subtitle:
      'A natural solution for soil protection, water retention, slope stabilization, and practical climate adaptation.',
    introEyebrow: 'Why vetiver matters',
    introTitle: 'A field-ready system for land and water conservation.',
    introBodyOne:
      'Vetiver Grass Technology is used for soil and water conservation, slope stabilization, disaster mitigation, land rehabilitation, and pollution control.',
    introBodyTwo:
      'Its deep root structure makes the Vetiver System a proven, cost-effective, and durable response to erosion, runoff, and degraded land.',
    benefitsEyebrow: 'Benefits of vetiver grass',
    benefitsTitle: 'Environmental protection with practical local value.',
    benefits: [
      { title: 'Soil and water conservation', body: 'Reduces erosion, improves infiltration, and supports stronger water retention in vulnerable landscapes.' },
      { title: 'Slope stabilization', body: 'Helps protect steep slopes and infrastructure from landslides and surface failure.' },
      { title: 'Disaster mitigation', body: 'Improves resilience against floods, runoff, and intense rainfall events.' },
      { title: 'Phytoremediation', body: 'Absorbs pollutants and can help improve contaminated soil and water conditions.' },
      { title: 'Agricultural improvement', body: 'Supports crop production by reducing runoff, retaining moisture, and improving land condition.' },
      { title: 'Livelihood value', body: 'Can contribute to local economies through handicrafts, animal feed, and essential oil production.' }
    ],
    imageAltOne: 'Illustration of vetiver grass showing deep vertical roots.',
    imageAltTwo: 'Vetiver grass in a dry landscape demonstrating environmental and economic potential.',
    ctaEyebrow: 'Apply the system',
    ctaTitle: 'Sponsor or propose a project built around the Vetiver System.',
    ctaBody:
      'If you want to discuss how Vetiver could help protect land, water, or infrastructure in a specific context, contact us and we can start from the site conditions.',
    cta: 'Contact us'
  },
  fr: {
    title: 'Vetiver',
    subtitle:
      'Une solution naturelle pour la protection des sols, la retention de l eau, la stabilisation des pentes et l adaptation climatique.',
    introEyebrow: 'Pourquoi le vetiver compte',
    introTitle: 'Un systeme concret pour conserver les sols et l eau.',
    introBodyOne:
      'La technologie du Vetiver est utilisee pour la conservation des sols et de l eau, la stabilisation des pentes, la reduction des risques, la rehabilitation des terres et la depollution.',
    introBodyTwo:
      'Sa structure racinaire profonde fait du Systeme Vetiver une reponse eprouvee, economique et durable contre l erosion, le ruissellement et la degradation des terres.',
    benefitsEyebrow: 'Benefices du vetiver',
    benefitsTitle: 'Une protection environnementale avec une valeur locale concrete.',
    benefits: [
      { title: 'Conservation des sols et de l eau', body: 'Reduit l erosion, ameliore l infiltration et aide a conserver davantage d eau sur les terrains sensibles.' },
      { title: 'Stabilisation des pentes', body: 'Aide a proteger les pentes et les infrastructures contre les glissements et les ruptures de surface.' },
      { title: 'Reduction des risques', body: 'Renforce la resilience face aux inondations, au ruissellement et aux pluies intenses.' },
      { title: 'Phytoremediation', body: 'Absorbe certains polluants et peut contribuer a ameliorer la qualite des sols et de l eau.' },
      { title: 'Amelioration agricole', body: 'Soutient la production en reduisant le ruissellement, en conservant l humidite et en ameliorant l etat des terres.' },
      { title: 'Valeur economique locale', body: 'Peut contribuer aux economies locales par l artisanat, l alimentation animale et certaines huiles essentielles.' }
    ],
    imageAltOne: 'Illustration du vetiver montrant son enracinement profond.',
    imageAltTwo: 'Vetiver dans un paysage sec montrant son potentiel environnemental et economique.',
    ctaEyebrow: 'Mettre en oeuvre le systeme',
    ctaTitle: 'Parrainez ou proposez un projet autour du Systeme Vetiver.',
    ctaBody:
      'Si vous souhaitez discuter de l usage du Vetiver pour proteger des sols, de l eau ou des infrastructures, contactez-nous et nous partirons des conditions du site.',
    cta: 'Contactez-nous'
  }
} as const;
