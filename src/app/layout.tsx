import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/config";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${siteConfig.name} | Arts martiaux à ${siteConfig.addressCity}`,
  description: `Club de ${siteConfig.sport.toLowerCase()} familial à ${siteConfig.addressCity}. Cours enfants et adultes, tous niveaux. ${siteConfig.dojoName}, ${siteConfig.addressStreet}.`,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: siteConfig.name,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  sport: siteConfig.sport,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressStreet,
    addressLocality: siteConfig.addressCity,
    postalCode: siteConfig.addressPostalCode,
    addressCountry: siteConfig.addressCountry,
  },
  sameAs: [siteConfig.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bebasNeue.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
