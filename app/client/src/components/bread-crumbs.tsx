import { Suspense, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Plus, Search } from "lucide-react";
import { Button } from "./ui/button";
import { ROUTES } from "@/config/routes";
import CmdMenuBox from "./cmdbox/SearchComboBox";
import { useBoardUI } from "@/contexts/UIContext";
import UserDropdown, { UserDropdownSkeleton } from "./dropdowns/user-dropdown";
import { useAuth } from "@/contexts/AuthContext";
import { UserRoles } from "@shared/types/user";
import { SidebarTrigger } from "./ui/sidebar";

const ROUTE_SEGMENT_NAMES: Record<string, string> = {
    edit: "Edit",
    billing: "Billing",
    settings: "Settings",
    profile: "Profile",
    document: "Document",
    dashboard: "Dashboard",
    theme: "Theme",
    account: "Account",
    security: "Security",
    notifications: "Notifications",
    events: "Events",
};

const getSegmentDisplayName = (segment: string): string => {
    const clean = segment.toLowerCase();

    if (ROUTE_SEGMENT_NAMES[clean]) {
        return ROUTE_SEGMENT_NAMES[clean];
    }

    return clean
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
};

const BreadCrumps = () => {

    const { isAdmin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const { commandPalette, } = useBoardUI();

    // Parse breadcrumb items from pathname
    const breadcrumbItems = useMemo(() => {
        const items: Array<{ label: string; path: string }> = [];
        const pathname = location.pathname;

        // Parse path segments: /app/v1/workspace/:workspaceId/...
        const segments = pathname.split("/").filter(Boolean);
        const appIndex = segments.indexOf("app");
        const v1Index = segments.indexOf("v1");

        if (appIndex !== -1 && v1Index !== -1) {
            const routeSegments = segments.slice(v1Index + 1); // Everything after /app/v1

            // Always start with Dashboard if not already there
            if (routeSegments[0]?.toLowerCase() !== "dashboard") {
                items.push({
                    label: "Dashboard",
                    path: ROUTES.AUTHENTICATED.DASHBOARD,
                });
            }

            let currentPath: string = ROUTES.BASE.APP;

            routeSegments.forEach((segment) => {
                currentPath = `${currentPath}/${segment}`;
                items.push({
                    label: getSegmentDisplayName(segment),
                    path: currentPath,
                });
            });
        }

        // Fallback
        if (items.length === 0) {
            items.push({
                label: "Dashboard",
                path: ROUTES.AUTHENTICATED.DASHBOARD,
            });
        }

        return items;
    }, [location.pathname]);

    return (
        <div className="flex items-center justify-between bg-background p-3 gap-3 select-none border-b border-accent">
            {/* Back/Forward Navigation */}
            <div className="flex items-center gap-3">
                <SidebarTrigger />
                <div className="hidden lg:flex items-center gap-1">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8"
                        onClick={() => navigate(-1)}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8"
                        onClick={() => navigate(1)}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>

                {/* Breadcrumb */}
                <nav
                    className="hidden lg:flex items-center gap-0 text-sm"
                    aria-label="Breadcrumb"
                >
                    {breadcrumbItems.map((item, index) => {
                        const isLast = index === breadcrumbItems.length - 1;

                        return (
                            <div
                                key={`${item.path}-${index}`}
                                className="flex items-center gap-0"
                            >
                                {index > 0 && <span className="text-muted-foreground">/</span>}

                                {isLast ? (
                                    <span className="font-medium text-foreground px-2">
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link to={item.path}>
                                        <Button
                                            variant="ghost"
                                            className="font-medium text-foreground px-2 hover:underline"
                                        >
                                            {item.label}
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>
            <div className="flex items-center gap-2">
                {isAdmin && (
                    <Button
                        onClick={() => navigate(ROUTES.AUTHENTICATED.EVENT_CREATE)}
                    >
                        Create Event
                        <Plus className="size-4" />
                    </Button>
                )}

                <Button
                    size="icon"
                    variant={"secondary"}
                    onClick={commandPalette.open}
                >
                    <Search className="size-4" />
                </Button>
                <Suspense fallback={<UserDropdownSkeleton />}>
                    <UserDropdown size="sm" />
                </Suspense>


                {/* it just gotta be somewhere - its not visible flex element */}
                <CmdMenuBox
                    open={commandPalette.isOpen}
                    onOpenChange={commandPalette.set}
                />
            </div>
        </div>
    );
};

export default BreadCrumps;