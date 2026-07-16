"use client";
import { useHydration } from "@/shared/hooks/useHydration";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useTheme } from "@/shared/contexts/theme/useTheme";
import { themeSchema } from "../model/schema";
import clsx from "clsx";
import { GAP, OFFSET, PADDING, SIZE } from "../model/constants";

export const Theme = () => {
  const { theme, onChangeTheme } = useTheme();
  const hydartion = useHydration();
  if (!hydartion) return <Skeleton />;

  const position = () => {
    const index = themeSchema.findIndex((item) => item.type === theme);
    if (index !== -1) {
      return PADDING + index * (SIZE + GAP) + OFFSET - PADDING;
    }
    return 6;
  };

  return (
    <div
      className="flex bg-secondary rounded-2xl max-w-30 relative"
      style={{ gap: GAP, padding: PADDING }}
    >
      {themeSchema.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer"
          onClick={() => onChangeTheme(item.type)}
        >
          <item.url
            className="relative z-10"
            style={{ width: SIZE, height: SIZE }}
          />
          <div
            className={clsx(
              "absolute w-8 h-8 bg-color-tertiary top-1/2 -translate-y-1/2 rounded-full transition-all",
            )}
            style={{ left: `${position()}px` }}
          />
        </div>
      ))}
    </div>
  );
};
