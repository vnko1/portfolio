import { createContext, useContext } from "react";
import { ThemeProviderType } from "@/context";

export const ThemeProviderContext =
  createContext<ThemeProviderType | null>(null);

export const useThemeProvider = () => {
  const themeProviderContext = useContext(ThemeProviderContext);

  if (!themeProviderContext)
    throw new Error(
      "useThemeProvider has to be used within <ThemeProviderContext.Provider>"
    );
  return themeProviderContext;
};
