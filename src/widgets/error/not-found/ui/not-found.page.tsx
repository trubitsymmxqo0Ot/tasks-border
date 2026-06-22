import { QuestTable } from "@/feature/quest-table/ui/QuestTable";
import { notFoundData } from "../model/not-found.data";

export const NotFoundPage = () => {
  const { quests, titleEvening, titleMorning } = notFoundData;
  return (
    <section className="w-full h-dvh flex flex-col items-center justify-center">
      <div>
        <QuestTable title={titleMorning} quests={quests} />
        <QuestTable title={titleEvening} quests={quests} />
      </div>
    </section>
  );
};
