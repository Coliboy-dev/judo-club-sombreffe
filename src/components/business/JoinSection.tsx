import Link from "next/link";

export function JoinSection() {
  return (
    <section
      className="relative overflow-hidden"
      id="rejoindre"
      style={{ background: "var(--color-ivoire-dark)" }}
    >
      {/* Texture sable */}
      <div className="absolute inset-0 sand-pattern" aria-hidden="true" />

      {/* Liseré rouge vertical gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Colonne texte */}
          <div>
            <p className="eyebrow mb-8" style={{ color: "var(--color-sand-dark)" }}>
              Porte ouverte
            </p>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase text-primary leading-none tracking-wide">
              Venez voir un entraînement
            </h2>

            <div className="mt-6 w-12 h-px bg-sand" style={{ background: "var(--color-sand-dark)" }} aria-hidden="true" />

            <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--color-neutral-700)" }}>
              La meilleure façon de savoir si le judo vous convient, c&apos;est de pousser la porte du dojo.
              Enfants, ados, adultes — tout le monde est le bienvenu, même juste pour regarder.
              Jean-Louis prend le temps d&apos;accueillir chaque nouvelle tête.
            </p>

            <p className="mt-4 leading-relaxed" style={{ color: "var(--color-neutral-600)" }}>
              Si vous voulez essayer, une tenue de sport suffit. On s&apos;occupe du reste.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold uppercase tracking-widest text-sm hover:bg-primary-light transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Nous écrire
              </Link>
              <Link
                href="/le-club"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                En savoir plus
              </Link>
            </div>

            <p className="mt-8 text-sm flex items-center gap-2" style={{ color: "var(--color-neutral-500)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Complexe sportif — Allée de Château-Chinon 6, 5140 Sombreffe
            </p>
          </div>

          {/* Colonne décorative */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative flex items-center justify-center w-72 h-72">
              {/* Cercle extérieur */}
              <div
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: "var(--color-sand)" }}
                aria-hidden="true"
              />
              {/* Cercle intérieur */}
              <div
                className="absolute inset-8 rounded-full border"
                style={{ borderColor: "var(--color-sand-dark)", opacity: 0.4 }}
                aria-hidden="true"
              />
              {/* Texte central */}
              <div className="text-center select-none z-10">
                <p className="font-display text-7xl text-primary leading-none tracking-wide">
                  JC
                </p>
                <p
                  className="font-display text-sm uppercase tracking-[0.3em] mt-1"
                  style={{ color: "var(--color-sand-dark)" }}
                >
                  Sombreffe
                </p>
              </div>
              {/* Point accent */}
              <div
                className="absolute top-6 right-6 w-3 h-3 rounded-full bg-accent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
