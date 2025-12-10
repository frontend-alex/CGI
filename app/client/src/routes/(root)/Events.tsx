"use client"

import { useState, useMemo } from "react"
import { Search, SlidersHorizontal, Grid3X3, Menu, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EventCard } from "@/components/cards/events/event-card"
import { EventListCard } from "@/components/cards/events/event-card-list"
import { events } from "@/constants/data"

const categories = [
    { value: "all", label: "All Category" },
    { value: "music", label: "Music" },
    { value: "food", label: "Food & Culinary" },
    { value: "tech", label: "Technology" },
    { value: "fashion", label: "Fashion" },
    { value: "art", label: "Art & Design" },
    { value: "outdoor", label: "Outdoor & Adventure" },
]

const dateFilters = [
    { value: "all", label: "All Time" },
    { value: "month", label: "This Month" },
    { value: "week", label: "This Week" },
    { value: "year", label: "This Year" },
]

const Events = () => {
    const [activeTab, setActiveTab] = useState("active")
    const [viewMode, setViewMode] = useState<"list" | "grid">("list")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedDate, setSelectedDate] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)

    const tabs = [
        { id: "active", label: "Active", count: 48 },
        { id: "draft", label: "Draft", count: 22 },
        { id: "past", label: "Past", count: 32 },
    ]

    const filteredEvents = useMemo(() => {
        return events.filter((event) => {
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

            // Date filter (simplified - in real app would use actual dates)
            const matchesDate = selectedDate === "all" || true

            return matchesSearch && matchesCategory && matchesDate
        })
    }, [searchQuery, selectedCategory, selectedDate])

    // Pagination
    const totalPages = Math.ceil(filteredEvents.length / itemsPerPage)
    const paginatedEvents = filteredEvents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    return (
        <div className="bg-muted flex flex-col gap-5 rounded-md p-3">
            {/* Header */}
            <div className="bg-background rounded-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 border-b border-accent">
                {/* Tabs */}
                <div className="flex items-center gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab.id ? "bg-(--color-gradient-start-red) text-white" : "text-muted-foreground hover:bg-muted"
                                }`}
                        >
                            {tab.label} ({tab.count})
                        </button>
                    ))}
                </div>

                {/* Search and Filters */}
                <div className="flex items-center gap-2 flex-wrap">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search event, location, etc"
                            className="input no-ring px-10"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value)
                                setCurrentPage(1)
                            }}
                        />
                    </div>

                    <Select
                        value={selectedCategory}
                        onValueChange={(value) => {
                            setSelectedCategory(value)
                            setCurrentPage(1)
                        }}
                    >
                        <SelectTrigger className="w-[140px] border-accent">
                            <SelectValue placeholder="All Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat.value} value={cat.value}>
                                    {cat.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select
                        value={selectedDate}
                        onValueChange={(value) => {
                            setSelectedDate(value)
                            setCurrentPage(1)
                        }}
                    >
                        <SelectTrigger className="w-[140px] border-border">
                            <Calendar className="h-4 w-4 mr-2" />
                            <SelectValue placeholder="All Time" />
                        </SelectTrigger>
                        <SelectContent>
                            {dateFilters.map((filter) => (
                                <SelectItem key={filter.value} value={filter.value}>
                                    {filter.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Button
                        variant="outline"
                        size="icon"
                        className={`border-border ${viewMode === "grid" ? "bg-(--color-gradient-start-red) text-white hover:bg-(--color-gradient-start-red)/80" : "bg-transparent"}`}
                        onClick={() => setViewMode("grid")}
                    >
                        <Grid3X3 className="h-4 w-4" />
                    </Button>

                    <Button
                        size="icon"
                        className={`${viewMode === "list" ? "bg-(--color-gradient-start-red) text-white hover:bg-(--color-gradient-start-red)/80" : "bg-transparent border border-border text-foreground hover:bg-muted"}`}
                        onClick={() => setViewMode("list")}
                    >
                        <Menu className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Event List/Grid */}
            {viewMode === "list" ? (
                <div className="flex flex-col gap-3">
                    {paginatedEvents.map((event, idx) => (
                        <EventListCard
                            key={idx}
                            image={event.image}
                            category={event.category}
                            title={event.title}
                            location={event.location}
                            description={event.description}
                            date={event.date}
                            month={event.month}
                            year={event.year}
                            time={event.time}
                            totalTickets={event.totalTickets}
                            totalTicketsLeft={event.totalTicketsLeft}
                        />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {paginatedEvents.map((event, idx) => (
                        <EventCard
                            key={idx}
                            image={event.image}
                            category={event.category}
                            title={event.title}
                            location={event.location}
                            description={event.description}
                            date={event.date}
                            month={event.month}
                            year={event.year}
                            time={event.time}
                            totalTickets={event.totalTickets}
                            status={event.status}
                            totalTicketsLeft={event.totalTicketsLeft}
                        />
                    ))}
                </div>
            )}

            {/* Empty state */}
            {paginatedEvents.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <p className="text-lg font-medium text-foreground">No events found</p>
                    <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or filters</p>
                </div>
            )}

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-background rounded-xl">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Showing</span>
                    <Select
                        value={String(itemsPerPage)}
                        onValueChange={(value) => {
                            setItemsPerPage(Number(value))
                            setCurrentPage(1)
                        }}
                    >
                        <SelectTrigger className="w-[70px] h-8 border-border">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="6">6</SelectItem>
                            <SelectItem value="12">12</SelectItem>
                            <SelectItem value="24">24</SelectItem>
                        </SelectContent>
                    </Select>
                    <span>out of {filteredEvents.length}</span>
                </div>

                <div className="flex items-center gap-1">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>

                    {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map((page) => (
                        <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="icon"
                            className={`h-8 w-8 rounded-full ${currentPage === page ? "bg-(--color-gradient-start-red) hover:bg-(--color-gradient-start-red)/80 text-white border-pink-500" : "border-border"
                                }`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </Button>
                    ))}

                    {totalPages > 3 && (
                        <>
                            <span className="px-2 text-muted-foreground">...</span>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full border-border bg-transparent"
                                onClick={() => setCurrentPage(totalPages)}
                            >
                                {totalPages}
                            </Button>
                        </>
                    )}

                    <Button
                        variant="default"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-(--color-gradient-start-red) hover:bg-(--color-gradient-start-red)/80 text-white"
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Events
