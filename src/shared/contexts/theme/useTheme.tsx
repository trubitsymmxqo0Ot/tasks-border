import { useState } from "react";
import { ThemeList } from "./types";

export const DEFAULT_THEME = "light";

export const useSetTheme = () => {
  const [userTheme, setUserTheme] = useState<ThemeList>(DEFAULT_THEME);
  const onChangeTheme = (theme: ThemeList) => {
    setUserTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return {
    theme: userTheme,
    onChangeTheme,
  };
};

export const getTheme = () => {
  const [theme] = useState(() => {
    return (localStorage.getItem("theme") as ThemeList) ?? DEFAULT_THEME;
  });
  return theme;
};
