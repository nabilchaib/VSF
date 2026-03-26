import Link from 'next/link';

import { Container } from '@/components/container';

export default function NotFound() {
  return (
    <main className="bg-white/72 py-20 lg:py-24">
      <Container className="max-w-4xl">
        <div className="rounded-[2.2rem] border border-bark/10 bg-white px-7 py-10 shadow-card lg:px-10 lg:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bark/70">404</p>
          <h1 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-tight text-bark md:text-5xl">
            This page could not be found.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-ink/74">
            The requested page does not exist in the migrated site. Use the main navigation or return to the homepage.
          </p>
          <Link
            href="/"
            className="mt-7 inline-flex rounded-full bg-bark px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:bg-bark/90"
          >
            Return home
          </Link>
        </div>
      </Container>
    </main>
  );
}
