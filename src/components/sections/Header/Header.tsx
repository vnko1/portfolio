import React from "react";
import Link from "next/link";

import { getNameFromLink, links } from "@/utils";
import { Logo, Menu, NavLink } from "@/components";

const Header = () => {
  return (
    <header className="flex items-center">
      <Logo classNames="py-3-sm xl:py-0" />
      <nav className="ml-5-xs hidden xl:block">
        {links.map((link, idx) => (
          <NavLink key={idx} {...link} text={getNameFromLink(link.href)} />
        ))}
      </nav>
      <Link className="hidden xl:inline-block ml-auto link" href={"/contact"}>
        Hire me
      </Link>
      <Menu classNames="ml-auto" />
    </header>
  );
};

export default Header;
