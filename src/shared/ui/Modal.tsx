import clsx from "clsx";
import { ReactNode } from "react";

interface ModalProps {
  className?: string;
  children: ReactNode;
  onOpen: (open: boolean) => void;
}
export const Modal = ({ className, children, onOpen }: ModalProps) => {
  const defaultClass =
    "w-140 h-auto bg-secondary absolute top-1/2 left-1/2 -translate-1/2 z-20 p-5";
  return (
    <>
      <div
        onClick={() => onOpen(false)}
        className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-45"
      />
      <div className={clsx(defaultClass, className)}>{children}</div>
    </>
  );
};
