"use client";
import { Input } from "@/shared/ui/Input";
import { ChangeEvent, SubmitEvent, useState } from "react";
import { GenerateInput } from "./generate-input";
import clsx from "clsx";
import { text } from "@/shared/config/text";

export const CreateQuest = () => {
  const [titleGoal, setTitleGoal] = useState("");
  const [subtask, setSubtask] = useState("1");
  const [isConfirm, setIsConfirm] = useState(false);

  const handleForm = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChangeSubtask = (e: string) => {
    const numberEvent = Number(e);
    console.log(numberEvent);
    if (numberEvent > 20) {
      setSubtask("20");
    } else if (numberEvent < 0) {
      setSubtask("1");
    } else {
      setSubtask(e);
    }
  };

  return (
    <form
      onSubmit={(e) => handleForm(e)}
      className="flex flex-col p-10 bg-secondary rounded-xl"
    >
      <Input
        animationPlaceholder={true}
        type="text"
        placeholder="Назовите вашу цель"
        onChange={(e) => setTitleGoal(e.target.value)}
        value={titleGoal}
        className="w-full mb-6"
        inputStyle={clsx(
          "w-full border-line-secondary border-2 py-2 px-3 rounded-xl",
          text({ size: "md" }),
        )}
      />
      <h2 className={clsx(text({ size: "md", weights: "semibold" }), "mb-3")}>
        Укажите сколько подзадач вы хотите создать (не более 20 и не менее 1)
      </h2>
      <div className="flex gap-10 flex-1/2">
        <Input
          type="number"
          onChange={(e) => onChangeSubtask(e.target.value)}
          value={subtask}
          max="20"
          min="1"
          maxLength={20}
          inputStyle={
            "px-4 text-center bg-primary border-2 border-line-secondary rounded-lg hover:border-line-primary focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent-light"
          }
        />
        <button
          onClick={() => setIsConfirm(true)}
          className="border-line-secondary bg-primary border-2 px-4 rounded-xl "
        >
          Подтвердить
        </button>
      </div>
      {isConfirm &&
        Array.from({ length: Number(subtask) }).map((_, idx) => (
          <GenerateInput key={idx} />
        ))}
    </form>
  );
};
