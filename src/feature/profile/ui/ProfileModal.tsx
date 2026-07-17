"use client";
import { PopupProfileModal } from "@/entities/popup-profile-modal";
import { Portal } from "@/shared/ui/Portal";
import { useState } from "react";
import { TypeModal } from "../types/types";
import { ProfileModalLogin } from "./ProfileModalLogin";

export const ProfileModal = () => {
  const [isAuthonized] = useState(false);
  const [open, setOpen] = useState(false);
  const [typeModal, setTypeModal] = useState<TypeModal>("");

  if (isAuthonized) {
    return <PopupProfileModal open={open} setOpen={setOpen} />;
  }

  const handleOpenModal = (type: TypeModal) => {
    setTypeModal(type);
    setOpen(true);
  };

  return (
    <div className="flex items-center gap-8">
      <button
        onClick={() => handleOpenModal("login")}
        className="cursor-pointer hover:text-color-secondary transition-colors"
      >
        Войти
      </button>
      <button
        onClick={() => handleOpenModal("register")}
        className="cursor-pointer hover:text-color-secondary transition-colors"
      >
        Зарегистрироваться
      </button>
      {open && (
        <Portal>
          {typeModal === "login" ? (
            <ProfileModalLogin
              title="Вход"
              buttonText="Войти"
              onOpen={setOpen}
              key="login"
            >
              <p>
                Ещё не зарегистрированы?
                <button
                  className="cursor-pointer text-accent px-4"
                  onClick={() => setTypeModal("register")}
                >
                  Регистрация
                </button>
              </p>
            </ProfileModalLogin>
          ) : (
            <ProfileModalLogin
              key="register"
              title="Регистрация"
              buttonText="Зарегистрироваться"
              onOpen={setOpen}
            >
              <p>
                Уже зарегистрированы?
                <button
                  className="cursor-pointer text-accent px-4"
                  onClick={() => setTypeModal("login")}
                >
                  Вход
                </button>
              </p>
            </ProfileModalLogin>
          )}
        </Portal>
      )}
    </div>
  );
};
