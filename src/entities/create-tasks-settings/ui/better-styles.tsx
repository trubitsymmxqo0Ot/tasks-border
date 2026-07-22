import { text } from "@/shared/config/text";
import clsx from "clsx";
import { useState } from "react";

interface BetterStylesProps<T> {
  array: T[];
  className?: string;
  setValue: (value: T) => void;
  disabled: boolean;
}

export function BetterStyles<T extends string>({
  array,
  className,
  setValue,
  disabled,
}: BetterStylesProps<T>) {
  const [select, setSelect] = useState("");
  const handleSelectItem = (item: T) => {
    if (item === select) {
      setSelect("");
      setValue("");
    } else {
      setSelect(item);
      setValue(item);
    }
  };

  return (
    <div className={clsx("text-color-tertiary text-center", className)}>
      <p title="Лучшая поддержка" className="mb-1">
        Или готовые варианты
      </p>
      <div className="flex gap-2 items-center justify-center flex-wrap">
        {array.map((item, idx) => (
          <button
            key={idx}
            disabled={disabled}
            onClick={() => handleSelectItem(item)}
            className={clsx(
              text({ size: "tn" }),
              "border-line-primary border p-1",
              select === item && "bg-line-primary",
              disabled
                ? "bg-color-inverted !cursor-not-allowed border-danger"
                : "border-line-primary",
            )}
          >
            {String(item)}
          </button>
        ))}
      </div>
    </div>
  );
}
