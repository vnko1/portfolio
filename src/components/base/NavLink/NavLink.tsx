"use client";
import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { IconsEnum } from "@/types";
import { sleep } from "@/utils";
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
  const { push } = useRouter();

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (typeof onClick === "function") {
      onClick(e);
      return push(href as string);
    }
    if (href === pathname) return;

    const section = document.querySelector(".page");
    section?.classList.add("page-transition");
    await sleep(500);
    push(href as string);
    await sleep(500);
    section?.classList.remove("page-transition");
  };

  const baseClassNames = `cursor-pointer inline-flex items-center justify-center gap-0-lg px-2-xs py-3-xs transition-all duration-300 font-normal text-xxs leading-16 text-light-primary dark:text-dark-primary hover:bg-light-secondary focus:bg-light-secondary dark:hover:bg-dark-secondary dark:focus:bg-dark-secondary ${
    pathname === href ? "bg-light-secondary dark:bg-dark-secondary" : ""
  } ${classNames}`;

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={baseClassNames}
      {...props}
    >
      <Icon icon={icon} size={size} />
      {text}
    </Link>
  );
};
export default NavLink;
