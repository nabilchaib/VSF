import { Button } from '@/components/button';
import { Section } from '@/components/section';
import { localePath, type Locale } from '@/lib/site';

type GetInvolvedSectionCopy = {
  involvedEyebrow: string;
  involvedTitle: string;
  involvedBody: string;
  involvedCta: string;
  partnerTitle: string;
  partnerBody: string;
  partnerCta: string;
  partnerHref: string;
};

export function GetInvolvedSection({
  locale,
  copy
}: {
  locale: Locale;
  copy: GetInvolvedSectionCopy;
}) {
  return (
    <Section className="bg-[#f4f0e8] py-14 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex h-full flex-col rounded-[2rem] border border-bark/10 bg-white px-6 py-7 shadow-card lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">
            {copy.involvedEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">{copy.involvedTitle}</h2>
          <p className="mt-4 text-base leading-8 text-ink/72">{copy.involvedBody}</p>
          <Button
            href={localePath('/get-involved', locale)}
            variant="secondary"
            className="mt-auto"
          >
            {copy.involvedCta}
          </Button>
        </div>

        <div className="flex h-full flex-col rounded-[2rem] border border-bark/10 bg-[#e8ebdc] px-6 py-7 shadow-card lg:px-8">
          <h2 className="text-3xl font-semibold text-ink">{copy.partnerTitle}</h2>
          <p className="mt-4 text-base leading-8 text-ink/72">{copy.partnerBody}</p>
          <Button
            href={localePath(copy.partnerHref, locale)}
            variant="tertiary"
            className="mt-auto text-sm tracking-[0.16em]"
          >
            {copy.partnerCta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
