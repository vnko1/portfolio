"use client";
import React, { use, useEffect } from "react";
import clsx from "clsx";

import { IconsEnum } from "@/types";
import { ThemeProviderContext } from "@/context";
import { useGetScreenSize } from "@/hooks";
import {
  Logo,
  BaseIcon,
  Navigation,
  DownloadButton,
} from "@/components";

interface MenuProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ active, setActive }) => {
  const { isDark, toggleTheme } = use(ThemeProviderContext);
  const screenSize = useGetScreenSize();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", active);
  }, [active]);

  useEffect(() => {
    if (screenSize > 1023) setActive(false);
  }, [screenSize, setActive]);

  const baseClassName = clsx(
    "flex flex-col gap-1-lg w-full py-xs bg-gl-0 dark:bg-gd-0 lg:hidden fixed top-0 left-0 right-0 bottom-0 transition-all duration-300 overflow-y-auto",
    active ? "opacity-100 h-screen" : "top-[-100%] h-0 opacity-0"
  );
  return (
    <div className={baseClassName}>
      <div className='flex justify-between px-xs pb-xs border-b border-b-gl-100 dark:border-b-gd-100'>
        <Logo setActive={setActive} />
        <button
          aria-label='close menu button'
          className='button icon'
          onClick={() => setActive(false)}>
          <BaseIcon icon={IconsEnum.Cross} />
        </button>
      </div>
      <Navigation classNames='px-xs pb-xs border-b border-b-gl-100 dark:border-b-gd-100' />
      <button
        className='flex justify-between px-xs text-base font-normal leading-xs text-gl-600 dark:text-gd-600'
        onClick={toggleTheme}
        aria-label='switch theme button'>
        Switch Theme
        {isDark ? (
          <BaseIcon icon={IconsEnum.Moon} />
        ) : (
          <BaseIcon icon={IconsEnum.Sun} />
        )}
      </button>
      <div className='px-xs'>
        <DownloadButton href={null} />
      </div>
    </div>
  );
};

export default Menu;
