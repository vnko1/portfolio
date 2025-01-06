import { ReactNode } from "react";

export type ThemeProviderType = {
  toggleTheme: () => void;
  isDark: boolean;
};

export type ThemeProviderProps = { children: ReactNode };
