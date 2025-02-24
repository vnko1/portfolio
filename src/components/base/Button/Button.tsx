"use client";
import React from "react";
import Link from "next/link";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

interface Props {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  href?: string;
  rel?: string;
  target?: string;
  variant?: "contained" | "outlined";
  icon?: IconsEnum;
  classNames?: string;
  reverse?: boolean;
  size?: number;
  disabled?: boolean;
  onClick?: (
    e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => void;
}

const Button: React.FC<Props> = ({
  children,
  variant = "contained",
  href,
  rel,
  target,
  classNames,
  icon,
  size = 28,
  reverse = false,
  type,
  disabled,
  onClick,
}) => {
  const baseClassNames = `inline-flex items-center justify-center gap-1-xs px-4-xs py-2-xs rounded-xl font-medium transition-all duration-300 ${
    reverse ? "flex-row-reverse" : ""
  }`;

  const classNamesMap = {
    contained: `${baseClassNames} text-xxs leading-20 bg-light-accent-200 dark:bg-dark-accent-200 hover:bg-transparent focus:bg-transparent text-light-light-100 dark:text-dark-light-100 hover:text-light-primary dark:hover:text-dark-primary focus:text-light-primary dark:focus:text-dark-primary hover:shadow-sm ${
      classNames || ""
    }`,
    outlined: `${baseClassNames} text-xxs leading-28 tracking-[0.72px] text-light-primary dark:text-dark-primary hover:shadow-sm ${
      classNames || ""
    }`,
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    if (typeof onClick === "function") onClick(e);
  };

  if (href)
    return (
      <Link
        href={href}
        rel={rel}
        target={target}
        className={classNamesMap[variant]}
      >
        {children} {icon ? <Icon size={size} icon={icon} /> : null}
      </Link>
    );
  return (
    <button
      type={type}
      onClick={handleClick}
      className={classNamesMap[variant]}
      disabled={disabled}
    >
      {children} {icon ? <Icon size={size} icon={icon} /> : null}
    </button>
  );
};

export default Button;
