import BreadCrumps from "../bread-crumbs";

import { Outlet } from "react-router-dom";

import { AppSidebar } from "../sidebars/main-sidebar";
import { SidebarProvider } from "../ui/sidebar";

const RootLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full bg-background">
        <BreadCrumps />
        <div>
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default RootLayout;
