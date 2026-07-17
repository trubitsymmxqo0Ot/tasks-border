import clsx from "clsx";
import { ReactNode } from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  children?: ReactNode;
  className?: string;
  inputStyle?: string;
  childrenStyle?: string;
  direction?: "left" | "right";
  type: string;
  placeholder?: string;
  showPassword?: boolean;
  maxLength?: number;
}

export const Input = ({
  onChange,
  value,
  className,
  direction = "right",
  children,
  type,
  childrenStyle,
  inputStyle,
  placeholder = "",
  showPassword = false,
  maxLength,
}: InputProps) => {
  const currentType = showPassword ? "text" : "password";

  return (
    <div className={clsx("relative w-full", className)}>
      <input
        type={type === "password" ? currentType : type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={clsx(direction === "left" ? "pl-8" : "pr-11", inputStyle)}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {!!children && (
        <div
          className={clsx(
            direction === "right" ? "right-0" : "left-4",
            "absolute top-1/2 -translate-1/2 bg-secondary z-10",
            childrenStyle,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
