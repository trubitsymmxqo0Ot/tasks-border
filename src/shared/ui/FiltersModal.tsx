import clsx from "clsx";
import { ReactNode } from "react";
import { text } from "../config/text";

interface FiltersModal {
  className?: string;
  children: ReactNode;
  label?: string;
  labelStyle?: string;
}

export const FiltersModal = ({
  children,
  className,
  label,
  labelStyle,
}: FiltersModal) => {
  return (
    <div className={clsx("p-3 rounded-xl text-center", className)}>
      {label && (
        <label
          className={clsx(
            text({ size: "md", weights: "bold" }),
            "mb-3 inline-block",
            labelStyle,
          )}
        >
          {label}
        </label>
      )}
      {children}
    </div>
  );
};
