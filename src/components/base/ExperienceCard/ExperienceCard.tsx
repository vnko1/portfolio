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
    className={`flex flex-col p-3-xs bg-light-primary/20 dark:bg-dark-primary/20 ${
      classNames || ""
    }`}
  >
    <div className="flex items-center justify-between mb-0-md">
      <p className="flex items-center gap-1-xs font-medium leading-24 text-light-accent-100 dark:text-dark-accent-100">
        <Icon size={16} icon={IconsEnum.Point} />
        {period}
      </p>
      <p className="font-normal leading-24 text-light-primary dark:text-dark-primary">
        {place}
      </p>
    </div>
    <h3 className="mb-1-lg">{role}</h3>
    <p className="max-w-[76%] body">{description}</p>
  </div>
);

export default ExperienceCard;
