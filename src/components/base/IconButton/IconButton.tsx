import React, { HTMLAttributes } from "react";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

interface Props extends Partial<HTMLAttributes<HTMLButtonElement>> {
  icon: IconsEnum;
  classNames?: string;
  size?: number;
  disabled?: boolean;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const IconButton: React.FC<Props> = ({
  classNames,
  icon,
  size = 28,
  onClick,
  ...props
}) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center w-3-xs h-3-xs md:w-4-xs md:h-4-xs rounded-[50%] text-light-primary dark:text-dark-primary bg-light-light-100 dark:bg-dark-light-100 transition-all duration-300 hover:bg-light-accent-200 focus:bg-light-accent-200 dark:hover:bg-dark-accent-200 dark:focus:bg-dark-accent-200 hover:text-light-light-100 focus:text-light-light-100 dark:hover:text-dark-light-100 dark:focus:text-dark-light-100 disabled:bg-light-primary/20 dark:disabled:bg-dark-primary/20 disabled:text-light-primary disabled:dark:text-dark-primary ${classNames}`}
    {...props}
  >
    <Icon size={size} icon={icon} />
  </button>
);

export default IconButton;
