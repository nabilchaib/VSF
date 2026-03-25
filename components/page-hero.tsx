import type { ReactNode } from 'react';

import { getMediaUrl, type Locale } from '@/lib/site';

type HeroConfig = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  image?: string;
  align?: 'center' | 'left';
  children?: ReactNode;
};

export function PageHero({ title, eyebrow, subtitle, image, align = 'center', children }: HeroConfig) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: image ? `linear-gradient(rgba(20, 38, 28, 0.68), rgba(20, 38, 28, 0.55)), url(${getMediaUrl(image)})` : undefined
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(117,190,43,0.32),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-20 bg-brand-band opacity-85" />
      <div className="relative mx-auto flex min-h-[340px] w-full max-w-6xl flex-col justify-center px-6 py-20 lg:min-h-[460px] lg:px-10">
        <div className={`max-w-4xl space-y-5 ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
          {eyebrow ? (
            <p className="mx-auto inline-block rounded-full bg-surface/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-bark">{eyebrow}</p>
          ) : null}
          <h1 className="text-4xl font-bold uppercase tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">{title}</h1>
          {subtitle ? <p className="mx-auto max-w-3xl text-lg leading-8 text-white/88">{subtitle}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}

export function getHeroImageForEntry(slug: string, locale: Locale) {
  const normalized = slug.replace(/^fr\//, '');

  const map: Record<string, string> = {
    '': '2022/10/macro-photo-of-wet-green-grass-and-water-droplets-768x512.jpg',
    'about': '2022/10/IMG-20220616-WA0000-1024x768.jpg',
    'about/services': '2022/10/architect-plan-construction-3979490.jpg',
    'about/contact': '2022/11/clouds-cloud-bank-high-fog-4979558.jpg',
    'contact': '2022/11/clouds-cloud-bank-high-fog-4979558.jpg',
    'about/vetiver-system': '2022/10/vs-use-07-b.jpeg',
    'about/vetiver-system/how-to-plant-vetiver-system': '2022/10/vs-use-07-b.jpeg',
    'projects': '2022/10/vlcsnap-2022-10-21-14h15m27s059-scaled.jpg',
    'get-involved': '2026/02/Gemini_Generated_Image_7fcdjg7fcdjg7fcd-scaled.webp',
    'vetiver': '2024/10/DALL·E-2024-10-01-14.24.48-A-small-rural-community-involved-in-planting-and-harvesting-Vetiver-grass.-Local-farmers-are-working-in-the-fields-cutting-and-bundling-the-grass.-Th.webp',
    'about/faq': '2022/10/DSCF0117.jpeg',
    'services': '2022/10/architect-plan-construction-3979490.jpg'
  };

  return map[normalized] || (locale === 'fr' ? '2022/10/IMG-20220616-WA0000-1024x768.jpg' : '2022/10/IMG-20220616-WA0000-1024x768.jpg');
}
