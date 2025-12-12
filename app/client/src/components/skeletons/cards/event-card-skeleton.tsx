import { Skeleton } from "@/components/ui/skeleton"

const EventCardSkeleton = () => {
    return (
        <div className="flex flex-col gap-3 p-4 border rounded-xl bg-card w-full">
            < Skeleton className="h-48 w-full rounded-lg" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="flex justify-between items-center pt-2">
                <Skeleton className="h-8 w-20 rounded-full" />
                <Skeleton className="h-4 w-24" />
            </div>
        </div >
    )
}

export default EventCardSkeleton
