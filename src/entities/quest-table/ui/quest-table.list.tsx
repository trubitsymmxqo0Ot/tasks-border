import clsx from "clsx";
import { QuestsProps } from "../model/types";

interface QuestTableProps {
  quests: QuestsProps[];
  className?: string;
  textClass?: string;
}

export const QuestTableList = ({
  quests,
  className,
  textClass,
}: QuestTableProps) => {
  return (
    <ul className={className}>
      {quests.map((item) => (
        <li
          key={item.id}
          className={clsx("border-b cursor-pointer mb-5", textClass)}
        >
          {item.quest}
        </li>
      ))}
    </ul>
  );
};
