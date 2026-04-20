import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { DONATE_URL, localePath, type Locale } from '@/lib/site';
import { PROJECT_PATHS } from '@/lib/projects';
import { VETIVER_EXPLAINER } from '@/lib/vetiver-copy';

type QuickLink = {
  label: string;
  href: string;
  external?: boolean;
};

type IntentPoint = {
  title: string;
  body: string;
};

export function ProjectsPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const vetiver = VETIVER_EXPLAINER[locale];

  return (
    <div className="pb-16 lg:pb-20">
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        image="2022/10/vlcsnap-2022-10-21-14h15m27s059-scaled.jpg"
        align="left"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          {t.quickLinks.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              external={link.external}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              variant={link.external ? 'primary' : 'secondary'}
              size="sm"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </PageHero>

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-[2.2rem] border border-bark/10 bg-white p-7 shadow-card lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.gatewayEyebrow}</p>
              <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold text-ink sm:text-4xl">{t.gatewayTitle}</h2>
              <p className="mt-5 text-base leading-8 text-ink/72">{t.gatewayBody}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {t.gatewayLinks.map((link) => (
                  <Button
                    key={link.label}
                    href={link.href}
                    external={link.external}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    variant={link.external ? 'primary' : 'secondary'}
                    size="sm"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-ink/64">{vetiver.bodyOne}</p>
              <div className="mt-6">
                <Button href={localePath('/vetiver', locale)} variant="tertiary" className="text-sm tracking-[0.16em]">
                  {t.learnCta}
                </Button>
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-bark/10 bg-[#f4efe4] p-7 shadow-card lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.intentEyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t.intentTitle}</h2>
              <div className="mt-6 space-y-4">
                {t.intentPoints.map((point) => (
                  <div key={point.title} className="rounded-[1.4rem] border border-bark/8 bg-white/84 p-5">
                    <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/72">{point.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f3ede2] py-14 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{t.portfolioEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t.portfolioTitle}</h2>
            <p className="mt-4 text-base leading-8 text-ink/72">{t.portfolioBody}</p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {t.portfolio.map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col rounded-[2.2rem] border border-bark/10 bg-white p-7 shadow-card"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">{card.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">{card.title}</h3>
                <p className="mt-4 text-base leading-8 text-ink/72">{card.summary}</p>
                <div className="mt-6 rounded-[1.5rem] border border-bark/8 bg-surface/38 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bark/58">{card.whyLabel}</p>
                  <p className="mt-2 text-sm leading-7 text-ink/72">{card.why}</p>
                </div>
                <div className="mt-6">
                  <Button
                    href={card.href}
                    external={card.external}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noreferrer' : undefined}
                    variant={card.variant ?? 'secondary'}
                    className="w-full"
                  >
                    {card.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="rounded-[2.3rem] border border-bark/10 bg-bark px-7 py-8 text-white shadow-soft lg:px-9 lg:py-10">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface/76">{t.footerEyebrow}</p>
                <h2 className="mt-3 max-w-[16ch] text-3xl font-semibold sm:text-4xl">{t.footerTitle}</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">{t.footerBody}</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button href={localePath('/vetiver', locale)} variant="secondary" className="border-white/16 bg-white/10 text-white hover:border-white/26 hover:bg-white/16">
                  {t.learnCta}
                </Button>
                <Button href={DONATE_URL} external target="_blank" rel="noreferrer" variant="secondary" className="border-white/16 bg-white/10 text-white hover:border-white/26 hover:bg-white/16">
                  {t.supportCta}
                </Button>
                <Button href={localePath('/about/contact', locale)} variant="secondary" className="border-white/16 bg-white/10 text-white hover:border-white/26 hover:bg-white/16">
                  {t.partnerCta}
                </Button>
                <Button href={localePath('/projects/propose', locale)} variant="primary">
                  {t.proposeCta}
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
    title: 'Projects',
    subtitle:
      'See how vetiver becomes public projects, field work, and new ideas.',
    quickLinks: [
      {
        label: 'Learn',
        href: localePath('/vetiver', 'en' as Locale),
        external: false
      },
      {
        label: 'Support',
        href: DONATE_URL,
        external: true
      },
      {
        label: 'Partner',
        href: localePath('/about/contact', 'en' as Locale),
        external: false
      },
      {
        label: 'Propose',
        href: localePath('/projects/propose', 'en' as Locale),
        external: false
      }
    ] satisfies QuickLink[],
    gatewayEyebrow: 'Project gateway',
    gatewayTitle: 'Three public project paths.',
    gatewayBody:
      'RDC is the flagship evidence hub. San Rafael is an active pilot with the first planting in place. New ideas start with a simple proposal.',
    gatewayLinks: [
      {
        label: 'Open RDC hub',
        href: PROJECT_PATHS.rdc.en,
        external: false
      },
      {
        label: 'Propose a project',
        href: PROJECT_PATHS.propose.en,
        external: false
      }
    ] satisfies QuickLink[],
    intentEyebrow: 'What visitors can do',
    intentTitle: 'Choose the next step.',
    intentPoints: [
      {
        title: 'Learn',
        body: 'Start with the vetiver explainer if you are new here.'
      },
      {
        title: 'Support',
        body: 'Back field work and project follow-through through a direct donation.'
      },
      {
        title: 'Partner',
        body: 'Use the contact page to discuss collaboration or fit.'
      },
      {
        title: 'Propose',
        body: 'Send a local need or new idea for review.'
      }
    ] satisfies IntentPoint[],
    portfolioEyebrow: 'Featured projects',
    portfolioTitle: 'Three public project pages.',
    portfolioBody:
      'Each card gives a short summary, why it matters, and one clear next step.',
    portfolio: [
      {
        eyebrow: 'Flagship public evidence hub',
        title: 'RDC',
        summary:
          'The Congo Basin project hub. It gives the flagship work a public home.',
        whyLabel: 'Why it matters',
        why: 'It keeps the main story easy to find without making it the only route.',
        cta: 'Open the RDC hub',
        href: PROJECT_PATHS.rdc.en,
        external: false,
        variant: 'secondary' as const
      },
      {
        eyebrow: 'Live field project',
        title: 'San Rafael',
        summary:
          'A live vetiver site in El Juego with the first planting in place. It gives supporters a concrete project to follow.',
        whyLabel: 'Why it matters',
        why: 'It shows what the work looks like in a real site and what the next phase can build on.',
        cta: 'View San Rafael',
        href: PROJECT_PATHS.sanRafael.en,
        external: false,
        variant: 'primary' as const
      },
      {
        eyebrow: 'New project ideas',
        title: 'Propose a project',
        summary:
          'A route for new ideas, local needs, and early-stage projects.',
        whyLabel: 'Why it matters',
        why: 'It keeps first contact simple and gives new work a clear entry point.',
        cta: 'Start a proposal',
        href: PROJECT_PATHS.propose.en,
        external: false,
        variant: 'secondary' as const
      }
    ],
    footerEyebrow: 'Next steps',
    footerTitle: 'Choose the next step that fits.',
    footerBody:
      'If you are here to learn, support, partner, or propose, the next step should be clear.',
    learnCta: 'Learn about vetiver',
    supportCta: 'Donate',
    partnerCta: 'Contact VSF',
    proposeCta: 'Propose a project'
  },
  fr: {
    title: 'Projets',
    subtitle:
      'Voir comment le vétiver devient des projets publics, du travail de terrain, du soutien et de nouvelles idées.',
    quickLinks: [
      {
        label: 'Apprendre',
        href: localePath('/vetiver', 'fr' as Locale),
        external: false
      },
      {
        label: 'Soutenir',
        href: DONATE_URL,
        external: true
      },
      {
        label: 'Collaborer',
        href: localePath('/about/contact', 'fr' as Locale),
        external: false
      },
      {
        label: 'Proposer',
        href: localePath('/projects/propose', 'fr' as Locale),
        external: false
      }
    ] satisfies QuickLink[],
    gatewayEyebrow: 'Portail des projets',
    gatewayTitle: 'Voir les projets publics et la suite possible.',
    gatewayBody:
      'La RDC est le hub public de preuves phare. San Rafael est un pilote actif avec la première plantation en place. Les nouvelles idées commencent par une proposition simple.',
    gatewayLinks: [
      {
        label: 'Ouvrir le hub RDC',
        href: PROJECT_PATHS.rdc.fr,
        external: false
      },
      {
        label: 'Proposer un projet',
        href: PROJECT_PATHS.propose.fr,
        external: false
      }
    ] satisfies QuickLink[],
    intentEyebrow: 'Ce que les visiteurs peuvent faire',
    intentTitle: 'Choisir la prochaine étape.',
    intentPoints: [
      {
        title: 'Apprendre',
        body: 'Commencez par le guide vétiver si le sujet est nouveau pour vous.'
      },
      {
        title: 'Soutenir',
        body: 'Appuyez le travail de terrain et le suivi des projets par un don direct.'
      },
      {
        title: 'Collaborer',
        body: "Utilisez la page contact pour parler de collaboration ou d'adéquation."
      },
      {
        title: 'Proposer',
        body: 'Envoyez un besoin local ou une nouvelle idée pour examen.'
      }
    ] satisfies IntentPoint[],
    portfolioEyebrow: 'Projets mis en avant',
    portfolioTitle: 'Trois pages de projet publiques.',
    portfolioBody:
      'Chaque carte donne un bref résumé, explique pourquoi elle compte et indique une prochaine étape claire.',
    portfolio: [
      {
        eyebrow: 'Hub public de preuves',
        title: 'RDC',
        summary:
          'Le projet du bassin du Congo. Il donne au travail phare un lieu public.',
        whyLabel: 'Pourquoi c’est important',
        why: 'Il garde le récit principal facile à trouver sans devenir la seule entrée.',
        cta: 'Ouvrir le hub RDC',
        href: PROJECT_PATHS.rdc.fr,
        external: false,
        variant: 'secondary' as const
      },
      {
        eyebrow: 'Projet de terrain actif',
        title: 'San Rafael',
        summary:
          'Un site vétiver actif à El Juego avec la première plantation en place. Il donne aux soutiens un projet concret à suivre.',
        whyLabel: 'Pourquoi c’est important',
        why: 'Il montre ce que le travail donne dans un site réel et ce que la prochaine phase peut construire.',
        cta: 'Voir San Rafael',
        href: PROJECT_PATHS.sanRafael.fr,
        external: false,
        variant: 'primary' as const
      },
      {
        eyebrow: 'Nouvelles idees',
        title: 'Proposer un projet',
        summary:
          'Une voie pour les nouvelles idées, les besoins locaux et les projets en début de parcours.',
        whyLabel: 'Pourquoi c’est important',
        why: 'Elle garde le premier contact simple et donne aux nouveaux travaux une entrée claire.',
        cta: 'Commencer une proposition',
        href: PROJECT_PATHS.propose.fr,
        external: false,
        variant: 'secondary' as const
      }
    ],
    footerEyebrow: 'Et ensuite',
    footerTitle: 'Choisissez la prochaine étape qui convient.',
    footerBody:
      'Que vous veniez pour apprendre, soutenir, collaborer ou proposer, la prochaine étape doit être claire.',
    learnCta: 'Découvrir le vétiver',
    supportCta: 'Faire un don',
    partnerCta: 'Contacter VSF',
    proposeCta: 'Proposer un projet'
  }
} as const;
