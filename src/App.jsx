
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import NotFound from "./pages/NotFound.jsx";

const queryClient = new QueryClient();

// Handle redirects for GitHub Pages SPA
function HandleRedirects() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('p');
    const queryParams = params.get('q');
    
    if (redirectPath) {
      // Clean up the URL and navigate to the correct route
      const newPath = redirectPath + (queryParams ? `?${queryParams}` : '') + window.location.hash;
      navigate(newPath, { replace: true });
    }
  }, [location, navigate]);
  
  return null;
}

const App = () => {
  useEffect(() => {
    // Theme handling
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/portfolio">
          <HandleRedirects />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
