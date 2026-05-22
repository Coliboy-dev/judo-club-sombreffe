import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/config";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const siteHost = siteConfig.siteUrl.replace("https://", "");

  return new ImageResponse(
    (
      <div
        style={{
          background: siteConfig.colors.primary,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Bande accent gauche */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 10,
            background: siteConfig.colors.accent,
          }}
        />

        {/* Surtitre */}
        <div
          style={{
            fontSize: 20,
            color: siteConfig.colors.accent,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 32,
            fontWeight: 700,
          }}
        >
          {siteConfig.region} — {siteConfig.country}
        </div>

        {/* Titre principal — lignes 1 et 2 */}
        <div
          style={{
            fontSize: 100,
            color: "white",
            fontWeight: 900,
            lineHeight: 1,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {siteConfig.heroLines[0].toUpperCase()} {siteConfig.heroLines[1].toUpperCase()}
        </div>
        {/* Ligne 3 en accent */}
        <div
          style={{
            fontSize: 100,
            color: siteConfig.colors.accent,
            fontWeight: 900,
            lineHeight: 1,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            marginBottom: 48,
          }}
        >
          {siteConfig.heroLines[2].toUpperCase()}
        </div>

        {/* Accroche */}
        <div
          style={{
            fontSize: 26,
            color: "#CBD5E1",
            maxWidth: 680,
            lineHeight: 1.5,
          }}
        >
          {siteConfig.description}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 96,
            fontSize: 18,
            color: "#64748B",
            letterSpacing: "0.05em",
          }}
        >
          {siteHost}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
