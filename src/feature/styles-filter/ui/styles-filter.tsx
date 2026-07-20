import clsx from "clsx";
import { filters } from "../model/filters";
import { useState } from "react";
import { SelectedFilterType } from "../types/type";
import { renderFilter } from "../model/render-filter";
import ArrowLeft from "../assets/arrow-left.svg";

interface StylesFilterProps {
  isOpen: boolean;
  className?: string;
}

export const StylesFilter = ({ isOpen, className }: StylesFilterProps) => {
  const [selectedFilter, setSelectedFilter] =
    useState<SelectedFilterType>(false);

  return (
    <div
      className={clsx(
        isOpen ? "h-auto flex-0 p-5" : "h-0 flex-1/3",
        "bg-tertiary transition-all w-full rounded-b-xl overflow-hidden relative",
        className,
      )}
    >
      {!selectedFilter ? (
        <div className="flex gap-11 items-center justify-center">
          {filters.map((item) => (
            <button key={item.id} onClick={() => setSelectedFilter(item.type)}>
              {item.title}
            </button>
          ))}
        </div>
      ) : (
        renderFilter[selectedFilter]
      )}
      {selectedFilter && (
        <ArrowLeft
          className="w-5 h-5 absolute right-4 top-2.5 cursor-pointer text-color-tertiary"
          onClick={() => setSelectedFilter(false)}
        />
      )}
    </div>
  );
};
