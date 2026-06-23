"use client";
import { useHydration } from "@/shared/hooks/useHydration";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Wrapper } from "@/shared/ui/Wrapper";
import { Typography } from "@/shared/ui/Typography";
import { selectedTheme } from "../lib/selectedTheme";
import { useTheme } from "@/shared/contexts/theme/useTheme";
import { themeSchema } from "../model/schema";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export const Theme = () => {
  const { theme } = useTheme();
  const hydartion = useHydration();
  const [open, setOpen] = useState(false);
  if (!hydartion) return <Skeleton />;
  return (
    <Wrapper>
      <Typography as="button" onClick={() => setOpen(!open)}>
        {selectedTheme({ theme })}
      </Typography>
      <Wrapper
        className={clsx(
          open ? "max-h-600px" : "max-h-0",
          "overflow-hidden transition-all",
        )}
      >
        {themeSchema.map((item) => (
          <Wrapper key={item.id}>
            <Image
              src={item.url}
              width={20}
              height={20}
              unoptimized
              alt="themes"
            />
            <Typography>{item.title}</Typography>
          </Wrapper>
        ))}
      </Wrapper>
    </Wrapper>
  );
};
