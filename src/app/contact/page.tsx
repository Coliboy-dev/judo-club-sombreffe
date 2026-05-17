import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ContactForm } from "@/components/business/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";

export async function generateMetadata() {
  return buildMetadata({
    title: "Contact",
    description:
      "Contactez le Judo Club Sombreffe. Inscriptions, cours d'essai gratuit et informations pratiques.",
    path: "/contact",
  });
}

const practicalInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: [siteConfig.address],
  },
  {
    icon: Clock,
    title: "Entraînements",
    lines: [
      "Mercredi & Vendredi 17h30 – 18h30 (Enfants)",
      "Mercredi & Vendredi 18h30 – 20h00 (Ados & Adultes)",
      "Samedi 10h30 – 12h00 (Tous niveaux)",
    ],
  },
  {
    icon: Phone,
    title: "Téléphone",
    lines: [siteConfig.phone],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [siteConfig.email],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero page */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-accent" aria-hidden="true" />
            On vous répond rapidement
          </p>
          <h1 className="font-display text-5xl lg:text-7xl uppercase text-white leading-none">
            Contact
          </h1>
          <p className="mt-4 text-neutral-100 text-lg max-w-xl">
            Une question, une inscription ou une demande de cours d&apos;essai ? Écrivez-nous.
          </p>
        </div>
      </section>

      {/* Formulaire + infos */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Formulaire — large */}
          <div className="lg:col-span-3">
            <SectionHeader title="Envoyez-nous un message" />
            <ContactForm showTrialCheckbox />
          </div>

          {/* Infos pratiques */}
          <aside className="lg:col-span-2">
            <SectionHeader title="Infos pratiques" />
            <ul className="space-y-6">
              {practicalInfo.map(({ icon: Icon, title, lines }) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 bg-primary flex items-center justify-center">
                    <Icon size={18} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{title}</p>
                    {lines.map((line, i) => (
                      <p key={i} className="text-sm text-neutral-700 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            {/* Facebook */}
            <div className="mt-8 p-5 bg-neutral-50 border border-neutral-100">
              <p className="text-sm font-semibold text-neutral-900 mb-2">Suivez-nous</p>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Page Facebook du Judo Club Sombreffe (nouvel onglet)"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent font-semibold transition-colors focus-visible:outline-none focus-visible:underline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Judo Club Sombreffe sur Facebook
              </a>
              <p className="text-xs text-neutral-400 mt-1">569 abonnés</p>
            </div>
          </aside>
        </div>
      </Section>

      {/* Carte / accès */}
      <Section background="light">
        <SectionHeader
          title="Nous trouver"
          subtitle="Complexe sportif de Sombreffe, facilement accessible en voiture et en transports."
        />
        <div className="bg-primary-light aspect-video max-w-3xl flex items-center justify-center border border-neutral-200">
          <div className="text-center px-6">
            <MapPin size={48} className="text-accent mx-auto mb-4" aria-hidden="true" />
            <p className="text-white font-semibold">Complexe sportif de Sombreffe</p>
            <p className="text-neutral-200 text-sm mt-1">{siteConfig.address}</p>
            <a
              href="https://maps.google.com/?q=Allée+de+Château-Chinon+6,+5140+Sombreffe"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block px-6 py-2.5 bg-accent text-white text-sm font-semibold uppercase tracking-wide hover:bg-accent-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
