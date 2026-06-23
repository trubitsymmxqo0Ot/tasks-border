import { createContext } from "react";
import { ThemeList } from "./types";

const ThemeContext = createContext<ThemeList | null>(null);
export const ThemeProvider = ThemeContext.Provider;

