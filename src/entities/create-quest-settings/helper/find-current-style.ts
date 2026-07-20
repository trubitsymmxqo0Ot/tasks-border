import { text } from "@/shared/config/text";
import { BorderType, ColorsType, PositionType, SizesType, WeightsType } from "../type/type";
import { COLORS, POSITION, WEIGHTS, BORDER } from "../model/constans";

export type FilterTypes = WeightsType | SizesType | ColorsType | PositionType | BorderType;

const isColor = (type: FilterTypes): type is ColorsType => {
  return COLORS.includes(type as ColorsType);
};

const isWeight = (type: FilterTypes): type is WeightsType => {
  return WEIGHTS.includes(type as WeightsType);
};

const isPosition = (type: FilterTypes): type is PositionType => {
  return POSITION.includes(type as PositionType);
}

const isBorder = (type: FilterTypes): type is BorderType => {
  return BORDER.includes(type as BorderType)
}

export const findCurrentStyle = (type: FilterTypes) => {
  if (isColor(type)) {
    return text({ colors: type });
  }

  if (isWeight(type)) {
    return text({ weights: type });
  }

  if(isPosition(type)) {
    return text({positions: type})
  }
  
  return;
};
