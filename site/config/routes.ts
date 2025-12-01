import { env } from "./env";

export const BASE_PATHS = {
  APP: "/app/v1",
  AUTH: "/auth",
} as const;

export const PUBLIC_ROUTES = {
  LANDING: "/",
  CONTACT: "/contact",
} as const;

/**
 * External app routes - Points to the Vite application
 * These are absolute URLs to the external app
 */
export const APP_ROUTES = {
  LOGIN: `${env.appUrl}/auth/login`,
  REGISTER: `${env.appUrl}/auth/register`,
  DASHBOARD: `${env.appUrl}/app/v1`,
  PROFILE: `${env.appUrl}/app/v1/profile`,
  SETTINGS: `${env.appUrl}/app/v1/settings`,
} as const;

export const getCurrentRoute = (pathname: string) => {
  const match = pathname.match(BASE_PATHS.APP + "/([^/]+)");
  return match ? match[1] : "";
};

export const ROUTES = {
  PUBLIC: PUBLIC_ROUTES,
  BASE: BASE_PATHS,
  APP: APP_ROUTES,
} as const;
