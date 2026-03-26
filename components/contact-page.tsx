import { FormEmbed } from '@/components/form-embed';
import { Container } from '@/components/container';
import { PageHero } from '@/components/page-hero';
import type { Locale } from '@/lib/site';

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
                    <a href="mailto:info@vetiversansfrontieres.org" className="hover:text-bark">
                      info@vetiversansfrontieres.org
                    </a>
                  </li>
                  <li>599 4e rue Quebec, Qc, Canada</li>
                  <li>
                    <a href="tel:+14186091924" className="hover:text-bark">
                      +1 418 609 1924
                    </a>
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
  title: 'Contact',
  subtitle: 'Support a project, propose a collaboration, or start a conversation with Vetiver Without Borders.',
  contactUs: 'Contact Us',
  formTitle: 'Write us today',
  formBody: 'Use the hosted contact form configured for the new stack, or reach out directly by email or phone.'
};

const frCopy = {
  title: 'Contact',
  subtitle: 'Soutenez un projet, proposez une collaboration ou commencez une conversation avec Vetiver Sans Frontieres.',
  contactUs: 'Contactez-nous',
  formTitle: 'Ecrivez-nous',
  formBody: 'Utilisez le formulaire heberge configure pour la nouvelle plateforme, ou contactez-nous directement par email ou telephone.'
};
