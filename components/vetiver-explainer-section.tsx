import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { VETIVER_EXPLAINER } from '@/lib/vetiver-copy';
import { getMediaUrl, localePath, type Locale } from '@/lib/site';

const photoStrip = [
  {
    src: '2022/10/DJI_0219_1_75.jpg',
    alt: 'Aerial view of land being stabilized with vetiver hedgerows on a hillside.',
  },
  {
    src: '2024/09/Vetiver_45101315085_426bf7fa1e_k.webp',
    alt: 'Dense vetiver grass growing in established hedgerows, showing full root establishment.',
  },
  {
    src: '2024/09/Vetiver-grass-soil-erosion-control_IMG_7461.webp',
    alt: 'Vetiver grass holding a steep eroded slope, demonstrating active soil erosion control.',
  },
] as const;

export function VetiverExplainerSection({ locale }: { locale: Locale }) {
  const copy = VETIVER_EXPLAINER[locale];

  return (
    <Section id="vetiver-explainer" className="scroll-mt-28 bg-cream py-14 lg:py-20 lg:scroll-mt-32">
      <Container>
        <div className="mb-10 max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{copy.eyebrow}</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{copy.title}</h2>
          <p className="text-base leading-8 text-ink/72">{copy.bodyOne}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button href={localePath('/vetiver', locale)} variant="secondary">
              {copy.primaryCta}
            </Button>
            <Button
              href={localePath('/projects', locale)}
              variant="tertiary"
              className="text-sm tracking-[0.16em]"
            >
              {copy.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          {photoStrip.map((photo) => (
            <div key={photo.src} className="overflow-hidden rounded-[2rem] border border-bark/10 shadow-card">
              <div className="relative aspect-[4/3]">
                <Image
                  src={getMediaUrl(photo.src)}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 33vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.cards.map((card, index) => (
            <div key={card.title} className="rounded-[1.9rem] border border-bark/10 bg-white p-6 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/58">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">{card.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
