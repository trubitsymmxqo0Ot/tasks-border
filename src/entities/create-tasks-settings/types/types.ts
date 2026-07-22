import { text } from "@/shared/config/text";

export type DefaultColors = keyof typeof text.variants.color | "";
export type Weights = keyof typeof text.variants.weights | "";
export type Positions = keyof typeof text.variants.positions | "";
export type Sizes = keyof typeof text.variants.size | "";

export type Sides = [string, string, string, string];

interface IDefaultSettings {
  color: DefaultColors;
  weights: Weights;
  position: Positions;
  size: Sizes;
}

export interface IUseSelectFilterTitle {
  size: string;
  color: string;
  border: Sides;
  customPadding: Sides;
  customMargin: Sides;
  default: IDefaultSettings;
}
