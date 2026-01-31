import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CareerPathPage from "@/pages/CareerPath";
import GeneralPhysician from "@/pages/GeneralPhysician";
import Feedback from "@/pages/Feedback";
import ContactUs from "@/pages/ContactUs";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/career-path" component={CareerPathPage} />
      <Route path="/career/general-physician" component={GeneralPhysician} />
      <Route path="/feedback" component={Feedback} />
      <Route path="/contact" component={ContactUs} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
