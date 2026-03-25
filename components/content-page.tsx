import type { MDXComponents } from 'mdx/types';
import { compileMDX } from 'next-mdx-remote/rsc';

import { ContactPage } from '@/components/contact-page';
import { FormEmbed } from '@/components/form-embed';
import { HomePage } from '@/components/home-page';
import { HtmlContent } from '@/components/html-content';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { PageHero, getHeroImageForEntry } from '@/components/page-hero';
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
      >
        {isPost ? (
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-sand/80">
            <span>{formatDate(entry.publishedAt, locale)}</span>
            <span aria-hidden="true">/</span>
            <LinkHint path={getEntryPath(entry)} />
          </div>
        ) : null}
      </PageHero>

      <article className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 lg:px-10 lg:py-16">
        <section className="rounded-[2.5rem] border border-bark/10 bg-white/84 px-7 py-8 shadow-soft lg:px-12 lg:py-12">
          {content}
        </section>
      </article>
    </>
  );
}

function LinkHint({ path }: { path: string }) {
  return <span>{path}</span>;
}

function isContactPage(slug: string, locale: Locale) {
  if (locale === 'fr') {
    return slug === 'contact';
  }

  return slug === 'contact' || slug === 'about/contact';
}
