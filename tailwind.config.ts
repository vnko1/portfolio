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
      xxs: "1rem", // 16px
      xs: "1.125rem", // 18px
      sm: "1.25rem", // 20px
      md: "1.5rem", // 24px
      lg: "2rem", // 32px
      xl: "3rem", // 48px
      xxl: "4.5rem", // 72px
    },
    lineHeight: {
      2: "2.25rem",
      32: "2rem",
      36: "2.25rem",
      82: "5.125rem",
    },
    extend: {
      backgroundImage: {
        main: "url('/wallpaper.webp')",
      },
      spacing: {
        "0-sm": "4px",
        "0-md": "8px",
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
          light: "#ffffff",
          black: "#000000",
          accent: { 100: "#754EF9", 200: "#5B1BFF" },
          "text-main": "rgba(var(--color-text))",
          "text-primary": "rgba(var(--color-text-primary))",
          "text-secondary": "rgba(var(--color-text-secondary))",
        },
        dark: {
          primary: "#121212",
          secondary: "#FFDF00",
          light: "#e0e0e0",
          black: "#000000",
          accent: { 100: "#754EF9", 200: "#5B1BFF" },
          "text-main": "rgba(var(--color-dark-text))",
          "text-primary": "rgba(var(--color-dark-text-primary))",
          "text-secondary": "rgba(var(--color-dark-text-secondary))",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
