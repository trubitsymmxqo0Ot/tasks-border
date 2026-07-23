import { useSelectFilter } from "@/entities/create-tasks-settings";

export const useNormalizeStyles = () => {
  const styles = useSelectFilter((state) => state.styles);
  const directions = ["Left", "Top", "Right", "Bottom"] as const;

  const matrixData: Record<string, string> = {};

  for (const [key, value] of Object.entries(styles.matrixData)) {
    directions.forEach((item, index) => {
      matrixData[`${key}${item}`] = `${value[index]}px` || "";
    });
  }
  return {
    customStyles: {
      ...matrixData,
    },
    betterStyles: {},
  };
};
