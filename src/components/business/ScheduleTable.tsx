import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

const dayLabels: Record<string, string> = {
  lundi: "Lundi",
  mardi: "Mardi",
  mercredi: "Mercredi",
  jeudi: "Jeudi",
  vendredi: "Vendredi",
  samedi: "Samedi",
  dimanche: "Dimanche",
};

interface ScheduleTableProps {
  courses: Course[];
  className?: string;
}

export function ScheduleTable({ courses, className }: ScheduleTableProps) {
  const rows = courses.flatMap((course) =>
    course.schedules.map((s) => ({ course, schedule: s }))
  );

  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
              Jour
            </th>
            <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
              Horaire
            </th>
            <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
              Cours
            </th>
            <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs hidden sm:table-cell">
              Public
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ course, schedule }, i) => (
            <tr
              key={`${course.id}-${i}`}
              className={cn(
                "border-b border-neutral-100 transition-colors",
                i % 2 === 0 ? "bg-white" : "bg-neutral-50",
                "hover:bg-neutral-100"
              )}
            >
              <td className="px-4 py-3 font-semibold text-primary capitalize">
                {dayLabels[schedule.day]}
              </td>
              <td className="px-4 py-3 text-neutral-700 tabular-nums">
                {schedule.startTime === "Sur demande" ? (
                  <span className="text-neutral-500">Sur demande</span>
                ) : (
                  `${schedule.startTime} – ${schedule.endTime}`
                )}
              </td>
              <td className="px-4 py-3 text-neutral-900 font-medium">
                {course.name}
              </td>
              <td className="px-4 py-3 text-neutral-700 hidden sm:table-cell">
                {course.ageMax
                  ? `${course.ageMin}–${course.ageMax} ans`
                  : `Dès ${course.ageMin} ans`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
