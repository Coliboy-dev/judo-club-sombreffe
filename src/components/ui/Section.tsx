import { cn } from "@/lib/utils";

type Background = "white" | "light" | "dark" | "primary";

const bgClasses: Record<Background, string> = {
  white: "bg-white",
  light: "bg-ivoire",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      <h2
        className={cn(
          "font-display text-4xl lg:text-5xl uppercase tracking-wide leading-none",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-neutral-100" : "text-neutral-700"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
