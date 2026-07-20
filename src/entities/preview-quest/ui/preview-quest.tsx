"use client";

import { useCreateCard } from "@/entities/create-quest";
import { useSelectTitleStyles } from "@/entities/create-quest-settings";
import { text } from "@/shared/config/text";
import clsx from "clsx";

export const PreviewQuest = () => {
  const title = useSelectTitleStyles((state) => state.title);
  const weight = useSelectTitleStyles((state) => state.weight);
  const size = useSelectTitleStyles((state) => state.size);
  const position = useSelectTitleStyles((state) => state.position);
  const border = useSelectTitleStyles((state) => state.border);
  const userTitle = useCreateCard((state) => state.title);
  return (
    <div>
      <h2
        className={clsx(
          text({ size: "lg", weights: "bold" }),
          "text-center mb-8",
        )}
      >
        Предпросмотр
      </h2>
      <div className="bg-secondary p-10 rounded-xl">
        <h2
          className={clsx(text({
            size: size.type,
            colors: title.type,
            weights: weight.type,
            positions: position.type,
            borders: border.type,
          }), 'p-3 leading-none')}
        >
          {userTitle}
        </h2>
      </div>
    </div>
  );
};
