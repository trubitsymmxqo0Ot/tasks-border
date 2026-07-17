import { ReactNode } from "react";
import { useHydration } from "../hooks/useHydration";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const isMounted = useHydration();
  if (!isMounted) return null;

  return createPortal(children, document.body);
};
