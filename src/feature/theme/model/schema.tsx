import Light from "../assets/light.svg";
import Dark from "../assets/dark.svg";
import VeryDark from "../assets/very-dark.svg";
import { ThemeList } from "@/shared/contexts/theme/types";
import { FC, SVGProps } from "react";

interface IThemeSchema {
  id: number;
  url: FC<SVGProps<SVGSVGElement>>;
  type: ThemeList;
}

export const themeSchema: IThemeSchema[] = [
  { id: 1, url: Light, type: "light" },
  { id: 2, url: Dark, type: "dark" },
  { id: 3, url: VeryDark, type: "very-dark" },
];
