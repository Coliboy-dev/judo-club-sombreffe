import Link from "next/link";
import { siteConfig } from "@/data/config";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-primary"
      aria-label="Présentation du club"
    >
      {/* Fond chaud — dégradé subtil de la gauche */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 15% 60%, rgba(212,184,150,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Ligne verticale sable — identité chaleur */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: "var(--color-sand)" }}
        aria-hidden="true"
      />

      {/* Cercle décoratif droit — motif judo */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border"
        style={{ borderColor: "rgba(212,184,150,0.10)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-48 top-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border"
        style={{ borderColor: "rgba(212,184,150,0.05)" }}
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="animate-fade-in-left inline-flex items-center gap-3 mb-8 text-xs font-bold uppercase tracking-[0.16em]"
            style={{ color: "var(--color-sand)" }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ background: "var(--color-sand)" }}
              aria-hidden="true"
            />
            Province de Namur — Belgique
          </p>

          {/* Titre héro */}
          <h1 className="font-display uppercase text-white leading-none">
            <span className="block text-6xl sm:text-8xl lg:text-[108px] tracking-wide animate-fade-in stagger-1">
              Judo
            </span>
            <span className="block text-6xl sm:text-8xl lg:text-[108px] tracking-wide text-accent animate-fade-in stagger-2">
              Club
            </span>
            <span className="block text-6xl sm:text-8xl lg:text-[108px] tracking-wide animate-fade-in stagger-3">
              Sombreffe
            </span>
          </h1>

          {/* Séparateur sable */}
          <div
            className="animate-fade-in stagger-4 mt-8 w-16 h-0.5"
            style={{ background: "var(--color-sand)" }}
            aria-hidden="true"
          />

          {/* Tagline */}
          <p
            className="animate-fade-in stagger-4 mt-6 text-lg lg:text-xl max-w-xl leading-relaxed"
            style={{ color: "var(--color-sand-light)" }}
          >
            {siteConfig.description}
          </p>

          {/* CTA */}
          <div className="animate-fade-in stagger-5 mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/nos-cours"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold uppercase tracking-widest text-sm hover:bg-accent-light transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Les entraînements
            </Link>
            <Link
              href="/le-club"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold uppercase tracking-widest text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              style={{
                border: "1px solid var(--color-sand)",
                color: "var(--color-sand-light)",
              }}
              onMouseEnter={undefined}
            >
              Le club
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in stagger-6"
        aria-hidden="true"
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--color-sand)", opacity: 0.5 }}
        >
          Découvrir
        </span>
        <svg
          className="animate-scroll-bounce"
          style={{ color: "var(--color-sand)", opacity: 0.5 }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 4v12M10 16l-4-4M10 16l4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
