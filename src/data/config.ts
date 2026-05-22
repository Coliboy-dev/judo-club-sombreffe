export const siteConfig = {
  // Identité
  name: "Judo Club Sombreffe",
  shortName: "JC Sombreffe",
  shortInitials: "JC",
  tagline: "L'art martial au cœur de Sombreffe",
  description:
    "Club de judo familial pratiqué avec bienveillance dans le respect des valeurs des arts martiaux. Ouvert aux enfants dès 5 ans et aux adultes de tous niveaux.",

  // Sport & localisation
  sport: "Judo",
  region: "Province de Namur",
  country: "Belgique",

  // Titre héro — 3 lignes, la 2e prend la couleur accent
  heroLines: ["Judo", "Club", "Sombreffe"] as [string, string, string],

  // URL du site
  siteUrl: "https://judoclubsombreffe.be",

  // Coordonnées
  address: "Allée de Château-Chinon 6, 5140 Sombreffe",
  addressStreet: "Allée de Château-Chinon 6",
  addressCity: "Sombreffe",
  addressPostalCode: "5140",
  addressCountry: "BE",
  phone: "+32 473 33 58 65",
  email: "judo.sombreffe@gmail.com",

  // Dojo
  dojoName: "Complexe sportif de Sombreffe",
  dojoAccess:
    "Parking gratuit sur place. Accès en transports communs depuis la gare de Sombreffe.",
  mapsUrl:
    "https://maps.google.com/?q=Allée+de+Château-Chinon+6,+5140+Sombreffe",

  // Horaires — à synchroniser avec courses.ts
  scheduleDisplay: {
    compact: [
      "Mercredi — 17h30 à 20h00",
      "Vendredi — 17h30 à 20h00",
      "Samedi — 10h30 à 12h00",
    ],
    detailed: [
      "Mercredi & Vendredi 17h30 – 18h30 (Enfants)",
      "Mercredi & Vendredi 18h30 – 20h00 (Ados & Adultes)",
      "Samedi 10h30 – 12h00 (Tous niveaux)",
    ],
  },

  // Réseaux sociaux
  facebook: "https://www.facebook.com/profile.php?id=100063579276894&locale=fr_FR",
  facebookLabel: "Judo Club Sombreffe sur Facebook",
  facebookFollowers: "569 abonnés",
  instagram: null as string | null,

  // Statistiques du club
  founded: "1993",
  members: 60,

  // Contact principal
  contactPersonName: "Jean-Louis",

  // Email expéditeur pour le formulaire de contact
  emailFrom: "contact@start-onlab.be",

  // Couleurs (doivent correspondre à src/styles/theme.css)
  colors: {
    primary: "#1B2A4A",
    primaryLight: "#2D4270",
    primaryDark: "#111D33",
    accent: "#C0392B",
    accentLight: "#E74C3C",
    accentDark: "#96281B",
    ivoire: "#F1EFE8",
  },
} as const;
