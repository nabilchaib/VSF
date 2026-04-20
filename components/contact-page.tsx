import { FormEmbed } from '@/components/form-embed';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import { TrackedAnchor } from '@/components/tracked-anchor';
import { CONTACT_EMAIL, type Locale } from '@/lib/site';

export function ContactPage({ locale }: { locale: Locale }) {
  const t = locale === 'fr' ? frCopy : enCopy;

  return (
    <div>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        image="2022/11/clouds-cloud-bank-high-fog-4979558.jpg"
        align="left"
      />
      <section className="bg-white/72 py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="overflow-hidden rounded-[2.2rem] border border-bark/10 bg-[#eef1e4] shadow-card">
              <div className="border-b border-bark/8 px-7 py-7 lg:px-8">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink">{t.contactUs}</h2>
                <ul className="mt-6 space-y-4 text-base leading-8 text-ink/76">
                  <li>
                    <TrackedAnchor href={`mailto:${CONTACT_EMAIL}`} className="hover:text-bark">
                      {CONTACT_EMAIL}
                    </TrackedAnchor>
                  </li>
                  <li>599 4e rue Quebec, Qc, Canada</li>
                  <li>
                    <TrackedAnchor href="tel:+14186091924" className="hover:text-bark">
                      +1 418 609 1924
                    </TrackedAnchor>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden">
                <iframe
                  title="VSF map"
                  src="https://maps.google.com/maps?q=599%204e%20rue%20Qu%C3%A9bec%2C%20Qc%2C%20Canada&t=m&z=14&output=embed&iwloc=near"
                  className="h-[320px] w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-bark/10 bg-white p-7 shadow-card lg:p-8">
              <div className="mb-6 max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink">{t.formTitle}</h2>
                <p className="mt-3 text-base leading-8 text-ink/72">{t.formBody}</p>
              </div>
              <FormEmbed kind="contact" locale={locale} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

const enCopy = {
  title: 'Contact VSF',
  subtitle: 'Start here for vetiver questions, project proposals, partnerships, donations, media requests, or general questions.',
  contactUs: 'Contact details',
  formTitle: 'Write us today',
  formBody: 'Use the hosted contact form if it is available. If not, email or phone still works. Tell us what you are trying to solve and we will route it to the right person.'
};

const frCopy = {
  title: 'Contact VSF',
  subtitle: 'Commencez ici pour une question sur le vetiver, un projet, un partenariat, un don, une demande media ou une question generale.',
  contactUs: 'Coordonnees',
  formTitle: 'Ecrivez-nous',
  formBody: "Utilisez le formulaire heberge s'il est disponible. Sinon, le courriel ou le telephone fonctionne toujours. Dites-nous ce que vous cherchez a resoudre et nous orienterons la demande."
};
