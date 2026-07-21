import { create } from "zustand";
import { IUseSelectFilterTitle } from "../types/types";

interface IUseSelectFilter {
  data: {
    title: string;
    size: string;
    border: [string, string, string, string];
    customColor: string;
    customMargin: string;
    customPadding: string;
  };
  styles: IUseSelectFilterTitle;
  setStyle: (style: Partial<IUseSelectFilter>) => void;
  setTitle: (title: string) => void;
  setSize: (size: string) => void;
  setColor: (color: string) => void;
  setMargin: (margin: string) => void;
  setPadding: (padding: string) => void;
  setBorder: (direction: 0 | 1 | 2 | 3, value: string) => void;
}

export const useSelectFilter = create<IUseSelectFilter>((set) => ({
  data: {
    title: "",
    size: "1",
    border: ["", "", "", ""],
    customColor: "",
    customMargin: "",
    customPadding: "",
  },
  styles: {
    size: "none",
    minSize: "none",
    customColor: "none",
    border: ["none", "none", "none", "none"],
    customMargin: "none",
    customPadding: "none",
    default: {
      colors: "primary",
      weights: "medium",
      positions: "left",
    },
  },
  setTitle: (title) =>
    set((state) => ({
      data: {
        ...state.data,
        title,
      },
    })),
  setColor: (color) =>
    set((state) => ({
      data: {
        ...state.data,
        customColor: color,
      },
    })),
  setBorder: (direction, value) =>
    set((state) => {
      const changedBorder = [...state.data.border] as [
        string,
        string,
        string,
        string,
      ];
      changedBorder[direction] = value;
      return {
        data: {
          ...state.data,
          border: changedBorder,
        },
      };
    }),
  setSize: (size: string) =>
    set((state) => ({
      data: {
        ...state.data,
        size,
      },
    })),
  setMargin: (margin) =>
    set((state) => ({
      data: {
        ...state.data,
        customMargin: margin,
      },
    })),
  setPadding: (padding) =>
    set((state) => ({
      data: {
        ...state.data,
        customPadding: padding,
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
