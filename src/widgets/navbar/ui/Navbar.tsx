"use client";

import { ProfileModal } from "@/feature/profile";
import { Theme } from "@/feature/theme";

export const Navbar = () => {
  return (
    <header className="bg-secondary flex justify-end gap-15 items-center px-4 py-3">
      <ProfileModal />
      <Theme />
    </header>
  );
};
