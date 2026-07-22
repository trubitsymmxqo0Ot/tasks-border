import { useSelectFilter } from "@/entities/create-tasks-settings";
export const useNormalizeStyles = () => {
  const { styles } = useSelectFilter((state) => state);
  const defaultStyles = {
    color: "primary",
    weights: "medium",
    position: "left",
    size: "sm",
  };

  let betterStyles = {};
  let currentStyles = {};

  for (const defaultStyle in styles.default) {
    for (const style in styles) {
      if (defaultStyle === style) {
        if (!styles[style]) {
          betterStyles = {
            ...betterStyles,
            [defaultStyle]: styles.default[defaultStyle],
          };
          break;
        } else {
          currentStyles = {
            ...currentStyles,
            [style]: styles[style],
          };
          break;
        }
      }
    }
  }
  return { betterStyles, currentStyles };
};
