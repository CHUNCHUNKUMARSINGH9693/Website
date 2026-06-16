import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff4f0",
          100: "#ffe4db",
          200: "#ffc9b8",
          300: "#ffa38a",
          400: "#ff6b47",
          500: "#ff4d2d",
          600: "#e63a1c",
          700: "#c22d14",
          800: "#9f2715",
          900: "#832518",
          950: "#470f08",
        },
        'brand-orange': {
          DEFAULT: '#FF5A36',
          light: '#FFEEEB',
          hover: '#E64B2D',
        },
        primary: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          light: "#EFF6FF",
        }
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        'premium': '24px',
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, #ff4d2d 0%, #ff8c42 55%, #ffb347 100%)",
        "btn-gradient":
          "linear-gradient(90deg, #ff4d2d 0%, #e63a1c 50%, #ff6b35 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
