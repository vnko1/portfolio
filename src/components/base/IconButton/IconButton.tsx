import React from "react";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

interface Props {
  icon: IconsEnum;
  classNames?: string;
  size?: number;
  download?: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const IconButton: React.FC<Props> = ({
  classNames,
  icon,
  size = 28,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center w-3-xs h-3-xs md:w-4-xs md:h-4-xs rounded-[50%] text-light-primary dark:text-dark-primary bg-light-light dark:bg-dark-light hover:bg-light-accent-200 focus:bg-light-accent-200 dark:hover:bg-dark-accent-200 dark:focus:bg-dark-accent-200 hover:text-light-light focus:text-light-light dark:hover:text-dark-light dark:focus:text-dark-light transition-all duration-300 ${classNames}`}
  >
    <Icon size={size} icon={icon} />
  </button>
);

export default IconButton;
