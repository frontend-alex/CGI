import { EventCard, type EventCardProps } from "@/components/cards/events/event-card"
import { EventListCard } from "@/components/cards/events/event-card-list"

interface EventsCatalogProps {
    events: EventCardProps[]
    viewMode: "list" | "grid"
}

const EventsCatalog = ({ viewMode, events }: EventsCatalogProps) => {
    if (events.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center">
                <p className="text-lg font-medium text-foreground">No events found</p>
                <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or filters</p>
            </div>
        )
    }

    if (viewMode === "list") {
        return (
            <div className="flex flex-col gap-3">
                {events.map((event, idx) => (
                    <EventListCard
                        key={idx}
                        image={event.image}
                        category={event.category}
                        title={event.title}
                        location={event.location}
                        description={event.description}
                        date={event.date}
                        month={event.month}
                        year={event.year}
                        time={event.time}
                        totalTickets={event.totalTickets}
                        totalTicketsLeft={event.totalTicketsLeft}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {events.map((event, idx) => (
                <EventCard
                    key={idx}
                    image={event.image}
                    category={event.category}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    date={event.date}
                    month={event.month}
                    year={event.year}
                    time={event.time}
                    totalTickets={event.totalTickets}
                    status={event.status}
                    totalTicketsLeft={event.totalTicketsLeft}
                />
            ))}
        </div>
    )
}

export default EventsCatalog
