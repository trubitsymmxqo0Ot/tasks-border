import { useState } from "react";
import { ThemeList } from "./types";

export const DEFAULT_THEME = "light";
const isServer = typeof window === "undefined";

export const setDefaultTheme = () => {
  if (isServer) return DEFAULT_THEME;
  const currentTheme =
    (localStorage.getItem("theme") as ThemeList) ?? DEFAULT_THEME;
  document.documentElement.setAttribute("data-custom-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
};

export const useTheme = () => {
  const [userTheme, setUserTheme] = useState<ThemeList>(() => {
    return isServer
      ? DEFAULT_THEME
      : (localStorage.getItem("theme") as ThemeList);
  });
  const onChangeTheme = (theme: ThemeList) => {
    setUserTheme(theme);
    if (!isServer) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-custom-theme", theme);
    }
  };

  return {
    theme: userTheme,
    onChangeTheme,
  };
};
