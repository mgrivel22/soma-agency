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
          background: "#16232E",
          color: "#F4F2EE",
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
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                background: "#B8863F",
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
          <div style={{ fontSize: 26, color: "#A8B3BC", maxWidth: 780 }}>
            Offre de lancement : site vitrine dès 490 € HT pour artisans et
            entreprises locales.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
