import { create } from "zustand";

interface IUseOpen {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const useOpen = create<IUseOpen>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
