import { siteConfig } from "./config";

export const seoPages = {
  home: {
    title: `${siteConfig.name} | Arts martiaux à ${siteConfig.addressCity}`,
    description: `Club de ${siteConfig.sport.toLowerCase()} familial à ${siteConfig.addressCity}. Cours enfants dès 5 ans et adultes tous niveaux. Premier cours gratuit. ${siteConfig.dojoName}, ${siteConfig.address}.`,
  },
  leClub: {
    title: "Le Club",
    description: `Découvrez l'histoire, les valeurs et l'équipe du ${siteConfig.name}. Club familial fondé en ${siteConfig.founded}.`,
  },
  nosCours: {
    title: "Nos Cours",
    description: `Cours de ${siteConfig.sport.toLowerCase()} à ${siteConfig.addressCity} pour enfants dès 5 ans et adultes. Tous niveaux. Horaires, tarifs et inscription. Premier cours gratuit.`,
  },
  actualites: {
    title: "Actualités",
    description: `Résultats de compétitions, événements et annonces du ${siteConfig.name}.`,
  },
  contact: {
    title: "Contact",
    description: `Contactez le ${siteConfig.name}. Inscriptions, cours d'essai gratuit et informations pratiques.`,
  },
  confidentialite: {
    title: "Politique de confidentialité",
    description: `Politique de confidentialité du ${siteConfig.name}. Informations sur la collecte et le traitement de vos données personnelles.`,
  },
};
