import type { Coach, ClubValue } from "@/types/club";

export const coaches: Coach[] = [
  {
    id: "jean-louis-allard",
    name: "Jean-Louis Allard",
    role: "Président & Entraîneur",
    grade: "Ceinture noire",
    bio: "Jean-Louis a fondé le club en 1993 avec une idée simple : offrir un judo sérieux dans une ambiance familiale, loin des clubs trop compétitifs. Trente ans plus tard, il est toujours sur le tatami à chaque séance — à la fois entraîneur, arbitre et première personne à tendre la main après une chute.",
    imageUrl: null,
  },
];

export const clubValues: ClubValue[] = [
  {
    title: "Respect",
    description:
      "On salue en entrant sur le tatami, on salue en sortant. Ce geste simple résume tout : ici, personne n'est plus important qu'un autre.",
    icon: "HandshakeIcon",
  },
  {
    title: "Discipline",
    description:
      "Pas la discipline rigide qu'on imagine — plutôt la régularité tranquille de ceux qui reviennent semaine après semaine, et qui progressent sans s'en rendre compte.",
    icon: "ShieldIcon",
  },
  {
    title: "Bienveillance",
    description:
      "On ne laisse personne se décourager seul. Les anciens aident les nouveaux, les grands font attention aux petits. C'est comme ça que ça marche ici.",
    icon: "HeartIcon",
  },
  {
    title: "Dépassement de soi",
    description:
      "Une chute bien rattrapée, une technique qu'on n'arrivait pas à faire et qui passe enfin — c'est ça, le dépassement. Pas besoin de podium pour le ressentir.",
    icon: "TrendingUpIcon",
  },
];

export const clubHistory = `En 1993, Jean-Louis Allard a posé les premiers tapis dans le complexe sportif de Sombreffe avec une poignée de judokas et une idée claire : faire du judo sérieusement, sans prendre les choses trop au sérieux.

Trente ans plus tard, le club n'a pas changé de philosophie. On y croise des enfants qui font leurs premières chutes, des adultes qui reviennent au sport après des années, et quelques anciens qui ne sont jamais vraiment partis. Tout ce monde s'entraîne ensemble, se connaît par prénom, et repart avec le sourire.

Le JC Sombreffe participe aux compétitions provinciales et régionales, mais ce n'est pas ce qui définit le club. Ce qui le définit, c'est l'ambiance qu'on y trouve un mercredi soir à 18h : du bruit, de l'effort, et des gens contents d'être là.`;
