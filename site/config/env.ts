/**
 * Environment configuration
 * Centralizes all environment variables with type safety
 */

export const env = {
  /**
   * URL of the main application (Vite app)
   * @default http://localhost:5173
   */
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:5173",
  /**
   * URL of the API server
   * @default http://localhost:3000
   */
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
} as const;

export type Env = typeof env;
