import { Section, SectionHeader } from "@/components/ui/Section";
import { NewsFilter } from "@/components/business/NewsFilter";
import { buildMetadata } from "@/lib/seo";
import { newsItems } from "@/data/news";
import { seoPages } from "@/data/seo";

export async function generateMetadata() {
  return buildMetadata({
    title: seoPages.actualites.title,
    description: seoPages.actualites.description,
    path: "/actualites",
  });
}

export default function ActualitesPage() {
  return (
    <>
      {/* Hero page */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-accent" aria-hidden="true" />
            Vie du club
          </p>
          <h1 className="font-display text-5xl lg:text-7xl uppercase text-white leading-none">
            Actualités
          </h1>
          <p className="mt-4 text-neutral-100 text-lg max-w-xl">
            Résultats de compétitions, stages, événements et annonces du club.
          </p>
        </div>
      </section>

      <Section background="white">
        <SectionHeader
          title="Toutes les actualités"
          subtitle={`${newsItems.length} publication${newsItems.length > 1 ? "s" : ""}`}
        />
        <NewsFilter news={newsItems} />
      </Section>
    </>
  );
}
