import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { DONATE_URL, SOCIAL_LINKS, getMediaUrl, localePath, type Locale } from '@/lib/site';

type ActionLink = {
  label: string;
  href: string;
  external?: boolean;
  variant: 'primary' | 'secondary' | 'tertiary';
};

export function GetInvolvedPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div>
      <PageHero title={t.title} subtitle={t.subtitle} image="2026/02/Gemini_Generated_Image_7fcdjg7fcdjg7fcd-scaled.webp" align="left" />

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {t.cards.map((card) => (
              <div key={card.title} className="overflow-hidden rounded-[2.1rem] border border-bark/10 bg-white shadow-card">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={getMediaUrl(card.image)}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                </div>
                <div className="p-6 lg:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/58">{card.eyebrow}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-ink lg:text-3xl">{card.title}</h2>
                  <p className="mt-4 text-base leading-8 text-ink/72">{card.body}</p>
                  <Button
                    href={card.external ? card.href : localePath(card.href, locale)}
                    external={card.external}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noreferrer' : undefined}
                    variant={card.variant}
                    className="mt-6"
                  >
                    {card.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f3ede2] py-14 lg:py-20">
        <Container>
          <div className="rounded-[2.2rem] border border-bark/10 bg-white px-7 py-8 shadow-card lg:px-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.nextEyebrow}</p>
            <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold text-ink sm:text-4xl">{t.nextTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink/72">{t.nextBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {t.nextLinks.map((link) => (
                <Button
                  key={link.label}
                  href={link.external ? link.href : localePath(link.href, locale)}
                  external={link.external}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  variant={link.variant}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="rounded-[2.2rem] border border-bark/10 bg-white px-7 py-8 shadow-card lg:px-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.followEyebrow}</p>
            <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold text-ink sm:text-4xl">{t.followTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink/72">{t.followBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <Button key={social.label} href={social.href} external target="_blank" rel="noreferrer" variant="secondary">
                  {social.label}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

const copy = {
  en: {
    title: 'Get involved with vetiver work',
    subtitle:
      'Start with vetiver, then choose the path that fits: learn, support, partner, or propose.',
    cards: [
      {
        eyebrow: 'Learn first',
        title: 'Start with the vetiver explainer.',
        body: 'If you are new to the topic, read the plain-language overview before you decide what to do next.',
        cta: 'Learn about vetiver',
        href: '/vetiver',
        external: false,
        variant: 'secondary' as const,
        image: '2026/02/Gemini_Generated_Image_7fcdjg7fcdjg7fcd-scaled.webp'
      },
      {
        eyebrow: 'Support field work',
        title: 'Help fund projects and follow-through.',
        body: 'Your donation helps support field work, local follow-through, and the practical work behind each project.',
        cta: 'Donate',
        href: DONATE_URL,
        external: true,
        variant: 'primary' as const,
        image: '2026/02/Gemini_Generated_Image_xgk3a6xgk3a6xgk3-scaled.webp'
      },
      {
        eyebrow: 'Partner with VSF',
        title: 'Discuss a collaboration or fit check.',
        body: 'Use the contact page to talk through a project idea, a partnership, or a specific question about the work.',
        cta: 'Contact VSF',
        href: '/about/contact',
        external: false,
        variant: 'secondary' as const,
        image: '2026/02/Gemini_Generated_Image_e3g0qde3g0qde3g0-scaled.webp'
      },
      {
        eyebrow: 'Propose a project',
        title: 'Share a local need or new idea.',
        body: 'If you have a site, a problem, or a new initiative in mind, send the basics and we can look at the next step together.',
        cta: 'Propose a project',
        href: '/projects/propose',
        external: false,
        variant: 'secondary' as const,
        image: '2026/02/Gemini_Generated_Image_m5evwqm5evwqm5ev-scaled.webp'
      }
    ],
    nextEyebrow: 'Need help choosing?',
    nextTitle: 'Start with vetiver, then decide what fits.',
    nextBody:
      'If you are not sure where to begin, the vetiver explainer is the best first step. You can also contact VSF to talk through the right next move.',
    nextLinks: [
      {
        label: 'Learn about vetiver',
        href: '/vetiver',
        external: false,
        variant: 'secondary' as const
      },
      {
        label: 'Contact VSF',
        href: '/about/contact',
        external: false,
        variant: 'primary' as const
      },
      {
        label: 'Browse projects',
        href: '/projects',
        external: false,
        variant: 'tertiary' as const
      }
    ] satisfies ActionLink[],
    followEyebrow: 'Stay connected',
    followTitle: 'Follow the work if you are not ready for direct action.',
    followBody:
      'Sharing and following are useful low-friction ways to stay close to the work and help more people discover it.'
  },
  fr: {
    title: 'Participer au travail sur le vetiver',
    subtitle:
      'Commencez par le vetiver, puis choisissez la voie qui convient : apprendre, soutenir, collaborer ou proposer.',
    cards: [
      {
        eyebrow: 'Apprendre d abord',
        title: 'Commencez par le guide vetiver.',
        body: 'Si vous decouvrez le sujet, lisez le guide simple avant de choisir la suite.',
        cta: 'Decouvrir le vetiver',
        href: '/vetiver',
        external: false,
        variant: 'secondary' as const,
        image: '2026/02/Gemini_Generated_Image_7fcdjg7fcdjg7fcd-scaled.webp'
      },
      {
        eyebrow: 'Soutenir le terrain',
        title: 'Aider a financer les projets et le suivi.',
        body: 'Votre don aide a soutenir le travail de terrain, le suivi local et l appui pratique autour de chaque projet.',
        cta: 'Faire un don',
        href: DONATE_URL,
        external: true,
        variant: 'primary' as const,
        image: '2026/02/Gemini_Generated_Image_xgk3a6xgk3a6xgk3-scaled.webp'
      },
      {
        eyebrow: 'Collaborer avec VSF',
        title: 'Discuter d un partenariat ou d une adequation.',
        body: 'Utilisez la page contact pour parler d un projet, d un partenariat ou d une question precise sur le travail.',
        cta: 'Contacter VSF',
        href: '/about/contact',
        external: false,
        variant: 'secondary' as const,
        image: '2026/02/Gemini_Generated_Image_e3g0qde3g0qde3g0-scaled.webp'
      },
      {
        eyebrow: 'Proposer un projet',
        title: 'Partager un besoin local ou une nouvelle idee.',
        body: 'Si vous avez un site, un probleme ou une initiative en tete, envoyez les bases et nous pouvons voir la suite ensemble.',
        cta: 'Proposer un projet',
        href: '/projects/propose',
        external: false,
        variant: 'secondary' as const,
        image: '2026/02/Gemini_Generated_Image_m5evwqm5evwqm5ev-scaled.webp'
      }
    ],
    nextEyebrow: 'Besoin d aide pour choisir ?',
    nextTitle: 'Commencez par le vetiver, puis decidez de la suite.',
    nextBody:
      'Si vous ne savez pas par ou commencer, le guide vetiver est le meilleur point de depart. Vous pouvez aussi contacter VSF pour parler de la prochaine etape.',
    nextLinks: [
      {
        label: 'Decouvrir le vetiver',
        href: '/vetiver',
        external: false,
        variant: 'secondary' as const
      },
      {
        label: 'Contacter VSF',
        href: '/about/contact',
        external: false,
        variant: 'primary' as const
      },
      {
        label: 'Parcourir les projets',
        href: '/projects',
        external: false,
        variant: 'tertiary' as const
      }
    ] satisfies ActionLink[],
    followEyebrow: 'Rester connecte',
    followTitle: 'Suivez le travail si vous n etes pas pret pour une action directe.',
    followBody:
      'Partager et suivre restent des façons simples de rester proche du travail et d aider davantage de personnes a le decouvrir.'
  }
} as const;
