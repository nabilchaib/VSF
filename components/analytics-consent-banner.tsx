'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import {
  readStoredAnalyticsConsent,
  setAnalyticsConsent,
  writeStoredAnalyticsConsent,
  type AnalyticsConsent
} from '@/lib/analytics';

const COPY = {
  en: {
    title: 'Analytics preferences',
    body:
      'We use privacy-conscious analytics to understand visits, donations, and campaign performance. You can allow or reject analytics at any time.',
    accept: 'Accept analytics',
    reject: 'Reject'
  },
  fr: {
    title: 'Preferences analytiques',
    body:
      'Nous utilisons une analytique respectueuse de la vie privee pour mieux comprendre les visites, les dons et la performance des campagnes. Vous pouvez accepter ou refuser a tout moment.',
    accept: 'Accepter',
    reject: 'Refuser'
  }
} as const;

export function AnalyticsConsentBanner() {
  const pathname = usePathname();
  const locale = pathname?.startsWith('/fr') ? 'fr' : 'en';
  const copy = COPY[locale];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readStoredAnalyticsConsent();

    if (stored) {
      setAnalyticsConsent(stored);
      return;
    }

    setVisible(true);
  }, []);

  const handleChoice = (choice: AnalyticsConsent) => {
    writeStoredAnalyticsConsent(choice);
    setAnalyticsConsent(choice);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-5xl rounded-[1.5rem] border border-bark/12 bg-white/96 p-4 shadow-soft backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/60">{copy.title}</p>
          <p className="text-sm leading-7 text-ink/74">{copy.body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => handleChoice('denied')}
            className="rounded-full border border-bark/12 bg-surface/80 px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-bark/24 hover:bg-surface"
          >
            {copy.reject}
          </button>
          <button
            type="button"
            onClick={() => handleChoice('granted')}
            className="rounded-full border border-moss bg-moss px-4 py-2.5 text-sm font-semibold text-bark shadow-card transition hover:border-clay hover:bg-clay"
          >
            {copy.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
