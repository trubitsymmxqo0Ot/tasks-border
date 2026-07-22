"use client";
import { CreateTasksFilter } from "@/feature/create-tasks-filter";
import { useOpen } from "../model/store";
import clsx from "clsx";
import { text } from "@/shared/config/text";
import { PreviewTask } from "@/feature/preivew-task";

export const CreateTasks = () => {
  const { isOpen, toggleOpen } = useOpen((state) => state);
  return (
    <div className="relative">
      <CreateTasksFilter open={isOpen} />
      <h2
        onClick={() => toggleOpen()}
        className={clsx(
          text({ size: "bg", weights: "black" }),
          "text-center mb-8",
        )}
      >
        Предпросмотр задачи
      </h2>
      <PreviewTask />
    </div>
  );
};
