import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#e9e5cd",
        sand: "#f6f0e2",
        rose: "#e6b7a9",
        mist: "#f5f5f5",
        ink: "#111111",
        cocoa: "#8a6459"
      },
      boxShadow: {
        luxe: "0 18px 50px rgba(24, 17, 14, 0.12)",
        float: "0 24px 60px rgba(24, 17, 14, 0.18)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(230, 183, 169, 0.42), transparent 34%), radial-gradient(circle at right, rgba(255, 255, 255, 0.75), transparent 40%)"
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 34s linear infinite"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
