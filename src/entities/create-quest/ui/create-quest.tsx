"use client";
import { Input } from "@/shared/ui/Input";
import { ChangeEvent, SubmitEvent, useState } from "react";
import { GenerateInput } from "./generate-input";
import clsx from "clsx";
import { text } from "@/shared/config/text";
import { useCreateCard } from "../model/store";
import Undo from "../assets/undo.svg";

interface CreateQuestProps {
  openFilter: boolean;
  setOpenFilter: (open: boolean) => void;
  className?: string;
}

export const CreateQuest = ({
  openFilter,
  setOpenFilter,
  className,
}: CreateQuestProps) => {
  const [subtask, setSubtask] = useState("1");
  const [isConfirm, setIsConfirm] = useState(false);
  const setTitle = useCreateCard((state) => state.setTitle);
  const title = useCreateCard((state) => state.title);

  const handleForm = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChangeSubtask = (e: string) => {
    const numberEvent = Number(e);
    if (numberEvent > 20) {
      setSubtask("20");
    } else if (numberEvent <= 0) {
      setSubtask("1");
    } else {
      setSubtask(e);
    }
  };

  return (
    <form
      onSubmit={(e) => handleForm(e)}
      className={clsx(
        openFilter ? "rounded-t-xl" : "rounded-xl",
        "p-10 bg-secondary relative",
        className,
      )}
    >
      <Undo
        className={clsx(
          openFilter ? "-rotate-180" : "rotate-0",
          "h-10 w-10 text-color-tertiary absolute top-5 right-5 cursor-pointer p-2 transition-all",
        )}
        aria-description="Настройки"
        tabIndex={2}
        onClick={() => setOpenFilter(!openFilter)}
      />
      <div className="w-2/4">
        <div className="mb-6">
          <Input
            animationPlaceholder={true}
            type="text"
            placeholder="Назовите вашу цель"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            inputStyle={clsx(
              "border-line-secondary border-2 py-2 px-3 rounded-xl w-full",
              text({ size: "md" }),
            )}
          />
        </div>
        <h2
          className={clsx(
            text({ size: "md", weights: "semibold" }),
            "mb-6 text-center leading-none",
          )}
        >
          Укажите сколько подзадач вы хотите создать (не более 20 и не менее 1)
        </h2>
        <div className="flex justify-center gap-6 flex-1/2 mb-8">
          <Input
            type="number"
            onChange={(e) => onChangeSubtask(e.target.value)}
            value={subtask}
            max="20"
            min="1"
            maxLength={20}
            inputStyle={
              "px-4 py-1.5 text-center bg-primary border-2 border-line-secondary rounded-lg hover:border-line-primary "
            }
          />
          <button
            onClick={() => setIsConfirm(true)}
            className="border-line-secondary bg-primary border-2 px-4 rounded-xl "
          >
            Подтвердить
          </button>
        </div>
        {isConfirm && (
          <div>
            <div className="mb-8">
              {Array.from({ length: Number(subtask) }).map((_, idx) => (
                <GenerateInput key={idx} idx={idx} className="mb-3" />
              ))}
            </div>

            <button className="border-2 border-line-secondary rounded-xl py-2 px-3">
              Создать задачу
            </button>
          </div>
        )}
      </div>
    </form>
  );
};
