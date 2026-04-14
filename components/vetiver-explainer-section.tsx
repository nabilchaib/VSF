import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { VETIVER_EXPLAINER } from '@/lib/vetiver-copy';
import { localePath, type Locale } from '@/lib/site';

export function VetiverExplainerSection({ locale }: { locale: Locale }) {
  const copy = VETIVER_EXPLAINER[locale];

  return (
    <Section className="bg-[#f3ede2] py-14 lg:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="rounded-[2.2rem] border border-bark/10 bg-white px-7 py-8 shadow-card lg:px-9 lg:py-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{copy.eyebrow}</p>
            <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold text-ink sm:text-4xl">{copy.title}</h2>
            <p className="mt-5 text-base leading-8 text-ink/72">{copy.bodyOne}</p>
            <p className="mt-4 text-base leading-8 text-ink/68">{copy.bodyTwo}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={localePath('/vetiver', locale)} variant="secondary">
                {copy.primaryCta}
              </Button>
            </div>
            <div className="pt-3">
              <Button
                href={localePath('/projects', locale)}
                variant="tertiary"
                className="text-sm tracking-[0.16em]"
              >
                {copy.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {copy.cards.map((card, index) => (
              <div key={card.title} className="rounded-[1.9rem] border border-bark/10 bg-white p-6 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/58">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
