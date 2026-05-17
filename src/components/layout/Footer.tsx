import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/config";
import { navLinks } from "@/lib/nav-links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Colonne 1 — Identité */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-accent font-display text-white text-xl leading-none select-none">
                JC
              </div>
              <div>
                <span className="font-display text-white text-xl tracking-wide uppercase leading-none">
                  {siteConfig.shortName}
                </span>
                <span className="block text-neutral-400 text-xs tracking-widest uppercase">
                  Province de Namur
                </span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h3 className="font-display text-lg uppercase tracking-wide text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-neutral-400 text-sm hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <h3 className="font-display text-lg uppercase tracking-wide text-white mb-4">
              Nous trouver
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="shrink-0 text-accent" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-neutral-400 hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="shrink-0 text-accent" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-neutral-400 hover:text-accent transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez-nous sur Facebook (nouvel onglet)"
                  className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-accent transition-colors mt-1"
                >
                  {/* Facebook icon SVG — lucide-react v1+ l'a retiré */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de bas de page */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>
            &copy; {currentYear} {siteConfig.name}. Tous droits réservés.{" "}
            <Link
              href="/confidentialite"
              className="underline hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              Politique de confidentialité
            </Link>
          </p>
          <p>
            Site réalisé par{" "}
            <span className="text-neutral-400 font-semibold">Start&apos;OnLab</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
