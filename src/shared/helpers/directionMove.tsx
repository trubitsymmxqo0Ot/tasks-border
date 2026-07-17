interface IUseDirection {
  prevElem: Element | null | undefined;
  nextElem: Element | null | undefined;
  currentElem: Element | null | undefined;
}

export type Directions = "top" | "bottom" | "none" | null;

export const directionMove = ({
  nextElem,
  prevElem,
  currentElem,
}: IUseDirection): Directions => {
  if (!prevElem || !currentElem) return "top";
  const currentElemRect = currentElem?.getBoundingClientRect();
  const prevElemRect = prevElem.getBoundingClientRect();
  const nextElemRect = nextElem?.getBoundingClientRect();
  const parentElemRect = currentElem.parentElement?.getBoundingClientRect();

  if (!parentElemRect) return null;
  const parentGap = parentElemRect.top - currentElemRect.top;
  if (parentGap === 0) return "none";

  const gapForPrev = currentElemRect.top - prevElemRect.bottom;
  if (gapForPrev > 25) return "top";

  if (!nextElemRect) return "bottom";

  const gapForNext = nextElemRect.top - currentElemRect.bottom;
  if (gapForNext > 25) return "bottom";

  return "none";
};
