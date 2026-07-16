import { ThemeList } from "@/shared/contexts/theme/types";
import Image from "next/image";
import Light from "../assets/light.svg";
import Dark from "../assets/dark.svg";
import VeryDark from "../assets/very-dark.svg";

export const selectedTheme = ({
  theme,
  className,
}: {
  theme: ThemeList;
  className?: string;
}) => {
  if (theme === "light") {
    return (
      <span className={className}>
        <span>Светлая тема</span>
        <Light className="h-5 w-5" />
      </span>
    );
  } else if (theme === "dark") {
    return (
      <span className={className}>
        <span>Темная тема</span>
        <Dark className="h-5 w-5" />
      </span>
    );
  } else {
    return (
      <span>
        <span>Очень темная тема</span>
        <VeryDark className="h-5 w-5" />
      </span>
    );
  }
};
