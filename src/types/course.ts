export type AgeGroup = "U7" | "U9" | "U11" | "U13" | "U15" | "adultes" | "tous";
export type Level = "débutant" | "intermédiaire" | "avancé" | "tous niveaux";
export type DayOfWeek =
  | "lundi"
  | "mardi"
  | "mercredi"
  | "jeudi"
  | "vendredi"
  | "samedi"
  | "dimanche";

export interface Schedule {
  day: DayOfWeek;
  startTime: string;
  endTime: string;
  ageGroup: AgeGroup;
  level: Level;
  notes?: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  ageMin: number;
  ageMax: number | null;
  schedules: Schedule[];
  price?: string;
  trialAvailable: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
