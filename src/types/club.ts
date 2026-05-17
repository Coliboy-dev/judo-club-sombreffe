export interface Coach {
  id: string;
  name: string;
  role: string;
  grade?: string;
  bio?: string;
  imageUrl?: string | null;
}

export interface ClubValue {
  title: string;
  description: string;
  icon: string;
}
