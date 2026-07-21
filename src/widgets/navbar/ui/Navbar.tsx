"use client";

import { ProfileModal } from "@/feature/profile";
import { Theme } from "@/entities/theme";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useOpen } from "@/widgets/create-tasks";

export const Navbar = () => {
  const pathname = usePathname();
  const open = useOpen((state) => state.isOpen);
  return (
    <header
      className={clsx(
        open && pathname === "/create-quest" ? "h-0 p-0" : "px-4 py-3",
        "bg-secondary flex justify-end gap-15 transition-all items-center overflow-hidden",
      )}
    >
      <ProfileModal />
      <Theme />
    </header>
  );
};
