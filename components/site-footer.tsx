import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { TrackedAnchor } from '@/components/tracked-anchor';
import { BRAND } from '@/lib/brand';
import { CONTACT_EMAIL, DONATE_URL, SOCIAL_LINKS, localePath, resolveMediaAsset, type Locale } from '@/lib/site';

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = useTranslations('footer');

  const learnLinks = [
    { label: t('vetiver'), href: localePath('/vetiver', locale) },
    { label: t('projects'), href: localePath('/projects', locale) },
    { label: t('stories'), href: localePath('/stories', locale) },
    { label: t('about'), href: localePath('/about', locale) },
  ];

  const supportLinks = [
    { label: locale === 'fr' ? 'Faire un don' : 'Donate', href: DONATE_URL, external: true },
    { label: t('involved'), href: localePath('/get-involved', locale) },
    { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ...SOCIAL_LINKS.map((s) => ({ label: s.label, href: s.href, external: true })),
  ];

  return (
    <footer className="mt-16 bg-bark text-white">
      <Container className="pt-16 pb-10">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand column */}
          <div className="space-y-5 pr-0 lg:pr-8">
            <Image
              src={resolveMediaAsset(BRAND.logo.horizontal)}
              alt={BRAND.name}
              width={168}
              height={48}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="max-w-sm text-sm leading-7 text-white/72">
              {locale === 'fr'
                ? "Vetiver Sans Frontières est un organisme sans but lucratif bilingue basé au Québec qui aide les communautés à stabiliser les terres fragiles et gérer l'eau grâce au vétiver."
                : 'Vetiver Without Borders is a bilingual Quebec-based nonprofit helping communities stabilize fragile land and manage water with vetiver.'}
            </p>
            <Button
              href={DONATE_URL}
              external
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="sm"
              className="shadow-card"
            >
              {locale === 'fr' ? 'Faire un don' : 'Donate'}
            </Button>
          </div>

          {/* Explore links */}
          <div className="space-y-4 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-surface/74">
              {t('explore')}
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/88">
              {learnLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors duration-150">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support links */}
          <div className="space-y-4 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-surface/74">
              {t('follow')}
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/88">
              {supportLinks.map((link) =>
                link.external ? (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-150">
                    {link.label}
                  </a>
                ) : (
                  <TrackedAnchor key={link.href} href={link.href} className="hover:text-white transition-colors duration-150">
                    {link.label}
                  </TrackedAnchor>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-xs text-white/60">
          <span>
            {locale === 'fr'
              ? '© 2025 Vetiver Sans Frontières · Montréal, Québec · Organisme sans but lucratif'
              : '© 2025 Vetiver Sans Frontières · Montréal, Québec · Nonprofit organization'}
          </span>
          <div className="flex gap-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/76">
            <Link href="/" className="hover:text-white transition-colors duration-150">EN</Link>
            <Link href="/fr" className="hover:text-white transition-colors duration-150">FR</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
