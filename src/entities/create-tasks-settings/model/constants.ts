import { text } from "@/shared/config/text";
import {
  BorderStyles,
  DefaultColors,
  Positions,
  Sizes,
  Weights,
} from "../types/types";

export const COLORS = Object.keys(text.variants.color) as DefaultColors[];
export const WEIGHTS = Object.keys(text.variants.weights) as Weights[];
export const POSITIONS = Object.keys(text.variants.positions) as Positions[];
export const SIZES = Object.keys(text.variants.size) as Sizes[];
export const BORDER_STYLES = Object.keys(
  text.variants.borderStyles,
) as BorderStyles[];
