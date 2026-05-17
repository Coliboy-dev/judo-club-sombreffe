import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { formatDateShort } from "@/lib/utils";
import type { NewsItem } from "@/types/news";

interface NewsCardProps {
  news: NewsItem;
}

const categoryLabels: Record<string, string> = {
  résultat: "Résultat",
  événement: "Événement",
  annonce: "Annonce",
  stage: "Stage",
};

const categoryAccents: Record<string, string> = {
  résultat: "bg-accent",
  événement: "bg-primary",
  annonce: "bg-neutral-900",
  stage: "bg-primary-light",
};

export function NewsCard({ news }: NewsCardProps) {
  const accentBar = categoryAccents[news.category] ?? "bg-primary";

  return (
    <article className="card-lift flex flex-col h-full bg-white border border-neutral-200 overflow-hidden">
      {/* Bande catégorie */}
      <div className={`h-1.5 ${accentBar}`} aria-hidden="true" />

      <div className="flex flex-col flex-1 gap-4 p-6">
        {/* Meta */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant={news.category}>{categoryLabels[news.category]}</Badge>
          <time
            dateTime={news.date}
            className="text-xs text-neutral-400 font-medium tracking-wide shrink-0"
          >
            {formatDateShort(news.date)}
          </time>
        </div>

        {/* Titre */}
        <h3 className="font-display text-xl lg:text-2xl text-primary uppercase leading-tight tracking-wide">
          {news.title}
        </h3>

        {/* Résumé */}
        <p className="text-sm text-neutral-600 leading-relaxed flex-1">
          {news.excerpt}
        </p>

        {/* Résultats compétition */}
        {news.competitionResults && news.competitionResults.length > 0 && (
          <ul className="space-y-1 border-l-2 border-accent pl-3">
            {news.competitionResults.map((r, i) => (
              <li key={i} className="text-xs text-neutral-700">
                <span className="font-semibold">{r.judoka}</span> — {r.result}
              </li>
            ))}
          </ul>
        )}

        {/* Lien */}
        <Link
          href={`/actualites#${news.id}`}
          className="inline-flex items-center gap-1.5 mt-1 text-xs font-bold text-accent hover:text-accent-dark transition-colors uppercase tracking-widest focus-visible:outline-none focus-visible:underline"
          aria-label={`Lire la suite : ${news.title}`}
        >
          Lire la suite
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </article>
  );
}
