import { ReactNode } from "react";

export type ThemeType = "light" | "dark";

export type ThemeProviderType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export type ThemeProviderProps = { children: ReactNode };
