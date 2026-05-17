import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
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

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Card as="article" className="flex flex-col h-full hover:shadow-md transition-shadow duration-200">
      <CardBody className="flex flex-col flex-1 gap-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant={news.category}>{categoryLabels[news.category]}</Badge>
          <time
            dateTime={news.date}
            className="text-xs text-neutral-700 shrink-0"
          >
            {formatDateShort(news.date)}
          </time>
        </div>
        <h3 className="font-display text-xl text-primary uppercase leading-tight">
          {news.title}
        </h3>
        <p className="text-sm text-neutral-700 leading-relaxed flex-1">
          {news.excerpt}
        </p>
        {news.competitionResults && news.competitionResults.length > 0 && (
          <ul className="mt-1 space-y-1 border-l-2 border-accent pl-3">
            {news.competitionResults.map((r, i) => (
              <li key={i} className="text-xs text-neutral-700">
                <span className="font-semibold">{r.judoka}</span> — {r.result}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={`/actualites#${news.id}`}
          className="mt-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors focus-visible:outline-none focus-visible:underline"
          aria-label={`Lire la suite : ${news.title}`}
        >
          Lire la suite →
        </Link>
      </CardBody>
    </Card>
  );
}
