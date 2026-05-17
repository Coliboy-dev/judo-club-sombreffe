import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { NewsCard } from "@/components/business/NewsCard";
import { newsItems } from "@/data/news";

export function NewsPreview() {
  const recent = newsItems.slice(0, 3);

  return (
    <Section background="light" id="actualites">
      <SectionHeader
        title="Actualités"
        subtitle="Résultats, événements et vie du club."
        eyebrow="Le club en direct"
      />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
        {recent.map((news, i) => (
          <li key={news.id} className={`animate-fade-in stagger-${i + 1}`}>
            <NewsCard news={news} />
          </li>
        ))}
      </ul>
      <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
        <p className="text-sm text-neutral-500">
          {newsItems.length} actualités publiées
        </p>
        <Link
          href="/actualites"
          className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-dark transition-colors focus-visible:outline-none focus-visible:underline uppercase tracking-widest"
        >
          Toutes les actualités
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </Section>
  );
}
