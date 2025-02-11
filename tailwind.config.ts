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
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      md: "1.25rem", // 20px
      lg: "1.5rem", // 24px
      xl: "2rem", // 32px
    },

    extend: {
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
        primary: "#5671A6", // indigo
        secondary: "#B2CAD8", // pastel
        gray: "#616161", // dark-gray
        dark: "#383838", // charcoal
        light: "#ffffff", // white
        muted: "#616161", // silver-gray
        black: "#000000", // black
        accent: "#B3CBD9", // ice
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        bai: ["var(--font-bai)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
