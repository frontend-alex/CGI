
import EventCardSkeleton from "@/components/skeletons/cards/event-card-skeleton"

export const EventsCatalogSkeleton = ({ count }: { count: number }) => {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${count} gap-3`}>
            {Array.from({ length: count }).map((_, i) => (
                <EventCardSkeleton key={i} />
            ))}
        </div>
    )
}
