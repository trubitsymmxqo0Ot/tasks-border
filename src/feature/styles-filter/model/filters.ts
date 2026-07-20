import { IFilters } from "../types/type";

export const filters: IFilters[] = [
  {
    id: 1,
    title: "Заголовок",
    type: "title",
  },
  {
    id: 2,
    title: "Подзадачи",
    type: "quests",
  },
  {
    id: 3,
    title: "Конкретная задача",
    type: "quest",
  },
  {
    id: 4,
    title: "Дополнительные настройки",
    type: 'settings',
  }
];
