import React from "react";
import Link from "next/link";

import { Logo } from "@/components";

const Header = () => {
  return (
    <header className="flex items-center">
      <Logo />
      <nav className="ml-5-xs"></nav>
      <Link
        className="inline-block ml-auto py-1-sm px-2-md rounded-lg border border-light-header-btn dark:border-dark-header-btn bg-light-primary dark:bg-dark-primary font-medium leading-20 text-light-light dark:text-dark-light"
        href={"/contact"}
      >
        Hire me
      </Link>
    </header>
  );
};

export default Header;
