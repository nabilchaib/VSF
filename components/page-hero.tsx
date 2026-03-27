import type { ReactNode } from 'react';
import Image from 'next/image';

import { Container } from '@/components/container';
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
  const isCentered = align === 'center';

  return (
    <section className="relative isolate overflow-hidden">
      {image ? (
        <Image
          src={getMediaUrl(image)}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1280px) 1280px, 100vw"
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,34,25,0.74),rgba(17,34,25,0.6))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,217,180,0.22),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-16 bg-brand-band opacity-80" />
      <Container className="relative flex min-h-[320px] flex-col justify-center py-20 lg:min-h-[420px] lg:py-24">
        <div
          className={`space-y-5 ${isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-[760px] text-left'}`}
        >
          {eyebrow ? (
            <p
              className={`inline-flex rounded-full border border-white/14 bg-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/86 backdrop-blur ${
                isCentered ? 'mx-auto' : ''
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-[14ch] text-[clamp(2.8rem,5vw,4.8rem)] font-bold leading-[0.97] tracking-[-0.055em] text-white">
            {title}
          </h1>
          {subtitle ? (
            <p
              className={`text-base leading-8 text-white/82 lg:text-lg ${
                isCentered ? 'mx-auto max-w-2xl' : 'max-w-[620px]'
              }`}
            >
              {subtitle}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}

export function getHeroImageForEntry(slug: string, locale: Locale) {
  const normalized = slug.replace(/^fr\//, '');

  const map: Record<string, string> = {
    '': '2022/10/macro-photo-of-wet-green-grass-and-water-droplets-768x512.jpg',
    'about': '2022/10/IMG-20220616-WA0000-1024x768.jpg',
    'about/services': '2022/10/DSCF0117.jpeg',
    'about/contact': '2022/11/clouds-cloud-bank-high-fog-4979558.jpg',
    'contact': '2022/11/clouds-cloud-bank-high-fog-4979558.jpg',
    'about/vetiver-system': '2022/10/vs-use-07-b.jpeg',
    'about/vetiver-system/how-to-plant-vetiver-system': '2022/10/vs-use-07-b.jpeg',
    'projects': '2022/10/vlcsnap-2022-10-21-14h15m27s059-scaled.jpg',
    'get-involved': '2026/02/Gemini_Generated_Image_7fcdjg7fcdjg7fcd-scaled.webp',
    'vetiver': '2024/10/DALL·E-2024-10-01-14.24.48-A-small-rural-community-involved-in-planting-and-harvesting-Vetiver-grass.-Local-farmers-are-working-in-the-fields-cutting-and-bundling-the-grass.-Th.webp',
    'about/faq': '2022/10/DSCF0117.jpeg',
    'services': '2022/10/DSCF0117.jpeg'
  };

  return map[normalized] || (locale === 'fr' ? '2022/10/IMG-20220616-WA0000-1024x768.jpg' : '2022/10/IMG-20220616-WA0000-1024x768.jpg');
}
