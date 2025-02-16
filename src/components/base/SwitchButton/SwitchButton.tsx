"use client";
import React from "react";

import { IconsEnum } from "@/types";
import { ThemeContext } from "@/context";
import { Icon } from "@/components";

interface Props {
  classNames?: string;
}

const SwitchButton: React.FC<Props> = ({ classNames }) => {
  const { isDark, toggleTheme } = React.use(ThemeContext);
  return (
    <label
      className={`relative inline-flex cursor-pointer select-none items-center justify-center rounded-[23px] bg-light-accent-100 dark:bg-dark-accent-100 p-1 ${classNames}`}
    >
      <input
        type="checkbox"
        name="switch"
        id="switch"
        checked={isDark}
        onChange={toggleTheme}
        className="sr-only"
      />

      <span
        className={`flex items-center space-x-[6px] rounded-[23px] py-2 px-[18px] text-xxs font-medium transition-all duration-150 ${
          !isDark
            ? "text-light-primary dark:text-dark-primary bg-light-light dark:bg-dark-light"
            : "text-light-light dark:text-dark-light"
        }`}
      >
        <Icon
          size={16}
          icon={IconsEnum.Light}
          className="mr-[6px] fill-current"
        />
        Light Mode
      </span>
      <span
        className={`flex items-center space-x-[6px] rounded-[23px] py-2 px-[18px] text-xxs font-medium transition-all duration-150 ${
          isDark
            ? "text-light-light dark:text-dark-light bg-light-primary dark:bg-dark-primary"
            : "text-light-light dark:text-dark-light"
        }`}
      >
        <Icon
          size={16}
          icon={IconsEnum.Dark}
          className="mr-[6px] fill-current"
        />
        Dark Mode
      </span>
    </label>
  );
};

export default SwitchButton;
