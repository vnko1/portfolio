import React from "react";

import { ExperienceCardType, IconsEnum } from "@/types";
import { Icon } from "@/components";

interface Props extends ExperienceCardType {
  classNames?: string;
}

const ExperienceCard: React.FC<Props> = ({
  classNames,
  period,
  place,
  role,
  description,
}) => (
  <div
    className={`flex flex-col p-3-xs bg-primary-main/20 ${classNames || ""}`}
  >
    <div className="flex items-center justify-between mb-0-md">
      <p className="flex items-center gap-1-xs font-medium leading-24 text-primary-contrast">
        <Icon size={16} icon={IconsEnum.Point} />
        {period}
      </p>
      <p className="font-normal leading-24 text-primary-main">{place}</p>
    </div>
    <h3 className="mb-1-lg">{role}</h3>
    <p className="max-w-[76%] body">{description}</p>
  </div>
);

export default ExperienceCard;
