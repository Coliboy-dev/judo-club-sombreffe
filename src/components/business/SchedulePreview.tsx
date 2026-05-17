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
      />
      <ScheduleTable courses={courses} />
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Link
          href="/nos-cours"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold uppercase tracking-wide text-sm hover:bg-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Détail des cours &amp; tarifs
        </Link>
        <p className="text-sm text-neutral-500">
          Le premier cours est offert — venez voir.
        </p>
      </div>
    </Section>
  );
}
