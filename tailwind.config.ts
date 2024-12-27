import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: { sm: "375px", md: "744px", lg: "1024px", xl: "1440px" },
    fontSize: {
      xs: "0.75rem",
      sm: "1.25rem",
      md: "1.5rem",
      lg: "2.25rem",
      xl: "3rem",
    },
    colors: {
      dark: "#222",
      light: "#fff",
      accent: "#f0cfaa",
    },
  },
  plugins: [],
} satisfies Config;
