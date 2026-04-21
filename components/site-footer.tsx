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

  return (
    <footer className="mt-16 border-t border-bark/10 bg-[#f5f0e6]">
      <Container className="py-12">
        <div className="grid gap-8 rounded-[2.35rem] border border-bark/8 bg-white/72 px-6 py-8 shadow-card lg:grid-cols-[1.15fr_0.75fr_0.75fr] lg:px-8">
          <div className="space-y-4 pr-0 lg:pr-8">
            <Image
              src={resolveMediaAsset(BRAND.logo.horizontal)}
              alt={BRAND.name}
              width={168}
              height={48}
              className="h-10 w-auto"
            />
            <p className="max-w-sm text-sm leading-7 text-ink/72">
              {locale === 'fr'
                ? "Protéger les sols, l'eau et les terres avec le vétiver — aux côtés des communautés et des partenaires locaux."
                : 'Protecting soil, water, and land with vetiver — alongside communities and local partners.'}
            </p>
            <div className="pt-2">
              <Button
                href={DONATE_URL}
                external
                target="_blank"
                rel="noreferrer"
                variant="primary"
                size="sm"
                className="shadow-soft"
              >
                {locale === 'fr' ? 'Faire un don' : 'Donate'}
              </Button>
            </div>
          </div>

          <div className="space-y-3 border-t border-bark/8 pt-6 text-sm text-ink/72 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="font-semibold uppercase tracking-[0.16em] text-bark/70">
              {t('explore')}
            </p>
            <div className="flex flex-col gap-2.5">
              <Link href={localePath('/about', locale)}>{t('about')}</Link>
              <Link href={localePath('/projects', locale)}>{t('projects')}</Link>
              <Link href={localePath('/get-involved', locale)}>{t('involved')}</Link>
              <Link href={localePath('/stories', locale)}>{t('stories')}</Link>
            </div>
          </div>

          <div className="space-y-3 border-t border-bark/8 pt-6 text-sm text-ink/72 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="font-semibold uppercase tracking-[0.16em] text-bark/70">
              {t('follow')}
            </p>
            <div className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
              <TrackedAnchor href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</TrackedAnchor>
            </div>
          </div>
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.16em] text-bark/58">
          {locale === 'fr' ? 'Organisme sans but lucratif' : 'Nonprofit organization'}
        </p>
      </Container>
    </footer>
  );
}
