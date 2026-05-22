import type { Metadata } from "next";
import { HeroSection } from "@/components/business/HeroSection";
import { StatsSection } from "@/components/business/StatsSection";
import { SchedulePreview } from "@/components/business/SchedulePreview";
import { NewsPreview } from "@/components/business/NewsPreview";
import { JoinSection } from "@/components/business/JoinSection";
import { siteConfig } from "@/data/config";
import { seoPages } from "@/data/seo";

export const metadata: Metadata = {
  title: seoPages.home.title,
  description: seoPages.home.description,
  alternates: {
    canonical: `${siteConfig.siteUrl}/`,
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: `${siteConfig.siteUrl}/`,
    siteName: siteConfig.name,
    title: seoPages.home.title,
    description: seoPages.home.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoPages.home.title,
    description: seoPages.home.description,
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
