import { Button } from '@/components/button';
import { Section } from '@/components/section';
import { DONATE_URL, type Locale } from '@/lib/site';

type ImpactSectionCopy = {
  eyebrow: string;
  title: string;
  body: string;
  pillars: ReadonlyArray<{ title: string; body: string }>;
  donateLabel: string;
  supportingLabel: string;
};

export function ImpactSection({
  locale,
  copy
}: {
  locale: Locale;
  copy: ImpactSectionCopy;
}) {
  return (
    <Section className="bg-[#f3ede2] py-14 lg:py-20">
      <div className="overflow-hidden rounded-[2.6rem] border border-bark/10 bg-bark text-white shadow-soft">
        <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.1fr_0.75fr] lg:items-start lg:px-10 lg:py-10">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface/74">
              {copy.eyebrow}
            </p>
            <h2 className="max-w-[14ch] text-3xl font-semibold sm:text-4xl">
              {copy.title}
            </h2>
            <p className="max-w-[38rem] text-base leading-8 text-white/76">{copy.body}</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/7 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-surface/74">
              {copy.eyebrow}
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button
                  href={DONATE_URL}
                  external
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  className="shadow-soft"
                >
                  {copy.donateLabel}
                </Button>
                <Button
                  href={locale === 'fr' ? '/fr/get-involved' : '/get-involved'}
                  variant="secondary"
                  className="border-white/18 bg-white/10 text-white hover:border-white/28 hover:bg-white/14"
                >
                  {copy.supportingLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-3">
          {copy.pillars.map((pillar) => (
            <div key={pillar.title} className="bg-bark px-6 py-6 lg:px-7">
              <h3 className="text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
