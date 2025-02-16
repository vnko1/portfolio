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
    <div className="flex flex-col items-center justify-between pb-4-xs pt-[120px] h-screen bg-light-accent-200 dark:bg-dark-accent-200 mix-blend-multiply bg-no-repeat bg-cover bg-main">
      <SwitchButton
        onChange={toggleTheme}
        isActive={isDark}
        classNames="-rotate-90 w-[298px] top-[120px]"
      />
      {url && (
        <IconButton
          icon={IconsEnum.Print}
          size={20}
          onClick={() => handlePrint(url)}
        />
      )}
    </div>
  );
};

export default LeftSideBar;
