'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { BRAND } from '@/lib/brand';
import { DONATE_URL, NAV_ITEMS, getMediaUrl, type Locale } from '@/lib/site';

export function Header({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-40 border-b border-bark/10 bg-white/95 shadow-card backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link href={locale === 'fr' ? '/fr' : '/'} className="group flex min-w-0 items-center gap-3">
            <img
              src={BRAND.logo.horizontal.startsWith('/media') ? BRAND.logo.horizontal : getMediaUrl('2025/04/cropped-VSF-LOGO_Plan-de-travail-1-scaled.webp')}
              alt={t('title')}
              className="h-12 w-auto sm:h-14"
            />
            <div className="hidden min-w-0 sm:block">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-ink/55">{t('eyebrow')}</p>
              <p className="truncate text-lg font-semibold uppercase tracking-[-0.03em] text-ink">{t('title')}</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <LocaleSwitcher locale={locale} />
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noreferrer"
              className="brand-pill rounded-full border border-clay px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] shadow-soft hover:bg-clay"
            >
              {t('donate')}
            </a>
          </div>
        </div>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href[locale]}
              className="rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.16em] text-ink/72 hover:bg-surface hover:text-bark"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <nav className="-mx-2 flex gap-2 overflow-x-auto px-2 pb-1 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href[locale]}
              className="whitespace-nowrap rounded-full border border-bark/10 bg-surface/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-bark"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
