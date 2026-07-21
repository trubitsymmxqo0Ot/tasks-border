import { Input } from "@/shared/ui/Input";
import { useSelectFilter } from "../model/store";
import clsx from "clsx";
import { text } from "@/shared/config/text";
import { SubmitEvent } from "react";
import { FilterBlock } from "./filter-block";
import { BetterStyles } from "./better-styles";
import { COLORS, SIZES } from "../model/constants";

export const CreateTasksFilterTItle = () => {
  const { title, size, border, customColor, customMargin, customPadding } =
    useSelectFilter((state) => state.data);
  const setTitle = useSelectFilter((state) => state.setTitle);
  const setSize = useSelectFilter((state) => state.setSize);
  const setColor = useSelectFilter((state) => state.setColor);
  const setMargin = useSelectFilter((state) => state.setMargin);
  const setPadding = useSelectFilter((state) => state.setPadding);
  const setBorder = useSelectFilter((state) => state.setBorder);

  const onChangeSize = (
    value: string,
    setValue: (value: string) => void,
    min: number,
    max: number,
  ) => {
    const cleanValue = value.replace(/[^0-9]/g, "").trim();
    if (!cleanValue.length || Number(cleanValue) < min || Number.isNaN(value)) {
      setValue(String(min));
    } else if (Number(cleanValue) > max) {
      setValue(String(max));
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
      />
      <FilterBlock
        title="Размеры заголовка"
        betterStyle={<BetterStyles className="mb-4" array={SIZES} />}
      >
        <Input
          id="size"
          type="number"
          min="1"
          max="500"
          value={size}
          onChange={(e) => onChangeSize(e.target.value, setSize, 1, 500)}
          placeholder="мин. 1"
          className="w-1/3 mb-1"
          inputStyle="bg-primary border-line-secondary w-full border-2 p-2 text-center"
        />
      </FilterBlock>
      <FilterBlock
        title="Цвет заголовка"
        betterStyle={<BetterStyles className="mb-4" array={COLORS} />}
      >
        <Input
          type="color"
          value={customColor}
          onChange={(e) => setColor(e.target.value)}
        />
      </FilterBlock>
      <FilterBlock
        title="Отступы"
        childrenClass="flex-row gap-5"
        className="mb-4"
      >
        <Input
          placeholder="Снаружи"
          id="margin"
          value={customMargin}
          inputStyle="border-2 border-line-secondary bg-primary text-center py-1.5 px-3"
          onChange={(e) => onChangeSize(e.target.value, setMargin, 0, 250)}
        />
        <Input
          placeholder="Внутри"
          value={customPadding}
          inputStyle="border-2 border-line-secondary bg-primary text-center py-1.5 px-3"
          onChange={(e) => onChangeSize(e.target.value, setPadding, 0, 250)}
        />
      </FilterBlock>
      <FilterBlock
        defaultGrid={false}
        title="Рамка"
        childrenClass="grid grid-cols-2 grid-rows-2 justify-center gap-2"
      >
        <Input
          placeholder="Слева"
          value={border[0]}
          inputStyle="border-line-secondary border-2 py-2 px-3"
          onChange={(e) => setBorder(0, e.target.value)}
        />
        <Input
          placeholder="Сверху"
          value={border[1]}
          inputStyle="border-line-secondary border-2 py-2 px-3"
          onChange={(e) => setBorder(1, e.target.value)}
        />
        <Input
          placeholder="Справа"
          value={border[2]}
          inputStyle="border-line-secondary border-2 py-2 px-3"
          onChange={(e) => setBorder(2, e.target.value)}
        />
        <Input
          placeholder="Снизу"
          value={border[3]}
          inputStyle="border-line-secondary border-2 py-2 px-3"
          onChange={(e) => setBorder(3, e.target.value)}
        />
      </FilterBlock>
    </form>
  );
};
