import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Loading from "@/components/Loading";
import TitleWrapper from "@/components/TitleWrapper";

// Public pages
import {
  Login,
  Register,
  ForgotPassword,
  AuthCallback,
  Otp,
  ResetPassword
} from "@/routes/(auth)";

// Private pages
import { Dashboard, Profile, Settings } from "@/routes/(root)";

import { ROUTES } from "@/config/routes";

//guards
import { AuthGuard, RootGuard } from "@/components/guards/index";

// Layouts
import { AuthLayout, RootLayout } from "@/components/layouts/index";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.PUBLIC.LOGIN} replace />} />

        <Route
          path={ROUTES.PUBLIC.VERIFY_EMAIL}
          element={
            <TitleWrapper title="CGI | Verify Email">
              <Otp />
            </TitleWrapper>
          }
        />

        {/* AUTH ROUTES (Guarded against logged-in users) */}
        <Route
          element={
            <AuthGuard>
              <AuthLayout />
            </AuthGuard>
          }
        >

          <Route
            path={ROUTES.PUBLIC.LOGIN}
            element={
              <TitleWrapper title="CGI | Login">
                <Login />
              </TitleWrapper>
            }
          />

          <Route
            path={ROUTES.PUBLIC.REGISTER}
            element={
              <TitleWrapper title="CGI | Register">
                <Register />
              </TitleWrapper>
            }
          />

          <Route
            path={ROUTES.PUBLIC.FORGOT_PASSWORD}
            element={
              <TitleWrapper title="CGI | Recover Page">
                <ForgotPassword />
              </TitleWrapper>
            }
          />

          <Route
            path={ROUTES.PUBLIC.RESET_PASSWORD}
            element={
              <TitleWrapper title="CGI | Reset Password">
                <ResetPassword />
              </TitleWrapper>
            }
          />

          <Route
            path={ROUTES.PUBLIC.AUTH_CALLBACK}
            element={
              <TitleWrapper title="CGI | Verifying...">
                <AuthCallback />
              </TitleWrapper>
            }
          />
        </Route>



        {/* AUTHENTICATED APP ROUTES */}
        <Route
          element={
            <RootGuard>
              <RootLayout />
            </RootGuard>
          }
        >
          <Route
            path={ROUTES.BASE.APP}
            element={
              <TitleWrapper title="CGI | Dashboard">
                <Dashboard />
              </TitleWrapper>
            }
          />

          <Route
            path={ROUTES.AUTHENTICATED.PROFILE}
            element={
              <TitleWrapper title="CGI | Profile">
                <Profile />
              </TitleWrapper>
            }
          />

          <Route
            path={ROUTES.AUTHENTICATED.SETTINGS}
            element={
              <TitleWrapper title="CGI | Settings">
                <Settings />
              </TitleWrapper>
            }
          />
        </Route>

      </Routes>
    </Suspense>
  );
};

export default App;
