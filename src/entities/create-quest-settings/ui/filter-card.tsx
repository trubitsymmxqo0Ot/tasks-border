import clsx from "clsx";
import { ColorsType, SizesType, WeightsType } from "../type/type";
import { text } from "@/shared/config/text";
import { findCurrentStyle } from "../helper/find-current-style";

type FilterType = WeightsType | SizesType | ColorsType;

interface FilterCardProps<T extends FilterType> {
  title: string;
  titleStyle?: string;
  data: {
    id: number;
    title: string;
    type: T;
  }[];
  setValue: (type: T, title: string) => void;
}
export const FilterCard = <T extends FilterType>({
  title,
  titleStyle,
  data,
  setValue,
}: FilterCardProps<T>) => {
  return (
    <div className="flex flex-col">
      <p className={clsx("mb-3 text-center", titleStyle)}>{title}</p>
      <div className="bg-primary p-5 rounded-xl flex-1">
        {data.map((elem) => {
          const currentStyle = findCurrentStyle(elem.type);
          return (
            <button
              key={elem.id}
              className={clsx(
                text({ size: "sm" }),
                currentStyle,
                "block leading-none mb-1.5",
              )}
              onClick={() => setValue(elem.type, elem.title)}
            >
              {elem.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};
