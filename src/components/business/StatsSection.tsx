import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/config";

const stats = [
  {
    value: `~${siteConfig.members}`,
    unit: "judokas",
    label: "De 5 à 60 ans, débutants et ceintures noires côte à côte",
  },
  {
    value: "3",
    unit: "séances",
    label: "Mercredi, vendredi et samedi — pour pratiquer à son rythme",
  },
  {
    value: siteConfig.founded,
    unit: "",
    label: "L'année où tout a commencé, dans ce même complexe sportif",
  },
];

export function StatsSection() {
  return (
    <Section background="light" id="chiffres">
      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
        {stats.map(({ value, unit, label }, i) => (
          <div
            key={label}
            className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 animate-fade-in"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex items-baseline gap-2">
              <dt className="font-display text-6xl lg:text-7xl text-primary leading-none">
                {value}
              </dt>
              {unit && (
                <span className="font-display text-xl lg:text-2xl text-accent uppercase">
                  {unit}
                </span>
              )}
            </div>
            <dd className="text-sm text-neutral-600 leading-relaxed max-w-xs">
              {label}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
