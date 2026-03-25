import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-start justify-center gap-5 px-6 py-20 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bark/70">404</p>
      <h1 className="text-4xl font-semibold text-bark md:text-5xl">This page could not be found.</h1>
      <p className="max-w-2xl text-lg leading-8 text-ink/75">
        The requested page does not exist in the migrated site. Use the main navigation or return to the homepage.
      </p>
      <Link
        href="/"
        className="rounded-full bg-bark px-5 py-3 text-sm font-semibold text-white hover:bg-bark/90"
      >
        Return home
      </Link>
    </main>
  );
}
