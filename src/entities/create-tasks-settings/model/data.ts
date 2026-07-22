interface IData {
  size: {
    title: string;
    placeholder: string;
  };
  color: { title: string };
  gaps: { title: string };
  margin: {
    title: string;
    sides: {
      id: 0 | 1 | 2 | 3;
      placeholder: string;
    }[];
  };
  padding: {
    title: string;
    sides: {
      id: 0 | 1 | 2 | 3;
      placeholder: string;
    }[];
  };
  border: {
    title: string;
    settings: {
      id: 0 | 1 | 2 | 3;
      placeholder: string;
    }[];
  };
  weight: { title: string };
  position: { title: string };
}

export const data: IData = {
  size: { title: "Размеры заголовка", placeholder: "мин. 1" },
  color: { title: "Цвет заголовка" },
  gaps: { title: "Отступ" },
  margin: {
    title: "Снаружи",
    sides: [
      { id: 0, placeholder: "Сверху" },
      { id: 1, placeholder: "Справа" },
      { id: 2, placeholder: "Снизу" },
      { id: 3, placeholder: "Слева" },
    ],
  },
  padding: {
    title: "Внутри",
    sides: [
      { id: 0, placeholder: "Сверху" },
      { id: 1, placeholder: "Справа" },
      { id: 2, placeholder: "Снизу" },
      { id: 3, placeholder: "Слева" },
    ],
  },
  border: {
    title: "Рамка",
    settings: [
      { id: 0, placeholder: "Слева" },
      { id: 1, placeholder: "Сверху" },
      { id: 2, placeholder: "Справа" },
      { id: 3, placeholder: "Снизу" },
    ],
  },
  weight: { title: "Жирность текста" },
  position: { title: "Позиция заголовка" },
};
