import React from "react";

import { ClientType } from "@/types";
import { Carousel, ClientCard } from "@/components";

interface Props {
  clients: ClientType[];
}

const ClientsSection: React.FC<Props> = ({ clients }) => {
  return clients.length ? (
    <section>
      <Carousel
        title={
          <h2 className="section-title">
            Worked with <span>Brands</span>
          </h2>
        }
      >
        <ul className="flex">
          {clients.map((clients) => (
            <li key={clients.id} className="flex-[0_0_200px] ml-1-xs mr-1-xs">
              <ClientCard {...clients} />
            </li>
          ))}
        </ul>
      </Carousel>
    </section>
  ) : null;
};

export default ClientsSection;
