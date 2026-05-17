export type NewsCategory = "résultat" | "événement" | "annonce" | "stage";

export interface CompetitionResult {
  judoka: string;
  result: string;
  competition: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: NewsCategory;
  excerpt: string;
  content?: string;
  imageUrl?: string;
  competitionResults?: CompetitionResult[];
}
