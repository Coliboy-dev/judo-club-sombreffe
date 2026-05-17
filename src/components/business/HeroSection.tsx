import Link from "next/link";
import { siteConfig } from "@/data/config";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-primary"
      aria-label="Présentation du club"
    >
      {/* Texture tatami */}
      <div className="absolute inset-0 tatami-pattern" aria-hidden="true" />

      {/* Bande diagonale décorative rouge */}
      <div className="accent-diagonal" aria-hidden="true" />

      {/* Ligne verticale décorative gauche */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="eyebrow animate-fade-in-left text-neutral-400 mb-8">
            Province de Namur — Belgique
          </p>

          {/* Titre héro */}
          <h1 className="font-display uppercase text-white leading-none">
            <span
              className="block text-6xl sm:text-8xl lg:text-[108px] tracking-wide animate-fade-in stagger-1"
            >
              Judo
            </span>
            <span
              className="block text-6xl sm:text-8xl lg:text-[108px] tracking-wide text-accent animate-fade-in stagger-2"
            >
              Club
            </span>
            <span
              className="block text-6xl sm:text-8xl lg:text-[108px] tracking-wide animate-fade-in stagger-3"
            >
              Sombreffe
            </span>
          </h1>

          {/* Séparateur */}
          <div className="animate-fade-in stagger-4 mt-8 mb-6 flex items-center gap-4">
            <span className="block w-12 h-px bg-accent" aria-hidden="true" />
            <span className="block w-3 h-px bg-white/30" aria-hidden="true" />
          </div>

          {/* Tagline */}
          <p className="animate-fade-in stagger-4 text-lg lg:text-xl text-neutral-200 max-w-xl leading-relaxed">
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
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-semibold uppercase tracking-widest text-sm hover:border-white hover:bg-white/10 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
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
        <span className="text-white/40 text-xs uppercase tracking-widest">Découvrir</span>
        <svg
          className="animate-scroll-bounce text-white/50"
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
