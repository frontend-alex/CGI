import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CalendarCard from "@/components/cards/calendar/calendar-card"
import { dayNames, monthNames } from "@/constants/data"
import EmptyCalendar from "../empty/empty-calendar"
import { events } from "@/constants/data"
import { randomItem } from "@/lib/utils"

const EventCalendar = ({ align = "vertical" }: { align?: "vertical" | "horizontal" }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 11, 1))
    const [selectedDate, setSelectedDate] = useState(14)

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1).getDay()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        const daysInPrevMonth = new Date(year, month, 0).getDate()

        const days = []

        for (let i = firstDay - 1; i >= 0; i--) {
            days.push({ date: daysInPrevMonth - i, isCurrentMonth: false })
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({ date: i, isCurrentMonth: true })
        }

        const remainingDays = 42 - days.length
        for (let i = 1; i <= remainingDays; i++) {
            days.push({ date: i, isCurrentMonth: false })
        }

        return days
    }

    const goToPreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
    }

    const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
    }

    const goToPreviousYear = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear() - 1, currentMonth.getMonth(), 1))
    }

    const goToNextYear = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear() + 1, currentMonth.getMonth(), 1))
    }


    const days = getDaysInMonth(currentMonth)
    const currentMonthEvents = events.filter(
        (e) => e.month === currentMonth.getMonth() && e.year === currentMonth.getFullYear(),
    )
    const eventDates = currentMonthEvents.map((e) => e.date)

    return (
        <div className={align === "horizontal" ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3 w-full"}>
            <Card className={`p-6 shadow-none border-none ${align === "horizontal" ? "h-full" : ""}`}>
                {/* Header */}
                <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="text-lg font-medium">
                            {monthNames[currentMonth.getMonth()]}{" "}
                            <span className="inline-flex items-center gap-1">
                                <button
                                    onClick={goToPreviousYear}
                                    className="inline-flex h-5 w-5 items-center justify-center rounded hover:bg-accent"
                                >
                                    <ChevronLeft className="h-3.5 w-3.5" />
                                </button>
                                <span className="text-muted-foreground">
                                    {currentMonth.getFullYear()}
                                </span>
                                <button
                                    onClick={goToNextYear}
                                    className="inline-flex h-5 w-5 items-center justify-center rounded hover:bg-accent"
                                >
                                    <ChevronRight className="h-3.5 w-3.5" />
                                </button>
                            </span>
                        </h2>
                    </div>
                    <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-accent hover:bg-accent" onClick={goToPreviousMonth}>
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-accent hover:bg-accent" onClick={goToNextMonth}>
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Day names */}
                <div className="grid grid-cols-7 gap-1">
                    {dayNames.map((day) => (
                        <div key={day} className="text-center text-xs font-medium text-muted-foreground">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                    {days.map((day, index) => {
                        const hasEvent = day.isCurrentMonth && eventDates.includes(day.date)
                        const isSelected = day.isCurrentMonth && day.date === selectedDate

                        return (
                            <button
                                key={index}
                                onClick={() => day.isCurrentMonth && setSelectedDate(day.date)}
                                className={`relative flex h-10 w-full items-center justify-center rounded-md text-sm transition-colors ${!day.isCurrentMonth
                                    ? "text-muted-foreground/40"
                                    : isSelected
                                        ? "bg-(--color-gradient-start-red) font-medium text-white hover:bg-(--color-gradient-start-red)"
                                        : "font-medium hover:bg-accent"
                                    }`}
                            >
                                {day.date}
                                {hasEvent && (
                                    <div className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-(--color-gradient-start-red)" />
                                )}
                            </button>
                        )
                    })}
                </div>
            </Card>

            <div className={`flex flex-col gap-3 bg-background rounded-xl p-3 w-full overflow-y-scroll no-scrollbar ${align === "horizontal" ? "max-h-[500px]" : "max-h-[350px]"}`}>
                {currentMonthEvents.length > 0 ? (
                    currentMonthEvents.map((event, index) => {
                        return (
                            <CalendarCard
                                key={index}
                                color={randomItem(["red", "dark"])}
                                event={event}
                            />
                        )
                    })
                ) : (
                    <EmptyCalendar />
                )}
            </div>
        </div>
    )
}

export default EventCalendar