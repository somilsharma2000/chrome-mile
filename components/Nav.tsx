import { waGeneral } from "@/lib/zones";
import { MessageCircle } from "lucide-react";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-night-line bg-night font-sans text-sm font-extrabold text-accent">
            12
          </span>
          <span className="font-display text-xl tracking-widest2 text-bone">
            THE <span className="text-accent">TWELVE</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-bone-muted md:flex">
          <a href="#zones" className="transition-colors hover:text-bone">
            The 12 lots
          </a>
          <a href="#how" className="transition-colors hover:text-bone">
            How it works
          </a>
          <a href="#kit" className="transition-colors hover:text-bone">
            What winners get
          </a>
          <a href="#faq" className="transition-colors hover:text-bone">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-sm border border-night-line px-2.5 py-1 text-xs text-bone-muted sm:block">
            Closes 26 Jan 2027
          </span>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle size={15} aria-hidden />
              Bid now
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
