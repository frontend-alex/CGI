import { Calendar, Check, Ticket } from "lucide-react";
import EventCounterBox, { type EventCounterBoxProps } from "@/components/events/event-counter-box";
import TicketReservationChart from "@/components/charts/ticket-reservation-chart";
import TicketYearlyChart from "@/components/charts/ticker-yearly-chart";
import EventUpcoming from "@/components/events/event-upcoming";
import EventCalendar from "@/components/events/event-calendar";
import EventsSection from "@/components/events/events-section";
import EmptyCalendar from "@/components/empty/empty-calendar";

const events: EventCounterBoxProps[] = [
    {
        title: 'Upcoming Events',
        count: 345,
        icon: Calendar
    },
    {
        title: 'Total Bookings',
        count: 1789,
        icon: Check
    },
    {
        title: 'Tickets Reserved',
        count: 1280,
        icon: Ticket
    },
]

const AdminDashboard = () => {
    return (
        <div className="p-5 grid grid-cols-1 lg:grid-cols-4 gap-3 bg-muted rounded-lg min-h-[calc(100vh-80px)] items-stretch">
            <div className="flex flex-col gap-3 col-span-3 h-full min-h-0">

                <div className="flex flex-col lg:flex-row gap-3">
                    {events.map((event) => (
                        <EventCounterBox key={event.title} {...event} />
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-3">
                    <div className="flex-1">
                        <TicketReservationChart />
                    </div>
                    <div className="flex flex-col gap-3 flex-2">
                        <TicketYearlyChart />
                        <div className="bg-background h-64 rounded-xl" >
                            <EmptyCalendar />
                        </div>
                    </div>
                </div>

                <div className="flex-1 min-h-0 flex">
                    <EventsSection eventsLength={3} />
                </div>

            </div>

            {/* right column */}
            <div className="    col-span-1 flex flex-col gap-3 rounded-xl">
                <EventUpcoming />
                <EventCalendar />
            </div>
        </div>

    );
};

export default AdminDashboard;