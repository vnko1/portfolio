import React from "react";

import { ServiceCardType } from "@/types";
import { ServiceCard } from "@/components";

interface Props {
  services: Array<ServiceCardType>;
}

const ServicesSection: React.FC<Props> = ({ services }) => {
  return (
    <section>
      <h2 className="section-title line">
        My <span>Service</span>
      </h2>
      <ul className="grid grid-cols-2 gap-3-xs">
        {services.map((service) => (
          <li key={service.documentId}>
            <ServiceCard {...service} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
