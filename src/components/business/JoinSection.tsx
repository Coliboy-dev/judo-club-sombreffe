import Link from "next/link";
import { siteConfig } from "@/data/config";

export function JoinSection() {
  return (
    <section
      className="relative bg-primary overflow-hidden"
      id="rejoindre"
    >
      {/* Texture tatami */}
      <div className="absolute inset-0 tatami-pattern" aria-hidden="true" />

      {/* Bande rouge verticale gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Colonne texte */}
          <div>
            <p className="eyebrow text-neutral-400 mb-8">
              Porte ouverte
            </p>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase text-white leading-none tracking-wide">
              Venez voir un entraînement
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <span className="block w-12 h-px bg-accent" aria-hidden="true" />
            </div>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              La meilleure façon de savoir si le {siteConfig.sport.toLowerCase()} vous convient, c&apos;est de pousser la porte du dojo.
              Enfants, ados, adultes — tout le monde est le bienvenu, même juste pour regarder.
              {siteConfig.contactPersonName} prend le temps d&apos;accueillir chaque nouvelle tête.
            </p>

            <p className="mt-4 text-white/60 leading-relaxed">
              Si vous voulez essayer, une tenue de sport suffit. On s&apos;occupe du reste.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold uppercase tracking-widest text-sm hover:bg-accent-light transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Nous écrire
              </Link>
              <Link
                href="/le-club"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-widest text-sm hover:border-white hover:bg-white/10 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                En savoir plus
              </Link>
            </div>

            <p className="mt-8 text-sm text-white/40 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              {siteConfig.dojoName} — {siteConfig.address}
            </p>
          </div>

          {/* Colonne décorative — chiffre édito */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="text-center select-none">
              <p className="font-display text-[200px] leading-none text-white/[0.04] tracking-tight">
                {siteConfig.shortInitials}
              </p>
              <p className="font-display text-2xl text-white/20 uppercase tracking-widest -mt-8">
                {siteConfig.addressCity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
