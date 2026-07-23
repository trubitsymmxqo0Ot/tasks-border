import { useSelectFilter } from "../model/store";

export const useData = () => {
  const setTitle = useSelectFilter((state) => state.setTitle);
  const setArrayStyle = useSelectFilter((state) => state.setArrayStyle);
  const setStyle = useSelectFilter((state) => state.setStyle);
  const setDefaultStyle = useSelectFilter((state) => state.setDefaultStyle);

  const title = useSelectFilter((state) => state.title);

  const {
    default: defaultStyles,
    matrixData,
    color,
    size,
    borderStyle,
  } = useSelectFilter((state) => state.styles);

  return {
    setTitle,
    setDefaultStyle,
    setArrayStyle,
    setStyle,
    title,
    color,
    size,
    defaultStyles,
    borderStyle,
    matrixData,
  };
};
