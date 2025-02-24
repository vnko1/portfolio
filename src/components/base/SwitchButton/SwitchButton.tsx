"use client";
import React from "react";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

interface Props {
  classNames?: string;
  onChange: () => void;
  isActive: boolean;
}

const SwitchButton: React.FC<Props> = ({ classNames, onChange, isActive }) => {
  return (
    <label
      className={`relative flex cursor-pointer select-none items-center justify-between rounded-[23px] bg-light-accent-100 dark:bg-dark-accent-100 p-1 ${classNames}`}
    >
      <input
        type="checkbox"
        name="switch"
        id="switch"
        checked={isActive}
        onChange={onChange}
        className="sr-only"
      />

      <span
        className={`flex items-center space-x-[6px] rounded-[23px] py-1 xl:py-2 px-1-xs xl:px-1-xl text-3xs xl:text-xxs font-medium transition-all duration-150 ${
          !isActive
            ? "text-light-primary dark:text-dark-primary bg-light-light-100 dark:bg-dark-light-100"
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
        className={`flex items-center space-x-[6px] rounded-[23px] py-1 xl:py-2 px-1-xs xl:px-1-xl text-3xs xl:text-xxs font-medium transition-all duration-150 ${
          isActive
            ? "text-light-light-100 dark:text-dark-light-100 bg-light-primary dark:bg-dark-primary"
            : "text-light-light-100 dark:text-dark-light-100"
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
