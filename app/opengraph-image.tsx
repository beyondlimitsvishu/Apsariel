import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #f6f1eb 0%, #ffffff 45%, #f2ddd5 100%)",
          color: "#161211",
          padding: "48px",
          justifyContent: "space-between",
          alignItems: "stretch",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "58%"
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: "0.5em", textTransform: "uppercase" }}>
            Apsariel
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>
              Premium fashion discovery, beautifully curated.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.5, color: "#5d4b43" }}>
              Trending women&apos;s style from Amazon, Myntra, Flipkart, Ajio, and Meesho.
            </div>
          </div>
          <div style={{ fontSize: 20, color: "#8f6a5c" }}>Pinterest-inspired luxury shopping experience</div>
        </div>
        <div
          style={{
            width: "34%",
            borderRadius: 40,
            background:
              "linear-gradient(180deg, rgba(230,183,169,0.95) 0%, rgba(255,255,255,0.78) 100%)",
            boxShadow: "0 25px 60px rgba(22,18,17,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 42,
            letterSpacing: "0.24em"
          }}
        >
          DISCOVER
        </div>
      </div>
    ),
    size
  );
}
