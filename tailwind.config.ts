import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#080B14",
          900: "#0C1120",
          850: "#10162A",
          800: "#141B33",
          700: "#1B2440",
          600: "#26325A",
          border: "#232E4D"
        },
        surface: {
          light: "#FFFFFF",
          "light-muted": "#F5F7FB",
          "light-border": "#E3E8F1"
        },
        accent: {
          blue: "#3E7BFA",
          cyan: "#22D3EE",
          green: "#34D399",
          amber: "#F5A524"
        },
        ink: {
          50: "#F4F6FB",
          100: "#E7EBF5",
          300: "#AEB9D4",
          400: "#8391B5",
          600: "#4C5877",
          900: "#0C1120"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      maxWidth: {
        container: "1280px"
      },
      boxShadow: {
        card: "0 1px 2px rgba(8,11,20,0.04), 0 8px 24px -8px rgba(8,11,20,0.10)",
        "card-dark": "0 1px 0 rgba(255,255,255,0.03), 0 12px 32px -12px rgba(0,0,0,0.55)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "scale-in": "scale-in 0.2s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
