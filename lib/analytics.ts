import { DONATE_URL } from '@/lib/site';

export const ANALYTICS_STORAGE_KEY = 'vsf.analytics.consent';

export type AnalyticsConsent = 'granted' | 'denied';
export type AnalyticsEventName = 'donate' | 'generate_lead' | 'page_view' | 'sign_up';
export type AnalyticsParams = Record<string, string | number | boolean | undefined>;
export type AnalyticsAction = {
  event: AnalyticsEventName;
  params?: AnalyticsParams;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function cleanParams(params: AnalyticsParams) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null)
  ) as Record<string, string | number | boolean>;
}

function getWindow() {
  return typeof window === 'undefined' ? undefined : window;
}

export function readStoredAnalyticsConsent(): AnalyticsConsent | null {
  const win = getWindow();

  if (!win) {
    return null;
  }

  try {
    const stored = win.localStorage.getItem(ANALYTICS_STORAGE_KEY);
    return stored === 'granted' || stored === 'denied' ? stored : null;
  } catch {
    return null;
  }
}

export function writeStoredAnalyticsConsent(consent: AnalyticsConsent) {
  const win = getWindow();

  if (!win) {
    return;
  }

  try {
    win.localStorage.setItem(ANALYTICS_STORAGE_KEY, consent);
  } catch {
    // Ignore storage failures. Analytics should never block the page.
  }
}

export function setAnalyticsConsent(consent: AnalyticsConsent) {
  const win = getWindow();

  if (!win) {
    return;
  }

  const payload = {
    analytics_storage: consent,
    ad_storage: consent,
    ad_user_data: consent,
    ad_personalization: consent,
    functionality_storage: 'granted',
    security_storage: 'granted'
  } as const;

  if (typeof win.gtag === 'function') {
    win.gtag('consent', 'update', payload);
    return;
  }

  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push(['consent', 'update', payload]);
}

export function trackAnalyticsEvent(event: AnalyticsEventName, params: AnalyticsParams = {}) {
  const win = getWindow();

  if (!win) {
    return;
  }

  const clean = cleanParams(params);

  if (typeof win.gtag === 'function') {
    win.gtag('event', event, clean);
    return;
  }

  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push(['event', event, clean]);
}

export function trackPageView(pathname: string, search = '', title?: string) {
  trackAnalyticsEvent('page_view', {
    page_path: `${pathname}${search}`,
    page_location: getWindow()?.location.href,
    page_title: title ?? getWindow()?.document.title
  });
}

export function trackDonateClick(params: { href?: string; location?: string } = {}) {
  trackAnalyticsEvent('donate', {
    link_url: params.href ?? DONATE_URL,
    link_text: params.location
  });
}

export function trackLeadClick(
  leadType: 'contact' | 'newsletter',
  params: { href?: string; method?: string; location?: string } = {}
) {
  trackAnalyticsEvent(leadType === 'newsletter' ? 'sign_up' : 'generate_lead', {
    lead_type: leadType,
    contact_method: params.method,
    link_url: params.href,
    link_text: params.location
  });
}

export function inferAnalyticsActionForHref(href: string): AnalyticsAction | undefined {
  const trimmed = href.trim();

  if (!trimmed) {
    return undefined;
  }

  if (trimmed === DONATE_URL) {
    return {
      event: 'donate',
      params: {
        link_url: trimmed,
        conversion_type: 'donation'
      }
    };
  }

  if (trimmed.startsWith('mailto:')) {
    const subject = (() => {
      try {
        return new URL(trimmed).searchParams.get('subject')?.toLowerCase() || '';
      } catch {
        return '';
      }
    })();

    const leadType = subject.includes('newsletter') ? 'newsletter' : 'contact';

    return {
      event: leadType === 'newsletter' ? 'sign_up' : 'generate_lead',
      params: {
        lead_type: leadType,
        contact_method: 'email',
        link_url: trimmed
      }
    };
  }

  if (trimmed.startsWith('tel:')) {
    return {
      event: 'generate_lead',
      params: {
        lead_type: 'contact',
        contact_method: 'phone',
        link_url: trimmed
      }
    };
  }

  try {
    const url = new URL(trimmed, 'https://example.com');
    const pathname = url.pathname.replace(/\/$/, '');

    if (pathname.endsWith('/contact') || pathname === '/contact' || pathname.includes('/contact')) {
      return {
        event: 'generate_lead',
        params: {
          lead_type: 'contact',
          link_url: trimmed
        }
      };
    }

    if (
      pathname.includes('newsletter') ||
      pathname.includes('signup') ||
      pathname.includes('sign-up')
    ) {
      return {
        event: 'sign_up',
        params: {
          lead_type: 'newsletter',
          link_url: trimmed
        }
      };
    }
  } catch {
    return undefined;
  }

  return undefined;
}
