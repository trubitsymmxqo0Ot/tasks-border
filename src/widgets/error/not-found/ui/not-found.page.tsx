"use client";
import clsx from "clsx";
import { notFoundData } from "../model/not-found.data";
import { NotFoundQuest } from "./not-found-quest";
import { text } from "@/shared/config/text";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";

export const NotFoundPage = () => {
  const { quests, titleEvening, titleMorning } = notFoundData;
  return (
    <section className="w-full h-dvh flex flex-col items-center justify-center">
      <h2 className={clsx(text({ size: "bg", weights: "black" }), "mb-10")}>
        Страница не найдена
      </h2>
      <div className="border border-line-primary p-5 rounded-xl w-full mb-10 bg-secondary">
        <h2
          className={clsx(
            text({ size: "lg", weights: "bold" }),
            "text-center mb-6",
          )}
        >
          Альтернативные задачи на сегодня:
        </h2>
        <div
          className={clsx(
            text({ size: "tn" }),
            "flex items-center text-color-tertiary mb-3",
          )}
        >
          <Breadcrumbs titles={[titleEvening, titleMorning]} />
        </div>
        <NotFoundQuest title={titleMorning} quests={quests} />
        <NotFoundQuest title={titleEvening} quests={quests} />
      </div>
      <Link
        href="/"
        className="border py-2 px-6 rounded-xl hover:bg-tertiary transition-all"
      >
        К задачам
      </Link>
    </section>
  );
};
