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
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          disabled: "var(--color-text-disabled)",
          hint: "var(--color-text-hint)",
          contrast: "var(--color-text-contrast)",
        },
        primary: {
          main: "var(--color-primary-main)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
          contrast: "var(--color-primary-contrast)",
        },
        secondary: {
          main: "var(--color-secondary-main)",
          light: "var(--color-secondary-light)",
          dark: "var(--color-secondary-dark)",
          contrast: "var(--color-secondary-contrast)",
        },
        bg: { paper: "var(--color-background-paper)" },
        error: { main: "var(--color-error-main)" },
        logo: "var(--color-logo)",
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
