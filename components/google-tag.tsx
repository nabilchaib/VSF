'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import {
  readStoredAnalyticsConsent,
  setAnalyticsConsent,
  trackPageView
} from '@/lib/analytics';
import { ANALYTICS_ID } from '@/lib/site';

export function GoogleTag() {
  const pathname = usePathname();

  useEffect(() => {
    const stored = readStoredAnalyticsConsent();

    if (stored) {
      setAnalyticsConsent(stored);
    }
  }, []);

  useEffect(() => {
    if (!ANALYTICS_ID) {
      return;
    }

    trackPageView(window.location.pathname, window.location.search, document.title);
  }, [pathname]);

  if (!ANALYTICS_ID) {
    return null;
  }

  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);}
          window.gtag('js', new Date());
          window.gtag('config', '${ANALYTICS_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
