import { Input } from "@/shared/ui/Input";
import clsx from "clsx";
import { text } from "@/shared/config/text";
import { SubmitEvent } from "react";
import { FilterBlock } from "./filter-block";
import { BetterStyles } from "./better-styles";
import {
  BORDER_STYLES,
  COLORS,
  POSITIONS,
  SIZES,
  WEIGHTS,
} from "../model/constants";
import {
  Sizes,
  DefaultColors,
  IUseSelectFilterTitle,
  Weights,
  Positions,
  BorderStyles,
} from "../types/types";
import { data } from "../model/data";
import { GapsStyle } from "./filter-components/gaps-style";
import { useData } from "../hook/useData";

export const CreateTasksFilterTItle = () => {
  const {
    setDefaultStyle,
    setArrayStyle,
    setTitle,
    setStyle,
    color,
    size,
    title,
    defaultStyles,
    matrixData,
    borderStyle,
  } = useData();
  const onChangeSize = (
    value: string,
    key: keyof IUseSelectFilterTitle,
    setValue: (type: keyof IUseSelectFilterTitle, value: string) => void,
  ) => {
    const cleanValue = value.replace(/[^0-9]/g, "").trim();
    if (!cleanValue) {
      setValue(key, "");
    } else {
      setValue(key, cleanValue);
    }
  };
  const handleForm = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const arrayValues = {
    padding: matrixData.padding,
    margin: matrixData.margin,
    border: matrixData.border,
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
            setValue={setDefaultStyle}
            objectKey="size"
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
          disabled={!!defaultStyles.size}
          onChange={(e) => onChangeSize(e.target.value, "size", setStyle)}
          placeholder={data.size.placeholder}
          className="w-1/3 mb-1"
          inputStyle={clsx(
            !!defaultStyles.size ? "border-danger" : "border-line-secondary",
            "bg-primary w-full p-2 border-2 text-center",
          )}
        />
      </FilterBlock>
      <FilterBlock
        title={data.color.title}
        betterStyle={
          <BetterStyles<DefaultColors>
            disabled={!!color}
            objectKey="color"
            setValue={setDefaultStyle}
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
            !!defaultStyles.color ? "border-danger" : "border-line-secondary",
            " border-2 block w-full h-full cursor-pointer",
          )}
          className="mb-1.5 h-full"
          disabled={!!defaultStyles.color}
          onChange={(e) => setStyle<string>("color", e.target.value)}
        />
        <button
          onClick={() => setStyle("color", "")}
          className="border-line-secondary border px-3"
        >
          Очистить
        </button>
      </FilterBlock>
      {data.gaps.map((item) => (
        <GapsStyle
          key={item.type}
          value={arrayValues[item.name]}
          setValue={setArrayStyle}
          type={item.type}
          title={item.title}
          sides={item.sides}
        />
      ))}
      <FilterBlock title="Стиль рамки">
        {BORDER_STYLES.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setStyle<BorderStyles>("borderStyle", item)}
          >
            {item}
          </button>
        ))}
      </FilterBlock>
      <FilterBlock
        title="Жирность текста"
        childrenClass="flex-row gap-5 justify-center"
        className="mb-4"
      >
        {WEIGHTS.map((item, idx) => (
          <button
            key={idx}
            className={clsx(
              item === defaultStyles.weights && "bg-line-primary",
              "border-line-secondary border-2 px-2 py-1",
            )}
            onClick={() => setDefaultStyle<Weights>("weights", item)}
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
            onClick={() => setDefaultStyle<Positions>("position", item)}
            className={clsx(
              item === defaultStyles.position && "bg-line-primary",
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
