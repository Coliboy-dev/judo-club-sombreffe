"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Nav } from "./Nav";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:font-semibold focus:text-sm focus:outline-none"
      >
        Passer au contenu principal
      </a>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "bg-primary",
          scrolled
            ? "shadow-[0_2px_24px_rgba(0,0,0,0.25)] border-b border-white/5"
            : "border-b border-transparent"
        )}
      >
        {/* Liseré accent en bas du header */}
        <div
          className={cn(
            "absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-500",
            scrolled ? "w-full" : "w-0"
          )}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              aria-label={`${siteConfig.name} — Accueil`}
            >
              <div className="flex items-center justify-center w-9 h-9 bg-accent font-display text-white text-lg leading-none select-none shrink-0 group-hover:bg-accent-light transition-colors duration-150">
                JC
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-white text-xl tracking-wide uppercase leading-none">
                  {siteConfig.shortName}
                </span>
                <span className="block text-neutral-300 text-[10px] tracking-[0.2em] uppercase opacity-60">
                  Province de Namur
                </span>
              </div>
            </Link>

            {/* Nav desktop */}
            <div className="hidden lg:block">
              <Nav />
            </div>

            {/* CTA desktop */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-accent text-white text-xs font-bold uppercase tracking-widest hover:bg-accent-light transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Cours d&apos;essai
            </Link>

            {/* Bouton hamburger mobile */}
            <button
              type="button"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 text-white hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-200",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        {/* Drawer */}
        <div
          className={cn(
            "absolute top-16 left-0 right-0 bg-primary border-t border-white/10 shadow-2xl transition-transform duration-200",
            menuOpen ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <Nav mobile onClose={() => setMenuOpen(false)} />
          <div className="px-6 py-5 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center px-6 py-3.5 bg-accent text-white font-bold uppercase tracking-widest text-sm hover:bg-accent-light transition-colors"
            >
              Cours d&apos;essai gratuit
            </Link>
          </div>
        </div>
      </div>

      {/* Espaceur pour compenser le header fixe */}
      <div className="h-16 lg:h-[72px]" aria-hidden="true" />
    </>
  );
}
