const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";

const waLink = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

export { waLink };

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-night-line bg-night font-sans text-sm font-extrabold text-accent">
            12
          </span>
          <span className="font-display text-xl tracking-widest2 text-bone">
            CONTINENTAL <span className="text-accent">12</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-bone-muted md:flex">
          <a href="#kits" className="transition-colors hover:text-bone">
            Kits
          </a>
          <a href="#heritage" className="transition-colors hover:text-bone">
            Heritage
          </a>
          <a href="#included" className="transition-colors hover:text-bone">
            What&apos;s included
          </a>
          <a href="#faq" className="transition-colors hover:text-bone">
            FAQ
          </a>
        </div>

        <a
          href={waLink("Hi! I'd like to order a Continental 12 decal kit.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Order on WhatsApp
        </a>
      </nav>
    </header>
  );
}
