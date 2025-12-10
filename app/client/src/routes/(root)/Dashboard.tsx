import { Calendar, ChevronRight, Nfc, Pen, TicketCheck } from "lucide-react";
import EventCounterBox, { type EventCounterBoxProps } from "@/components/events/event-counter-box";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getUserInitials } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";
import EventUpcoming from "@/components/events/event-upcoming";
import EventCalendar from "@/components/events/event-calendar";
import EmptyCalendar from "@/components/empty/empty-calendar";
import EventsSection from "@/components/events/events-section";

const events: EventCounterBoxProps[] = [
    {
        title: 'Upcoming Events',
        count: 35,
        icon: Calendar
    },
    {
        title: 'Your Bookings',
        count: 6,
        icon: TicketCheck
    },
    {
        title: 'Near Events',
        count: 1280,
        icon: Nfc
    },
]

const DashboardEventManagement = () => {

    const { user } = useAuth();

    if (!user) return null;

    return (
        <div className="p-5 flex flex-col gap-5 bg-muted rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                <div className="flex flex-col gap-3 col-span-3">

                    {/* events counter */}
                    <div className="flex flex-col lg:flex-row gap-3">
                        {events.map((event) => (
                            <EventCounterBox key={event.title} {...event} />
                        ))}
                    </div>
                    {/* events counter */}

                    {/* profile box */}
                    <div className="flex items-center justify-between gap-3 bg-background rounded-xl p-3">
                        <div className="flex items-center gap-3 text-left text-sm">
                            <Avatar className="size-20 rounded-full">
                                <AvatarFallback className="rounded-lg text-2xl">
                                    {getUserInitials(user.username)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col text-left text-sm leading-tight">
                                <span className="truncate font-semibold text-xl capitalize">{user.username}</span>
                                <span className="truncate text-base text-muted-foreground">
                                    {user.email}
                                </span>
                            </div>
                        </div>
                        <Link to={ROUTES.AUTHENTICATED.PROFILE}>
                            <Button>
                                Edit
                                <Pen />
                            </Button>
                        </Link>
                    </div>
                    {/* profile box */}

                    <div className="flex flex-col justify-start lg:flex-row gap-5">
                        <EventCalendar align="right" />
                        <EventUpcoming />
                    </div>


                </div>
            </div>
            <EventsSection />
        </div>
    );
};

export default DashboardEventManagement;