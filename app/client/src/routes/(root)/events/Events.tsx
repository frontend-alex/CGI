import { events } from "@/constants/data"
import { useState, useMemo, lazy, Suspense } from "react"

import { EventsFiltersSkeleton } from "@/components/skeletons/events/event-filter-skeleton"
import { EventsCatalogSkeleton } from "@/components/skeletons/events/event-catalog-skeleton"
import { EventsPaginationSkeleton } from "@/components/skeletons/events/event-pagination-skeleton"

const EventsFilters = lazy(() => import("./components/EventsFilters"))
const EventsCatalog = lazy(() => import("./components/EventsCatalog"))
const EventsPagination = lazy(() => import("./components/EventsPagination"))

const Events = () => {
    const [activeTab, setActiveTab] = useState("active")
    const [viewMode, setViewMode] = useState<"list" | "grid">("list")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedDate, setSelectedDate] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)

    const tabs = useMemo(() => {
        const counts = events.reduce((acc, event) => {
            const status = event.status || "active"
            acc[status] = (acc[status] || 0) + 1
            return acc
        }, {} as Record<string, number>)

        return [
            { id: "active", label: "Active", count: counts["active"] || 0 },
            { id: "upcoming", label: "Upcoming", count: counts["upcoming"] || 0 },
            { id: "past", label: "Past", count: counts["past"] || 0 },
            { id: "cancelled", label: "Cancelled", count: counts["cancelled"] || 0 },
        ].filter(tab => tab.count > 0 || tab.id === "active") // Keep active or tabs with items
    }, [])

    const filteredEvents = useMemo(() => {
        return events.filter((event) => {
            // Status filter (Tab)
            // If the tab is 'active' (default), we usually show active events. 
            // If the logic should list ALL events when no specific filter, verify requirement.
            // Based on typical tab behavior, 'Active' tab shows 'active' status events.
            const matchesStatus = event.status === activeTab

            // Search filter
            const searchLower = searchQuery.toLowerCase()
            const matchesSearch =
                searchQuery === "" ||
                event.title.toLowerCase().includes(searchLower) ||
                event.location.toLowerCase().includes(searchLower) ||
                event.description.toLowerCase().includes(searchLower) ||
                event.category.some((cat) => cat.toLowerCase().includes(searchLower))

            // Category filter
            const matchesCategory =
                selectedCategory === "all" ||
                event.category.some((cat) => {
                    const catLower = cat.toLowerCase()
                    if (selectedCategory === "music") return catLower.includes("music")
                    if (selectedCategory === "food") return catLower.includes("food") || catLower.includes("culinary")
                    if (selectedCategory === "tech") return catLower.includes("tech")
                    if (selectedCategory === "fashion") return catLower.includes("fashion")
                    if (selectedCategory === "art") return catLower.includes("art") || catLower.includes("design")
                    if (selectedCategory === "outdoor") return catLower.includes("outdoor") || catLower.includes("adventure")
                    return false
                })

            const matchesDate = selectedDate === "all" || true

            return matchesStatus && matchesSearch && matchesCategory && matchesDate
        })
    }, [activeTab, searchQuery, selectedCategory, selectedDate])

    // Pagination
    const totalPages = Math.ceil(filteredEvents.length / itemsPerPage)
    const paginatedEvents = filteredEvents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    return (
        <div className="bg-muted flex flex-col gap-5 p-3">
            {/* Header / Filters */}
            <Suspense fallback={<EventsFiltersSkeleton />}>
                <EventsFilters
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                    searchQuery={searchQuery}
                    onSearchChange={(query) => {
                        setSearchQuery(query)
                        setCurrentPage(1)
                    }}
                    selectedCategory={selectedCategory}
                    onCategoryChange={(cat) => {
                        setSelectedCategory(cat)
                        setCurrentPage(1)
                    }}
                    selectedDate={selectedDate}
                    onDateChange={(date) => {
                        setSelectedDate(date)
                        setCurrentPage(1)
                    }}
                    tabs={tabs}
                />
            </Suspense>

            <Suspense fallback={<EventsCatalogSkeleton count={6} />}>
                <EventsCatalog viewMode={viewMode} events={paginatedEvents} />
            </Suspense>

            <Suspense fallback={<EventsPaginationSkeleton />}>
                <EventsPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    itemsPerPage={itemsPerPage}
                    onItemsPerPageChange={(items) => {
                        setItemsPerPage(items)
                        setCurrentPage(1)
                    }}
                    totalItems={filteredEvents.length}
                />
            </Suspense>
        </div>
    )
}

export default Events
