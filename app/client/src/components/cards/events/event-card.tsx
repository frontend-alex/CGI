import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { getMonthName } from "@/lib/utils"

export type EventCardProps = {
    image?: string
    category: string[]
    categoryColors?: string[]
    location: string
    description: string
    date: number
    year: number
    month: number
    title: string
    time: string
    totalTickets: number
    totalTicketsLeft: number
    status: "active" | "upcoming" | "past" | "cancelled"
    hasBorder?: boolean
}

export function EventCard({
    image,
    category,
    title,
    location,
    description,
    date,
    time,
    month,
    year,
    hasBorder = false
}: EventCardProps) {
    return (
        <Card className={`overflow-hidden p-0 w-full shadow-lg ${hasBorder ? "border-2 border-(--color-gradient-start-red)" : "border-none shadow-none"}`}>
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="absolute flex items-center gap-1 top-3 left-3">
                    {category.map((cat, i) => (
                        <span key={i} className="bg-background px-3 py-1 rounded-full text-xs font-medium">{cat}</span>
                    ))}
                </div>
            </div>

            <CardContent className="px-5 pt-4 pb-3 space-y-2">
                <h3 className="font-semibold text-lg leading-tight">{title}</h3>
                <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{location}</p>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            </CardContent>

            <CardFooter className="px-5 pb-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                    <Calendar className="size-4 text-muted-foreground" />
                    <div>
                        <div className="flex items-center gap-1">{getMonthName(month)} {date}, {year}</div>
                        <p className="text-xs text-muted-foreground">{time}</p>
                    </div>
                </div>
                <Button>
                    Book
                </Button>
            </CardFooter>
        </Card>
    )
}   
