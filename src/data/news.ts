import type { NewsItem } from "@/types/news";

export const newsItems: NewsItem[] = [
  {
    id: "podium-championnat-namur-2026",
    title: "Beau podium au Championnat Provincial de Namur",
    date: "2026-04-12",
    category: "résultat",
    excerpt:
      "Nos judokas ont brillé lors du championnat provincial avec plusieurs médailles à la clé. Une belle récompense pour une saison de travail.",
    competitionResults: [
      {
        judoka: "Léa Martens",
        result: "1re place — U13 -40 kg",
        competition: "Championnat Provincial Namur 2026",
      },
      {
        judoka: "Thomas Dupont",
        result: "2e place — U15 -55 kg",
        competition: "Championnat Provincial Namur 2026",
      },
      {
        judoka: "Maxime Collignon",
        result: "3e place — Seniors -73 kg",
        competition: "Championnat Provincial Namur 2026",
      },
    ],
  },
  {
    id: "stage-paques-2026",
    title: "Stage de Pâques — Un week-end intense et formateur",
    date: "2026-03-28",
    category: "stage",
    excerpt:
      "Le stage de Pâques a réuni une vingtaine de judokas de tous niveaux pour deux jours d'entraînement intensif. Une expérience enrichissante sous la direction de Jean-Louis Allard.",
  },
  {
    id: "rentree-cours-2025",
    title: "Rentrée des cours — Saison 2025-2026",
    date: "2025-09-10",
    category: "annonce",
    excerpt:
      "La nouvelle saison débute ! Les cours reprennent le mercredi à partir du 17 septembre. Inscriptions ouvertes pour tous les niveaux, enfants dès 5 ans et adultes.",
  },
  {
    id: "tournoi-interclubs-namur-2025",
    title: "Tournoi interclubs de Namur — Nos couleurs défendues avec fierté",
    date: "2025-11-15",
    category: "résultat",
    excerpt:
      "Six judokas du JC Sombreffe ont participé au tournoi interclubs de la province. Résultats encourageants avec quatre podiums.",
    competitionResults: [
      {
        judoka: "Emma Fonteneau",
        result: "1re place — U11 -36 kg",
        competition: "Tournoi Interclubs Namur 2025",
      },
      {
        judoka: "Noah Lambert",
        result: "2e place — U13 -50 kg",
        competition: "Tournoi Interclubs Namur 2025",
      },
      {
        judoka: "Claire Bastin",
        result: "3e place — U15 -57 kg",
        competition: "Tournoi Interclubs Namur 2025",
      },
      {
        judoka: "Antoine Pire",
        result: "3e place — Seniors -81 kg",
        competition: "Tournoi Interclubs Namur 2025",
      },
    ],
  },
  {
    id: "demonstration-fete-commune-2025",
    title: "Démonstration à la Fête de la Commune de Sombreffe",
    date: "2025-06-21",
    category: "événement",
    excerpt:
      "Le JC Sombreffe était présent à la fête de la commune avec une démonstration de judo appréciée du public. Une belle vitrine pour notre club et nos valeurs.",
  },
];
