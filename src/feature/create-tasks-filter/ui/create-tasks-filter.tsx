"use client";
import { CreateTasksFilterTItle } from "@/entities/create-tasks-settings";
import clsx from "clsx";

interface CreateTasksFilterProps {
  open: boolean;
}

export const CreateTasksFilter = ({ open }: CreateTasksFilterProps) => {
  return (
    <div
      className={clsx(
        open ? "w-120 py-3 px-6 overflow-y-auto" : "w-0 p-0",
        "h-dvh bg-secondary fixed overflow-hidden transition-all top-0 right-0 z-20",
      )}
    >
      <CreateTasksFilterTItle />
    </div>
  );
};
