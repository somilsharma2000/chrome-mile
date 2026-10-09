import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl tracking-wide chrome-text sm:text-6xl">
            TWELVE LOTS. ONE MACHINE. <span className="text-accent">BID.</span>
          </h2>
          <p className="mt-4 max-w-lg text-bone-muted">
            One brand per lot, twelve lots only, one Republic Day deadline.
            The first bid on each lot sets the floor — and the full sponsor
            pack is published in the documents section.
          </p>
          <a
            href="#docs"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Open the sponsor pack
          </a>
        </Reveal>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-bone-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Chrome Mile. All rights reserved.</p>
          <a
            href="https://github.com/somilsharma2000/chrome-mile/blob/main/docs/PITCH-KIT.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bone"
          >
            Documents & terms
          </a>
          <p className="max-w-md">
            Independent campaign. Not affiliated with Royal Enfield or Eicher
            Motors. All bids are offers subject to written confirmation.
          </p>
        </div>
      </div>
    </footer>
  );
}
