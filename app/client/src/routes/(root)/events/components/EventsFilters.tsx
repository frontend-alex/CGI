import { Search, Grid3X3, Menu, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const categories = [
    { value: "all", label: "All Category" },
    { value: "music", label: "Music" },
    { value: "food", label: "Food & Culinary" },
    { value: "tech", label: "Technology" },
    { value: "fashion", label: "Fashion" },
    { value: "art", label: "Art & Design" },
    { value: "outdoor", label: "Outdoor & Adventure" },
]

export const dateFilters = [
    { value: "all", label: "All Time" },
    { value: "month", label: "This Month" },
    { value: "week", label: "This Week" },
    { value: "year", label: "This Year" },
]

interface EventsFiltersProps {
    activeTab: string
    onTabChange: (tab: string) => void
    viewMode: "list" | "grid"
    onViewModeChange: (mode: "list" | "grid") => void
    searchQuery: string
    onSearchChange: (query: string) => void
    selectedCategory: string
    onCategoryChange: (category: string) => void
    selectedDate: string
    onDateChange: (date: string) => void
    tabs: { id: string; label: string; count: number }[]
}

const EventsFilters = ({
    activeTab,
    onTabChange,
    viewMode,
    onViewModeChange,
    searchQuery,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    selectedDate,
    onDateChange,
    tabs,
}: EventsFiltersProps) => {
    return (
        <div className="bg-background rounded-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 border-b border-accent">
            {/* Tabs */}
            <div className="flex items-center gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
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
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>

                <Select value={selectedCategory} onValueChange={onCategoryChange}>
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

                <Select value={selectedDate} onValueChange={onDateChange}>
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
                    onClick={() => onViewModeChange("grid")}
                >
                    <Grid3X3 className="h-4 w-4" />
                </Button>

                <Button
                    size="icon"
                    className={`${viewMode === "list" ? "bg-(--color-gradient-start-red) text-white hover:bg-(--color-gradient-start-red)/80" : "bg-transparent border border-border text-foreground hover:bg-muted"}`}
                    onClick={() => onViewModeChange("list")}
                >
                    <Menu className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export default EventsFilters
