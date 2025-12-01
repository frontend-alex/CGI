import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useAuth } from "@/contexts/AuthContext";
import Loading from "@/components/Loading";

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
        to={ROUTES.BASE.APP}
        state={{ from: location }}
        replace
      />
    );
  }

  return <>{children}</>;
};

export default AppGuard;
