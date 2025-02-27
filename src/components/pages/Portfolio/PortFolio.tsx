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
      {projectsRes.data.length ? (
        <>
          <div className="flex flex-col gap-1-xs 2xl:flex-row 2xl:items-center 2xl:justify-between mb-3-sm">
            <h2 className="section-title">
              My <span>Portfolio</span>
            </h2>
            <Categories categories={strapiApi.getCategories()} query={query} />
          </div>
          <Projects projects={projectsRes.data} />
        </>
      ) : (
        <h2 className="pt-3-xs text-lg md:text-xl text-center leading-48 md:leading-82">
          Ooops! <br /> There&apos;s nothing to show yet.
        </h2>
      )}
    </section>
  );
};

export default PortFolio;
