import React from "react";
import type { Metadata } from "next";
import { Poppins, Bai_Jamjuree, Inter } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";
import { NavLink } from "@/components";
import { IconsEnum } from "@/types";

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

export default function RootLayout({
  children,
  tabs,
}: Readonly<{
  children: React.ReactNode;
  tabs: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <NavLink icon={IconsEnum.Home} href={"/"}>
          Home
        </NavLink>
        <NavLink icon={IconsEnum.Frame} href={"/about"}>
          About
        </NavLink>
        <main>
          {children} {tabs}
        </main>
      </body>
    </html>
  );
}
