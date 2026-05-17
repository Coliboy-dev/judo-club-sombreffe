import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1B2A4A",
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
            background: "#C0392B",
          }}
        />

        {/* Surtitre */}
        <div
          style={{
            fontSize: 20,
            color: "#C0392B",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 32,
            fontWeight: 700,
          }}
        >
          Province de Namur — Belgique
        </div>

        {/* Titre principal */}
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
          JUDO CLUB
        </div>
        <div
          style={{
            fontSize: 100,
            color: "#C0392B",
            fontWeight: 900,
            lineHeight: 1,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            marginBottom: 48,
          }}
        >
          SOMBREFFE
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
          Club de judo familial · Cours enfants dès 5 ans & adultes · Premier cours offert
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
          judoclubsombreffe.be
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
