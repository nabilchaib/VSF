'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { BRAND } from '@/lib/brand';
import type { Locale } from '@/lib/site';

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61553674826785' },
  { label: 'Instagram', href: 'https://www.instagram.com/vetiversansfrontieres/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vetiver-sans-frontieres/' }
];

export function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations('footer');

  return (
    <footer className="mt-16 border-t border-bark/10 bg-surface text-ink">
      <div className="brand-band h-2 w-full" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.25fr_0.8fr_0.8fr] lg:px-10">
        <div className="space-y-4">
          <img
            src={BRAND.logo.horizontal}
            alt={BRAND.name}
            className="h-12 w-auto"
          />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-bark/70">{t('eyebrow')}</p>
          <h2 className="max-w-md text-3xl font-semibold uppercase tracking-[-0.04em] text-ink">{t('title')}</h2>
          <p className="max-w-lg text-sm leading-7 text-ink/78">{t('summary')}</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/80">{t('explore')}</p>
          <div className="flex flex-col gap-2 text-sm text-ink/78">
            <Link href={locale === 'fr' ? '/fr/about' : '/about'}>{t('about')}</Link>
            <Link href={locale === 'fr' ? '/fr/projects' : '/projects'}>{t('projects')}</Link>
            <Link href={locale === 'fr' ? '/fr/get-involved' : '/get-involved'}>{t('involved')}</Link>
            <Link href={locale === 'fr' ? '/fr/stories' : '/stories'}>{t('stories')}</Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/80">{t('follow')}</p>
          <div className="flex flex-col gap-2 text-sm text-ink/78">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
            <a href="mailto:info@vetiversansfrontieres.org">info@vetiversansfrontieres.org</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
