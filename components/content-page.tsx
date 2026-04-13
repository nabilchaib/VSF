import type { MDXComponents } from 'mdx/types';
import { compileMDX } from 'next-mdx-remote/rsc';

import { AboutPage } from '@/components/about-page';
import { ContactPage } from '@/components/contact-page';
import { Container } from '@/components/container';
import { FormEmbed } from '@/components/form-embed';
import { ArticleEndCta } from '@/components/article-end-cta';
import { GetInvolvedPage } from '@/components/get-involved-page';
import { HomePage } from '@/components/home-page';
import { HtmlContent } from '@/components/html-content';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { PageHero, getHeroImageForEntry } from '@/components/page-hero';
import { RdcProjectPromo } from '@/components/rdc-project-hub';
import { ProjectsPage } from '@/components/projects-page';
import { ServicesPage } from '@/components/services-page';
import { VetiverPage } from '@/components/vetiver-page';
import { getEntriesByType, getEntryPath, type ContentEntry } from '@/lib/content';
import { formatDate, type Locale } from '@/lib/site';

const mdxComponents: MDXComponents = {
  HtmlContent,
  FormEmbed,
  NewsletterSignup
};

async function renderEntryBody(entry: ContentEntry, locale: Locale) {
  const result = await compileMDX({
    source: entry.body,
    options: {
      parseFrontmatter: false
    },
    components: {
      ...mdxComponents,
      HtmlContent: (props) => <HtmlContent {...props} locale={locale} />
    }
  });

  return result.content;
}

export async function renderEntryPage(entry: ContentEntry, locale: Locale) {
  if (entry.type === 'page' && entry.slug === '') {
    const posts = await getEntriesByType(locale, 'post');
    return <HomePage locale={locale} posts={posts} />;
  }

  if (entry.type === 'page' && isContactPage(entry.slug, locale)) {
    return <ContactPage locale={locale} />;
  }

  if (entry.type === 'page' && entry.slug === 'about') {
    return <AboutPage locale={locale} />;
  }

  if (entry.type === 'page' && entry.slug === 'projects') {
    return <ProjectsPage locale={locale} />;
  }

  if (entry.type === 'page' && entry.slug === 'get-involved') {
    return <GetInvolvedPage locale={locale} />;
  }

  if (entry.type === 'page' && entry.slug === 'vetiver') {
    return <VetiverPage locale={locale} />;
  }

  if (entry.type === 'page' && (entry.slug === 'about/services' || entry.slug === 'services')) {
    return <ServicesPage locale={locale} />;
  }

  const content = await renderEntryBody(entry, locale);
  const isPost = entry.type === 'post';
  const heroImage = getHeroImageForEntry(entry.slug, locale);

  return (
    <>
      <PageHero
        title={entry.title}
        eyebrow={isPost ? (locale === 'fr' ? 'Actualite' : 'Story') : locale === 'fr' ? 'Page' : 'Page'}
        subtitle={entry.description}
        image={heroImage}
        align="left"
      >
        {isPost ? (
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-sand/80">
            <span>{formatDate(entry.publishedAt, locale)}</span>
            <span aria-hidden="true">/</span>
            <LinkHint path={getEntryPath(entry)} />
          </div>
        ) : null}
      </PageHero>

      <section className="bg-white/72 py-14 lg:py-20">
        <Container className="max-w-5xl">
          <article className="rounded-[2.4rem] border border-bark/10 bg-white px-7 py-8 shadow-card lg:px-12 lg:py-12">
            {isPost ? (
              <div className="mb-8 border-b border-bark/8 pb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-bark/58">
                {locale === 'fr' ? 'Recit de terrain' : 'Field story'}
              </div>
            ) : null}
            {content}
          </article>
        </Container>
      </section>
      {isPost ? <ArticleEndCta locale={locale} intent={entry.intent} /> : null}
      {shouldShowRdcPromo(entry) ? <RdcProjectPromo locale={locale} /> : null}
    </>
  );
}

function LinkHint({ path }: { path: string }) {
  return <span className="font-mono text-xs tracking-normal text-sand/72">{path}</span>;
}

function isContactPage(slug: string, locale: Locale) {
  if (locale === 'fr') {
    return slug === 'contact';
  }

  return slug === 'contact' || slug === 'about/contact';
}

function shouldShowRdcPromo(entry: ContentEntry) {
  return entry.type === 'page' && (entry.slug === 'projects' || entry.slug === 'get-involved');
}
