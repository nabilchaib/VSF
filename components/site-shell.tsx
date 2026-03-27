import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import type { Locale } from '@/lib/site';

export function SiteShell({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-vetiver-radial">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-brand-band opacity-85" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-surface/60 via-transparent to-transparent" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-bark focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-soft"
      >
        Skip to content
      </a>
      <SiteHeader locale={locale} />
      <main id="main">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
