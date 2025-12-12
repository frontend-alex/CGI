
import { Skeleton } from "@/components/ui/skeleton"

export const EventsPaginationSkeleton = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-background rounded-xl">
            <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-8 w-[70px] rounded-md" />
                <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center gap-1">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
            </div>
        </div>
    )
}
