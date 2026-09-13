import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/siteConfig";

export const runtime = "edge";

// Image metadata
export const alt = "Agevo | Tech Studio & Venture Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#07090e",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.05) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            textAlign: "center",
            background: "rgba(7, 9, 14, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "32px",
            boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.05em",
              lineHeight: 1.1,
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Agevo
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              background: "linear-gradient(to right, #60a5fa, #818cf8, #ffffff)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "48px",
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            SaaS Ventures • Maatwerk Software • AI Automatisering
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
