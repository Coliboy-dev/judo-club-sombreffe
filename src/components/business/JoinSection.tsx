import Link from "next/link";

export function JoinSection() {
  return (
    <section className="bg-ivoire py-20 lg:py-28 border-t border-neutral-200" id="rejoindre">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-accent" aria-hidden="true" />
            Porte ouverte
          </p>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase text-primary leading-none tracking-wide">
            Venez voir un entraînement
          </h2>

          <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
            La meilleure façon de savoir si le judo vous convient, c&apos;est de pousser la porte du dojo.
            Enfants, ados, adultes — tout le monde est le bienvenu, même juste pour regarder.
            Jean-Louis prend le temps d&apos;accueillir chaque nouvelle tête.
          </p>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            Si vous voulez essayer, une tenue de sport suffit. On s&apos;occupe du reste.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold uppercase tracking-wide text-base hover:bg-primary/90 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Nous écrire
            </Link>
            <Link
              href="/le-club"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold uppercase tracking-wide text-base hover:bg-primary hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              En savoir plus
            </Link>
          </div>

          <p className="mt-6 text-sm text-neutral-500">
            Complexe sportif — Allée de Château-Chinon 6, 5140 Sombreffe
          </p>
        </div>
      </div>
    </section>
  );
}
