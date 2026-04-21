import Image from 'next/image';

import { Button } from '@/components/button';
import { Section } from '@/components/section';
import { BRAND } from '@/lib/brand';
import { DONATE_URL, getMediaUrl, localePath, resolveMediaAsset, type Locale } from '@/lib/site';

type HeroSectionCopy = {
  eyebrow: string;
  title: string;
  body: string;
  supportingBody: string;
  donateLabel: string;
  involvedLabel: string;
  learnMoreLabel: string;
  learnMoreHref?: string;
  imageAlt: string;
  highlight: string;
};

export function HeroSection({
  locale,
  copy
}: {
  locale: Locale;
  copy: HeroSectionCopy;
}) {
  const supportImageLabel = locale === 'fr' ? 'Avant / après' : 'Before / after';
  const supportImageAlt =
    locale === 'fr'
      ? 'Comparaison avant et après du travail de terrain.'
      : 'Before and after comparison from the field.';

  return (
    <Section className="relative overflow-hidden pb-20 pt-8 lg:pb-24 lg:pt-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(circle_at_top_left,rgba(117,190,43,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(209,217,180,0.45),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,252,244,1))]" />
      <div className="grid items-center gap-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20">
        <div className="max-w-[760px] space-y-8">
          <p className="inline-flex rounded-full bg-surface/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-bark">
            {copy.eyebrow}
          </p>
          <div className="space-y-5">
            <h1 className="max-w-[13ch] text-[clamp(3rem,5vw,5rem)] font-bold leading-[0.96] tracking-[-0.055em] text-ink">
              {copy.title}
            </h1>
            <p className="max-w-[620px] text-[15px] leading-8 text-ink/66 lg:text-base">
              {copy.body}
            </p>
            <p className="max-w-[620px] text-[15px] leading-8 text-ink/60">
              {copy.supportingBody}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-2">
            <Button
              href={DONATE_URL}
              external
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="lg"
              className="shadow-soft"
            >
              {copy.donateLabel}
            </Button>
            <Button
              href={localePath('/get-involved', locale)}
              variant="secondary"
              size="lg"
            >
              {copy.involvedLabel}
            </Button>
          </div>
          <div className="pt-3">
            <Button
              href={localePath(copy.learnMoreHref ?? '/vetiver', locale)}
              variant="tertiary"
              className="text-sm tracking-[0.16em]"
            >
              {copy.learnMoreLabel}
            </Button>
          </div>
        </div>

        <div className="relative lg:pt-4">
          <div className="absolute -left-4 top-8 hidden h-20 w-20 rounded-full bg-surface/70 blur-2xl sm:block" />
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-bark/12 bg-cream-card p-2.5 shadow-soft">
              <div className="relative aspect-[5/5.6] overflow-hidden rounded-[1.6rem] bg-[#ebe3d4] sm:aspect-[5/4.85]">
                <Image
                  src={getMediaUrl('2025/03/Vetiver-Highway.jpg')}
                  alt={copy.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/34 via-transparent to-transparent" />
              </div>

              <div className="absolute left-5 top-5 rounded-[1.15rem] border border-white/70 bg-white/88 px-3 py-2.5 shadow-card backdrop-blur">
                <Image
                  src={resolveMediaAsset(BRAND.logo.horizontal)}
                  alt={BRAND.name}
                  width={140}
                  height={40}
                  className="h-7 w-auto"
                />
              </div>

              <div className="absolute bottom-5 left-5 max-w-[18rem] rounded-[1.35rem] bg-bark/94 px-4 py-3.5 text-white shadow-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-surface/80">
                  VSF
                </p>
                <p className="mt-2 text-sm leading-6 text-white/84">{copy.highlight}</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.8rem] border border-bark/10 bg-white p-2.5 shadow-card">
              <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-bark/58">
                {supportImageLabel}
              </p>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem] bg-[#ebe3d4]">
                <Image
                  src={getMediaUrl('2024/02/Before_After.png')}
                  alt={supportImageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
