import { Button } from '@/components/button';
import { Container } from '@/components/container';
import {
  getArticleEndCtaCopy,
  getLocalizedArticleHref,
  type ArticleCtaTarget,
  type ArticleIntent
} from '@/lib/article-routing';
import { type Locale } from '@/lib/site';

export function ArticleEndCta({
  locale,
  intent,
  ctaTarget
}: {
  locale: Locale;
  intent?: ArticleIntent;
  ctaTarget?: ArticleCtaTarget;
}) {
  const copy = getArticleEndCtaCopy(locale, intent, ctaTarget);

  return (
    <section className="bg-[#f3ede2] py-14 lg:py-20">
      <Container className="max-w-5xl">
        <div className="rounded-[2.3rem] border border-bark/10 bg-bark px-7 py-8 text-white shadow-soft lg:px-9 lg:py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface/76">{copy.eyebrow}</p>
          <h2 className="mt-3 max-w-[16ch] text-3xl font-semibold sm:text-4xl">{copy.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">{copy.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              href={getLocalizedArticleHref(copy.primary.href, locale)}
              external={copy.primary.external}
              target={copy.primary.external ? '_blank' : undefined}
              rel={copy.primary.external ? 'noreferrer' : undefined}
              variant={copy.primary.variant}
            >
              {copy.primary.label}
            </Button>
            <Button
              href={getLocalizedArticleHref(copy.secondary.href, locale)}
              external={copy.secondary.external}
              target={copy.secondary.external ? '_blank' : undefined}
              rel={copy.secondary.external ? 'noreferrer' : undefined}
              variant={copy.secondary.variant}
              className="border-white/16 bg-white/10 text-white hover:border-white/26 hover:bg-white/16"
            >
              {copy.secondary.label}
            </Button>
            <Button
              href={getLocalizedArticleHref(copy.tertiary.href, locale)}
              external={copy.tertiary.external}
              target={copy.tertiary.external ? '_blank' : undefined}
              rel={copy.tertiary.external ? 'noreferrer' : undefined}
              variant="secondary"
              className="border-white/16 bg-white/10 text-white hover:border-white/26 hover:bg-white/16"
            >
              {copy.tertiary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
