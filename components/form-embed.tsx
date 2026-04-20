import { Button } from '@/components/button';
import { CONTACT_EMAIL } from '@/lib/site';
import { type AnalyticsEventName } from '@/lib/analytics';

type FormKind = 'contact' | 'newsletter';

type FormConfig = {
  embedUrl?: string;
  linkUrl?: string;
  title: string;
  description: string;
  buttonLabel: string;
  fallback: string;
  analyticsEvent: AnalyticsEventName;
  analyticsMethod: string;
};

function getFormConfig(kind: FormKind, locale: 'en' | 'fr'): FormConfig {
  if (kind === 'contact') {
    return {
      embedUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_EMBED_URL,
      linkUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_URL,
      title: locale === 'fr' ? 'Contactez-nous' : 'Contact us',
      description:
        locale === 'fr'
          ? "Utilisez le formulaire heberge s'il est disponible, ou ecrivez-nous directement par courriel si ce n'est pas le cas."
          : 'Use the hosted form if it is available, or email us directly if it is not.',
      buttonLabel: locale === 'fr' ? 'Ouvrir le formulaire' : 'Open form',
      fallback: `mailto:${CONTACT_EMAIL}`,
      analyticsEvent: 'generate_lead',
      analyticsMethod: 'contact_form'
    } satisfies FormConfig;
  }

  return {
    embedUrl: process.env.NEXT_PUBLIC_NEWSLETTER_EMBED_URL,
    linkUrl: process.env.NEXT_PUBLIC_NEWSLETTER_URL,
    title: locale === 'fr' ? 'Inscription a l infolettre' : 'Newsletter sign-up',
    description:
      locale === 'fr'
        ? "Utilisez le formulaire heberge s'il est disponible, ou ecrivez-nous directement par courriel si ce n'est pas le cas."
        : 'Use the hosted form if it is available, or email us directly if it is not.',
    buttonLabel: locale === 'fr' ? 'Ouvrir le formulaire' : 'Open form',
    fallback: `mailto:${CONTACT_EMAIL}?subject=Newsletter`,
    analyticsEvent: 'sign_up',
    analyticsMethod: 'newsletter_form'
  } satisfies FormConfig;
}

export function FormEmbed({
  kind,
  locale = 'en'
}: {
  kind: FormKind;
  locale?: 'en' | 'fr';
}) {
  const config = getFormConfig(kind, locale);
  const analyticsParams = {
    lead_type: kind,
    contact_method: config.analyticsMethod
  };

  if (config.embedUrl) {
    return (
      <div className="space-y-4">
        <div className="overflow-hidden rounded-[1.6rem] border border-bark/10 bg-white p-2 shadow-card">
          <iframe
            title={config.title}
            src={config.embedUrl}
            className="h-[720px] w-full rounded-[1.3rem] border-0"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
        {config.linkUrl ? (
          <Button
            href={config.linkUrl}
            external
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="w-full sm:w-auto"
            analytics={{
              event: config.analyticsEvent,
              params: {
                ...analyticsParams,
                interaction: 'open_form'
              }
            }}
          >
            {config.buttonLabel}
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <div className="rounded-[1.6rem] border border-bark/10 bg-white p-7 shadow-card">
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{config.title}</h3>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-ink/72">
        {config.description}
      </p>
      <Button
        href={config.linkUrl || config.fallback}
        external
        className="mt-6"
        analytics={{
          event: config.analyticsEvent,
          params: {
            ...analyticsParams,
            interaction: config.linkUrl ? 'open_form' : 'email_fallback'
          }
        }}
      >
        {config.linkUrl ? config.buttonLabel : locale === 'fr' ? 'Ecrire par courriel' : 'Email us'}
      </Button>
    </div>
  );
}
