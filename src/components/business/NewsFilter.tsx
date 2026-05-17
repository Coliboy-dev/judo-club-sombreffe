"use client";

import { useState } from "react";
import { NewsCard } from "@/components/business/NewsCard";
import { cn } from "@/lib/utils";
import type { NewsItem, NewsCategory } from "@/types/news";

const categories: { value: NewsCategory | "tous"; label: string }[] = [
  { value: "tous", label: "Tout" },
  { value: "résultat", label: "Résultats" },
  { value: "événement", label: "Événements" },
  { value: "annonce", label: "Annonces" },
  { value: "stage", label: "Stages" },
];

interface NewsFilterProps {
  news: NewsItem[];
}

export function NewsFilter({ news }: NewsFilterProps) {
  const [active, setActive] = useState<NewsCategory | "tous">("tous");

  const filtered = active === "tous"
    ? news
    : news.filter((n) => n.category === active);

  return (
    <div>
      {/* Filtres */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filtrer par catégorie">
        {categories.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setActive(value)}
            aria-pressed={active === value}
            className={cn(
              "px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              active === value
                ? "bg-primary text-white"
                : "bg-white border border-neutral-200 text-neutral-700 hover:border-primary hover:text-primary"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Liste */}
      {filtered.length === 0 ? (
        <p className="text-neutral-500 text-sm py-8">Aucune actualité dans cette catégorie.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {filtered.map((item) => (
            <li key={item.id} id={item.id}>
              <NewsCard news={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
