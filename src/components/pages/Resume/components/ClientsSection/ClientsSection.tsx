import React from "react";

import { ClientType } from "@/types";
import { multiplyArray } from "@/utils";
import { Carousel, ClientCard } from "@/components";

interface Props {
  clients: ClientType[];
}

const ClientsSection: React.FC<Props> = ({ clients }) =>
  clients.length ? (
    <section>
      <Carousel
        title={
          <h2 className="section-title">
            Worked with <span>Brands</span>
          </h2>
        }
      >
        <ul className="flex">
          {multiplyArray(clients, 2).map((clients, idx) => (
            <li key={idx} className="w-[200px]">
              <ClientCard {...clients} />
            </li>
          ))}
        </ul>
      </Carousel>
    </section>
  ) : null;
export default ClientsSection;
