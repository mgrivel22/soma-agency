import { ImageResponse } from "next/og";

export const alt = "Soma Digital — sites web pour artisans et entreprises locales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          color: "#fafafa",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "#18181b",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 4,
                background: "#34d399",
              }}
            />
          </div>
          Soma Digital
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 650,
              lineHeight: 1.1,
              letterSpacing: -1.2,
              maxWidth: 920,
            }}
          >
            Un site qui transforme vos visiteurs en demandes de devis.
          </div>
          <div style={{ fontSize: 26, color: "#a1a1aa", maxWidth: 780 }}>
            Création de sites web pour artisans, entreprises du BTP et entreprises
            locales.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
