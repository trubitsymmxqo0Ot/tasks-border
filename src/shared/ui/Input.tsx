import clsx from "clsx";
import {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useState,
} from "react";
import { directionMove, Directions } from "../helpers/directionMove";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
  className?: string;
  inputStyle?: string;
  childrenStyle?: string;
  direction?: "left" | "right";
  type?: string;
  placeholder?: string;
  showPassword?: boolean;
  maxLength?: number;
  idForLabel?: string;
  animationPlaceholder?: boolean;
}

export const Input = ({
  onChange,
  value,
  className,
  direction = "right",
  children,
  type = "text",
  childrenStyle,
  inputStyle,
  placeholder = "",
  showPassword = false,
  maxLength,
  idForLabel,
  animationPlaceholder,
  ...rest
}: InputProps) => {
  const [textDirection, textSetDirection] = useState<Directions>(null);
  const currentType = showPassword ? "text" : "password";
  const [onFocus, setOnFocus] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    setOnFocus(true);
    textSetDirection(
      directionMove({
        prevElem: ref.current?.previousElementSibling,
        nextElem: ref.current?.nextElementSibling,
        currentElem: ref.current,
      }),
    );
  };

  const directionStyle = {
    top: "-top-1/2 left-1",
    bottom: "top-17 left-1",
    none: "opacity-0 top-1/2 left-2.5",
  };
  return (
    <div className={clsx("relative w=full", className)} ref={ref}>
      {animationPlaceholder && (
        <label
          htmlFor={idForLabel}
          className={clsx(
            onFocus
              ? directionStyle[textDirection || "top"]
              : !value
                ? "top-1/2 left-2.5"
                : directionStyle[textDirection || "top"],

            "absolute -translate-y-1/2 transition-all cursor-text text-color-tertiary z-40",
          )}
        >
          {placeholder}
        </label>
      )}
      <span className="relative w-auto">
        <input
          {...rest}
          onFocus={() => handleFocus()}
          onBlur={() => setOnFocus(false)}
          id={idForLabel}
          type={type === "password" ? currentType : type}
          value={value}
          placeholder={!animationPlaceholder ? placeholder : ""}
          onChange={onChange}
          className={clsx(
            !!children &&
              (direction === "left" ? "pl-8" : "pr-11 relative z-10"),
            inputStyle,
          )}
          maxLength={maxLength}
        />
        {!!children && (
          <span
            className={clsx(
              direction === "right" ? "right-0" : "left-4",
              "absolute top-1/2 -translate-1/2 bg-secondary z-10 ",
              childrenStyle,
            )}
          >
            {children}
          </span>
        )}
      </span>
    </div>
  );
};
