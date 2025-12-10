import "@/styles/globals.css";

import App from "./App";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { BoardUIProvider } from "@/contexts/UIContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={new QueryClient()}>
    {/* <StrictMode> */}
    <BrowserRouter>
      <AuthProvider>
        <BoardUIProvider>
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <App />
            <Toaster position="top-center" />
          </ThemeProvider>
        </BoardUIProvider>
      </AuthProvider>
    </BrowserRouter>
    {/* </StrictMode> */}
  </QueryClientProvider>
);
