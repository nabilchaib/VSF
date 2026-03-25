import { transformLegacyHtml } from '@/lib/html';
import type { Locale } from '@/lib/site';

export function HtmlContent({ html, locale }: { html: string; locale: Locale }) {
  const transformed = transformLegacyHtml(html, locale);

  return (
    <div
      className="prose prose-lg max-w-none prose-headings:text-bark prose-headings:font-semibold prose-a:text-bark prose-a:no-underline hover:prose-a:text-moss prose-img:rounded-[2rem] prose-img:shadow-soft prose-li:marker:text-moss prose-strong:text-bark"
      dangerouslySetInnerHTML={{ __html: transformed }}
    />
  );
}
