import Image from 'next/image';

import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { VETIVER_PROOF_POINTS } from '@/lib/vetiver-copy';
import { getMediaUrl } from '@/lib/site';
import type { Locale } from '@/lib/site';

export function VetiverProofPoints({ locale }: { locale: Locale }) {
  const copy = VETIVER_PROOF_POINTS[locale];

  return (
    <Section className="bg-white/72 py-14 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-base leading-8 text-ink/72">{copy.note}</p>
        </div>
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-bark/10 shadow-card">
          <div className="relative aspect-[21/9]">
            <Image
              src={getMediaUrl('2023/12/DJI_0297.jpg')}
              alt="Aerial view of a vetiver field site showing land contours and hedgerow lines."
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {copy.points.map((point) => (
            <div key={point.label} className="rounded-[1.9rem] border border-bark/10 bg-white p-6 shadow-card">
              <p className="text-3xl font-semibold text-bark">{point.value}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{point.label}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">{point.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
