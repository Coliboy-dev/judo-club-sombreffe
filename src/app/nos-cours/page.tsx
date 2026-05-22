import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CourseCard } from "@/components/business/CourseCard";
import { FaqAccordion } from "@/components/business/FaqAccordion";
import { ContactForm } from "@/components/business/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { courses, faqItems } from "@/data/courses";
import { siteConfig } from "@/data/config";
import { seoPages } from "@/data/seo";

export async function generateMetadata() {
  return buildMetadata({
    title: seoPages.nosCours.title,
    description: seoPages.nosCours.description,
    path: "/nos-cours",
  });
}

export default function NosCoursPage() {
  return (
    <>
      {/* Hero page */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-accent" aria-hidden="true" />
            Les entraînements
          </p>
          <h1 className="font-display text-5xl lg:text-7xl uppercase text-white leading-none">
            Nos Cours
          </h1>
          <p className="mt-4 text-neutral-100 text-lg max-w-xl">
            Trois créneaux dans la semaine, pour tous les âges et tous les niveaux.
          </p>
        </div>
      </section>

      {/* Cards cours */}
      <Section background="light">
        <SectionHeader
          title="Les créneaux"
          subtitle="Mercredi, vendredi et samedi — enfants, ados et adultes."
        />
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
          {courses.map((course) => (
            <li key={course.id}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Venir essayer */}
      <Section background="white" id="essai">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeader title="Venir essayer" />
            <p className="text-neutral-700 leading-relaxed mb-4">
              Si vous voulez voir à quoi ressemble une séance avant de vous décider, c&apos;est tout à fait possible.
              Passez, regardez, posez des questions à {siteConfig.contactPersonName}. Ou enfilez une tenue de sport et rejoignez le cours — le premier est offert.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Pas besoin de kimono ni d&apos;expérience. Juste de la curiosité.
            </p>
          </div>
          <div>
            <ContactForm showTrialCheckbox />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="light">
        <SectionHeader
          title="Questions fréquentes"
          subtitle="Tout ce que vous voulez savoir avant de vous lancer."
        />
        <FaqAccordion items={faqItems} />
        <p className="mt-8 text-sm text-neutral-700">
          Une question non listée ?{" "}
          <Link
            href="/contact"
            className="font-semibold text-accent hover:text-accent-light transition-colors focus-visible:outline-none focus-visible:underline"
          >
            Contactez-nous directement →
          </Link>
        </p>
      </Section>
    </>
  );
}
