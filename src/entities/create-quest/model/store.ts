import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface DataUserCreateCard {
  [key: string | number]: number | string;
}

interface IUseCreateCard {
  data: DataUserCreateCard;
  title: string;
  setTitle: (title: string) => void;
  setData: (data: DataUserCreateCard) => void;
}

export const useCreateCard = create<IUseCreateCard>()(
  devtools((set) => ({
    title: "",
    data: {},
    setTitle: (title: string) => set({ title }),
    setData: (data: DataUserCreateCard) =>
      set((state) => ({ data: { ...state.data, ...data } })),
  })),
);
