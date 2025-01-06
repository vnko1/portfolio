import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: { sm: "375px", md: "768px", lg: "1024px" },
    letterSpacing: { tight: "-2%" },
    lineHeight: {
      xxs: "20px",
      xs: "24px",
      sm: "28px",
      md: "32px",
      lg: "36px",
      xl: "40px",
      xxl: "48px",
      "3xl": "72px",
    },
    fontSize: {
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      md: "1.125rem", // 18px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
      h3_sm: "1.5rem", // 24px
      h3_lg: "1.875rem", // 30px
      h2_sm: "1.125rem", // 18px
      h2_lg: "2.25rem", // 36px
      h1_sm: "2.25rem", // 36px
      h1_md: "3rem", // 48px
      h1_lg: "3.75rem", // 60px
    },

    extend: {
      maxWidth: { sm: "88%", md: "92%", lg: "96%" },
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
      },
      padding: {
        xxs: "8px",
        xs: "16px",
        sm: "24px",
        md: "32px",
        lg: "64px",
        xl: "80px",
        xxl: "96px",
      },
      colors: {
        gl: {
          0: "#ffffff",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
        gd: {
          0: "#030712",
          50: "#111827",
          100: "#1f2937",
          200: "#374151",
          300: "#4b5563",
          400: "#6b7280",
          500: "#9ca3af",
          600: "#d1d5db",
          700: "#e5e7eb",
          800: "#f3f4f6",
          900: "#f9fafb",
          950: "#ffffff",
        },
        emerald: "#10b981",
        red: "#b91c1c",
      },
      boxShadow: {
        md: "0px 4px 3px 0px rgba(0, 0, 0, 0.07), 0px 2px 2px 0px rgba(0, 0, 0, 0.06)",
        lg: "0px 4px 3px 0px rgba(0, 0, 0, 0.10), 0px 10px 8px 0px rgba(0, 0, 0, 0.04)",
        xl: "0px 25px 25px 0px rgba(0, 0, 0, 0.15)",
      },
      dropShadow: {
        md: "0px 4px 3px 0px rgba(0, 0, 0, 0.07), 0px 2px 2px 0px rgba(0, 0, 0, 0.06)",
        lg: "0px 4px 3px 0px rgba(0, 0, 0, 0.10), 0px 10px 8px 0px rgba(0, 0, 0, 0.04)",
        xl: "0px 25px 25px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
