import { Input } from "@/shared/ui/Input";
import clsx from "clsx";
import { text } from "@/shared/config/text";
import { SubmitEvent } from "react";
import { FilterBlock } from "./filter-block";
import { BetterStyles } from "./better-styles";
import { COLORS, POSITIONS, SIZES, WEIGHTS } from "../model/constants";
import { Sizes, DefaultColors } from "../types/types";
import { data } from "../model/data";
import { BorderStyles } from "./filter-components/border-styles";
import { GapsStyle } from "./filter-components/gaps-style";
import { useData } from "../hook/useData";

export const CreateTasksFilterTItle = () => {
  const {
    setBorder,
    setColor,
    setDefaultColor,
    setDefaultPosition,
    setDefaultSize,
    setDefaultWeight,
    setMargin,
    setPadding,
    setSize,
    setTitle,
    border,
    color,
    customMargin,
    customPadding,
    defaultSize,
    position,
    size,
    title,
    weights,
    defaultColor,
  } = useData();

  const onChangeSize = (value: string, setValue: (value: string) => void) => {
    const cleanValue = value.replace(/[^0-9]/g, "").trim();
    if (!cleanValue) {
      setValue("");
    } else {
      setValue(cleanValue);
    }
  };
  const handleForm = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => handleForm(e)}>
      <h2
        className={clsx(
          text({ size: "bg", weights: "black" }),
          "mb-6 text-center",
        )}
      >
        Заголовок
      </h2>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        inputStyle="w-full p-2 border-line-secondary border-2"
        placeholder="Введите заголовок"
        className="mb-6"
        animationPlaceholder={true}
        idForLabel="title"
        id="title"
      />
      <FilterBlock
        title={data.size.title}
        betterStyle={
          <BetterStyles<Sizes>
            setValue={setDefaultSize}
            className="mb-4"
            array={SIZES}
            disabled={!!size}
          />
        }
      >
        <Input
          id="size"
          type="number"
          min="0"
          max="60"
          value={size}
          disabled={!!defaultSize}
          onChange={(e) => onChangeSize(e.target.value, setSize)}
          placeholder={data.size.placeholder}
          className="w-1/3 mb-1"
          inputStyle={clsx(
            !!defaultSize ? "border-danger" : "border-line-secondary",
            "bg-primary w-full p-2 border-2 text-center",
          )}
        />
      </FilterBlock>
      <FilterBlock
        title={data.color.title}
        betterStyle={
          <BetterStyles<DefaultColors>
            disabled={!!color}
            setValue={setDefaultColor}
            className="mb-4"
            array={COLORS}
          />
        }
        defaultGrid={false}
        childrenClass="grid grid-cols-2 h-12 justify-center gap-3"
      >
        <Input
          type="color"
          value={color}
          inputStyle={clsx(
            !!defaultColor ? "border-danger" : "border-line-secondary",
            " border-2 block w-full h-full cursor-pointer",
          )}
          className="mb-1.5 h-full"
          disabled={!!defaultColor}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          onClick={() => setColor("")}
          className="border-line-secondary border px-3"
        >
          Очистить
        </button>
      </FilterBlock>

      <GapsStyle
        value={customMargin}
        setValue={setMargin}
        type="margin"
        title="Внешний"
      />
      <GapsStyle
        value={customPadding}
        setValue={setPadding}
        type="padding"
        title="Внутренний"
      />

      <BorderStyles border={border} setBorder={setBorder} />
      <FilterBlock
        title="Жирность текста"
        childrenClass="flex-row gap-5 justify-center"
        className="mb-4"
      >
        {WEIGHTS.map((item, idx) => (
          <button
            key={idx}
            className={clsx(
              item === weights && "bg-line-primary",
              "border-line-secondary border-2 px-2 py-1",
            )}
            onClick={() => setDefaultWeight(item)}
          >
            {item}
          </button>
        ))}
      </FilterBlock>
      <FilterBlock
        title="Позиция заголовка"
        childrenClass="flex-row gap-5 justify-center"
      >
        {POSITIONS.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setDefaultPosition(item)}
            className={clsx(
              item === position && "bg-line-primary",
              "border-line-secondary border-2 px-2 py-1",
            )}
          >
            {item}
          </button>
        ))}
      </FilterBlock>
    </form>
  );
};
