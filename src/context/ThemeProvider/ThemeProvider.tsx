"use client";
import React, { FC, useEffect, useState } from "react";

import { ThemeProviderContext } from "@/hooks";
import { setDataToLS, getDataFromLS } from "@/utils";

import { ThemeProviderProps } from "./ThemeProvider.types";
import { StarFields } from "@/components";

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = getDataFromLS<string>("theme");
    if (
      currentTheme === "dark" ||
      (currentTheme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setDataToLS({ theme: "light" });
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDataToLS({ theme: "dark" });
      setIsDark(true);
    }
  };

  return (
    <ThemeProviderContext.Provider value={{ toggleTheme }}>
      <button onClick={toggleTheme} className='text-black'>
        THEME
      </button>
      <StarFields isLight={!isDark} />
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
