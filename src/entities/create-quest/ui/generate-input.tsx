import { Input } from "@/shared/ui/Input";
import { ChangeEvent, useState } from "react";
import Cross from "../assets/cross.svg";
import CircleCheck from "@/shared/assets/circle-check.svg";
import clsx from "clsx";
import { text } from "@/shared/config/text";
import { useCreateCard } from "../model/store";

interface GenerateInputProps {
  idx?: number;
  className?: string;
}

export const GenerateInput = ({ idx, className }: GenerateInputProps) => {
  const [quest, setQuest] = useState("");
  const setData = useCreateCard((state) => state.setData);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuest(e.target.value);
    setData({ idx: e.target.value });
  };

  return (
    <div className={className}>
      <div className="flex items-center gap-5">
        <Input
          value={quest}
          onChange={(e) => handleChangeInput(e)}
          type="text"
          placeholder={`Подзадача №${idx ?? 0}`}
          inputStyle={clsx(
            text({ size: "md" }),
            "border-2 border-line-secondary w-full py-2 px-4 rounded-xl",
          )}
          className="w-full"
        >
          {quest.length > 0 && (
            <Cross
              className="cursor-pointer w-6 h-6 text-color-tertiary"
              onClick={() => setQuest("")}
            />
          )}
        </Input>
      </div>
    </div>
  );
};
