import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import type { Locale } from '@/lib/site';

export function SiteShell({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-vetiver-radial">
      <div className="absolute inset-x-0 top-0 -z-10 h-[460px] bg-gradient-to-b from-reed/20 via-transparent to-transparent" />
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
