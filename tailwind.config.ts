import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "3xs": "0.75rem", // 12px
      xxs: "1rem", // 16px
      xs: "1.125rem", // 18px
      sm: "1.25rem", // 20px
      md: "1.5rem", // 24px
      lg: "2rem", // 32px
      xl: "3rem", // 48px
      xxl: "4.5rem", // 72px
    },
    lineHeight: {
      12: "0.75rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      26: "1.625rem",
      28: "1.75rem",
      30: "1.875rem",
      32: "2rem",
      34: "2.125rem",
      36: "2.25rem",
      48: "3rem",
      82: "5.125rem",
    },
    extend: {
      gridTemplateColumns: {
        wrapper: "minmax(5%, 1fr) minmax(0, 1520px) minmax(5%, 1fr)",
        page: "30% 65%",
      },
      backgroundImage: {
        main: "url('/wallpaper.webp')",
      },
      spacing: {
        "0-sm": "2px",
        "0-md": "4px",
        "0-lg": "6px",
        "0-xl": "8px",
        "1-xs": "10px",
        "1-sm": "12px",
        "1-md": "14px",
        "1-lg": "16px",
        "1-xl": "18px",
        "2-xs": "20px",
        "2-sm": "22px",
        "2-md": "24px",
        "2-lg": "26px",
        "2-xl": "28px",
        "3-xs": "30px",
        "3-sm": "32px",
        "3-md": "34px",
        "3-lg": "36px",
        "3-xl": "38px",
        "4-xs": "40px",
        "4-sm": "42px",
        "4-md": "44px",
        "4-lg": "46px",
        "4-xl": "48px",
        "5-xs": "50px",
        "5-sm": "52px",
        "5-md": "54px",
        "5-lg": "56px",
        "5-xl": "58px",
        "6-xs": "60px",
      },
      colors: {
        light: {
          primary: "#1E1E1E",
          secondary: "#FFDF00",
          light: { 100: "#ffffff", 200: "#fafafa" },
          black: { 100: "#000000", 200: "#111" },
          accent: { 100: "#754EF9", 200: "#5B1BFF" },
          "text-main": "var(--color-text)",
          "text-primary": "var(--color-text-primary)",
          "text-secondary": "var(--color-text-secondary)",
          grey: { 100: "var(--color-border)", 200: "#c4c4c4" },
          line: "var(--color-line)",
          "header-btn": "var(---color-header-btn)",
        },
        dark: {
          primary: "#121212",
          secondary: "#FFDF00",
          light: { 100: "#e0e0e0", 200: "#fafafa" },
          black: { 100: "#000000", 200: "#111" },
          accent: { 100: "#754EF9", 200: "#5B1BFF" },
          "text-main": "var(--color-dark-text)",
          "text-primary": "var(--color-dark-text-primary)",
          "text-secondary": "var(--color-dark-text-secondary)",
          grey: { 100: "var(--color-dark-border)", 200: "#c4c4c4" },
          line: "var(--color-dark-line)",
          "header-btn": "var(---color-dark-header-btn)",
        },
      },
      dropShadow: {
        sm: "2px 4px 36px rgba(17, 17, 17, 0.05)",
      },

      boxShadow: {
        sm: "0 15px 30px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
