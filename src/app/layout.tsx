import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/extensions/string";
import "@/styles/globals.css";

import { getCommonData } from "@/lib";
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
  const [commonData, cvData] = await getCommonData();

  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme>
          <AppWrapper url={cvData.data.cv_link}>
            <Header />
            <div className="grow flex flex-col gap-3-xs 2xl:flex-row 2xl:justify-between 2xl:gap-6-xs overflow-x-hidden">
              <Profile {...commonData.data} />
              {children}
            </div>
          </AppWrapper>
        </Theme>
      </body>
    </html>
  );
}
