import { FormEmbed } from '@/components/form-embed';
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
      />
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="rounded-[2rem] bg-white/82 p-8 shadow-soft">
          <h2 className="text-3xl font-bold text-bark">{t.contactUs}</h2>
          <ul className="mt-6 space-y-4 text-lg leading-8 text-ink/80">
            <li><a href="mailto:info@vetiversansfrontieres.org" className="hover:text-bark">info@vetiversansfrontieres.org</a></li>
            <li>599 4e rue Quebec, Qc, Canada</li>
            <li><a href="tel:+14186091924" className="hover:text-bark">+1 418 609 1924</a></li>
          </ul>
          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-bark/10">
            <iframe
              title="VSF map"
              src="https://maps.google.com/maps?q=599%204e%20rue%20Qu%C3%A9bec%2C%20Qc%2C%20Canada&t=m&z=14&output=embed&iwloc=near"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
        <div className="rounded-[2rem] bg-white/82 p-8 shadow-soft">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-bark">{t.formTitle}</h2>
            <p className="mt-3 text-lg leading-8 text-ink/78">{t.formBody}</p>
          </div>
          <FormEmbed kind="contact" />
        </div>
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
