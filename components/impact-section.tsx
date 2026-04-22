import { Section } from '@/components/section';
import type { Locale } from '@/lib/site';

type ImpactStat = {
  qualifier: string;
  value: string;
  body: string;
};

type ImpactSectionCopy = {
  eyebrow: string;
  title: string;
  body: string;
  stats: ReadonlyArray<ImpactStat>;
};

export function ImpactSection({
  locale,
  copy
}: {
  locale: Locale;
  copy: ImpactSectionCopy;
}) {
  return (
    <Section className="bg-cream py-14 lg:py-20">
      <div className="overflow-hidden rounded-[2.6rem] border border-bark/10 bg-bark text-white shadow-soft">
        <div className="px-6 py-8 lg:px-10 lg:py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface/74">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 max-w-[22ch] text-3xl font-semibold sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 max-w-[38rem] text-base leading-8 text-white/76">{copy.body}</p>
        </div>

        <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-3">
          {copy.stats.map((stat) => (
            <div key={stat.value} className="bg-bark px-6 py-7 lg:px-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-surface/74">
                {stat.qualifier}
              </p>
              <p className="mt-3 text-[3.25rem] font-bold leading-none tracking-[-0.055em] text-white">
                {stat.value}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">{stat.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
