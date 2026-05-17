import type { Metadata } from "next";
import { HeroSection } from "@/components/business/HeroSection";
import { StatsSection } from "@/components/business/StatsSection";
import { SchedulePreview } from "@/components/business/SchedulePreview";
import { NewsPreview } from "@/components/business/NewsPreview";
import { JoinSection } from "@/components/business/JoinSection";

export const metadata: Metadata = {
  title: "Judo Club Sombreffe | Arts martiaux à Sombreffe",
  description:
    "Club de judo familial à Sombreffe. Cours enfants dès 5 ans et adultes tous niveaux. Premier cours gratuit. Complexe sportif, Allée de Château-Chinon.",
  alternates: {
    canonical: "https://judoclubsombreffe.be/",
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://judoclubsombreffe.be/",
    siteName: "Judo Club Sombreffe",
    title: "Judo Club Sombreffe | Arts martiaux à Sombreffe",
    description:
      "Club de judo familial à Sombreffe. Cours enfants dès 5 ans et adultes tous niveaux. Premier cours gratuit.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Judo Club Sombreffe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Judo Club Sombreffe | Arts martiaux à Sombreffe",
    description:
      "Club de judo familial à Sombreffe. Cours enfants dès 5 ans et adultes tous niveaux. Premier cours gratuit.",
    images: ["/opengraph-image"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SchedulePreview />
      <NewsPreview />
      <JoinSection />
    </>
  );
}
