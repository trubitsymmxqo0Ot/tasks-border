import { text } from "@/shared/config/text";
import { Modal } from "@/shared/ui/Modal";
import clsx from "clsx";
import { ReactNode, useState } from "react";
import EyeClosed from "../assets/eye-closed.svg";
import EyeOpen from "../assets/eye-open.svg";
import { Input } from "@/shared/ui/Input";

interface ProfileModalLoginProps {
  onOpen: (open: boolean) => void;
  title: string;
  buttonText: string;
  children: ReactNode;
}

export const ProfileModalLogin = ({
  onOpen,
  title,
  buttonText,
  children,
}: ProfileModalLoginProps) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Modal onOpen={onOpen} className="text-center">
      <h3 className={clsx("mb-7", text({ size: "lg", weights: "bold" }))}>
        {title}
      </h3>
      <div className="mb-7 w-full flex flex-col items-center gap-5">
        <Input
          showPassword={showPassword}
          onChange={setName}
          value={name}
          type="text"
          placeholder="Введите ваше имя или почту"
          maxLength={35}
          inputStyle={clsx(
            text({ size: "md" }),
            "border-line-secondary border-2 p-2 block w-full",
          )}
        />
        <Input
          direction="right"
          showPassword={showPassword}
          type="password"
          inputStyle={clsx(
            text({ size: "md" }),
            "border-line-secondary border-2 p-2 block w-full",
          )}
          value={password}
          onChange={setPassword}
          placeholder="Введите пароль"
        >
          {showPassword ? (
            <EyeOpen onClick={() => setShowPassword(false)} />
          ) : (
            <EyeClosed onClick={() => setShowPassword(true)} />
          )}
        </Input>
        <button
          className={clsx("bg-line-primary py-2 px-8", text({ size: "md" }))}
        >
          {buttonText}
        </button>
      </div>
      {children}
    </Modal>
  );
};
