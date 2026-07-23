import { text } from "@/shared/config/text";

export type DefaultColors = keyof typeof text.variants.color | "";
export type Weights = keyof typeof text.variants.weights | "";
export type Positions = keyof typeof text.variants.positions | "";
export type Sizes = keyof typeof text.variants.size | "";

export type Sides = [string, string, string, string];
export type SidesIds = 0 | 1 | 2 | 3;

export interface IDefaultSettings {
  color: DefaultColors;
  weights: Weights;
  position: Positions;
  size: Sizes;
}

export interface IArrayStyles {
  border: Sides;
  customMargin: Sides;
  customPadding: Sides;
}

export interface IUseSelectFilterTitle {
  size: string;
  color: string;
  matrixData: IArrayStyles;
  default: IDefaultSettings;
}
