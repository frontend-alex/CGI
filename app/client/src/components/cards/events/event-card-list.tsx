import { MapPin, Calendar, Users, Tickets } from "lucide-react"
import { getMonthName } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type EventListCardProps = {
    image?: string
    category: string[]
    location: string
    description: string
    date: number
    year: number
    month: number
    title: string
    time: string
    totalTickets: number
    totalTicketsLeft: number
}

export function EventListCard({
    image,
    category,
    title,
    location,
    description,
    date,
    time,
    month,
    year,
    totalTickets,
    totalTicketsLeft,
}: EventListCardProps) {

    const ticketsSold = totalTickets > 0 ? Math.round(((totalTickets - totalTicketsLeft) / totalTickets) * 100) : 0

    return (
        <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-background rounded-xl hover:bg-background/70 transition-colors">
            {/* Image */}
            <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full md:w-[140px] h-[100px] object-cover rounded-xl flex-shrink-0"
            />

            {/* Event Info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap mb-2">
                    {category.map((cat, i) => (
                        <span
                            key={i}
                            className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700`}
                        >
                            {cat}
                        </span>
                    ))}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 max-w-[400px]">{description}</p>
            </div>

            {/* Location & Date */}
            <div className="flex flex-col gap-1 min-w-[180px]">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                        {getMonthName(month)} {date}, {year} — {time}
                    </span>
                </div>
            </div>

            {/* Progress */}
            <div className="-w-[120px]">
                <div className="flex items-center gap-2 mb-1">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-(--color-gradient-start-lightred) to-(--color-gradient-start-red) rounded-full"
                            style={{ width: `${ticketsSold}%` }}
                        />
                    </div>
                </div>
                <p className="text-sm">
                    <span className="font-semibold text-foreground">{ticketsSold}%</span>
                    <span className="text-muted-foreground ml-1">Ticket Sold</span>
                </p>
            </div>

            {/* Tickets Left */}
            <div className="flex flex-col items-center min-w-[80px]">
                <div className="flex items-center gap-2">
                    <Tickets className="h-4 w-4 text-muted-foreground" />
                    <p className="text-lg font-semibold text-foreground">{totalTicketsLeft}</p>
                </div>
                <p className="text-xs text-muted-foreground">Tickets Left</p>
            </div>

            <Button>Book</Button>
        </div>
    )
}
