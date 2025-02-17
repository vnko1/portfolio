import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/extensions/string";
import "@/styles/globals.css";

import { Theme } from "@/context";
import { AppWrapper, Header, Profile } from "@/components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Andrii Valenko portfolio",
};

export const revalidate = 300;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme>
          <AppWrapper url={"/"}>
            <Header />
            <main className="container">
              <Profile />
              {children}
            </main>
          </AppWrapper>
        </Theme>
      </body>
    </html>
  );
}
