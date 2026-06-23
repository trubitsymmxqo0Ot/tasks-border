"use client";

import { ThemeProvider } from "@/shared/contexts/theme/ThemeContext";
import { getTheme } from "@/shared/contexts/theme/useTheme"
import { ReactNode } from "react";

interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({children}: ProvidersProps) => {
    const theme = getTheme('theme');
const isTheme = theme ? theme : 'light';
    return (
<ThemeProvider value={isTheme}>
{children}
</ThemeProvider>
    )
}