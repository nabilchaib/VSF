import { FormEmbed } from '@/components/form-embed';
import { Section } from '@/components/section';
import type { Locale } from '@/lib/site';

type NewsletterSectionCopy = {
  eyebrow: string;
  title: string;
  body: string;
  note: string;
};

export function NewsletterSection({
  locale,
  copy
}: {
  locale: Locale;
  copy: NewsletterSectionCopy;
}) {
  return (
    <Section className="bg-white/72 py-14 lg:py-20">
      <div className="grid gap-8 rounded-[2.5rem] border border-bark/10 bg-[#fbf8f1] px-6 py-7 shadow-card lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="space-y-4 rounded-[1.8rem] bg-white/72 p-6 lg:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{copy.title}</h2>
          <p className="text-base leading-8 text-ink/72">{copy.body}</p>
          <p className="text-sm leading-6 text-ink/62">{copy.note}</p>
        </div>
        <div className="rounded-[1.8rem] border border-bark/10 bg-white p-2.5">
          <FormEmbed kind="newsletter" locale={locale} />
        </div>
      </div>
    </Section>
  );
}
