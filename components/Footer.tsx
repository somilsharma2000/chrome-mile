import Reveal from "@/components/Reveal";
import { waLink } from "@/components/Nav";
import { Instagram, MessageCircle } from "lucide-react";

const IG = process.env.NEXT_PUBLIC_INSTAGRAM || "continental12";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl tracking-wide text-bone sm:text-6xl">
            READY TO MAKE IT <span className="text-accent">YOURS?</span>
          </h2>
          <p className="mt-4 max-w-lg text-bone-muted">
            Message us with your bike, your kit and your number. We cut it,
            pack it and send it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={waLink("Hi! I'd like to order a Continental 12 decal kit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <MessageCircle size={18} aria-hidden />
              Order on WhatsApp
            </a>
            <a
              href={`https://instagram.com/${IG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-night-line px-6 py-3 font-semibold text-bone transition-colors duration-150 hover:border-bone-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Instagram size={18} aria-hidden />@{IG}
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-bone-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Continental 12. All rights reserved.
          </p>
          <p>
            Continental 12 is an independent decal studio and is not affiliated
            with Royal Enfield or Eicher Motors.
          </p>
        </div>
      </div>
    </footer>
  );
}
