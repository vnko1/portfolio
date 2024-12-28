"use client";
import React, { FC, useEffect } from "react";

import { ThemeProviderContext } from "@/hooks";
import { setDataToLS, getDataFromLS } from "@/utils";

import { ThemeProviderProps } from "./ThemeProvider.types";

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  useEffect(() => {
    const currentTheme = getDataFromLS<string>("theme");
    if (
      currentTheme === "dark" ||
      (currentTheme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setDataToLS({ theme: "light" });
    } else {
      document.documentElement.classList.add("dark");
      setDataToLS({ theme: "dark" });
    }
  };

  return (
    <ThemeProviderContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
