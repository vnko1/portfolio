import { ReactNode } from "react";

export type ThemeProviderType = {
  toggleTheme: () => void;
};

export type ThemeProviderProps = { children: ReactNode };
