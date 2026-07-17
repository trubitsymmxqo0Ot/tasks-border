import { QuestTable } from "@/feature/quest-table";
import { temp } from "../model/temp";

export const TaskBorder = () => {
  return (
    <>
      {temp.map((quest) => (
        <QuestTable key={quest.id} title={quest.title} quests={quest.quests} />
      ))}
    </>
  );
};
