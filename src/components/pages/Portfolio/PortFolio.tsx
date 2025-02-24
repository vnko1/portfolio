import React from "react";
import { strapiApi } from "@/api";
import { Categories, Projects } from "./components";

interface Props {
  query?: string;
}
const PortFolio: React.FC<Props> = async ({ query }) => {
  const projectsRes = await strapiApi.getPortfolio(query);

  return (
    <section>
      <div className="flex flex-col gap-1-xs 2xl:flex-row 2xl:items-center 2xl:justify-between mb-3-sm">
        <h2 className="section-title">
          My <span>Portfolio</span>
        </h2>
        <Categories categories={strapiApi.getCategories()} query={query} />
      </div>
      <Projects projects={projectsRes.data} />
    </section>
  );
};

export default PortFolio;
