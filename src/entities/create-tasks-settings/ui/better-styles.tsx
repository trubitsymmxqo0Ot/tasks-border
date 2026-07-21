import { text } from "@/shared/config/text";
import clsx from "clsx";

interface BetterStylesProps<T> {
  array: T[];
  className?: string;
}

export function BetterStyles<T>({ array, className }: BetterStylesProps<T>) {
  return (
    <div className={clsx("text-color-tertiary text-center", className)}>
      <p title="Лучшая поддержка" className="mb-1">
        Или готовые варианты
      </p>
      <div className="flex gap-2 items-center justify-center flex-wrap">
        {array.map((item, idx) => (
          <button
            key={idx}
            className={clsx(
              text({ size: "tn" }),
              "border-line-primary border p-1 hover:bg-primary/10 transition-colors",
            )}
          >
            {String(item)}
          </button>
        ))}
      </div>
    </div>
  );
}
