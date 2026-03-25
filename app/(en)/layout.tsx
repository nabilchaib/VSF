import { NextIntlClientProvider } from 'next-intl';

import { SiteShell } from '@/components/site-shell';
import enMessages from '@/messages/en.json';

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <SiteShell locale="en">{children}</SiteShell>
    </NextIntlClientProvider>
  );
}
