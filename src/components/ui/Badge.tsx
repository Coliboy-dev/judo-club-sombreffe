import { cn } from "@/lib/utils";
import type { NewsCategory } from "@/types/news";

type BadgeVariant = "default" | "accent" | "muted" | NewsCategory;

const variantClasses: Record<string, string> = {
  default: "bg-primary text-white",
  accent: "bg-accent text-white",
  muted: "bg-neutral-100 text-neutral-700",
  résultat: "bg-accent text-white",
  événement: "bg-primary text-white",
  annonce: "bg-neutral-900 text-white",
  stage: "bg-primary-light text-white",
};

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
        variantClasses[variant] ?? variantClasses.default,
        className
      )}
    >
      {children}
    </span>
  );
}
