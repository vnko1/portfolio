import React from "react";
import { PriceCardType } from "@/types";
import { Carousel, PriceCard } from "@/components";

interface Props {
  tariffs: Array<PriceCardType>;
}

const TariffSection: React.FC<Props> = ({ tariffs }) =>
  tariffs ? (
    <section>
      <Carousel
        title={
          <h2 className="section-title">
            My <span>Pricing</span>
          </h2>
        }
      >
        <ul className="flex">
          {tariffs.map((tariff) => (
            <li
              key={tariff.id}
              className="ml-1-xs mr-1-xs flex-[0_0_100%] 2xl:flex-[0_0_30%]"
            >
              <PriceCard {...tariff} />
            </li>
          ))}
        </ul>
      </Carousel>
    </section>
  ) : null;

export default TariffSection;
