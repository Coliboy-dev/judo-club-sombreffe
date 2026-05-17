import Link from "next/link";
import { siteConfig } from "@/data/config";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary"
      aria-label="Présentation du club"
    >
      {/* Fond tatami — motif géométrique CSS */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.3) 40px,
              rgba(255,255,255,0.3) 41px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.3) 40px,
              rgba(255,255,255,0.3) 41px
            )
          `,
        }}
      />


      {/* Contenu */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Label */}
          <p className="animate-fade-in-left inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-300">
            Province de Namur — Belgique
          </p>

          {/* Titre héro */}
          <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl uppercase text-white leading-none tracking-wide">
            <span className="block animate-fade-in stagger-1">Judo</span>
            <span className="block text-accent animate-fade-in stagger-2">Club</span>
            <span className="block animate-fade-in stagger-3">Sombreffe</span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in stagger-4 mt-6 text-lg lg:text-xl text-neutral-100 max-w-xl leading-relaxed">
            {siteConfig.description}
          </p>

          {/* CTA */}
          <div className="animate-fade-in stagger-5 mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/nos-cours"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold uppercase tracking-wide text-base hover:bg-accent-light transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Les entraînements
            </Link>
            <Link
              href="/le-club"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold uppercase tracking-wide text-base hover:bg-white hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Le club
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
