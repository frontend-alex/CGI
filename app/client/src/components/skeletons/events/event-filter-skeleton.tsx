
import { Skeleton } from "@/components/ui/skeleton"

export const EventsFiltersSkeleton = () => {
    return (
        <div className="bg-background rounded-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 border-b border-accent">
            <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-20 rounded-full" />
                <Skeleton className="h-9 w-20 rounded-full" />
                <Skeleton className="h-9 w-20 rounded-full" />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
                <Skeleton className="h-10 w-[240px] rounded-md" />
                <Skeleton className="h-10 w-[140px] rounded-md" />
                <Skeleton className="h-10 w-[140px] rounded-md" />
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-10 w-10 rounded-md" />
            </div>
        </div>
    )
}
