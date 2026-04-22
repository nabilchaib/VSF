import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { VETIVER_EXPLAINER } from '@/lib/vetiver-copy';
import { localePath, type Locale } from '@/lib/site';

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
