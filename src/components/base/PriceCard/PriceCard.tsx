import React from "react";

import { PriceCardType } from "@/types";

interface Props extends PriceCardType {
  classNames?: string;
}

const PriceCard: React.FC<Props> = ({ classNames, tariff }) => {
  return (
    <div className={`flex flex-col px-4-xs py-4-xl ${classNames}`}>
      PriceCard
    </div>
  );
};

export default PriceCard;
