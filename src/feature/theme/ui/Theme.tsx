"use client";
import { useSetTheme } from "@/shared/contexts/theme/useTheme";
import { useHydration } from "@/shared/hooks/useHydration";

export const Theme = () => {
  const hydartion = useHydration();
  const { theme, onChangeTheme } = useSetTheme();
  if (!hydartion) return null;
  return (
    <div>
      <h2>Theme now {theme}</h2>
      <div>
        <div onClick={() => onChangeTheme("light")}>light</div>
        <div onClick={() => onChangeTheme("dark")}>dark</div>
        <div onClick={() => onChangeTheme("very dark")}>very dark</div>
      </div>
    </div>
  );
};
