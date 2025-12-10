import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useAuth } from "@/contexts/AuthContext";
import Loading from "@/components/loading";

interface AppGuardProps {
  children: React.ReactNode;
}

const AppGuard = ({ children }: AppGuardProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <Loading />;

  // If user is authenticated, redirect them to the app
  if (isAuthenticated) {
    return (
      <Navigate
        to={ROUTES.AUTHENTICATED.DASHBOARD}
        state={{ from: location }}
        replace
      />
    );
  }

  return <>{children}</>;
};

export default AppGuard;
