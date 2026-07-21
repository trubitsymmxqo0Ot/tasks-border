"use client";
import { CreateTasksFilter } from "@/feature/create-tasks-filter";
import { useOpen } from "../model/store";

export const CreateTasks = () => {
  const { isOpen, toggleOpen } = useOpen((state) => state);
  return (
    <div className="relative">
      <CreateTasksFilter open={isOpen} />
      <div onClick={() => toggleOpen()}>temp</div>
    </div>
  );
};
