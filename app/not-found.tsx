import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest2 text-steel">
        Off the route
      </p>
      <h1 className="mt-4 font-display text-6xl tracking-wide">
        <span className="chrome-text">404</span>
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-bone-muted">
        This road doesn&apos;t exist. The machine and all twelve lots are
        one turn back toward the main route.
      </p>
      <Link
        href="/"
        className="btn-shine mt-8 inline-flex items-center rounded-md bg-accent px-6 py-3 font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Back to Chrome Mile
      </Link>
    </section>
  );
}
