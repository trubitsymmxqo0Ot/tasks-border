import { BORDER, COLORS, POSITION, SIZES, WEIGHTS } from "../model/constans";

export type ColorsType = (typeof COLORS)[number];

export type WeightsType = (typeof WEIGHTS)[number];

export type SizesType = (typeof SIZES)[number];

export type PositionType = typeof POSITION[number];

export type BorderType = typeof BORDER[number];

export interface IColors {
  id: number;
  title: string;
  type: ColorsType;
}
export interface IWeights {
  id: number;
  title: string;
  type: WeightsType;
}
export interface ISizes {
  id: number;
  title: string;
  type: SizesType;
}

export interface IPosition {
  id: number;
  type: PositionType,
  title: string;
}

export interface IBorder {
  id: number;
  type: BorderType;
  title: string;
}