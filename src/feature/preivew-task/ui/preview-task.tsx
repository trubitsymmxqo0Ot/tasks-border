import { useSelectFilter } from "@/entities/create-tasks-settings";
import { useNormalizeStyles } from "../hooks/use-normalize-styles";
import clsx from "clsx";

export const PreviewTask = () => {
  const title = useSelectFilter((state) => state.title);
  const { betterStyles, customStyles } = useNormalizeStyles();
  console.log(customStyles);
  return (
    // style={customStyles} className={text({ ...betterStyles })}
    <section className={clsx("bg-secondary py-4 px-6")}>
      <h2 style={customStyles}>{title}</h2>
    </section>
  );
};
