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
    <section
      className="relative overflow-hidden"
      id="chiffres"
      style={{ background: "var(--color-sand-light)" }}
    >
      {/* Texture sable */}
      <div className="absolute inset-0 sand-pattern" aria-hidden="true" />

      {/* Liseré top en rouge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <dl className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map(({ value, unit, label }, i) => (
            <div
              key={label}
              className={[
                "flex flex-col items-center sm:items-start text-center sm:text-left gap-3",
                "py-10 lg:py-12 px-6 lg:px-10",
                "animate-fade-in",
                i < stats.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-sand"
                  : "",
              ].join(" ")}
              style={{ animationDelay: `${i * 0.15}s`, borderColor: "var(--color-sand)" }}
            >
              <div className="flex items-baseline gap-3">
                <dt className="font-display text-7xl lg:text-8xl xl:text-9xl text-primary leading-none tabular-nums">
                  {value}
                </dt>
                {unit && (
                  <span className="font-display text-2xl lg:text-3xl text-accent uppercase leading-none">
                    {unit}
                  </span>
                )}
              </div>
              <dd className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--color-neutral-600)" }}>
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
