import type {Config} from "tailwindcss";

export default {
    darkMode: "selector",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {sm: "372px", xl: "1440px"},
        fontSize: {

            xs: "1rem", // 16px
            sm: "1.25rem", // 20px
            md: "1.5rem", // 24px
            lg: "2rem", // 32px
            xl: "3rem", // 48px
            xxl: "4rem", // 64px
            "3xl": "6rem",// 96px

        },
        extend: {
            maxWidth: {sm: "80%", xl: "82%"},
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
            colors: {
                black: "#000",
                white: "#ffffff",
                grey: "#D9D9D9",
            },
            fontFamily: {
                roboto: ['var(--font-roboto)'],
                gothic: ['var(--font-gothic)'],
                spartan: ["var(--font-spartan)"]
            },
        },
    },
    plugins: [],
} satisfies Config;
