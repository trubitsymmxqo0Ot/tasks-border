import { QuestsProps } from "../model/types";

interface QuestTableProps {
    quests: QuestsProps[];
}

export const QuestTableList = ({quests}: QuestTableProps) => {
    return (
        <ul>
            {quests.map(item => (
                <li key={item.id}>{item.quest}</li>
            ))}
        </ul>
    )
}