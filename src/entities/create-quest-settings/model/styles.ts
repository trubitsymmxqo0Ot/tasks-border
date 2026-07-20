import { IColors, ISizes, IWeights } from "../type/type";

export const colors: IColors[] = [
  {
    id: 1,
    title: "Яркий",
    type: "primary",
  },
  {
    id: 2,
    title: "Умеренно яркий",
    type: "secondary",
  },
  {
    id: 3,
    title: "Тусклый",
    type: "tertiary",
  },
  {
    id: 4,
    title: "Красный",
    type: "danger",
  },
  {
    id: 5,
    title: "Салатовый",
    type: "success",
  },
  {
    id: 6,
    title: "Золотой",
    type: "warning",
  },
];

export const weights: IWeights[] = [
  {
    id: 1,
    title: "Легкий",
    type: "medium",
  },
  {
    id: 2,
    title: "Немного жирный",
    type: "semibold",
  },
  {
    id: 3,
    title: "Жирный",
    type: "bold",
  },
  {
    id: 4,
    title: "Очень жирный",
    type: "black",
  },
];

export const sizes: ISizes[] = [
  {
    id: 1,
    title: "Крохотный",
    type: "tn",
  },
  {
    id: 2,
    title: "Маленький",
    type: "sm",
  },
  {
    id: 3,
    title: "Средний",
    type: "md",
  },
  {
    id: 4,
    title: "Большой",
    type: "lg",
  },
  {
    id: 5,
    title: "Огромный",
    type: "bg",
  },
];
