import React from "react";
import { strapiApi } from "@/api";

interface Props {
  query?: string;
}
const PortFolio: React.FC<Props> = async ({ query }) => {
  const res = await strapiApi.getPortfolio(query);

  return <section>PortFolio</section>;
};

export default PortFolio;
