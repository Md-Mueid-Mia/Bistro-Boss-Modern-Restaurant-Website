import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      
    <AuthProvider>
      <div className="max-w-7xl mx-auto">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
