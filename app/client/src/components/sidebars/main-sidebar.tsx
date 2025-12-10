import { lazy, Suspense, useMemo } from "react";

import { Calendar, HardHat, LayoutDashboard, Plus, Settings, User } from "lucide-react";
import { useLocation } from "react-router-dom";

import { UserDropdownSkeleton } from "@/components/dropdowns/user-dropdown";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ROUTES } from "@/config/routes";
import { SidebarLogo } from "../logo";
import { SidebarGroupRenderer } from "./flexible-sidebar-link";
import { useAuth } from "@/contexts/AuthContext";
import { UserRoles } from "@shared/types/user";


const LazyUserDropdown = lazy(
  () => import("@/components/dropdowns/user-dropdown")
);

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const pathname = location.pathname;

  const { user } = useAuth();

  const generalGroup = useMemo(
    () => ({
      label: "General",
      items: [
        {
          title: "Dashboard",
          url: ROUTES.AUTHENTICATED.DASHBOARD,
          icon: LayoutDashboard,
          isActive: pathname === ROUTES.AUTHENTICATED.DASHBOARD,
        },
        {
          title: "Events",
          url: ROUTES.AUTHENTICATED.EVENTS,
          icon: Calendar,
          isActive: pathname === ROUTES.AUTHENTICATED.EVENTS,
        },
      ],
    }),
    [pathname]
  );


  const AccountGroup = useMemo(
    () => ({
      label: "Account",
      items: [
        {
          title: "Profile",
          url: ROUTES.AUTHENTICATED.PROFILE,
          icon: User,
          isActive: pathname === ROUTES.AUTHENTICATED.PROFILE,
        },
        {
          title: "Settings",
          url: ROUTES.AUTHENTICATED.SETTINGS,
          icon: Settings,
          isActive: pathname === ROUTES.AUTHENTICATED.SETTINGS,
        },
      ],
    }),
    [pathname]
  );

  const adminGroup = useMemo(
    () => ({
      label: "Admin",
      items: [
        {
          title: "Events Dashboard",
          url: ROUTES.AUTHENTICATED.EVENT_DASHBOARD,
          icon: HardHat,
          isActive: pathname === ROUTES.AUTHENTICATED.EVENT_DASHBOARD,
        },
        {
          title: "Create Event",
          url: ROUTES.AUTHENTICATED.EVENT_CREATE,
          icon: Plus,
          isActive: pathname === ROUTES.AUTHENTICATED.EVENT_CREATE,
        },
      ],
    }),
    [pathname]
  );

  const sidebarGroups = [
    generalGroup,
    AccountGroup,
    user?.role === UserRoles.Admin ? adminGroup : { label: null, items: [] },
  ];

  return (
    <Sidebar
      variant="inset"
      {...props}
      className="bg-background border-r border-accent select-none"
    >
      <SidebarHeader className="bg-background">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <SidebarLogo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-background">
        {sidebarGroups.map((group, index) => (
          <SidebarGroupRenderer
            key={
              typeof group.label === "string" ? group.label : `group-${index}`
            }
            group={group}
          />
        ))}
      </SidebarContent>
      <SidebarFooter className="bg-background">
        <Suspense fallback={<UserDropdownSkeleton />}>
          <LazyUserDropdown />
        </Suspense>
      </SidebarFooter>
    </Sidebar>
  );
}