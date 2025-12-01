import { Link } from "react-router-dom";
import { ROUTES } from "@/config/routes";

export const SmallAppLogo = () => {
  return (
    <Link to={ROUTES.PUBLIC.LANDING}>
      <img className="size-14" src="/svgs/logo.svg" alt="logo" />
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
