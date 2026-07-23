import { text } from "@/shared/config/text";

export type DefaultColors = keyof typeof text.variants.color | "";
export type Weights = keyof typeof text.variants.weights | "";
export type Positions = keyof typeof text.variants.positions | "";
export type Sizes = keyof typeof text.variants.size | "";
export type BorderStyles = keyof typeof text.variants.borderStyles;

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
  margin: Sides;
  padding: Sides;
}

export interface IUseSelectFilterTitle {
  size: string;
  color: string;
  borderStyle: BorderStyles;
  matrixData: IArrayStyles;
  default: IDefaultSettings;
}
