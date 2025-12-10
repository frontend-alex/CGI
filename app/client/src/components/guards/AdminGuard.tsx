import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useAuth } from "@/contexts/AuthContext";
import Loading from "@/components/loading";

interface AdminGuardProps {
    children: React.ReactNode;
}

const AdminGuard = ({ children }: AdminGuardProps) => {
    const { isAuthenticated, isLoading, isAdmin } = useAuth();
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

    if (!isAdmin) {
        return (
            <Navigate
                to={ROUTES.AUTHENTICATED.DASHBOARD}
                replace
            />
        );
    }

    return <>{children}</>;
};

export default AdminGuard;
