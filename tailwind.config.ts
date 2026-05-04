import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D",
        secondary: "#F5F5F5",
        accent: "#C6A36D",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Helvetica Neue", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
