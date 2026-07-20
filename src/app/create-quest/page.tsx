import { CreateQuestBorder } from "@/feature/create-quest-border";
import { Temp } from "@/shared/ui/Temp";

export default function CreateQuest() {
  return (
    <>
      <Temp title="Раздел находится в разработке" className="mb-40" />
      <CreateQuestBorder />
    </>
  );
}
