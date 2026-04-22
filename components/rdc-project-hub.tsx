import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { PageHero } from '@/components/page-hero';
import { DONATE_URL, getMediaUrl, localePath, type Locale } from '@/lib/site';
import {
  RDC_PROJECT,
  getRdcFlagshipStoryPath,
  getRdcProjectPath,
  type RdcEditorialItem,
  type RdcFunnelItem,
  type RdcPilotItem,
  type RdcSectionItem,
  type RdcTimelineItem
} from '@/lib/rdc-project';

export function RdcProjectHub({ locale }: { locale: Locale }) {
  const copy = RDC_PROJECT[locale];
  const visualGallery = [
    {
      src: '2025/03/WhatsApp-Image-2025-03-07-at-13.54.00.jpeg',
      alt:
        locale === 'fr'
          ? 'Photo de terrain en RDC montrant le travail vetiver sur site.'
          : 'RDC field photo showing vetiver work on site.',
      className: 'sm:col-span-2'
    },
    {
      src: '2025/03/WhatsApp-Image-2025-03-07-at-13.54.44.webp',
      alt:
        locale === 'fr'
          ? 'Photo de terrain en RDC montrant une autre étape du travail.'
          : 'RDC field photo showing another step of the work.',
      className: ''
    },
    {
      src: '2025/04/00000276-PHOTO-2025-04-08-08-09-13.webp',
      alt:
        locale === 'fr'
          ? 'Photo documentaire en RDC montrant le travail de terrain.'
          : 'Documentary RDC photo showing field work.',
      className: ''
    },
    {
      src: '2025/04/00000281-PHOTO-2025-04-08-08-10-22.webp',
      alt:
        locale === 'fr'
          ? 'Membres de la communauté tenant des boutures de vétiver prêtes à planter en RDC.'
          : 'Community members holding vetiver slips ready for planting in RDC.',
      className: ''
    },
    {
      src: '2025/04/00000282-PHOTO-2025-04-08-08-10-23.webp',
      alt:
        locale === 'fr'
          ? 'Photo de terrain supplémentaire du travail de plantation vétiver en RDC.'
          : 'Additional field photo of vetiver planting work in RDC.',
      className: ''
    },
    {
      src: '2025/04/00000283-PHOTO-2025-04-08-08-10-24.webp',
      alt:
        locale === 'fr'
          ? 'Photo documentaire en RDC montrant le travail et la récupération des terres.'
          : 'Documentary RDC photo showing field work and land recovery.',
      className: 'sm:col-span-2'
    },
    {
      src: '2025/04/Screen-Shot-2025-04-10-at-3.07.37-PM.webp',
      alt:
        locale === 'fr'
          ? "Vue aérienne d'une pirogue sur le fleuve Congo près d'un site vétiver."
          : 'Aerial view of a pirogue on the Congo river near a vetiver site.',
      className: 'sm:col-span-2'
    }
  ] as const;

  return (
    <div className="pb-16">
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        image="2025/03/WhatsApp-Image-2025-03-07-at-13.54.00.jpeg"
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={DONATE_URL}
            target="_blank"
            rel="noreferrer"
            className="brand-pill rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] shadow-soft hover:bg-clay"
          >
            {copy.primaryCta}
          </Link>
          <Link
            href={getRdcFlagshipStoryPath(locale)}
            className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur hover:bg-white/20"
          >
            {copy.storyCta}
          </Link>
        </div>
      </PageHero>

      <SectionGrid
        eyebrow={copy.sectionEyebrow}
        title={copy.whyTitle}
        subtitle={copy.whySubtitle}
        items={copy.whyCards}
        renderItem={(item) => <TextCard key={item.title} title={item.title} body={item.body} />}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-10">
        <div className="brand-frame rounded-[2rem] p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-bark/60">{copy.introTitle}</p>
              <p className="text-lg leading-8 text-ink/80">{copy.introBody}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={getRdcProjectPath(locale)}
                  className="brand-pill rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] hover:bg-clay"
                >
                  {copy.secondaryCta}
                </Link>
                <Link
                  href={getRdcFlagshipStoryPath(locale)}
                  className="rounded-full border border-bark/15 bg-surface/40 px-5 py-3 text-sm font-medium text-bark hover:border-bark/30"
                >
                  {copy.storyCta}
                </Link>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-bark/10 bg-surface/42 p-4 shadow-card">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-bark/60">
                {locale === 'fr' ? 'Séquence visuelle' : 'Visual sequence'}
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {visualGallery.map((item) => (
                  <div
                    key={item.src}
                    className={`overflow-hidden rounded-[1.05rem] border border-bark/8 bg-white ${item.className}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#fbfaf5]">
                      <Image
                        src={getMediaUrl(item.src)}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 38vw, 100vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-ink/72">
                {locale === 'fr'
                  ? 'Cette séquence visuelle montre plusieurs moments du travail de terrain en RDC.'
                  : 'This visual sequence shows several moments from the RDC field work.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionGrid
        eyebrow={copy.sectionEyebrow}
        title={copy.layersTitle}
        subtitle={copy.layersSubtitle}
        items={copy.layers}
        renderItem={(item) => <TextCard key={item.title} title={item.title} body={item.body} />}
      />

      <SectionGrid
        eyebrow={copy.sectionEyebrow}
        title={copy.geographyTitle}
        subtitle={copy.geographySubtitle}
        items={copy.geographyCards}
        renderItem={(item) => <TextCard key={item.title} title={item.title} body={item.body} />}
      />

      <FieldAnchorSection
        eyebrow={copy.sectionEyebrow}
        title={copy.fieldAnchorTitle}
        subtitle={copy.fieldAnchorSubtitle}
        body={copy.fieldAnchorBody}
        quote={copy.fieldAnchorQuote}
        image="2025/03/WhatsApp-Image-2025-03-03-at-07.35.34.webp"
        imageAlt={locale === 'fr' ? 'Photo de terrain RDC montrant un site vétiver actif.' : 'RDC field photo showing an active vetiver site.'}
      />

      <TimelineSection eyebrow={copy.sectionEyebrow} title={copy.timelineTitle} subtitle={copy.timelineSubtitle} items={copy.timeline} />
      <EditorialSection
        eyebrow={copy.sectionEyebrow}
        title={copy.editorialTitle}
        subtitle={copy.editorialSubtitle}
        items={copy.editorial}
        locale={locale}
      />
      <FunnelSection eyebrow={copy.sectionEyebrow} title={copy.funnelTitle} subtitle={copy.funnelSubtitle} items={copy.funnel} />
      <DataSection
        eyebrow={copy.sectionEyebrow}
        locale={locale}
        title={copy.dataTitle}
        subtitle={copy.dataSubtitle}
        intro={copy.dataIntro}
        metrics={copy.fieldMetrics}
        template={copy.dataTemplate}
      />
      <PilotSection
        eyebrow={copy.sectionEyebrow}
        locale={locale}
        title={copy.pilotsTitle}
        subtitle={copy.pilotsSubtitle}
        items={copy.pilots}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
        <div className="brand-frame rounded-[2rem] p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-[-0.05em] text-ink">{copy.footerTitle}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/78">{copy.footerBody}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={DONATE_URL}
                target="_blank"
                rel="noreferrer"
                className="brand-pill rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] hover:bg-clay"
              >
                {copy.primaryCta}
              </Link>
              <Link
                href={getRdcFlagshipStoryPath(locale)}
                className="rounded-full border border-bark/15 bg-surface/40 px-6 py-3 text-sm font-medium text-bark hover:border-bark/30"
              >
                {copy.storyCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function RdcProjectPromo({ locale }: { locale: Locale }) {
  const copy = RDC_PROJECT[locale];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
      <div className="brand-frame overflow-hidden rounded-[2rem]">
        <div className="grid lg:grid-cols-[1fr_320px]">
          <div className="p-8 lg:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-bark/60">{copy.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-[-0.05em] text-ink">{copy.title}</h2>
            <p className="mt-4 text-lg leading-8 text-ink/78">{copy.introBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={getRdcProjectPath(locale)}
                className="brand-pill rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] hover:bg-clay"
              >
                {locale === 'fr' ? 'Voir le hub' : 'Open the hub'}
              </Link>
              <Link
                href={getRdcFlagshipStoryPath(locale)}
                className="rounded-full border border-bark/15 bg-surface/40 px-6 py-3 text-sm font-medium text-bark hover:border-bark/30"
              >
                {copy.storyCta}
              </Link>
            </div>
          </div>
          <div className="relative hidden overflow-hidden border-l border-bark/10 lg:block">
            <Image
              src={getMediaUrl('2024/01/WhatsApp-Image-2024-01-31-at-09.26.31-1.jpeg')}
              alt={
                locale === 'fr'
                  ? 'Travail de terrain en RDC — équipe et communauté sur site.'
                  : 'RDC field work — team and community on site.'
              }
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionGrid({
  eyebrow,
  title,
  subtitle,
  items,
  renderItem
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: RdcSectionItem[];
  renderItem: (item: RdcSectionItem) => ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{items.map(renderItem)}</div>
    </section>
  );
}

function TimelineSection({
  eyebrow,
  title,
  subtitle,
  items
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: RdcTimelineItem[];
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.period} className="brand-frame rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-bark/60">{item.period}</p>
            <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[-0.04em] text-ink">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink/78">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EditorialSection({
  eyebrow,
  title,
  subtitle,
  items,
  locale
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: RdcEditorialItem[];
  locale: Locale;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="brand-frame rounded-[1.75rem] p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-bark">
                {locale === 'fr'
                  ? item.status === 'idea'
                    ? 'prévu'
                    : item.status === 'draft'
                      ? 'en cours'
                      : 'en ligne'
                  : item.status === 'idea'
                    ? 'planned'
                    : item.status === 'draft'
                      ? 'in progress'
                      : 'live'}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-bark/55">{item.owner}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[-0.04em] text-ink">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink/78">{item.donationObjective}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={item.path}
                className="brand-pill rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] hover:bg-clay"
              >
                {item.cta}
              </Link>
              <Link
                href={localePath('/get-involved', locale)}
                className="rounded-full border border-bark/15 bg-surface/40 px-5 py-3 text-sm font-medium text-bark hover:border-bark/30"
              >
                {locale === 'fr' ? 'Soutenir le projet' : 'Support the project'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FunnelSection({
  eyebrow,
  title,
  subtitle,
  items
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: RdcFunnelItem[];
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={`${item.article}-${item.landing}`} className="brand-frame rounded-[1.75rem] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-bark/60">{item.article}</p>
            <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[-0.04em] text-ink">{item.landing}</h3>
            <p className="mt-4 text-base leading-7 text-ink/78">{item.donationObjective}</p>
            <div className="mt-6">
              <Link
                href={DONATE_URL}
                target="_blank"
                rel="noreferrer"
                className="brand-pill rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] hover:bg-clay"
              >
                {item.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DataSection({
  eyebrow,
  locale,
  title,
  subtitle,
  intro,
  metrics,
  template
}: {
  eyebrow: string;
  locale: Locale;
  title: string;
  subtitle: string;
  intro: string;
  metrics: { label: string; unit: string; howMeasured: string }[];
  template: string;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="brand-frame rounded-[1.75rem] p-6">
          <p className="mb-5 text-base leading-7 text-ink/78">{intro}</p>
          <div className="overflow-hidden rounded-[1.25rem] border border-bark/10">
            <div className="grid gap-px bg-bark/10 md:grid-cols-[1fr_0.6fr_1.4fr]">
              <RowHeader>{locale === 'fr' ? 'Métrique' : 'Metric'}</RowHeader>
              <RowHeader>{locale === 'fr' ? 'Unité' : 'Unit'}</RowHeader>
              <RowHeader>{locale === 'fr' ? 'Comment mesurer' : 'How to measure'}</RowHeader>
            </div>
            {metrics.map((metric) => (
              <div key={metric.label} className="grid gap-px border-t border-bark/10 md:grid-cols-[1fr_0.6fr_1.4fr]">
                <RowCell>{metric.label}</RowCell>
                <RowCell>{metric.unit}</RowCell>
                <RowCell>{metric.howMeasured}</RowCell>
              </div>
            ))}
          </div>
        </div>
        <div className="brand-frame rounded-[1.75rem] p-6">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-bark/60">{locale === 'fr' ? 'Gabarit' : 'Template'}</p>
          <p className="mt-4 text-base leading-8 text-ink/78">{template}</p>
        </div>
      </div>
    </section>
  );
}

function PilotSection({
  eyebrow,
  locale,
  title,
  subtitle,
  items
}: {
  eyebrow: string;
  locale: Locale;
  title: string;
  subtitle: string;
  items: RdcPilotItem[];
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="brand-frame rounded-[1.75rem] p-6">
            <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-bark">
              {locale === 'fr'
                ? item.status === 'idea'
                  ? 'à l étude'
                  : item.status === 'draft'
                    ? 'en préparation'
                    : 'prêt'
                : item.status === 'idea'
                  ? 'under review'
                  : item.status === 'draft'
                    ? 'in prep'
                    : 'ready'}
            </span>
            <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[-0.04em] text-ink">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink/78">{item.goal}</p>
            <p className="mt-4 text-base leading-7 text-ink/78">{item.nextStep}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FieldAnchorSection({
  eyebrow,
  title,
  subtitle,
  body,
  quote,
  image,
  imageAlt
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  quote: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-8 brand-frame grid gap-6 rounded-[1.75rem] p-6 lg:grid-cols-[1fr_1fr_0.9fr] lg:p-8">
        {image && (
          <div className="overflow-hidden rounded-[1.5rem] border border-bark/10 shadow-card">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full">
              <Image
                src={getMediaUrl(image)}
                alt={imageAlt ?? ''}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 22vw, 100vw"
              />
            </div>
          </div>
        )}
        <div className="space-y-4">
          <p className="text-lg leading-8 text-ink/80">{body}</p>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/55">Eric Mpongo</p>
        </div>
        <div className="rounded-[1.5rem] bg-surface/75 p-6 shadow-card">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-bark/60">Field note</p>
          <p className="mt-4 text-lg leading-8 text-ink/82">&ldquo;{quote}&rdquo;</p>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-bark/60">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold uppercase tracking-[-0.05em] text-ink">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-ink/78">{subtitle}</p>
    </div>
  );
}

function TextCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="brand-frame rounded-[1.75rem] p-6">
      <h3 className="text-2xl font-semibold uppercase tracking-[-0.04em] text-ink">{title}</h3>
      <p className="mt-4 text-base leading-7 text-ink/78">{body}</p>
    </div>
  );
}

function RowHeader({ children }: { children: ReactNode }) {
  return <div className="bg-surface px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-bark/70">{children}</div>;
}

function RowCell({ children }: { children: ReactNode }) {
  return <div className="bg-surface px-5 py-4 text-sm leading-7 text-ink/78">{children}</div>;
}
