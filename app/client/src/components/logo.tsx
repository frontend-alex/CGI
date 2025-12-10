import { Link } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { Command } from "lucide-react";

export const SidebarLogo = () => {
  return (
    <Link to={ROUTES.PUBLIC.LANDING} className="flex items-center gap-2">
      <div className="bg-(--color-gradient-start-red) text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <Command className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">CGI Inc</span>
        <span className="truncate text-xs">Enterprise</span>
      </div>
    </Link>
  );
};

export const AppLogo = () => {
  return (
    <Link to={ROUTES.PUBLIC.LANDING}>
      <img className="size-14" src="/svgs/logo.svg" alt="logo" />
    </Link>
  );
};

export default AppLogo;
