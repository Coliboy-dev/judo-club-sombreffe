import { Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Course } from "@/types/course";

const dayLabels: Record<string, string> = {
  lundi: "Lun.",
  mardi: "Mar.",
  mercredi: "Mer.",
  jeudi: "Jeu.",
  vendredi: "Ven.",
  samedi: "Sam.",
  dimanche: "Dim.",
};

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const ageLabel = course.ageMax
    ? `${course.ageMin} – ${course.ageMax} ans`
    : `Dès ${course.ageMin} ans`;

  return (
    <article className="card-lift flex flex-col h-full bg-white border border-neutral-200 overflow-hidden">
      {/* Bande accent rouge */}
      <div className="h-1.5 bg-accent" aria-hidden="true" />

      <div className="flex flex-col flex-1 gap-5 p-6">
        {/* En-tête */}
        <div>
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-display text-2xl lg:text-3xl text-primary uppercase leading-tight tracking-wide">
              {course.name}
            </h3>
            <Badge variant="muted" className="shrink-0 mt-1">
              <Users size={11} className="inline mr-1" aria-hidden="true" />
              {ageLabel}
            </Badge>
          </div>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Horaires */}
        <ul className="space-y-2.5 pt-4 border-t border-neutral-100">
          {course.schedules.map((s, i) => (
            <li key={i} className="flex items-center gap-3 text-sm">
              <span className="font-display text-sm text-accent uppercase w-8 shrink-0">
                {dayLabels[s.day] ?? s.day}
              </span>
              <Clock size={13} className="shrink-0 text-neutral-300" aria-hidden="true" />
              <span className="text-neutral-700">
                {s.startTime === "Sur demande" ? (
                  <em className="not-italic text-neutral-400">Sur demande</em>
                ) : (
                  <>{s.startTime} – {s.endTime}</>
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* Prix */}
        {course.price && (
          <p className="text-xs text-neutral-400 mt-auto pt-4 border-t border-neutral-100 uppercase tracking-wide">
            {course.price}
          </p>
        )}
      </div>
    </article>
  );
}
