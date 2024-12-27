"use client";
import React, { FC, useEffect, useState } from "react";

import { ThemeProviderContext } from "@/hooks";
import { setDataToLS } from "@/utils";

import { ThemeProviderProps, ThemeType } from "./ThemeProvider.types";
import { StarFields } from "@/components";

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setDataToLS({ theme: newTheme });

    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  };
  console.log(theme);

  return (
    <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>
      <button onClick={toggleTheme} className='text-black'>
        THEME
      </button>
      <StarFields isLight={theme === "light"} />
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
