import { CreateQuest } from "@/entities/create-quest";
import { text } from "@/shared/config/text";
import clsx from "clsx";

export const CreateQuestBorder = () => {
  return (
    <div className="p-5 rounded-xl">
      <h2
        className={clsx(
          text({ size: "lg", weights: "bold" }),
          "text-center mb-8",
        )}
      >
        Создание цели
      </h2>
      <CreateQuest />
    </div>
  );
};
