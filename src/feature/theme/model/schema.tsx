import Light from "../assets/light.svg";
import Dark from "../assets/dark.svg";
import VeryDark from "../assets/very-dark.svg";
import { ThemeList } from "@/shared/contexts/theme/types";
import { FC, SVGProps } from "react";

interface IThemeSchema {
  id: number;
  title: string;
  url: FC<SVGProps<SVGSVGElement>>;
  type: ThemeList;
}

export const themeSchema: IThemeSchema[] = [
  { id: 1, title: "Светлая тема", url: Light, type: "light" },
  { id: 2, title: "Темная тема", url: Dark, type: "dark" },
  { id: 3, title: "Очень темная тема", url: VeryDark, type: "very-dark" },
];
