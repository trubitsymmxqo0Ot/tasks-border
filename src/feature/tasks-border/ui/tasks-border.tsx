import { text } from "@/shared/config/text";
import clsx from "clsx";

export const TasksBorder = () => {
  return (
    <section className="bg-secondary p-8 rounded-xl">
      <h2
        className={clsx(text({ size: "bg", weights: "bold" }), "text-center")}
      >
        Some task
      </h2>
    </section>
  );
};
