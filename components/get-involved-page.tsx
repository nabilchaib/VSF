import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { DONATE_URL, SOCIAL_LINKS, getMediaUrl, type Locale } from '@/lib/site';

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
                  <Image src={getMediaUrl(card.image)} alt={card.title} fill className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" />
                </div>
                <div className="p-6 lg:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/58">{card.eyebrow}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-ink lg:text-3xl">{card.title}</h2>
                  <p className="mt-4 text-base leading-8 text-ink/72">{card.body}</p>
                  <Button href={card.href} external={card.external} target={card.external ? '_blank' : undefined} rel={card.external ? 'noreferrer' : undefined} variant={card.variant} className="mt-6">
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.shareEyebrow}</p>
            <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold text-ink sm:text-4xl">{t.shareTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink/72">{t.shareBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {t.socials.map((social) => (
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
    title: 'Get involved',
    subtitle:
      'Choose how you want to contribute, from proposing a project to supporting field action or helping practical solutions spread.',
    cards: [
      {
        eyebrow: 'Propose a project',
        title: 'Bring a local need or idea to the conversation.',
        body: 'If your community needs stronger resilience against climate pressure, propose an initiative and explore how the Vetiver System can support long-term impact.',
        cta: 'Propose a project',
        href: '/about/contact',
        external: false,
        variant: 'secondary' as const,
        image: '2026/02/Gemini_Generated_Image_7fcdjg7fcdjg7fcd-scaled.webp'
      },
      {
        eyebrow: 'Support field action',
        title: 'Help fund implementation and local partners.',
        body: 'By donating to Vetiver Without Borders, you help fund projects, support local teams, and sustain credible ecological work on the ground.',
        cta: 'Donate',
        href: DONATE_URL,
        external: true,
        variant: 'primary' as const,
        image: '2026/02/Gemini_Generated_Image_xgk3a6xgk3a6xgk3-scaled.webp'
      },
      {
        eyebrow: 'Sponsor a project',
        title: 'Support an initiative that already resonates with you.',
        body: 'Project leaders often need targeted support to bring strong initiatives to completion. Contact us to discuss ongoing work that matches your interest.',
        cta: 'Explore projects',
        href: '/projects',
        external: false,
        variant: 'secondary' as const,
        image: '2026/02/Gemini_Generated_Image_e3g0qde3g0qde3g0-scaled.webp'
      },
      {
        eyebrow: 'Spread the word',
        title: 'Help more people discover practical climate responses.',
        body: 'Sharing our work is a practical form of support. It helps communities, partners, and donors find concrete responses to environmental challenges.',
        cta: 'Contact us',
        href: '/about/contact',
        external: false,
        variant: 'tertiary' as const,
        image: '2026/02/Gemini_Generated_Image_m5evwqm5evwqm5ev-scaled.webp'
      }
    ],
    shareEyebrow: 'Share the work',
    shareTitle: 'Stay connected and help amplify the regeneration movement.',
    shareBody:
      'Follow VSF and share our work to help more people discover field-tested responses to erosion, runoff, and climate adaptation.',
    socials: SOCIAL_LINKS
  },
  fr: {
    title: 'Participer',
    subtitle:
      'Choisissez comment contribuer, qu il s agisse de proposer un projet, soutenir le terrain ou aider des solutions concretes a se diffuser.',
    cards: [
      {
        eyebrow: 'Proposer un projet',
        title: 'Apporter un besoin local ou une idee a la discussion.',
        body: 'Si votre communaute a besoin d une meilleure resilience face au climat, proposez une initiative et voyez comment le Systeme Vetiver peut soutenir un impact durable.',
        cta: 'Proposer un projet',
        href: '/fr/contact',
        external: false,
        variant: 'secondary' as const,
        image: '2026/02/Gemini_Generated_Image_7fcdjg7fcdjg7fcd-scaled.webp'
      },
      {
        eyebrow: 'Soutenir l action',
        title: 'Aider a financer la mise en oeuvre et les partenaires locaux.',
        body: 'En faisant un don a Vetiver Sans Frontieres, vous aidez a financer les projets, soutenir les equipes locales et maintenir un travail ecologique credible.',
        cta: 'Faire un don',
        href: DONATE_URL,
        external: true,
        variant: 'primary' as const,
        image: '2026/02/Gemini_Generated_Image_xgk3a6xgk3a6xgk3-scaled.webp'
      },
      {
        eyebrow: 'Parrainer un projet',
        title: 'Soutenir directement une initiative qui vous parle.',
        body: 'Les porteurs de projet ont souvent besoin d un soutien cible pour faire aboutir leur travail. Contactez-nous pour parler des projets en cours.',
        cta: 'Voir les projets',
        href: '/fr/projects',
        external: false,
        variant: 'secondary' as const,
        image: '2026/02/Gemini_Generated_Image_e3g0qde3g0qde3g0-scaled.webp'
      },
      {
        eyebrow: 'Faire circuler',
        title: 'Aider davantage de personnes a decouvrir des reponses pratiques.',
        body: 'Partager notre travail est deja une forme d action. Cela aide les communautes, partenaires et donateurs a trouver des reponses concretes.',
        cta: 'Nous contacter',
        href: '/fr/contact',
        external: false,
        variant: 'tertiary' as const,
        image: '2026/02/Gemini_Generated_Image_m5evwqm5evwqm5ev-scaled.webp'
      }
    ],
    shareEyebrow: 'Diffuser le travail',
    shareTitle: 'Restez connectes et amplifiez le mouvement de regeneration.',
    shareBody:
      'Suivez VSF et partagez notre travail pour aider davantage de personnes a decouvrir des reponses de terrain contre l erosion, le ruissellement et le stress climatique.',
    socials: SOCIAL_LINKS
  }
} as const;
