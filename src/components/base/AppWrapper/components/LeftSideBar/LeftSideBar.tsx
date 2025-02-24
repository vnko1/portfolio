"use client";
import React from "react";

import { IconsEnum } from "@/types";
import { ThemeContext } from "@/context";
import { handlePrint } from "@/utils";
import { IconButton, SwitchButton } from "@/components";

interface Props {
  url?: string | null;
}
const LeftSideBar: React.FC<Props> = ({ url }) => {
  const { isDark, toggleTheme } = React.use(ThemeContext);

  return (
    <div className="hidden xl:flex flex-col items-center justify-between pb-4-xs xl:pt-[120px] h-screen bg-light-accent-200 dark:bg-dark-accent-200 mix-blend-multiply bg-no-repeat bg-cover bg-main">
      <SwitchButton
        onChange={toggleTheme}
        isActive={isDark}
        classNames="top-[120px] -rotate-90 w-[220px] sm:w-[298px]"
      />
      {url && (
        <div className="flex flex-col items-center">
          <IconButton
            icon={IconsEnum.Print}
            size={20}
            onClick={() => handlePrint(url)}
            classNames="mb-1-sm"
          />
          <p className="hidden sm:block font-medium text-3xs leading-12 md:text-xxs md:leading-16 text-light-light-100 dark:text-dark-light-100">
            Print Resume
          </p>
        </div>
      )}
    </div>
  );
};

export default LeftSideBar;
