import { ReactNode } from "react";

type WrapperContainer =
  | "div"
  | "section"
  | "nav"
  | "aside"
  | "header"
  | "footer"
  | "ul"
  | "ol"
  | "main";

interface WrapperProps {
  as?: WrapperContainer;
  className?: string;
  children: ReactNode;
}

export const Wrapper = ({ children, as = "div", className }: WrapperProps) => {
  const Component = as;
  return <Component className={className}>{children}</Component>;
};
