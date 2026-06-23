import { ComponentPropsWithoutRef, ReactNode } from "react";

type TypographyElement = "span" | "p" | "h2" | "h3" | "button";

interface TypographyProps extends ComponentPropsWithoutRef<TypographyElement> {
  as?: TypographyElement;
  className?: string;
  children: ReactNode;
}

export const Typography = ({
  as = "p",
  className,
  children,
}: TypographyProps) => {
  const Component = as;
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};
