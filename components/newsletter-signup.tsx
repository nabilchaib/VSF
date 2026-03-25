import { FormEmbed } from '@/components/form-embed';

export function NewsletterSignup() {
  return (
    <section className="mt-12 space-y-5 rounded-[2rem] bg-bark px-8 py-10 text-sand shadow-soft">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reed/80">Newsletter</p>
        <h2 className="text-3xl font-semibold">Stay close to the projects on the ground.</h2>
        <p className="text-sm leading-7 text-sand/80">
          Subscribe for field updates, regenerative agriculture stories, and major milestones from Vetiver Without Borders.
        </p>
      </div>
      <FormEmbed kind="newsletter" />
    </section>
  );
}
