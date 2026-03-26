import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import type { Locale } from '@/lib/site';

export function SiteShell({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-vetiver-radial">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-brand-band opacity-85" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-surface/60 via-transparent to-transparent" />
      <SiteHeader locale={locale} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
