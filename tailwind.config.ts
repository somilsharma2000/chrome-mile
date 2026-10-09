import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#0A0A0B",
          soft: "#121214",
          line: "#26262B",
        },
        bone: {
          DEFAULT: "#F5F2EC",
          muted: "#A19D94",
        },
        accent: {
          // darkened for WCAG AA: bone text on accent = 4.9:1 (was 3.7:1)
          DEFAULT: "#B8321D",
          hover: "#9E2B18",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
