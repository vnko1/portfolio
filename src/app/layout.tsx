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

const contacts = [
  { link: "/", title: "/", text: "+380933944629", id: 1, documentId: "1" },
  {
    link: "/",
    title: "/",
    text: "andreyvalenko@gmail.com",
    id: 1,
    documentId: "2",
  },
];
const soc = [
  {
    link: "/",
    icon: { url: "/user.svg", id: 0, documentId: "asd" },
    text: "+380933944629",
    id: 1,
    documentId: "1",
  },
  {
    link: "/",
    icon: { url: "/user.svg", id: 0, documentId: "asd" },
    text: "+380933944629",
    id: 1,
    documentId: "2",
  },
  {
    link: "/",
    icon: { url: "/user.svg", id: 0, documentId: "asd" },
    text: "+380933944629",
    id: 1,
    documentId: "3",
  },
];

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
              <Profile
                banner={{ id: 1, documentId: "as", url: "/wallpaper.webp" }}
                full_name="Andrii Valenko"
                role="Web Developer"
                city="Kyiv"
                contact_links={contacts}
                social_links={soc}
              />
              {children}
            </main>
          </AppWrapper>
        </Theme>
      </body>
    </html>
  );
}
