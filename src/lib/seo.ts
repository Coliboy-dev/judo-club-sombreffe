import type { Metadata } from "next";
import { siteConfig } from "@/data/config";

interface SeoParams {
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({ title, description, path = "" }: SeoParams): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;
  return {
    title: fullTitle,
    description,
    openGraph: {
      type: "website",
      locale: "fr_BE",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
    alternates: {
      canonical: url,
    },
  };
}
