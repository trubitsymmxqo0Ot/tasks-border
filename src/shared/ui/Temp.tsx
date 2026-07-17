import clsx from "clsx";
import { text } from "../config/text";

interface TempProps {
  title: string;
  className?: string;
}

export const Temp = ({ title, className }: TempProps) => {
  return (
    <h1
      className={clsx(
        "text-center",
        text({ size: "bg", weights: "black" }),
        className,
      )}
    >
      {title}
    </h1>
  );
};
