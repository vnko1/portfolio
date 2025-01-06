import { notFound } from "next/navigation";

import { strapiApi } from "@/api";
import { PortfolioType } from "@/types";
import {
  About,
  Experience,
  Hero,
  Skills,
  Work,
  Contact,
} from "@/components";

export const revalidate = 300;

export default async function Home() {
  const res = await strapiApi.request<[PortfolioType]>(
    "/api/portfolio",
    { method: "GET" }
  );

  if (
    typeof res === "string" ||
    res instanceof Blob ||
    res instanceof Error
  )
    notFound();

  const portfolioData = res[0];

  return (
    <main>
      <Hero {...portfolioData} />
      <About {...portfolioData} />
      <Skills {...portfolioData} />
      <Experience {...portfolioData} />
      <Work {...portfolioData} />
      <Contact {...portfolioData} />
    </main>
  );
}
