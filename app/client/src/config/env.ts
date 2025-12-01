/**
 * Environment configuration
 * Centralizes all environment variables with type safety
 */

export const env = {
  /**
   * URL of the main application (Vite app)
   * @default development
   */
  appUrl: import.meta.env.VITE_APP_URL || "http://localhost:5173",
  /**
   * URL of the API server
   * @default http://localhost:3153
   */
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:3153",
  /**
   * URL of the marketing site (Next.js app)
   * @default http://localhost:3000
   */
  siteUrl: import.meta.env.VITE_SITE_URL || "http://localhost:3000",
} as const;

export type Env = typeof env;
