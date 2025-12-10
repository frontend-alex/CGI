import type { EventCardProps } from "@/components/cards/events/event-card"
import { Card } from "@/components/ui/card"
import { getWeekdayName } from "@/lib/utils"
import { CalendarRange, Clock } from "lucide-react"

type CalendarCardProps = {
    event: EventCardProps
    color: "red" | "dark"
}

const CalendarCard = ({ event, color }: CalendarCardProps) => {

    const { date, title, subtitle, category, time, year, month } = event

    return (
        <Card
            className="bg-muted border-none shadow-none p-3 flex flex-row gap-3 h-24"
        >
            {/* Date badge */}
            <div className={`flex w-15 flex-col items-center justify-center gap-0.5  rounded-md ${color === "red" ? "bg-(--color-gradient-start-red) text-white" : "bg-slate-900 dark:bg-white dark:text-black text-white"
                }`}>
                <div className="text-2xl font-bold leading-none">{date}</div>
                <div className="text-xs font-medium opacity-90">{getWeekdayName(year, month, date).slice(0, 3)}</div>
            </div>

            {/* Event details */}
            <div className="flex flex-1 flex-col justify-center gap-1.5 py-4 pr-4">
                <div>
                    <h3 className="text-base font-semibold leading-tight">{title}</h3>
                    <p className="text-sm opacity-90 text-muted-foreground">{subtitle}</p>
                </div>
                <div className="flex items-center gap-2 text-xs opacity-90">
                    <CalendarRange className="h-3 w-3" />
                    <span className="flex items-center gap-1">
                        {category}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {time}
                    </span>
                </div>
            </div>
        </Card>
    )
}

export default CalendarCard
