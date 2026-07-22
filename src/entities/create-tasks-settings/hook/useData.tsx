import { useSelectFilter } from "../model/store";

export const useData = () => {
  const setTitle = useSelectFilter((state) => state.setTitle);
  const setSize = useSelectFilter((state) => state.setSize);
  const setColor = useSelectFilter((state) => state.setColor);
  const setMargin = useSelectFilter((state) => state.setMargin);
  const setPadding = useSelectFilter((state) => state.setPadding);
  const setBorder = useSelectFilter((state) => state.setBorder);

  const setDefaultColor = useSelectFilter((state) => state.setDefaultColor);
  const setDefaultSize = useSelectFilter((state) => state.setDefaultSize);
  const setDefaultWeight = useSelectFilter((state) => state.setDefaultWeight);
  const setDefaultPosition = useSelectFilter(
    (state) => state.setDefaultPosition,
  );

  const title = useSelectFilter((state) => state.title);

  const { border, color, customMargin, customPadding, size } = useSelectFilter(
    (state) => state.styles,
  );

  const {
    position,
    size: defaultSize,
    weights,
    color: defaultColor,
  } = useSelectFilter((state) => state.styles.default);

  return {
    setTitle,
    setSize,
    setColor,
    setMargin,
    setPadding,
    setBorder,
    setDefaultColor,
    setDefaultSize,
    setDefaultWeight,
    setDefaultPosition,
    title,
    border,
    color,
    customMargin,
    customPadding,
    size,
    position,
    defaultSize,
    weights,
    defaultColor,
  };
};
