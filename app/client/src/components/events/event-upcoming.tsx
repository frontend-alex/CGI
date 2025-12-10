import { EventCard } from "@/components/cards/events/event-card"
import { ROUTES } from "@/config/routes"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const EventUpcoming = () => {
    return (
        <div className="flex flex-col gap-5 bg-background rounded-xl p-3">
            <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">Upcoming Event</h2>
                <Link to={ROUTES.AUTHENTICATED.EVENTS}>
                    <Button variant={'ghost'}>
                        View All
                        <ChevronRight />
                    </Button>
                </Link>
            </div>

            <EventCard
                image="https://images.stockcake.com/public/2/9/2/292f8e62-8891-41bb-9d82-cf81027244bf_large/tech-conference-speech-stockcake.jpg"
                category={["Technology"]}
                title="Panel Discussion 2025"
                location="Convention Center, San Francisco, CA"
                description="Join industry leaders to explore the latest trends in AI, cloud computing, and more."
                month={12}
                date={3}
                year={2025}
                hasBorder
                time="10:00 AM - 12:00 PM"
            />
        </div>
    )
}

export default EventUpcoming