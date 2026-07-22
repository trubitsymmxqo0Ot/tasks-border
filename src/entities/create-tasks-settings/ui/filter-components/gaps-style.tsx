import { Input } from "@/shared/ui/Input";
import { FilterBlock } from "../filter-block";
import { data } from "../../model/data";

interface GapsStyleProps {
  value: [string, string, string, string];
  setValue: (direction: 0 | 1 | 2 | 3, value: string) => void;
  type: "padding" | "margin";
  title: string;
}

export const GapsStyle = ({ value, setValue, type, title }: GapsStyleProps) => {
  return (
    <FilterBlock
      title={`${title} ${data.gaps.title}`}
      childrenClass="grid grid-cols-2 grid-rows-2 gap-5"
      className="mb-4"
    >
      {data[type].sides.map((side) => (
        <Input
          key={side.id}
          placeholder={side.placeholder}
          value={value[side.id]}
          inputStyle="border-2 border-line-secondary bg-primary text-center py-1.5 px-3"
          onChange={(e) => setValue(side.id, e.target.value)}
        />
      ))}
    </FilterBlock>
  );
};
