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
      />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
        {recent.map((news) => (
          <li key={news.id}>
            <NewsCard news={news} />
          </li>
        ))}
      </ul>
      <div className="mt-10 text-center">
        <Link
          href="/actualites"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors focus-visible:outline-none focus-visible:underline uppercase tracking-wide"
        >
          Toutes les actualités →
        </Link>
      </div>
    </Section>
  );
}
