import { Button } from '@/components/button';
import { CONTACT_EMAIL } from '@/lib/site';

type FormKind = 'contact' | 'newsletter';

function getFormConfig(kind: FormKind, locale: 'en' | 'fr') {
  if (kind === 'contact') {
    return {
      embedUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_EMBED_URL,
      linkUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_URL,
      title: locale === 'fr' ? 'Contactez-nous' : 'Contact us',
      description:
        locale === 'fr'
          ? 'Envoyez-nous un message et notre equipe reviendra vers vous.'
          : 'Send us a message and our team will get back to you.',
      buttonLabel: locale === 'fr' ? 'Ecrire par courriel' : 'Email us',
      fallback: `mailto:${CONTACT_EMAIL}`
    };
  }

  return {
    embedUrl: process.env.NEXT_PUBLIC_NEWSLETTER_EMBED_URL,
    linkUrl: process.env.NEXT_PUBLIC_NEWSLETTER_URL,
    title: locale === 'fr' ? 'Inscription a l infolettre' : 'Newsletter sign-up',
    description:
      locale === 'fr'
        ? 'Inscrivez-vous pour recevoir des nouvelles de terrain, des recits de projet et les prochaines etapes de VSF.'
        : 'Subscribe for field updates, project stories, and the next steps in VSF work.',
    buttonLabel: locale === 'fr' ? 'S inscrire' : 'Sign up',
    fallback: `mailto:${CONTACT_EMAIL}?subject=Newsletter`
  };
}

export function FormEmbed({
  kind,
  locale = 'en'
}: {
  kind: FormKind;
  locale?: 'en' | 'fr';
}) {
  const config = getFormConfig(kind, locale);

  if (config.embedUrl) {
    return (
      <div className="overflow-hidden rounded-[1.6rem] border border-bark/10 bg-white p-2 shadow-card">
        <iframe
          title={config.title}
          src={config.embedUrl}
          className="h-[720px] w-full rounded-[1.3rem] border-0"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    );
  }

  return (
    <div className="rounded-[1.6rem] border border-bark/10 bg-white p-7 shadow-card">
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{config.title}</h3>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-ink/72">
        {config.description}
      </p>
      <Button href={config.linkUrl || config.fallback} external className="mt-6">
        {config.buttonLabel}
      </Button>
    </div>
  );
}
