import React from "react";
import Image from "next/image";

import { ReviewCardType } from "@/types";
import { Icon } from "@/components";

interface Props extends ReviewCardType {
  classNames?: string;
}

const ReviewCard: React.FC<Props> = ({
  classNames,
  text,
  full_name,
  location,
}) => {
  return (
    <div className={`${classNames}`}>
      <p className="mb-2-md">{text}</p>
      <div>
        <Image />
        <div>
          <p>{full_name}</p>
          {location && <p>{location}</p>}
        </div>
        <Icon size={24} icon="" />
      </div>
    </div>
  );
};

export default ReviewCard;
