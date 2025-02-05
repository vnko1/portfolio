import React from "react";
import type {Metadata} from "next";
import {Roboto, League_Gothic, League_Spartan} from "next/font/google";
import "@/styles/globals.css";


const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});
const gothic = League_Gothic({
    variable: "--font-gothic",
    subsets: ["latin"],
    display: "swap",
    weight: ["400",],
})
const spartan = League_Spartan({
    variable: "--font-spartan",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
})


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
        <body className={`${roboto.variable} ${gothic.variable} ${spartan.variable}`}>
        {
            children
        }
        </body>
        </html>
    );
}
