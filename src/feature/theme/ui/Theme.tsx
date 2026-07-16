"use client";
import { useHydration } from "@/shared/hooks/useHydration";
import { Skeleton } from "@/shared/ui/Skeleton";
import { selectedTheme } from "../lib/selectedTheme";
import { useTheme } from "@/shared/contexts/theme/useTheme";
import { themeSchema } from "../model/schema";
import { useState } from "react";
import clsx from "clsx";

export const Theme = () => {
  const { theme, onChangeTheme } = useTheme();
  const hydartion = useHydration();
  const [open, setOpen] = useState(false);
  if (!hydartion) return <Skeleton />;

  return (
    <section>
      <button onClick={() => setOpen(!open)}>{selectedTheme({ theme })}</button>
      <div
        className={clsx(
          open ? "max-h-600px" : "max-h-0",
          "overflow-hidden transition-all",
        )}
      >
        {themeSchema.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer"
            onClick={() => {
              onChangeTheme(item.type);
              setOpen(false);
            }}
          >
            <item.url className="h-5 w-5" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
