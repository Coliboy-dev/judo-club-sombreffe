import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  metadataBase: new URL("https://judoclubsombreffe.be"),
  title: "Judo Club Sombreffe | Arts martiaux à Sombreffe",
  description:
    "Club de judo familial à Sombreffe. Cours enfants et adultes, tous niveaux. Complexe sportif, Allée de Château-Chinon.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: "Judo Club Sombreffe",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Judo Club Sombreffe — Arts martiaux à Sombreffe",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Judo Club Sombreffe",
  url: "https://judoclubsombreffe.be",
  sport: "Judo",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Allée de Château-Chinon 6",
    addressLocality: "Sombreffe",
    postalCode: "5140",
    addressCountry: "BE",
  },
  sameAs: ["https://www.facebook.com/p/Judo-Club-Sombreffe-100063579276894/"],
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
