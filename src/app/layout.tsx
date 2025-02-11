import React from "react";
import type { Metadata } from "next";
import { Poppins, Bai_Jamjuree } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const baj = Bai_Jamjuree({
  variable: "--font-bai",
  subsets: ["latin"],
  display: "swap",
  weight: "500",
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
    <html lang="en">
      <body className={`${poppins.variable} ${baj.variable}`}>{children}</body>
    </html>
  );
}
