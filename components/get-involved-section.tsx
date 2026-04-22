import { Button } from '@/components/button';
import { Section } from '@/components/section';
import { DONATE_URL, CONTACT_EMAIL, localePath, type Locale } from '@/lib/site';

type GetInvolvedSectionCopy = {
  hubEyebrow: string;
  hubTitle: string;
  hubBody: string;
  donateCta: string;
  monthlyGivingCta: string;
  partnerEyebrow: string;
  partnerTitle: string;
  partnerBody: string;
  contactCta: string;
  stayConnectedCta: string;
};

export function GetInvolvedSection({
  locale,
  copy
}: {
  locale: Locale;
  copy: GetInvolvedSectionCopy;
}) {
  return (
    <Section className="bg-cream-card py-14 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left — dark bark donation card */}
        <div className="flex h-full flex-col rounded-[2.2rem] bg-bark px-6 py-8 text-white shadow-card lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-surface/74">
            {copy.hubEyebrow}
          </p>
          <h3 className="mt-4 text-[1.75rem] font-semibold leading-[1.15] text-white">
            {copy.hubTitle}
          </h3>
          <p className="mt-4 text-[15px] leading-7 text-white/76">{copy.hubBody}</p>
          <div className="mt-auto flex flex-wrap gap-3 pt-7">
            <Button
              href={DONATE_URL}
              external
              target="_blank"
              rel="noreferrer"
              variant="primary"
              className="shadow-soft"
            >
              {copy.donateCta}
            </Button>
            <Button
              href={DONATE_URL}
              external
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="border-white/25 bg-transparent text-white hover:border-white/40 hover:bg-white/8"
            >
              {copy.monthlyGivingCta}
            </Button>
          </div>
        </div>

        {/* Right — reed partner card */}
        <div className="flex h-full flex-col rounded-[2.2rem] bg-reed px-6 py-8 text-bark shadow-card lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bark/64">
            {copy.partnerEyebrow}
          </p>
          <h3 className="mt-4 text-[1.75rem] font-semibold leading-[1.15]">
            {copy.partnerTitle}
          </h3>
          <p className="mt-4 text-[15px] leading-7 text-ink/72">{copy.partnerBody}</p>
          <div className="mt-auto flex flex-wrap gap-3 pt-7">
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="primary">
              {copy.contactCta}
            </Button>
            <Button
              href={localePath('/get-involved', locale)}
              variant="tertiary"
              className="text-sm tracking-[0.16em]"
            >
              {copy.stayConnectedCta}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
