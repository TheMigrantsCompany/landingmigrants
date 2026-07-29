import { ImageResponse } from "next/og";
import { brand } from "@/content/site";

export const runtime = "edge";
export const alt = `${brand.name} — ${brand.tagline}`;
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
          background: "#070707",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.06em",
              color: "#f5f5f5",
              lineHeight: 1,
            }}
          >
            IB
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "0.28em",
              color: "#9eb6d4",
            }}
          >
            TECH LABS
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#f5f5f5",
              maxWidth: 900,
            }}
          >
            Construimos el producto que tu empresa necesita para crecer.
          </div>
          <div style={{ fontSize: 22, color: "#a3a3a3", maxWidth: 720 }}>
            {brand.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
