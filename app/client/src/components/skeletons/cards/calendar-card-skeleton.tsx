
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface CalendarCardSkeletonProps {
    orientation?: "vertical" | "horizontal"
    className?: string
}

const CalendarCardSkeleton = ({ orientation = "horizontal", className }: CalendarCardSkeletonProps) => {
    return (
        <div
            className={cn(
                "bg-muted border-none shadow-none p-3 flex gap-3 rounded-xl",
                orientation === "horizontal" ? "flex-row h-24" : "flex-col h-auto w-full",
                className
            )}
        >
            {/* Date badge skeleton */}
            <Skeleton
                className={cn(
                    "rounded-md shrink-0",
                    orientation === "horizontal" ? "w-15 h-full" : "w-full h-16"
                )}
            />

            {/* Event details skeleton */}
            <div className={cn("flex flex-1 flex-col justify-center gap-1.5", orientation === "horizontal" ? "py-1" : "py-2")}>
                <div className="space-y-1">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="flex items-center gap-2 pt-1">
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-3 w-16" />
                    <div className="flex items-center gap-1">
                        <Skeleton className="h-3 w-3 rounded-full" />
                        <Skeleton className="h-3 w-12" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarCardSkeleton
