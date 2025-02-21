import React from "react";
import { PriceCardType } from "@/types";
import { Carousel, PriceCard } from "@/components";

interface Props {
  tariffs: Array<PriceCardType>;
}

const TariffSection: React.FC<Props> = ({ tariffs }) => {
  return (
    <section>
      <Carousel
        title={
          <h2 className="section-title line">
            My <span>Pricing</span>
          </h2>
        }
        slides={tariffs.map((tariff, idx) => (
          <PriceCard key={idx} {...tariff} />
        ))}
        slideClassNames=" ml-1-xs mr-1-xs flex-[0_0_100%] xl:flex-[0_0_30%]"
        controllerView={3}
      />
    </section>
  );
};

export default TariffSection;
