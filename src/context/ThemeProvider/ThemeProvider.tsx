"use client";
import React, { createContext, FC, useEffect, useState } from "react";

import { setDataToLS, getDataFromLS } from "@/utils";

import {
  ThemeProviderProps,
  ThemeProviderType,
} from "./ThemeProvider.types";

export const ThemeProviderContext = createContext<ThemeProviderType>(
  {} as ThemeProviderType
);

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
    <ThemeProviderContext.Provider value={{ toggleTheme, isDark }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
