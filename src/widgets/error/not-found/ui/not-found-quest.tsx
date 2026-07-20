import { QuestsProps } from "@/feature/quest-table";
import { text } from "@/shared/config/text";
import clsx from "clsx";
import CircleCheck from "@/shared/assets/circle-check.svg";

interface NotFoundQuestProps {
  title: string;
  quests: QuestsProps[];
}
export const NotFoundQuest = ({ quests, title }: NotFoundQuestProps) => {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between border-line-secondary border-b border-t px-4 py-1 mb-3">
        <h2 className={clsx("mb-2", text({ size: "lg", weights: "bold" }))}>
          {title}
        </h2>
        <p className={clsx(text({ size: "tn" }))}>+{quests.length}</p>
      </div>
      <ul>
        {quests.map((item) => (
          <li
            key={item.id}
            className={clsx(
              "flex items-center mb-2 gap-x-1.5",
              text({ size: "md" }),
            )}
          >
            <CircleCheck className="text-success w-4 h-4" />
            {item.quest}
          </li>
        ))}
      </ul>
    </div>
  );
};
