"use client";
import React from "react";
import Link from "next/link";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

interface Props {
  icon: IconsEnum;
  classNames?: string;
  href?: string;
  rel?: string;
  target?: string;
  size?: number;
  onClick?: (
    e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => void;
}
const IconButton: React.FC<Props> = ({
  classNames,
  href,
  rel,
  target,
  icon,
  size = 28,
  onClick,
}) => {
  const baseClassNames = `inline-flex items-center justify-center w-4-xs h-4-xs rounded-[50%] text-light-primary dark:text-dark-primary hover:bg-light-accent-200 focus:bg-light-accent-200 dark:hover:bg-dark-accent-200 dark:focus:bg-dark-accent-200 hover:text-light-light focus:text-light-light dark:hover:text-dark-light dark:focus:text-dark-light transition-all duration-300 ${classNames}`;

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    onClick && onClick(e);
  };

  if (href)
    return (
      <Link
        onClick={handleClick}
        href={href}
        rel={rel}
        target={target}
        className={baseClassNames}
      >
        <Icon size={size} icon={icon} />
      </Link>
    );
  return (
    <button onClick={handleClick} className={baseClassNames}>
      <Icon size={size} icon={icon} />
    </button>
  );
};

export default IconButton;
