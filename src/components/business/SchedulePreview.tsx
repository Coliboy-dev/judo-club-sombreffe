import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScheduleTable } from "@/components/business/ScheduleTable";
import { courses } from "@/data/courses";

export function SchedulePreview() {
  return (
    <Section background="white" id="horaires">
      <SectionHeader
        title="Nos cours"
        subtitle="Des créneaux adaptés à chaque âge, du débutant au compétiteur."
        eyebrow="Horaires & tarifs"
      />
      <ScheduleTable courses={courses} />
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-8 border-t border-neutral-200">
        <Link
          href="/nos-cours"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Détail des cours &amp; tarifs
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <p className="text-sm text-neutral-500 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-accent" aria-hidden="true" />
          Le premier cours est offert — venez voir.
        </p>
      </div>
    </Section>
  );
}
