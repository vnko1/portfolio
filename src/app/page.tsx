import { notFound } from "next/navigation";

import Api from "@/api/apiInstance";
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

const strapiApi = new Api(process.env.BASE_URL as string);

export default async function Home() {
  const res = await strapiApi.get<[PortfolioType]>("/api/portfolio");

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
