import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { getMediaUrl } from '@/lib/site';
import type { Locale } from '@/lib/site';

type ProjectDetailPoint = {
  title: string;
  body: string;
};

export type ProjectDetailCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  gallery?: readonly string[];
  summaryEyebrow: string;
  summaryTitle: string;
  summaryBody: string;
  whyEyebrow: string;
  whyTitle: string;
  whyPoints: readonly ProjectDetailPoint[];
  nextEyebrow: string;
  nextTitle: string;
  nextBody: string;
  nextSteps: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  supportNote?: string;
  footerTitle: string;
  footerBody: string;
  footerLinks: ReadonlyArray<{
    label: string;
    href: string;
    external?: boolean;
  }>;
};

export function ProjectDetailPage({ locale, copy }: { locale: Locale; copy: ProjectDetailCopy }) {
  return (
    <div className="pb-16 lg:pb-20">
      <PageHero title={copy.title} eyebrow={copy.eyebrow} subtitle={copy.subtitle} image={copy.image} align="left" />

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[2.2rem] border border-bark/10 bg-white p-7 shadow-card lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{copy.summaryEyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{copy.summaryTitle}</h2>
              <p className="mt-5 text-base leading-8 text-ink/72">{copy.summaryBody}</p>
            </div>

            <div className="rounded-[2.2rem] border border-bark/10 bg-cream-card p-7 shadow-card lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{copy.whyEyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{copy.whyTitle}</h2>
              <div className="mt-6 space-y-4">
                {copy.whyPoints.map((point) => (
                  <div key={point.title} className="rounded-[1.4rem] border border-bark/8 bg-white/84 p-5">
                    <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/72">{point.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {copy.gallery && copy.gallery.length > 0 && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {copy.gallery.map((src) => (
                <div key={src} className="overflow-hidden rounded-[2rem] border border-bark/10 shadow-card">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={getMediaUrl(src)}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 48vw, 100vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="bg-cream py-14 lg:py-20">
        <Container>
          <div className="rounded-[2.3rem] border border-bark/10 bg-bark px-7 py-8 text-white shadow-soft lg:px-9 lg:py-10">
            <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface/76">{copy.nextEyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{copy.nextTitle}</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">{copy.nextBody}</p>
                <ul className="mt-6 grid gap-3 text-sm leading-7 text-white/82 sm:grid-cols-2">
                  {copy.nextSteps.map((step) => (
                    <li key={step} className="rounded-[1.25rem] border border-white/12 bg-white/8 px-4 py-3">
                      {step}
                    </li>
                  ))}
                </ul>
                {copy.supportNote ? <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68">{copy.supportNote}</p> : null}
              </div>

              <div className="rounded-[1.8rem] border border-white/12 bg-white/8 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface/72">
                  {locale === 'fr' ? 'Prochaine étape' : 'Next step'}
                </p>
                <Button
                  href={copy.ctaHref}
                  external={copy.ctaExternal}
                  target={copy.ctaExternal ? '_blank' : undefined}
                  rel={copy.ctaExternal ? 'noreferrer' : undefined}
                  variant="primary"
                  className="mt-4 w-full"
                >
                  {copy.ctaLabel}
                </Button>
                <div className="mt-5 grid gap-3">
                  {copy.footerLinks.map((link) => (
                    <Button
                      key={link.label}
                      href={link.href}
                      external={link.external}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      variant="secondary"
                      className="w-full border-white/16 bg-white/10 text-white hover:border-white/24 hover:bg-white/16"
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="rounded-[2.2rem] border border-bark/10 bg-white px-7 py-8 shadow-card lg:px-9 lg:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">
              {locale === 'fr' ? 'À propos du projet' : 'About this project'}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{copy.footerTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-ink/72">{copy.footerBody}</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
