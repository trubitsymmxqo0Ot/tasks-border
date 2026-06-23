import { ThemeList } from "./types";

const isServer = typeof window === 'undefined';
const DEFAULT_THEME = 'dark';

export const getTheme = (key: string) => {
    if(isServer) return undefined;
    let theme;
    try {
        theme = localStorage.getItem(key) as ThemeList;
    } catch(e) {}
    const currentTheme = theme ?? DEFAULT_THEME;
    return currentTheme;
}

export const setTheme = ({LSKey = 'theme', theme}: {LSKey?: string, theme: ThemeList}) => {
    if(isServer) return undefined;
    try {
        localStorage.setItem(LSKey, theme);
    } catch(e) {}
}