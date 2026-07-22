import { Input } from "@/shared/ui/Input";
import { data } from "../../model/data";
import { FilterBlock } from "../filter-block";

interface BorderStylesProps {
  border: [string, string, string, string];
  setBorder: (direction: 0 | 1 | 2 | 3, value: string) => void;
}

export const BorderStyles = ({ border, setBorder }: BorderStylesProps) => {
  return (
    <FilterBlock
      defaultGrid={false}
      title={data.border.title}
      className="mb-4"
      childrenClass="grid grid-cols-2 grid-rows-2 justify-center gap-2"
    >
      {data.border.settings.map((item) => (
        <Input
          key={item.id}
          placeholder={item.placeholder}
          value={border[item.id]}
          inputStyle="border-line-secondary border-2 py-2 px-3"
          onChange={(e) => setBorder(item.id, e.target.value)}
        />
      ))}
    </FilterBlock>
  );
};
