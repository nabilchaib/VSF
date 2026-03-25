import { NextIntlClientProvider } from 'next-intl';

import { SiteShell } from '@/components/site-shell';
import frMessages from '@/messages/fr.json';

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider locale="fr" messages={frMessages}>
      <SiteShell locale="fr">{children}</SiteShell>
    </NextIntlClientProvider>
  );
}
