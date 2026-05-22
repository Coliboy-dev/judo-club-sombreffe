export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl?: string | null;
}

export const testimonials: Testimonial[] = [];
