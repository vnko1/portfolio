"use client";
import React, { useState } from "react";

import { IconsEnum } from "@/types";
import { Icon, Logo, NavLink } from "@/components";
import Link from "next/link";
import { getNameFromLink, links } from "@/utils";

interface Props {
  classNames?: string;
}
const Menu: React.FC<Props> = ({ classNames }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`xl:hidden ${classNames}`}>
      <button onClick={() => setActive(true)}>
        <Icon icon={IconsEnum.Burger} size={24} />
      </button>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 p-3-sm flex flex-col justify-between gap-2-xs bg-light-light dark:bg-dark-light overflow-y-auto opacity-0 -translate-y-full transition-all duration-300 ${
          active ? "opacity-100 translate-y-0" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <Logo />
          <button onClick={() => setActive(false)} className="block ml-auto">
            <Icon icon={IconsEnum.Cross} size={24} />
          </button>
        </div>
        <nav className="flex flex-col">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              {...link}
              onClick={() => setActive(false)}
              text={getNameFromLink(link.href)}
            />
          ))}
        </nav>
        <Link
          onClick={() => setActive(false)}
          className="inline-block text-center link"
          href={"/contact"}
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default Menu;
