import { QuestsProps, QuestTableList } from "@/entities/quest-table";
import { text } from "@/shared/config/text";
import clsx from "clsx";

interface QuestTableProps {
  title: string;
  quests: QuestsProps[];
  className?: string;
  titleClass?: string;
}

export const QuestTable = ({
  title,
  quests,
  className,
  titleClass,
}: QuestTableProps) => {
  return (
    <div className={clsx("w-full", className)}>
      <p className={clsx(text({ size: "bg", weights: "bold" }), titleClass)}>
        {title}
      </p>
      <QuestTableList quests={quests} />
    </div>
  );
};
