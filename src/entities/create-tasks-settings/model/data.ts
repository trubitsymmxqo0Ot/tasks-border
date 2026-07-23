import { IUseSelectFilterTitle, SidesIds } from "../types/types";

export interface IArrayData {
  title: string;
  type: keyof IUseSelectFilterTitle["matrixData"];
  name: "padding" | "margin" | "border";
  sides: {
    id: SidesIds;
    placeholder: string;
  }[];
}

interface IData {
  size: {
    title: string;
    placeholder: string;
  };
  color: { title: string };
  gaps: IArrayData[];
  weight: { title: string };
  position: { title: string };
}

export const data: IData = {
  size: { title: "Размеры заголовка", placeholder: "мин. 1" },
  color: { title: "Цвет заголовка" },
  gaps: [
    {
      title: "Отступ снаружи",
      type: "customMargin",
      name: "margin",
      sides: [
        { id: 0, placeholder: "Сверху" },
        { id: 1, placeholder: "Справа" },
        { id: 2, placeholder: "Снизу" },
        { id: 3, placeholder: "Слева" },
      ],
    },
    {
      title: "Отступ внутри",
      type: "customPadding",
      name: "padding",
      sides: [
        { id: 0, placeholder: "Сверху" },
        { id: 1, placeholder: "Справа" },
        { id: 2, placeholder: "Снизу" },
        { id: 3, placeholder: "Слева" },
      ],
    },
    {
      title: "Рамка",
      type: "border",
      name: "border",
      sides: [
        { id: 0, placeholder: "Слева" },
        { id: 1, placeholder: "Сверху" },
        { id: 2, placeholder: "Справа" },
        { id: 3, placeholder: "Снизу" },
      ],
    },
  ],
  weight: { title: "Жирность текста" },
  position: { title: "Позиция заголовка" },
};
