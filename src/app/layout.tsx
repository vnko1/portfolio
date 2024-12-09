import type { Metadata } from "next";

import "../styles/index.scss";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Andrii Valenko portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
