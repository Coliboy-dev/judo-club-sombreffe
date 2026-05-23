import { cn } from "@/lib/utils";

type Background = "white" | "light" | "warm" | "dark" | "primary" | "sand";

const bgClasses: Record<Background, string> = {
  white: "bg-white",
  light: "bg-ivoire",
  warm: "bg-warm-bg",
  sand: "bg-sand-light",
  dark: "bg-neutral-950 text-white",
  primary: "bg-primary text-white",
};

interface SectionProps {
  children: React.ReactNode;
  background?: Background;
  className?: string;
  id?: string;
}

export function Section({
  children,
  background = "white",
  className,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn(bgClasses[background], className)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 lg:mb-16", centered && "text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "inline-flex items-center gap-2 mb-5 text-xs font-bold uppercase tracking-[0.14em]",
            centered && "justify-center",
            light ? "text-sand" : "text-neutral-700"
          )}
          style={{ color: light ? "var(--color-sand)" : "var(--color-neutral-700)" }}
        >
          <span
            className="inline-block w-5 h-px"
            style={{ background: "currentColor" }}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl lg:text-5xl xl:text-6xl uppercase tracking-wide leading-none",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base lg:text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-sand-light" : "text-neutral-600"
          )}
          style={{ color: light ? "var(--color-sand-light)" : "var(--color-neutral-600)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
