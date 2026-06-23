"use client";
import { setTheme } from "@/shared/contexts/theme/useTheme"

export const Theme = () => {
    return (
        <div>
            <div onClick={() => setTheme({theme: 'light'})}>light</div>
            <div onClick={() => setTheme({theme: 'dark'})}>dark</div>
            <div onClick={() => setTheme({theme: 'very dark'})}>very dark</div>
        </div>
    )
}