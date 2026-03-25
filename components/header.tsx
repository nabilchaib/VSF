'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { DONATE_URL, NAV_ITEMS, getMediaUrl, type Locale } from '@/lib/site';

export function Header({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-40 border-b border-bark/10 bg-white/92 shadow-[0_10px_30px_rgba(61,58,52,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link href={locale === 'fr' ? '/fr' : '/'} className="group flex min-w-0 items-center gap-3">
            <img
              src={getMediaUrl('2025/04/cropped-VSF-LOGO_Plan-de-travail-1-scaled.webp')}
              alt={t('title')}
              className="h-12 w-auto sm:h-14"
            />
            <div className="hidden min-w-0 sm:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-bark/55">{t('eyebrow')}</p>
              <p className="truncate text-lg font-semibold text-bark">{t('title')}</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <LocaleSwitcher locale={locale} />
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#6EA13A] bg-[#75BE2B] px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#26361D] shadow-soft hover:bg-[#6AA63F]"
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
              className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/70 hover:text-bark"
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
              className="whitespace-nowrap rounded-full border border-bark/10 bg-sand/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-bark"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
