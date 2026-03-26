import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { BRAND } from '@/lib/brand';
import { DONATE_URL, resolveMediaAsset, type Locale } from '@/lib/site';

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61553674826785' },
  { label: 'Instagram', href: 'https://www.instagram.com/vetiversansfrontieres/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vetiver-sans-frontieres/' }
];

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
                ? 'Solutions ecologiques pour proteger les sols, l eau et la resilience communautaire.'
                : 'Ecological solutions for soil protection, water security, and community resilience.'}
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
              <Link href={locale === 'fr' ? '/fr/about' : '/about'}>{t('about')}</Link>
              <Link href={locale === 'fr' ? '/fr/projects' : '/projects'}>{t('projects')}</Link>
              <Link href={locale === 'fr' ? '/fr/get-involved' : '/get-involved'}>{t('involved')}</Link>
              <Link href={locale === 'fr' ? '/fr/stories' : '/stories'}>{t('stories')}</Link>
            </div>
          </div>

          <div className="space-y-3 border-t border-bark/8 pt-6 text-sm text-ink/72 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="font-semibold uppercase tracking-[0.16em] text-bark/70">
              {t('follow')}
            </p>
            <div className="flex flex-col gap-2.5">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
              <a href="mailto:info@vetiversansfrontieres.org">info@vetiversansfrontieres.org</a>
            </div>
          </div>
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.16em] text-bark/50">
          {locale === 'fr' ? 'Organisme sans but lucratif' : 'Nonprofit organization'}
        </p>
      </Container>
    </footer>
  );
}
