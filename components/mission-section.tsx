import Image from 'next/image';

import { Button } from '@/components/button';
import { Section } from '@/components/section';
import { getMediaUrl, type Locale } from '@/lib/site';

type MissionSectionCopy = {
  eyebrow: string;
  title: string;
  bodyOne: string;
  bodyTwo: string;
  points: ReadonlyArray<{ title: string; body: string }>;
  ctaLabel: string;
  imageAlt: string;
};

export function MissionSection({
  locale,
  copy
}: {
  locale: Locale;
  copy: MissionSectionCopy;
}) {
  return (
    <Section className="bg-white/66 py-14 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="max-w-[34rem] space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">
              {copy.eyebrow}
            </p>
            <h2 className="max-w-[12ch] text-3xl font-semibold text-ink sm:text-4xl">
              {copy.title}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-bark/55">
            {copy.points.map((point) => (
              <span
                key={point.title}
                className="rounded-full border border-bark/10 bg-surface/55 px-3 py-1.5"
              >
                {point.title}
              </span>
            ))}
          </div>
          <p className="max-w-[33rem] text-base leading-8 text-ink/70">{copy.bodyOne}</p>
          <p className="max-w-[33rem] text-base leading-8 text-ink/66">{copy.bodyTwo}</p>
          <Button
            href={locale === 'fr' ? '/fr/vetiver' : '/vetiver'}
            variant="tertiary"
            className="text-sm tracking-[0.16em]"
          >
            {copy.ctaLabel}
          </Button>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-bark/10 bg-[#f5f0e6] p-3 shadow-card">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.7rem]">
              <Image
                src={getMediaUrl('2022/10/vlcsnap-2022-10-21-14h15m27s059-scaled.jpg')}
                alt={copy.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark/28 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {copy.points.map((point, index) => (
          <div
            key={point.title}
            className="flex h-full flex-col rounded-[1.75rem] border border-bark/10 bg-white px-6 py-6 shadow-card"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-surface/70 text-bark">
              {featureIcon(index)}
            </div>
            <h3 className="text-xl font-semibold text-ink">{point.title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">{point.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function featureIcon(index: number) {
  const icons = [
    (
      <svg key="soil" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        <path d="M5 14c2-4 4-6 7-6s5 2 7 6" />
        <path d="M4 18h16" />
        <path d="M8 11l2-3 2 2 2-3 2 4" />
      </svg>
    ),
    (
      <svg key="water" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        <path d="M12 4c3 4 5 7 5 10a5 5 0 1 1-10 0c0-3 2-6 5-10Z" />
        <path d="M9.5 15.5c.5.9 1.4 1.5 2.5 1.5 1 0 1.9-.5 2.5-1.4" />
      </svg>
    ),
    (
      <svg key="capacity" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        <path d="M6 18v-4.5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V18" />
        <circle cx="12" cy="7" r="3" />
        <path d="M4 18h16" />
      </svg>
    )
  ];

  return icons[index] || icons[0];
}
