import { text } from "@/shared/config/text";

export type DefaultColors = keyof typeof text.variants.colors;
export type Weights = keyof typeof text.variants.weights;
export type Positions = keyof typeof text.variants.positions;
export type Sizes = keyof typeof text.variants.size;

interface IDefaultSettings {
  colors?: DefaultColors;
  weights?: Weights;
  position?: Positions;
  sizes?: Sizes;
}

export interface IUseSelectFilterTitle {
  size: string;
  customColor?: string;
  border?: [string, string, string, string];
  customPadding?: string;
  customMargin?: string;
  default?: IDefaultSettings;
}
