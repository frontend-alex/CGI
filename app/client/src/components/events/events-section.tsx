import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ChevronRight, Plus } from "lucide-react";
import { EventCard } from "../cards/events/event-card";
import { events } from "@/constants/data";
import { Link } from "react-router-dom";
import { ROUTES } from "@/config/routes";

const EventsSection = ({ eventsLength = 4 }: { eventsLength?: number }) => {

    const { isAdmin } = useAuth();

    return (
        <div className="bg-background p-3 rounded-xl flex flex-col gap-5 w-full">
            <div className="flex items-center justify-between gap-3">
                <h1 className="text-xl font-semibold">Events</h1>

                <div className="flex items-center gap-3">

                    <Link to={ROUTES.AUTHENTICATED.EVENTS}>
                        <Button variant={'ghost'}>
                            See All
                            <ChevronRight className="size-4" />
                        </Button>
                    </Link>
                    {isAdmin && <Button
                    >
                        Create Event
                        <Plus className="size-4" />
                    </Button>}
                </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${eventsLength} gap-3`}>
                {events.slice(0, eventsLength).map((event, idx) => (
                    <EventCard key={idx} {...event} />
                ))}
            </div>
        </div >
    );
};

export default EventsSection;