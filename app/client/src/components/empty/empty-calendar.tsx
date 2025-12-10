import { CalendarArrowDown } from "lucide-react"

import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"

const EmptyCalendar = () => {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <CalendarArrowDown />
                </EmptyMedia>
                <EmptyTitle>No Events Yet</EmptyTitle>
                <EmptyDescription>
                    You haven&apos;t created any events yet. Get started by creating
                    your first event.
                </EmptyDescription>
            </EmptyHeader>
        </Empty>
    )
}

export default EmptyCalendar
