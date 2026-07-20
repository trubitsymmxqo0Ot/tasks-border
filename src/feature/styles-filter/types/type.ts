export type SelectedFilterType = "title" | "quests" | "quest" | false;

export interface IFilters {
  id: number;
  title: string;
  type: SelectedFilterType;
}
