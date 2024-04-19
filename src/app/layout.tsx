import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "../styles/css/style.css";
import "../styles/scss";

const source = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfiolio",
  description: "Andrii Valenko portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={source.className}>{children}</body>
    </html>
  );
}
