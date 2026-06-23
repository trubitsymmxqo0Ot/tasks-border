"use client";
import { useTheme } from "@/shared/contexts/theme/useTheme";
import { useHydration } from "@/shared/hooks/useHydration";

export const Theme = () => {
  const hydartion = useHydration();
  const { theme, onChangeTheme } = useTheme();
  if (!hydartion) return null;
  return (
    <div>
      <h2 className="text-deadline-week bg-primary">useSetTheme {theme}</h2>
      <div>
        <div onClick={() => onChangeTheme("light")}>light</div>
        <div onClick={() => onChangeTheme("dark")}>dark</div>
        <div onClick={() => onChangeTheme("very-dark")}>very dark</div>
      </div>
    </div>
  );
};
