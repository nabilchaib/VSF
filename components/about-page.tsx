import Image from 'next/image';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { getMediaUrl, localePath, type Locale } from '@/lib/site';

export function AboutPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div>
      <PageHero title={t.title} subtitle={t.subtitle} image="2022/10/IMG-20220616-WA0000-1024x768.jpg" align="left" />

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="rounded-[2.2rem] border border-bark/10 bg-white p-7 shadow-card lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.introEyebrow}</p>
              <h2 className="mt-3 max-w-[13ch] text-3xl font-semibold text-ink sm:text-4xl">{t.introTitle}</h2>
              <p className="mt-5 text-base leading-8 text-ink/72">{t.introBodyOne}</p>
              <p className="mt-4 text-base leading-8 text-ink/72">{t.introBodyTwo}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {t.whatMatters.map((item) => (
                  <div key={item.title} className="rounded-[1.4rem] border border-bark/8 bg-surface/38 p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/58">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/70">{item.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={localePath('/vetiver', locale)} variant="secondary">
                  {t.learnCta}
                </Button>
                <Button href={localePath('/projects', locale)} variant="tertiary" className="text-sm tracking-[0.16em]">
                  {t.projectsCta}
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[2.2rem] border border-bark/10 bg-[#f2ecdf] p-3 shadow-card">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={getMediaUrl('2022/10/DSCF0117.jpeg')}
                    alt={t.imageAltOne}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                </div>
              </div>
              <div className="rounded-[2.2rem] border border-bark/10 bg-[#f5efe3] p-6 shadow-card lg:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.focusEyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t.focusTitle}</h2>
                <p className="mt-4 text-base leading-8 text-ink/72">{t.focusBody}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f3ede2] py-14 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.workEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t.workTitle}</h2>
            <p className="mt-4 text-base leading-8 text-ink/72">{t.workBody}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {t.workSteps.map((step) => (
              <div key={step.title} className="rounded-[1.8rem] border border-bark/10 bg-white p-6 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/58">{step.index}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="rounded-[2.1rem] border border-bark/10 bg-white px-6 py-6 shadow-card lg:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/58">{t.evidenceEyebrow}</p>
              <div className="mt-4 space-y-4">
                {t.evidence.map((item) => (
                  <div key={item.title} className="rounded-[1.3rem] border border-bark/8 bg-surface/38 p-4">
                    <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/70">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.1rem] border border-bark/10 bg-white px-6 py-6 shadow-card lg:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/58">{t.overviewEyebrow}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {t.overviewTags.map((goal) => (
                  <span key={goal} className="rounded-full border border-bark/10 bg-surface/55 px-4 py-2 text-sm text-ink/70">
                    {goal}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-ink/72">{t.overviewBody}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-bark/10 bg-[#eef1e4] p-3 shadow-card">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] sm:aspect-[16/11] lg:aspect-[4/5]">
                <Image
                  src={getMediaUrl('2022/11/ivan-bandura-Oei00n8F5JQ-unsplash-scaled.jpg')}
                  alt={t.imageAltTwo}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-[2.2rem] border border-bark/10 bg-bark px-7 py-8 text-white shadow-soft lg:px-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface/76">{t.ctaEyebrow}</p>
              <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold sm:text-4xl">{t.ctaTitle}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">{t.ctaBody}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={localePath('/projects', locale)} variant="secondary" className="border-white/16 bg-white/10 text-white hover:border-white/26 hover:bg-white/16">
                  {t.projectsCta}
                </Button>
                <Button href={localePath('/get-involved', locale)} variant="secondary" className="border-white/16 bg-white/10 text-white hover:border-white/26 hover:bg-white/16">
                  {t.involvedCta}
                </Button>
                <Button href={localePath('/about/contact', locale)} variant="secondary" className="border-white/16 bg-white/10 text-white hover:border-white/26 hover:bg-white/16">
                  {t.contactCta}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

const copy = {
  en: {
    title: 'About VSF',
    subtitle:
      'Why vetiver matters, why VSF exists, what the work looks like, and why partners can trust it.',
    introEyebrow: 'Why VSF exists',
    introTitle: 'Vetiver first, then the organization.',
    introBodyOne:
      'Vetiver Without Borders exists to make vetiver usable where land, water, and soil need practical protection. The point is not the plant alone; it is the field result that follows when people understand it, test it locally, and keep using it.',
    introBodyTwo:
      'VSF helps communities and partners move from first questions to field-ready action through plain-language education, site-specific guidance, project support, and public project pages.',
    whatMatters: [
      {
        title: 'Why it matters',
        body: 'Vetiver is a living tool for soil, water, slopes, and fragile ground. It is useful because it is practical, not because it is abstract.'
      },
      {
        title: 'Local ownership',
        body: 'The work only lasts when local people understand the method, see results on site, and can continue it themselves.'
      }
    ],
    learnCta: 'Learn vetiver',
    projectsCta: 'See projects',
    focusEyebrow: 'Why VSF exists',
    focusTitle: 'Where the work starts.',
    focusBody:
      'VSF sits between vetiver knowledge and the field. We help people choose the right site, explain the method clearly, and keep the work visible enough for others to trust it.',
    workEyebrow: 'What VSF does',
    workTitle: 'What VSF actually helps with.',
    workBody:
      'If you are a donor or partner, this is the part of the work your support makes possible.',
    workSteps: [
      {
        index: '01',
        title: 'Explain',
        body: 'Start with clear vetiver education so communities, donors, and partners know what the method is for.'
      },
      {
        index: '02',
        title: 'Assess',
        body: 'Read the site first so recommendations fit the terrain, the problem, and the people who will maintain the work.'
      },
      {
        index: '03',
        title: 'Support',
        body: 'Help projects move from idea to implementation with technical guidance, partner coordination, and follow-through.'
      },
      {
        index: '04',
        title: 'Share',
        body: 'Keep public project pages and updates in view so people can see what is happening and what support helps maintain.'
      }
    ],
    evidenceEyebrow: 'Why people can trust VSF',
    evidence: [
      {
        title: 'Site conditions first',
        body: 'Recommendations are shaped by the terrain, the problem, and the people who will maintain the work.'
      },
      {
        title: 'Open about the work',
        body: 'Projects, proposals, and support routes stay visible so donors and partners can see where VSF is active.'
      },
      {
        title: 'Built for local ownership',
        body: 'The goal is not dependency. It is local use, local understanding, and enough support for the work to continue.'
      }
    ],
    overviewEyebrow: 'Where the work applies',
    overviewTags: ['Soil', 'Water', 'Slopes', 'Fields', 'Roads'],
    overviewBody:
      'Vetiver work makes the most sense when it stays close to the ground: local conditions, local judgment, and local follow-through.',
    imageAltOne: 'VSF team and community members in a field setting.',
    imageAltTwo: 'People gathering outdoors to support regenerative environmental work.',
    ctaEyebrow: 'Join the work',
    ctaTitle: 'Choose the next step that fits you.',
    ctaBody:
      'Review current projects, get involved, or contact VSF if you want to talk through a site, partnership, or idea.',
    involvedCta: 'Get involved',
    contactCta: 'Contact VSF'
  },
  fr: {
    title: 'A propos de VSF',
    subtitle:
      'Pourquoi le vetiver compte, pourquoi VSF existe, ce que nous faisons concretement et pourquoi des partenaires peuvent faire confiance au travail.',
    introEyebrow: 'Pourquoi VSF existe',
    introTitle: 'Le vetiver avant l organisation.',
    introBodyOne:
      'Vetiver Sans Frontieres existe pour rendre le vetiver utile la ou les sols, l eau et les terres ont besoin d une protection pratique. L enjeu n est pas seulement la plante : c est le resultat de terrain qui suit quand les gens comprennent la methode, l essaient localement et continuent a l utiliser.',
    introBodyTwo:
      'VSF aide les communautes et les partenaires a passer des premieres questions a une action prete pour le terrain grace a une formation simple, des conseils adaptes au site, un soutien de projet et des pages de projet publiques.',
    whatMatters: [
      {
        title: 'Pourquoi c est utile',
        body: 'Le vetiver est un outil vivant pour les sols, l eau, les pentes et les terrains fragiles. Il est utile parce qu il est pratique, pas parce qu il est abstrait.'
      },
      {
        title: 'Appropriation locale',
        body: 'Le travail ne dure que si les personnes locales comprennent la methode, voient les resultats sur le site et peuvent la poursuivre elles-memes.'
      }
    ],
    learnCta: 'Decouvrir le vetiver',
    projectsCta: 'Voir les projets',
    focusEyebrow: 'Pourquoi VSF existe',
    focusTitle: 'La ou le travail commence.',
    focusBody:
      'VSF se place entre le savoir sur le vetiver et le terrain. Nous aidons a choisir le bon site, a expliquer la methode clairement et a garder le travail assez visible pour inspirer confiance.',
    workEyebrow: 'Ce que VSF fait',
    workTitle: 'Ce que VSF aide vraiment a faire.',
    workBody:
      'Si vous soutenez VSF, voici ce que ce soutien rend possible sur le terrain.',
    workSteps: [
      {
        index: '01',
        title: 'Expliquer',
        body: 'Commencer par une formation claire sur le vetiver pour que les communautes, donateurs et partenaires sachent a quoi sert la methode.'
      },
      {
        index: '02',
        title: 'Evaluer',
        body: 'Lire le site avant tout pour que les recommandations correspondent au terrain, au probleme et aux personnes qui maintiendront le travail.'
      },
      {
        index: '03',
        title: 'Soutenir',
        body: 'Aider les projets a passer de l idee a la mise en oeuvre avec des conseils techniques, la coordination des partenaires et le suivi.'
      },
      {
        index: '04',
        title: 'Partager',
        body: 'Garder les pages de projet publiques et les mises a jour en vue pour montrer ce qui avance et ce que le soutien permet.'
      }
    ],
    evidenceEyebrow: 'Pourquoi faire confiance a VSF',
    evidence: [
      {
        title: 'Les conditions du site d abord',
        body: 'Les recommandations suivent le terrain, le probleme et les personnes qui vont entretenir le travail.'
      },
      {
        title: 'Travail ouvert',
        body: 'Les projets, les propositions et les voies de soutien restent visibles pour que donateurs et partenaires voient ou VSF agit.'
      },
      {
        title: 'Pour une appropriation locale',
        body: 'L objectif n est pas de creer une dependance. C est de permettre un usage local, une comprehension locale et assez de soutien pour continuer.'
      }
    ],
    overviewEyebrow: 'Ou le travail s applique',
    overviewTags: ['Sols', 'Eau', 'Pentes', 'Champs', 'Routes'],
    overviewBody:
      'Le travail sur le vetiver a le plus de sens quand il reste proche du terrain : conditions locales, jugement local et suivi local.',
    imageAltOne: 'Equipe VSF et membres de la communaute sur le terrain.',
    imageAltTwo: 'Personnes rassemblees a l exterieur autour d un travail de regeneration.',
    ctaEyebrow: 'Rejoindre le travail',
    ctaTitle: 'Choisissez la prochaine etape qui vous correspond.',
    ctaBody:
      'Consultez les projets en cours, choisissez comment participer ou contactez VSF pour parler d un site, d un partenariat ou d une idee de projet.',
    involvedCta: 'Participer',
    contactCta: 'Contacter VSF'
  }
} as const;
