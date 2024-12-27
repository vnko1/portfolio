"use client";
import React, { FC, useEffect, useState } from "react";

import { ThemeProviderContext } from "@/hooks";
import { getDataFromLS, setDataToLS } from "@/utils";

import { ThemeProviderProps, ThemeType } from "./ThemeProvider.types";

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    // setTheme(getDataFromLS<ThemeType>("theme") || "light");
    document.documentElement.classList.toggle(
      theme,
      localStorage.theme === theme ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setDataToLS({ theme: newTheme });
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
