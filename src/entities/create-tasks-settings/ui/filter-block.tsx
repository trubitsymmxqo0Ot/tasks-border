import { text } from "@/shared/config/text";
import clsx from "clsx";
import { ReactNode } from "react";

interface FilterBlockProps {
  title: string;
  htmlFor?: string;
  id?: string;
  children: ReactNode;
  betterStyle?: ReactNode;
  childrenClass?: string;
  className?: string;
  defaultGrid?: boolean;
}

export const FilterBlock = ({
  title,
  htmlFor,
  betterStyle,
  children,
  childrenClass,
  className,
  defaultGrid = true,
}: FilterBlockProps) => {
  return (
    <div className={className}>
      <label
        className={clsx(
          text({ size: "lg", weights: "bold" }),
          "text-center mb-4 block cursor-pointer",
        )}
        htmlFor={htmlFor}
      >
        {title}
      </label>
      <div
        className={clsx(
          defaultGrid && "flex flex-col items-center",
          childrenClass,
        )}
      >
        {children}
      </div>
      {!!betterStyle && betterStyle}
    </div>
  );
};
