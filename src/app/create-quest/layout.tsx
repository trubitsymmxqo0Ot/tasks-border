import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Создание задачи",
  description: "На этой странице вы можете создать собственную задачу",
};

export default function CreateTasksLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <nav>{children}</nav>;
}
