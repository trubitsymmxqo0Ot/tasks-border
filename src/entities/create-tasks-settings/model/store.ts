import { create } from "zustand";
import {
  IUseSelectFilterTitle,
  Positions,
  Sizes,
  Weights,
  DefaultColors,
  Sides,
} from "../types/types";

interface IUseSelectFilter {
  title: string;
  styles: IUseSelectFilterTitle;
  setStyle: (style: Partial<IUseSelectFilter>) => void;
  setTitle: (title: string) => void;
  setSize: (size: string) => void;
  setColor: (color: string) => void;
  setMargin: (direction: 0 | 1 | 2 | 3, value: string) => void;
  setPadding: (direction: 0 | 1 | 2 | 3, value: string) => void;
  setBorder: (direction: 0 | 1 | 2 | 3, value: string) => void;
  setDefaultSize: (size: Sizes) => void;
  setDefaultPosition: (position: Positions) => void;
  setDefaultWeight: (weight: Weights) => void;
  setDefaultColor: (color: DefaultColors) => void;
}

export const useSelectFilter = create<IUseSelectFilter>((set) => ({
  title: "",
  styles: {
    size: "",
    color: "",
    customMargin: ["", "", "", ""],
    customPadding: ["", "", "", ""],
    border: ["", "", "", ""],
    default: {
      color: "",
      weights: "",
      position: "",
      size: "",
    },
  },
  setTitle: (title) => set({ title }),
  setColor: (color) =>
    set((state) => ({
      styles: {
        ...state.styles,
        color,
      },
    })),
  setBorder: (direction, value) =>
    set((state) => {
      const changedBorder = [...state.styles.border] as Sides;
      changedBorder[direction] = value;
      return {
        styles: {
          ...state.styles,
          border: changedBorder,
        },
      };
    }),
  setSize: (size) =>
    set((state) => ({
      styles: {
        ...state.styles,
        size,
      },
    })),
  setMargin: (direction, value) =>
    set((state) => {
      const changedMargin = [...state.styles.customMargin] as Sides;
      changedMargin[direction] = value;
      return {
        styles: {
          ...state.styles,
          customMargin: changedMargin,
        },
      };
    }),
  setPadding: (direction, value) =>
    set((state) => {
      const changedPadding = [...state.styles.customPadding] as Sides;
      changedPadding[direction] = value;
      return {
        styles: {
          ...state.styles,
          customPadding: changedPadding,
        },
      };
    }),
  setDefaultSize: (size) =>
    set((state) => ({
      styles: {
        ...state.styles,
        default: {
          ...state.styles.default,
          size,
        },
      },
    })),
  setDefaultColor: (color) =>
    set((state) => ({
      styles: {
        ...state.styles,
        default: {
          ...state.styles.default,
          color,
        },
      },
    })),
  setDefaultPosition: (position) =>
    set((state) => ({
      styles: {
        ...state.styles,
        default: {
          ...state.styles.default,
          position,
        },
      },
    })),
  setDefaultWeight: (weight) =>
    set((state) => ({
      styles: {
        ...state.styles,
        default: {
          ...state.styles.default,
          weights: weight,
        },
      },
    })),
  setStyle: (styles) =>
    set((state) => ({
      styles: {
        ...state.styles,
        title: {
          ...state.styles,
          ...styles,
        },
      },
    })),
}));
