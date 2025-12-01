import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useAuth } from "@/contexts/AuthContext";
import Loading from "@/components/Loading";

interface AppGuardProps {
  children: React.ReactNode;
}

const RootGuard = ({ children }: AppGuardProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <Loading />;

  if (!isAuthenticated) {
    return (
      <Navigate
        to={ROUTES.PUBLIC.LOGIN}
        state={{ from: location }}
        replace
      />
    );
  }

  return <>{children}</>;
};

export default RootGuard;
