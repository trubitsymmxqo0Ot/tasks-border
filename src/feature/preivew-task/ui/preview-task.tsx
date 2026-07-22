import { useSelectFilter } from "@/entities/create-tasks-settings";
import { useNormalizeStyles } from "../hooks/use-normalize-styles";
import clsx from "clsx";
import { text } from "@/shared/config/text";

export const PreviewTask = () => {
  const title = useSelectFilter((state) => state.title);
  const { betterStyles, currentStyles } = useNormalizeStyles();
  return (
    <section className={clsx("bg-secondary py-4 px-6")}>
      <h2 className={text({ ...betterStyles })} style={{ ...currentStyles }}>
        {title}
      </h2>
    </section>
  );
};
