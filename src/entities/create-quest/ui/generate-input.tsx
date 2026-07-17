import { Input } from "@/shared/ui/Input";
import { useState } from "react";

export const GenerateInput = () => {
  const [quest, setQuest] = useState("");
  return <Input value={quest} onChange={setQuest} type="text" />;
};
