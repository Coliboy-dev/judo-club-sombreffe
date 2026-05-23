import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/config";
import { navLinks } from "@/lib/nav-links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto" style={{ background: "var(--color-primary-dark)" }}>
      {/* Liseré sable en haut */}
      <div className="h-1" style={{ background: "var(--color-sand)" }} aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Colonne 1 — Identité */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center justify-center w-10 h-10 font-display text-white text-lg leading-none select-none shrink-0"
                style={{ background: "var(--color-accent)" }}
              >
                JC
              </div>
              <div>
                <span className="font-display text-white text-xl tracking-wide uppercase leading-none">
                  {siteConfig.shortName}
                </span>
                <span
                  className="block text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-sand)" }}
                >
                  Province de Namur
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-sand-light)", opacity: 0.7 }}>
              {siteConfig.description}
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <p
              className="font-display text-base uppercase tracking-widest mb-5"
              style={{ color: "var(--color-sand)", opacity: 0.5 }}
            >
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    style={{ color: "var(--color-sand-light)", opacity: 0.65 }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <p
              className="font-display text-base uppercase tracking-widest mb-5"
              style={{ color: "var(--color-sand)", opacity: 0.5 }}
            >
              Nous trouver
            </p>
            <ul className="space-y-3.5">
              <li
                className="flex items-start gap-3 text-sm"
                style={{ color: "var(--color-sand-light)", opacity: 0.65 }}
              >
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-sand)" }} aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={15} className="shrink-0" style={{ color: "var(--color-sand)" }} aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors"
                  style={{ color: "var(--color-sand-light)", opacity: 0.65 }}
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={15} className="shrink-0" style={{ color: "var(--color-sand)" }} aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors"
                  style={{ color: "var(--color-sand-light)", opacity: 0.65 }}
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
                  className="inline-flex items-center gap-2 text-sm transition-colors mt-1"
                  style={{ color: "var(--color-sand-light)", opacity: 0.65 }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de bas de page */}
        <div
          className="mt-14 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: "rgba(212,184,150,0.10)", color: "var(--color-sand-light)", opacity: 0.4 }}
        >
          <p>
            &copy; {currentYear} {siteConfig.name}. Tous droits réservés.{" "}
            <Link
              href="/confidentialite"
              className="underline underline-offset-2 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              Politique de confidentialité
            </Link>
          </p>
          <p>
            Site réalisé par{" "}
            <span className="font-semibold">Start&apos;OnLab</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
