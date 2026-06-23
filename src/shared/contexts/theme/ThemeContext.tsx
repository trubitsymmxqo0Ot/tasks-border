"use client";

import { createContext, useContext } from "react";
import { ThemeList } from "./types";

const ThemeContext = createContext<ThemeList | null>(null);
export const ThemeProvider = ThemeContext.Provider;

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("Theme context is empty!");
  }
  return context;
};
