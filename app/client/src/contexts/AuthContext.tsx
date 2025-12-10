import { UserRoles, type User } from "@shared/types/user";
import type { ApiError } from "@shared/types/api";

import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation, useApiQuery } from "@/hooks/hook";
import { createContext, useContext, useMemo, useCallback } from "react";
import { API } from "@/config/config";
import { ROUTES } from "@/config/routes";

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  error: ApiError | null;
  isAuthenticated: boolean;
  isUserUpdating: boolean;
  isAdmin: boolean;
  logout: () => void;
  refetch: () => void;
  update: (data: FormData) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();


  const { data, isLoading, error, refetch } = useApiQuery<{ user: User }>(
    ["auth", "me"],
    API.USER.GET_ME,
    {
      staleTime: 1000 * 60 * 10,
      cacheTime: 1000 * 60 * 15,
      enabled: true,
    }
  );

  const { mutateAsync: logoutMutation } = useApiMutation(
    "POST",
    API.AUTH.PRIVATE.LOGOUT,
    {
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.setQueryData(["auth", "me"], null);
        navigate(ROUTES.PUBLIC.LANDING, { replace: true });
      },
    }
  );

  const { mutateAsync: updateMutation, isPending: isUserUpdating } = useApiMutation<
    void,
    FormData
  >("PUT", API.AUTH.PRIVATE.UPDATE_PASSWORD, {
    invalidateQueries: [["auth", "me"]],
    onSuccess: (data) => {
      toast.success(data.message)
    },
  });

  const logout = useCallback(async () => {
    await logoutMutation(undefined);
  }, [logoutMutation]);

  const update = useCallback(async (data: FormData) => {
    await updateMutation(data);
  }, [updateMutation]);

  const contextValue = useMemo<AuthContextType>(() => {
    return {
      user: data?.data?.user ?? null,
      isAdmin: data?.data?.user?.role === UserRoles.Admin,
      isLoading,
      error,
      isUserUpdating,
      isAuthenticated: Boolean(data?.data?.user) && !error,
      logout,
      refetch,
      update,
    };
  }, [data, isLoading, error, refetch, logout, isUserUpdating, update]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }
  return context;
};
