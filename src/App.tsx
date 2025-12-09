import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ParkingPassPage from "./pages/ParkingPassPage";
import ProgrammePage from "./pages/ProgrammePage";
import RSVPPage from "./pages/RSVPPage";
import DashboardPage from "./pages/DashboardPage";
import SiteLayout from "./components/SiteLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<Index />} />
            <Route path="parking-pass" element={<ParkingPassPage />} />
            <Route path="programme" element={<ProgrammePage />} />
            <Route path="rsvp" element={<RSVPPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
