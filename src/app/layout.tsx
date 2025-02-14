import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/lib/extensions/string";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Andrii Valenko portfolio",
};

export const revalidate = 300;

export default function RootLayout({
  children,
  sections,
}: Readonly<{
  children: React.ReactNode;
  sections: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <main>
          {children} {sections}
        </main>
      </body>
    </html>
  );
}
