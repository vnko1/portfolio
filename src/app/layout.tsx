import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@/styles/globals.css";


const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Andrii Valenko portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
        <body className={inter.className}>
        {
            children
        }
        </body>
        </html>
    );
}
