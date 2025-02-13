"use client";
import React from "react";
import Link, { LinkProps } from "next/link";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";
import { useRouter } from "next/navigation";
import { sleep } from "@/utils";

interface Props extends LinkProps {
  children: React.ReactNode;
  icon: IconsEnum;
  classNames?: string;
  size?: number;
}
const NavLink: React.FC<Props> = ({
  classNames,
  children,
  icon,
  size = 20,
  href,
  ...props
}) => {
  const { push } = useRouter();
  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    document.body.classList.add("page-transition");
    await sleep(300);
    push(href as string);
    await sleep(300);
    document.body.classList.remove("page-transition");
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-0-lg px-2-xs py-3-xs transition-all duration-300 font-normal text-xxs leading-16 text-light-primary dark:text-dark-primary hover:bg-light-secondary focus:bg-light-secondary dark:hover:bg-dark-secondary dark:focus:bg-dark-secondary ${classNames}`}
      {...props}
    >
      <Icon icon={icon} size={size} />
      {children}
    </Link>
  );
};
export default NavLink;
