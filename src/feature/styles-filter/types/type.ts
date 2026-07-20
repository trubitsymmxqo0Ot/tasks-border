export type SelectedFilterType = "title" | "quests" | "quest" | "settings" | false;

export interface IFilters {
  id: number;
  title: string;
  type: SelectedFilterType;
}
