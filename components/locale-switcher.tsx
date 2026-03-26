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
      className="rounded-full border border-bark/8 bg-white/60 px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-bark/70 hover:border-bark/16 hover:bg-white"
    >
      {targetLocale}
    </Link>
  );
}
