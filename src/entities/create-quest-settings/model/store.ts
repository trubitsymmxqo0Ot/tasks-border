import { create } from "zustand";
import { BorderType, ColorsType, PositionType, SizesType, WeightsType } from "../type/type";

interface UseCreateCardActions {
  setTitleStyles: (type: ColorsType, name: string) => void;
  setWeightStyles: (type: WeightsType, name: string) => void;
  setSizeStyles: (type: SizesType, name: string) => void;
  setPositionStyles: (type: PositionType, name: string) => void;
  setBorderStyles: (type: BorderType, name: string) => void;
}

interface IUseCreateCard extends UseCreateCardActions {
  title: {
    type: ColorsType;
    name: string;
  };
  weight: {
    type: WeightsType;
    name: string;
  };
  size: {
    type: SizesType;
    name: string;
  };
  position: {
    type: PositionType;
    name: string;
  };
  border: {
    type: BorderType;
    name: string;
  }
}

export const useSelectTitleStyles = create<IUseCreateCard>()((set) => ({
  title: { type: "primary", name: "Цвет текста" },
  weight: { type: "medium", name: "Жирность текста" },
  size: { type: "bg", name: "Размер текста" },
  position: { type: 'left', name: "Слева"},
  border: { type: 'up-down', name: 'Сверху и снизу'},

  setTitleStyles: (type, name) => set((state) => ({ title: { type, name } })),
  setWeightStyles: (type, name) => set((state) => ({ weight: { type, name } })),
  setSizeStyles: (type, name) => set((state) => ({ size: { type, name } })),
  setPositionStyles: (type, name) => set((state) => ({ position: {type, name}})),
  setBorderStyles: (type, name) => set((state) => ({border: {type, name}})),
}));
