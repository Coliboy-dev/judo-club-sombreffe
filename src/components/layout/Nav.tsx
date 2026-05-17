"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/nav-links";

export { navLinks };

interface NavProps {
  onClose?: () => void;
  mobile?: boolean;
}

export function Nav({ onClose, mobile = false }: NavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigation principale">
      <ul
        className={cn(
          "flex",
          mobile
            ? "flex-col gap-1 py-4"
            : "flex-row items-center gap-1"
        )}
      >
        {navLinks.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block font-semibold text-sm uppercase tracking-wide transition-colors duration-150",
                  mobile ? "px-6 py-3 text-base" : "px-4 py-2",
                  active
                    ? "text-accent"
                    : "text-neutral-0 hover:text-accent"
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
