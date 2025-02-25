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
    className={`inline-flex items-center justify-center w-3-xs h-3-xs md:w-4-xs md:h-4-xs rounded-[50%] text-primary-main bg-primary-light transition-all duration-300 hover:bg-secondary-contrast focus:bg-secondary-contrast hover:text-primary-light focus:text-primary-light disabled:bg-secondary-dark disabled:opacity-20 disabled:text-primary-main ${classNames}`}
    {...props}
  >
    <Icon size={size} icon={icon} />
  </button>
);

export default IconButton;
