import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

import '@/app/globals.css';
import { AnalyticsConsentBanner } from '@/components/analytics-consent-banner';
import { GoogleTag } from '@/components/google-tag';
import { getAbsoluteUrl } from '@/lib/site';

const rubik = localFont({
  src: [
    {
      path: './fonts/rubik-latin.woff2',
      weight: '300 900',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-rubik'
});

export const metadata: Metadata = {
  metadataBase: new URL(getAbsoluteUrl('/')),
  title: {
    default: 'Vetiver Without Borders',
    template: '%s | Vetiver Without Borders'
  },
  description:
    'Vetiver Without Borders helps communities facing climate stress rebuild land, protect water, and restore resilience through the Vetiver System.',
  openGraph: {
    title: 'Vetiver Without Borders',
    description:
      'Regenerative ecological action through the Vetiver System, climate adaptation, soil restoration, and community-led land recovery.',
    url: getAbsoluteUrl('/'),
    siteName: 'Vetiver Without Borders',
    locale: 'en_CA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vetiver Without Borders',
    description:
      'Regenerative ecological action through the Vetiver System, climate adaptation, soil restoration, and community-led land recovery.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.variable} font-body bg-sand text-ink antialiased`}>
        <Script id="analytics-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              functionality_storage: 'granted',
              security_storage: 'granted',
              wait_for_update: 500
            });
          `}
        </Script>
        <GoogleTag />
        <AnalyticsConsentBanner />
        {children}
      </body>
    </html>
  );
}
