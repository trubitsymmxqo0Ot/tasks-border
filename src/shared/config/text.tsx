import { tv } from "tailwind-variants";

export const text = tv({
  variants: {
    size: {
      bg: "text-3xl md:text-4xl",
      lg: "text-lg md:text-3xl",
      md: "text-base md:text-lg",
      sm: "text-sm md:text-base",
      tn: "text-[10px] md:text-xs",
    },
    weights: {
      bold: "font-bold",
      semibold: "font-semibold",
      black: "font-black",
      medium: "font-meduim",
    },
    color: {
      primary: "text-color-primary",
      secondary: "text-color-secondary",
      tertiary: "text-color-tertiary",
      danger: "text-danger",
      success: "text-success",
      warning: "text-warning",
    },
    positions: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
});
