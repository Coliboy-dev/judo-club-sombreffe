import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/config";
import { seoPages } from "@/data/seo";

export async function generateMetadata() {
  return buildMetadata({
    title: seoPages.confidentialite.title,
    description: seoPages.confidentialite.description,
    path: "/confidentialite",
  });
}

export default function ConfidentialitePage() {
  return (
    <>
      {/* Hero page */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-accent" aria-hidden="true" />
            Vos données, en toute transparence
          </p>
          <h1 className="font-display text-5xl lg:text-6xl uppercase text-white leading-none">
            Politique de confidentialité
          </h1>
        </div>
      </section>

      <Section background="white">
        <div className="max-w-3xl prose prose-neutral">
          {/* Date */}
          <p className="text-sm text-neutral-500 mb-10">
            Dernière mise à jour : mai 2026
          </p>

          {/* 1 — Responsable */}
          <h2 className="font-display text-3xl text-primary uppercase tracking-wide mb-4">
            1. Responsable du traitement
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-2">
            Le responsable du traitement des données collectées via ce site est :
          </p>
          <div className="bg-neutral-50 border border-neutral-100 p-5 mb-8 text-sm text-neutral-700 space-y-1">
            <p><strong>{siteConfig.name}</strong></p>
            <p>{siteConfig.address}</p>
            <p>Email : <a href={`mailto:${siteConfig.email}`} className="text-accent underline">{siteConfig.email}</a></p>
            <p>Téléphone : <a href={`tel:${siteConfig.phone}`} className="text-accent underline">{siteConfig.phone}</a></p>
          </div>

          {/* 2 — Données collectées */}
          <h2 className="font-display text-3xl text-primary uppercase tracking-wide mb-4">
            2. Données collectées
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-3">
            Via le formulaire de contact présent sur ce site, nous collectons les informations
            suivantes :
          </p>
          <ul className="list-disc list-inside text-neutral-700 space-y-1 mb-3 pl-1">
            <li>Nom complet (obligatoire)</li>
            <li>Adresse email (obligatoire)</li>
            <li>Numéro de téléphone (optionnel)</li>
            <li>Message libre</li>
            <li>Intérêt pour un cours d&apos;essai gratuit (case à cocher optionnelle)</li>
          </ul>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Aucune donnée sensible (santé, origine, croyances, etc.) n&apos;est collectée via
            ce formulaire.
          </p>

          {/* 3 — Finalité */}
          <h2 className="font-display text-3xl text-primary uppercase tracking-wide mb-4">
            3. Finalité du traitement
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-3">
            Les données collectées via le formulaire sont utilisées exclusivement pour :
          </p>
          <ul className="list-disc list-inside text-neutral-700 space-y-1 mb-8 pl-1">
            <li>Répondre à votre demande de contact ou d&apos;information</li>
            <li>Organiser un cours d&apos;essai si vous en avez exprimé le souhait</li>
            <li>Prendre contact avec vous dans le cadre de votre inscription au club</li>
          </ul>

          {/* 4 — Base légale */}
          <h2 className="font-display text-3xl text-primary uppercase tracking-wide mb-4">
            4. Base légale
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Le traitement de vos données est fondé sur votre consentement (article 6.1.a du
            RGPD), exprimé au moment de l&apos;envoi du formulaire. Vous pouvez retirer ce
            consentement à tout moment en nous contactant.
          </p>

          {/* 5 — Durée de conservation */}
          <h2 className="font-display text-3xl text-primary uppercase tracking-wide mb-4">
            5. Durée de conservation
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Vos données sont conservées le temps nécessaire pour traiter votre demande, et
            supprimées au plus tard 12 mois après votre dernier contact avec le club, sauf
            obligation légale de conservation plus longue.
          </p>

          {/* 6 — Partage des données */}
          <h2 className="font-display text-3xl text-primary uppercase tracking-wide mb-4">
            6. Partage des données
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Vos données personnelles ne sont pas vendues, louées ni transmises à des tiers à
            des fins commerciales. Elles peuvent être partagées uniquement avec les prestataires
            techniques nécessaires au fonctionnement du site (hébergeur, service d&apos;envoi
            d&apos;email), dans le strict cadre de leurs missions et sous contrat de
            confidentialité.
          </p>

          {/* 7 — Vos droits */}
          <h2 className="font-display text-3xl text-primary uppercase tracking-wide mb-4">
            7. Vos droits (RGPD)
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-3">
            Conformément au Règlement Général sur la Protection des Données (UE) 2016/679,
            vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside text-neutral-700 space-y-1 mb-3 pl-1">
            <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
            <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit d&apos;opposition</strong> : vous opposer à un traitement</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
          </ul>
          <p className="text-neutral-700 leading-relaxed mb-3">
            Pour exercer ces droits, contactez-nous à l&apos;adresse indiquée au point 1.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
            réclamation auprès de l&apos;Autorité de Protection des Données (APD) belge :{" "}
            <a
              href="https://www.autoriteprotectiondonnees.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-accent-light transition-colors"
            >
              autoriteprotectiondonnees.be
            </a>
            .
          </p>

          {/* 8 — Cookies */}
          <h2 className="font-display text-3xl text-primary uppercase tracking-wide mb-4">
            8. Cookies
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Ce site n&apos;utilise pas de cookies de tracking ou de publicité. Seuls des
            cookies techniques strictement nécessaires au fonctionnement du site peuvent être
            présents (aucune donnée personnelle collectée via ces cookies).
          </p>

          {/* 9 — Contact */}
          <h2 className="font-display text-3xl text-primary uppercase tracking-wide mb-4">
            9. Contact
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            Pour toute question relative à cette politique ou à vos données personnelles,
            contactez le {siteConfig.name} à l&apos;adresse indiquée au point 1 ou via le{" "}
            <a
              href="/contact"
              className="text-accent underline hover:text-accent-light transition-colors"
            >
              formulaire de contact
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
