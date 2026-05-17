import Image from "next/image";
import { MapPin, Heart, Shield, TrendingUp, Handshake } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { coaches, clubValues, clubHistory } from "@/data/club";
import { siteConfig } from "@/data/config";

export async function generateMetadata() {
  return buildMetadata({
    title: "Le Club",
    description:
      "Découvrez l'histoire, les valeurs et l'équipe du Judo Club Sombreffe. Club familial fondé par Jean-Louis Allard.",
    path: "/le-club",
  });
}

const iconMap: Record<string, React.ElementType> = {
  HandshakeIcon: Handshake,
  ShieldIcon: Shield,
  HeartIcon: Heart,
  TrendingUpIcon: TrendingUp,
};

export default function LeClubPage() {
  return (
    <>
      {/* Hero page */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-accent" aria-hidden="true" />
            Notre histoire
          </p>
          <h1 className="font-display text-5xl lg:text-7xl uppercase text-white leading-none">
            Le Club
          </h1>
        </div>
      </section>

      {/* Histoire */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeader title="Notre histoire" />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              {clubHistory.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          {/* Bloc visuel */}
          <div className="relative">
            <div className="bg-primary aspect-square flex items-center justify-center">
              <div className="text-center px-8">
                <p className="font-display text-8xl text-white leading-none">JC</p>
                <p className="font-display text-3xl text-accent uppercase mt-2">Sombreffe</p>
                <div className="mt-6 w-12 h-0.5 bg-accent mx-auto" aria-hidden="true" />
                <p className="mt-4 text-neutral-100 text-sm tracking-widest uppercase">
                  Province de Namur
                </p>
              </div>
            </div>
            {/* Bande accent */}
            <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-accent -z-10" aria-hidden="true" />
          </div>
        </div>
      </Section>

      {/* Valeurs */}
      <Section background="light">
        <SectionHeader
          title="Nos valeurs"
          subtitle="Le code moral du judo guide chaque séance, chaque compétition, chaque relation au sein du club."
          centered
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {clubValues.map((value) => {
            const Icon = iconMap[value.icon];
            return (
              <li
                key={value.title}
                className="bg-white border border-neutral-100 rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-all duration-200"
              >
                {Icon && (
                  <Icon size={28} className="text-accent" aria-hidden="true" />
                )}
                <h3 className="font-display text-2xl text-primary uppercase">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {value.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Équipe */}
      <Section background="white">
        <SectionHeader
          title="Notre équipe"
          subtitle="Sur le tatami depuis 1993."
        />
        <ul
          className={
            coaches.length === 1
              ? "flex justify-center"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          }
          role="list"
        >
          {coaches.map((coach) => (
            <li
              key={coach.id}
              className={`flex flex-col items-center text-center gap-4${coaches.length === 1 ? " max-w-sm w-full" : ""}`}
            >
              <Image
                src="/placeholder-coach.svg"
                alt={`Photo de ${coach.name}`}
                width={128}
                height={128}
                className="w-32 h-32 object-cover"
              />
              <div>
                <h3 className="font-display text-xl text-primary uppercase">
                  {coach.name}
                </h3>
                <p className="text-accent text-sm font-semibold mt-0.5">{coach.role}</p>
                {coach.grade && (
                  <p className="text-neutral-500 text-xs mt-1 uppercase tracking-wide">{coach.grade}</p>
                )}
                {coach.bio && (
                  <p className="text-neutral-700 text-sm leading-relaxed mt-3 max-w-xs mx-auto">
                    {coach.bio}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Dojo */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader title="Notre dojo" />
            <ul className="space-y-4 text-neutral-700">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-neutral-900">Adresse</p>
                  <p className="text-sm">{siteConfig.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-primary" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="font-semibold text-neutral-900">Entraînements</p>
                  <p className="text-sm">Mercredi — 17h30 à 20h00</p>
                  <p className="text-sm">Vendredi — 17h30 à 20h00</p>
                  <p className="text-sm">Samedi — 10h30 à 12h00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-primary" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                </svg>
                <div>
                  <p className="font-semibold text-neutral-900">Accès</p>
                  <p className="text-sm">Parking gratuit sur place. Accès en transports communs depuis la gare de Sombreffe.</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Carte placeholder */}
          <div className="bg-neutral-100 aspect-video flex items-center justify-center border border-neutral-200 rounded-xl">
            <div className="text-center">
              <MapPin size={40} className="text-neutral-400 mx-auto mb-3" aria-hidden="true" />
              <p className="text-neutral-700 text-sm font-semibold">Complexe sportif de Sombreffe</p>
              <p className="text-neutral-400 text-xs mt-1">Allée de Château-Chinon 6, 5140</p>
              <a
                href="https://maps.google.com/?q=Allée+de+Château-Chinon+6,+5140+Sombreffe"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs text-accent hover:text-accent-light underline focus-visible:outline-none"
              >
                Ouvrir dans Google Maps →
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
