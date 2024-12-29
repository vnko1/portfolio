"use client";

import React, { useEffect, useState } from "react";

import { useTheme } from "@/hooks";
import {
  Wrapper,
  Menu,
  Logo,
  BurgerIcon,
  Navigation,
  MoonIcon,
  SunIcon,
  DownloadButton,
} from "@/components";
import clsx from "clsx";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const onHandleScroll = () => {
      setTimeout(() => {
        setScrollY(document.documentElement.scrollTop);
      }, 100);
    };

    window.addEventListener("scroll", onHandleScroll);

    return () => window.removeEventListener("scroll", onHandleScroll);
  }, []);
  const headerClassNames = clsx(
    "sticky left-0 -top-px overflow-hidden transition-all duration-300 bg-gl-0 dark:bg-gd-0",
    scrollY > 0 ? "bg-gl-50 dark:bg-gd-50 backdrop-blur-xl" : ""
  );

  return (
    <Wrapper tag='header' classNames={headerClassNames} id='header'>
      <Logo />
      <button
        aria-label='open menu button'
        onClick={() => setActive(true)}
        className='button icon lg:hidden'>
        <BurgerIcon />
      </button>
      <div className='hidden lg:flex items-center'>
        <Navigation classNames='pr-2-md border-r border-r-gl-100 dark:border-r-gd-100' />
        <div className='pl-2-md flex gap-1-lg items-center'>
          <button
            className='button icon'
            onClick={toggleTheme}
            aria-label='switch theme button'>
            {isDark ? <MoonIcon /> : <SunIcon />}
          </button>
          <DownloadButton
            href='/cv.pdf'
            download='Example-PDF-document'
          />
        </div>
      </div>
      <Menu setActive={setActive} active={active} />
    </Wrapper>
  );
};

export default Header;
