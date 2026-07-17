import User from "../assets/user.svg";
import clsx from "clsx";
import Link from "next/link";
import { links } from "../model/links";
import { text } from "@/shared/config/text";

interface PopupProfileModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setIsAuthonized: (isAuthonized: boolean) => void;
}

export const PopupProfileModal = ({
  open,
  setOpen,
  setIsAuthonized,
}: PopupProfileModalProps) => {
  return (
    <div className="flex items-center relative">
      <button className="cursor-pointer" onClick={() => setOpen(!open)}>
        <User className="w-6 h-6" />
      </button>
      <div
        className={clsx(
          text({ size: "sm" }),
          "absolute w-50 overflow-hidden transition-all top-32.5 rounded-b-xl left-1/2 -translate-1/2 flex flex-col text-center gap-3",
          open ? "h-50 py-6 border-secondary border-4" : "h-0 border-0",
        )}
      >
        <div className="flex-1">
          {links.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
              className="block mb-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="bg-danger-bg flex justify-center items-center py-2"
          onClick={() => {
            setOpen(false);
            setIsAuthonized(false);
          }}
        >
          Выйти
        </Link>
      </div>
    </div>
  );
};
