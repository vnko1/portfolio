"use client";
import React from "react";

import { setDataToLS, getDataFromLS } from "@/utils";

interface ThemeType {
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = React.createContext<ThemeType>({} as ThemeType);

interface Props extends React.PropsWithChildren {}

const Theme: React.FC<Props> = ({ children }) => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
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
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
