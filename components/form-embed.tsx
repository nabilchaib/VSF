type FormKind = 'contact' | 'newsletter';

function getFormConfig(kind: FormKind) {
  if (kind === 'contact') {
    return {
      embedUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_EMBED_URL,
      linkUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_URL,
      title: 'Contact us',
      fallback: 'mailto:info@vetiversansfrontieres.org'
    };
  }

  return {
    embedUrl: process.env.NEXT_PUBLIC_NEWSLETTER_EMBED_URL,
    linkUrl: process.env.NEXT_PUBLIC_NEWSLETTER_URL,
    title: 'Newsletter sign-up',
    fallback: 'mailto:info@vetiversansfrontieres.org?subject=Newsletter'
  };
}

export function FormEmbed({ kind }: { kind: FormKind }) {
  const config = getFormConfig(kind);

  if (config.embedUrl) {
    return (
      <div className="overflow-hidden rounded-[2rem] border border-bark/10 bg-white p-2 shadow-soft">
        <iframe
          title={config.title}
          src={config.embedUrl}
          className="h-[720px] w-full rounded-[1.5rem] border-0"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-dashed border-bark/20 bg-white/80 p-8 shadow-soft">
      <h3 className="text-2xl font-semibold text-bark">{config.title}</h3>
      <p className="mt-3 max-w-2xl text-base leading-7 text-ink/75">
        Configure the hosted form URL in the environment variables to embed the production form. The fallback link below still keeps the page functional.
      </p>
      <a
        href={config.linkUrl || config.fallback}
        className="mt-5 inline-flex rounded-full bg-bark px-5 py-3 text-sm font-semibold text-white hover:bg-bark/90"
      >
        Open form
      </a>
    </div>
  );
}
