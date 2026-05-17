import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-white overflow-hidden",
        "card-lift",
        className
      )}
      style={{
        border: "1px solid var(--color-neutral-200)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {children}
    </Tag>
  );
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function CardBody({ children, className }: CardBodyProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
