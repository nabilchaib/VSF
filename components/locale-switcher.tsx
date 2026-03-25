'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getAlternatePath, type Locale } from '@/lib/site';

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const targetLocale = locale === 'en' ? 'fr' : 'en';
  const href = getAlternatePath(pathname || '/', targetLocale);

  return (
    <Link
      href={href}
      className="rounded-full border border-bark/12 bg-surface/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-bark hover:border-bark/25 hover:bg-surfaceAlt"
    >
      {targetLocale}
    </Link>
  );
}
