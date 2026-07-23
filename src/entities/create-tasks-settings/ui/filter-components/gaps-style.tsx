import { Input } from "@/shared/ui/Input";
import { FilterBlock } from "../filter-block";
import { IArrayData } from "../../model/data";
import { IUseSelectFilterTitle } from "../../types/types";

interface GapsStyleProps {
  value: [string, string, string, string];
  setValue: (
    type: keyof IUseSelectFilterTitle["matrixData"],
    direction: 0 | 1 | 2 | 3,
    value: string,
  ) => void;
  type: keyof IUseSelectFilterTitle["matrixData"];
  title: string;
  sides: IArrayData["sides"];
}

export const GapsStyle = ({
  value,
  setValue,
  type,
  title,
  sides,
}: GapsStyleProps) => {
  return (
    <FilterBlock
      title={`${title}`}
      childrenClass="grid grid-cols-2 grid-rows-2 gap-5"
      className="mb-4"
    >
      {sides.map((side) => (
        <Input
          key={side.id}
          placeholder={side.placeholder}
          value={value[side.id]}
          inputStyle="border-2 border-line-secondary bg-primary text-center py-1.5 px-3"
          onChange={(e) => setValue(type, side.id, e.target.value)}
        />
      ))}
    </FilterBlock>
  );
};
