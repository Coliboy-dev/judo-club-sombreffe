import { Clock, Users } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
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

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const ageLabel = course.ageMax
    ? `${course.ageMin} – ${course.ageMax} ans`
    : `Dès ${course.ageMin} ans`;

  return (
    <Card as="article" className="flex flex-col h-full overflow-hidden">
      {/* Barre colorée discrète en haut */}
      <div className="h-1 bg-primary" aria-hidden="true" />

      <CardBody className="flex flex-col flex-1 gap-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-display text-2xl text-primary uppercase leading-tight tracking-wide">
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
        <ul className="space-y-2 pt-2 border-t border-neutral-100">
          {course.schedules.map((s, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <Clock size={14} className="mt-0.5 shrink-0 text-neutral-400" aria-hidden="true" />
              <span>
                <span className="font-semibold text-neutral-800 capitalize">
                  {dayLabels[s.day] ?? s.day}
                </span>{" "}
                {s.startTime === "Sur demande" ? (
                  <span className="text-neutral-400">— sur demande</span>
                ) : (
                  <span className="text-neutral-600">
                    {s.startTime} – {s.endTime}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* Prix */}
        {course.price && (
          <p className="text-xs text-neutral-500 mt-auto pt-2 border-t border-neutral-100">
            {course.price}
          </p>
        )}
      </CardBody>
    </Card>
  );
}
