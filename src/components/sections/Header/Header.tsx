"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { IconsEnum } from "@/types";
import { useTheme } from "@/hooks";
import {
  Wrapper,
  Menu,
  Logo,
  Navigation,
  BaseIcon,
  DownloadButton,
} from "@/components";

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
    "py-xs border-b border-b-gl-100 dark:border-b-gd-100 sticky z-[500] left-0 top-0 transition-all duration-300 bg-gl-0 dark:bg-gd-0",
    scrollY > 0 ? "bg-gl-50 dark:bg-gd-50 backdrop-blur-xl" : ""
  );

  return (
    <Wrapper tag='header' classNames={headerClassNames} id='header'>
      <Logo />
      <button
        aria-label='open menu button'
        onClick={() => setActive(true)}
        className='button icon lg:hidden'>
        <BaseIcon icon={IconsEnum.Burger} />
      </button>
      <div className='hidden lg:flex items-center'>
        <Navigation classNames='pr-2-md border-r border-r-gl-100 dark:border-r-gd-100' />
        <div className='pl-2-md flex gap-1-lg items-center'>
          <button
            className='button icon'
            onClick={toggleTheme}
            aria-label='switch theme button'>
            {isDark ? (
              <BaseIcon icon={IconsEnum.Moon} />
            ) : (
              <BaseIcon icon={IconsEnum.Sun} />
            )}
          </button>
          <DownloadButton href={null} />
        </div>
      </div>
      <Menu setActive={setActive} active={active} />
    </Wrapper>
  );
};

export default Header;
