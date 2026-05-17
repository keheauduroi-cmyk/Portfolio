import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        asphalt: "#0C0F14",
        graphite: "#171B22",
        steel: "#D3DAE5",
        rosso: "#D71920",
        ember: "#FF4B36",
        champagne: "#D8C6A3"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        cockpit: "0 24px 90px rgba(0, 0, 0, 0.45)",
        redline: "0 0 42px rgba(215, 25, 32, 0.22)"
      },
      backgroundImage: {
        "radial-track": "radial-gradient(circle at 50% 0%, rgba(215, 25, 32, 0.22), transparent 38%), linear-gradient(180deg, rgba(255,255,255,0.06), transparent 42%)"
      }
    }
  },
  plugins: []
};

export default config;
