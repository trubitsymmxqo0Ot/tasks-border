import { text } from "@/shared/config/text";
import { ColorsType, SizesType, WeightsType } from "../type/type";
import { COLORS, WEIGHTS } from "../model/constans";

type FilterTypes = WeightsType | SizesType | ColorsType;

const isColor = (type: FilterTypes): type is ColorsType => {
  return COLORS.includes(type as ColorsType);
};

const isWeight = (type: FilterTypes): type is WeightsType => {
  return WEIGHTS.includes(type as WeightsType);
};

export const findCurrentStyle = (type: FilterTypes) => {
  if (isColor(type)) {
    return text({ colors: type });
  }

  if (isWeight(type)) {
    return text({ weights: type });
  }

  return;
};
