import { useState } from "react";
import { ThemeList } from "./types";

export const DEFAULT_THEME = "light";
const isServer = typeof window === "undefined";

export const useSetTheme = () => {
  const [userTheme, setUserTheme] = useState<ThemeList>(DEFAULT_THEME);
  const onChangeTheme = (theme: ThemeList) => {
    setUserTheme(theme);
    if (!isServer) {
      localStorage.setItem("theme", theme);
    }
  };

  return {
    theme: userTheme,
    onChangeTheme,
  };
};

export const getTheme = () => {
  if (isServer) return DEFAULT_THEME;
  const [theme] = useState(() => {
    return localStorage.getItem("theme") as ThemeList;
  });
  return theme;
};
