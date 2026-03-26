'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { BRAND } from '@/lib/brand';
import { DONATE_URL, NAV_ITEMS, resolveMediaAsset, type Locale } from '@/lib/site';
import { cn } from '@/lib/utils';

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-bark/10 bg-white/92 backdrop-blur-xl">
      <Container className="max-w-7xl py-3.5">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={locale === 'fr' ? '/fr' : '/'}
            className="flex min-w-0 items-center gap-2.5"
          >
            <Image
              src={resolveMediaAsset(BRAND.logo.horizontal)}
              alt={t('title')}
              width={168}
              height={48}
              className="h-8 w-auto sm:h-9"
              priority
            />
            <div className="hidden min-w-0 sm:block">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-bark/50">
                {t('eyebrow')}
              </p>
              <p className="truncate text-[15px] font-semibold text-ink">
                {t('title')}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <LocaleSwitcher locale={locale} />
            <Button
              href={DONATE_URL}
              external
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex shadow-soft"
            >
              {t('donate')}
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex rounded-full border border-bark/8 bg-white/60 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-bark/72 hover:border-bark/16 hover:bg-white lg:hidden"
              aria-expanded={isOpen}
              aria-controls="site-nav"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        <nav
          id="site-nav"
          className={cn(
            'overflow-hidden transition-[max-height,opacity] duration-200 lg:mt-3 lg:max-h-none lg:opacity-100',
            isOpen ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:mt-3'
          )}
        >
          <ul className="flex flex-col gap-2 rounded-[1.5rem] border border-bark/8 bg-white/92 p-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href[locale]}
                  className="block rounded-full px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.16em] text-ink/72 hover:bg-surface/80 hover:text-bark"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li className="sm:hidden">
              <Button
                href={DONATE_URL}
                external
                target="_blank"
                rel="noreferrer"
                variant="primary"
                size="sm"
                className="w-full"
              >
                {t('donate')}
              </Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
