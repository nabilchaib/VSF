import { transformLegacyHtml } from '@/lib/html';
import type { Locale } from '@/lib/site';

export function HtmlContent({ html, locale }: { html?: string; locale: Locale }) {
  const transformed = transformLegacyHtml(html, locale);

  return (
    <div
      className="prose prose-lg max-w-none prose-p:text-[15px] prose-p:leading-8 prose-p:text-ink/74 prose-headings:mt-12 prose-headings:font-semibold prose-headings:tracking-[-0.04em] prose-headings:text-ink prose-h2:text-[clamp(1.8rem,3vw,2.5rem)] prose-h3:text-2xl prose-a:text-bark prose-a:no-underline prose-a:decoration-bark/30 prose-a:underline-offset-4 hover:prose-a:text-moss prose-a:underline prose-img:rounded-[2rem] prose-img:border prose-img:border-bark/8 prose-img:shadow-card prose-hr:border-bark/8 prose-li:marker:text-clay prose-strong:text-bark prose-ul:space-y-2 prose-ol:space-y-2 prose-blockquote:border-l-bark/20 prose-blockquote:text-ink/70"
      dangerouslySetInnerHTML={{ __html: transformed }}
    />
  );
}
