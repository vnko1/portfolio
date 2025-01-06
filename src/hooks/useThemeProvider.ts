import { createContext, useContext } from "react";
import { ThemeProviderType } from "@/context";

export const ThemeProviderContext =
  createContext<ThemeProviderType | null>(null);

export const useTheme = () => {
  const themeProvider = useContext(ThemeProviderContext);

  if (!themeProvider)
    throw new Error(
      "useTheme has to be used within <ThemeProviderContext.Provider>"
    );
  return themeProvider;
};
