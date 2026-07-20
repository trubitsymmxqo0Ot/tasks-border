"use client";
import { CreateQuest } from "@/entities/create-quest";
import { PreviewQuest } from "@/entities/preview-quest";
import { StylesFilter } from "@/feature/styles-filter";
import { text } from "@/shared/config/text";
import clsx from "clsx";
import { useState } from "react";

export const CreateQuestBorder = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="p-5 ">
      <h2
        className={clsx(
          text({ size: "lg", weights: "bold" }),
          "text-center mb-8",
        )}
      >
        Создание цели
      </h2>
      <div className="mb-10">
        <CreateQuest
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          className="flex-3/4"
        />
        <StylesFilter isOpen={openFilter} />
      </div>
      <PreviewQuest />
    </div>
  );
};
