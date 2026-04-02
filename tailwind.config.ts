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
        lacquer: {
          50:  "#fdf2f0",
          100: "#fce0da",
          200: "#f7b8ad",
          300: "#f08070",
          400: "#e05a47",
          500: "#c63f2b",
          600: "#a8301f",
          700: "#882516",
          800: "#661a0e",
          900: "#451008",
        },
        parchment: {
          50:  "#fdfaf4",
          100: "#f7f0e0",
          200: "#ede0c4",
          300: "#d9c9a3",
          400: "#c4b080",
        },
        gold: {
          300: "#d4a84b",
          400: "#b8902a",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      typography: {
        stone: {
          css: {
            "--tw-prose-headings": "var(--color-stone-700)",
            "--tw-prose-links":    "var(--color-lacquer-600)",
            "--tw-prose-code":     "var(--color-stone-700)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
