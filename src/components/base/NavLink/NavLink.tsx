"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

interface Props extends LinkProps {
  text: string;
  icon: IconsEnum;
  classNames?: string;
  size?: number;
}
const NavLink: React.FC<Props> = ({
  classNames,
  text,
  icon,
  size = 20,
  href,
  onClick,
  ...props
}) => {
  const pathname = usePathname();

  const baseClassNames = `cursor-pointer inline-flex items-center justify-center gap-0-lg px-2-xs py-3-xs transition-all duration-300 font-normal text-xxs leading-16 text-text-primary hover:bg-bg-paper focus:bg-bg-paper ${
    pathname === href ? "bg-bg-paper" : ""
  } ${classNames}`;

  return (
    <Link href={href} className={baseClassNames} {...props} onClick={onClick}>
      <Icon icon={icon} size={size} />
      {text}
    </Link>
  );
};
export default NavLink;
