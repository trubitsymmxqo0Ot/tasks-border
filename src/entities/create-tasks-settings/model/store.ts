import { create } from "zustand";
import { IUseSelectFilterTitle, Sides, IDefaultSettings } from "../types/types";

interface IUseSelectFilter {
  title: string;
  styles: IUseSelectFilterTitle;
  setStyle: <T>(type: keyof IUseSelectFilterTitle, value: T) => void;
  setDefaultStyle: <T>(type: keyof IDefaultSettings, value: T) => void;
  setTitle: (title: string) => void;
  setArrayStyle: (
    type: keyof IUseSelectFilterTitle["matrixData"],
    direction: 0 | 1 | 2 | 3,
    value: string,
  ) => void;
}

export const useSelectFilter = create<IUseSelectFilter>((set) => ({
  title: "",
  styles: {
    size: "",
    color: "",
    matrixData: {
      customMargin: ["", "", "", ""],
      customPadding: ["", "", "", ""],
      border: ["", "", "", ""],
    },
    default: {
      color: "",
      weights: "",
      position: "",
      size: "",
    },
  },
  setStyle: (type, value) =>
    set((state) => ({
      styles: {
        ...state.styles,
        [type]: value,
      },
    })),
  setDefaultStyle: (type, value) =>
    set((state) => ({
      styles: {
        ...state.styles,
        default: {
          ...state.styles.default,
          [type]: value,
        },
      },
    })),
  setTitle: (title) => set({ title }),

  setArrayStyle: (type, direction, value) =>
    set((state) => {
      const updateArray = [...state.styles.matrixData[type]] as Sides;
      updateArray[direction] = value;

      return {
        styles: {
          ...state.styles,
          matrixData: {
            ...state.styles.matrixData,
            [type]: updateArray,
          },
        },
      };
    }),
  // setMargin: (direction, value) =>
  //   set((state) => {
  //     const changedMargin = [...state.styles.customMargin] as Sides;
  //     changedMargin[direction] = value;
  //     return {
  //       styles: {
  //         ...state.styles,
  //         customMargin: changedMargin,
  //       },
  //     };
  //   }),
}));
