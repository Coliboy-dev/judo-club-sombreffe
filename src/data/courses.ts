import type { Course, FaqItem } from "@/types/course";

export const courses: Course[] = [
  {
    id: "enfants",
    name: "Judo Enfants",
    description:
      "Cours adaptés aux enfants dans un environnement bienveillant. Apprentissage progressif des techniques de judo, du respect et de la discipline.",
    ageMin: 5,
    ageMax: 12,
    schedules: [
      {
        day: "mercredi",
        startTime: "17:30",
        endTime: "18:30",
        ageGroup: "U13",
        level: "tous niveaux",
      },
      {
        day: "vendredi",
        startTime: "17:30",
        endTime: "18:30",
        ageGroup: "U13",
        level: "tous niveaux",
      },
    ],
    price: "~160 € / saison + 47 € de licence fédérale",
    trialAvailable: true,
  },
  {
    id: "adultes",
    name: "Judo Ados & Adultes",
    description:
      "Cours ouvert aux ados dès 13 ans et aux adultes tous niveaux. Technique, randori et progression encadrée par Jean-Louis Allard.",
    ageMin: 13,
    ageMax: null,
    schedules: [
      {
        day: "mercredi",
        startTime: "18:30",
        endTime: "20:00",
        ageGroup: "adultes",
        level: "tous niveaux",
      },
      {
        day: "vendredi",
        startTime: "18:30",
        endTime: "20:00",
        ageGroup: "adultes",
        level: "tous niveaux",
      },
    ],
    price: "~160 € / saison + 47 € de licence fédérale",
    trialAvailable: true,
  },
  {
    id: "samedi",
    name: "Cours du Samedi",
    description:
      "Créneau du samedi matin ouvert à tous — enfants, ados et adultes. Idéal pour ceux qui ne peuvent pas venir en semaine.",
    ageMin: 5,
    ageMax: null,
    schedules: [
      {
        day: "samedi",
        startTime: "10:30",
        endTime: "12:00",
        ageGroup: "tous",
        level: "tous niveaux",
      },
    ],
    price: "Inclus dans la cotisation annuelle",
    trialAvailable: true,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "À partir de quel âge peut-on commencer le judo ?",
    answer:
      "Les enfants peuvent commencer dès 5 ans. Nous avons des cours adaptés à chaque tranche d'âge, dans un cadre bienveillant et progressif.",
  },
  {
    question: "Faut-il un équipement spécial pour commencer ?",
    answer:
      "Pour le cours d'essai, une tenue de sport confortable suffit. Si vous continuez, vous aurez besoin d'un judogi (kimono de judo) que vous pouvez vous procurer auprès du club à tarif préférentiel.",
  },
  {
    question: "Quels sont les tarifs ?",
    answer:
      "La cotisation au club est d'environ 160 € par saison (septembre à juin). À cela s'ajoute la licence fédérale obligatoire d'environ 47 €, soit un total d'environ 200–210 € par an. La licence inclut l'assurance sportive. Le premier cours est gratuit et sans engagement.",
  },
  {
    question: "Faut-il une licence pour s'entraîner ?",
    answer:
      "Oui, une licence auprès de Judo Wallonie Bruxelles est obligatoire pour pratiquer en club. Elle coûte environ 47 € par an et inclut une assurance sportive. Le club vous accompagne dans les démarches d'affiliation.",
  },
  {
    question: "Le cours d'essai est-il vraiment gratuit ?",
    answer:
      "Oui, le premier cours est offert sans engagement. C'est l'occasion de découvrir le club, rencontrer les pratiquants et décider si le judo vous convient.",
  },
];
