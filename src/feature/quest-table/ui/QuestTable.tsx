import { QuestsProps, QuestTableList } from "@/entities/quest-table"

interface QuestTableProps {
    title: string;
    quests: QuestsProps[];
    className?: string;
}

export const QuestTable = ({title, quests, className}: QuestTableProps) => {
    return (
        <div className={className}>
        <p>{title}</p>
        <QuestTableList quests={quests}/>
        </div>
)
}