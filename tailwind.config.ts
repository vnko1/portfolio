import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: { sm: "375px", md: "744px", lg: "1024px", xl: "1440px" },
    fontSize: {
      sm: "1.25rem",
      md: "1.5rem",
      lg: "2.25rem",
      xl: "3rem",
    },
    extend: {
      colors: {
        background: "var(--primary)",
        foreground: "var(--secondary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
} satisfies Config;
