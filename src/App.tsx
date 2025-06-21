import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import VerifyCertificate from "./pages/VerifyCertificate";
import WhatsSpecial from "./pages/WhatsSpecial";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  // Initialize smooth scrolling
  useSmoothScroll();

  // Add page loading animation
  useEffect(() => {
    document.body.classList.add('page-transition');
    
    // Preload critical resources
    const preloadImages = [
      '/public/lovable-uploads/212e75b6-821d-4073-aba6-93892cbde78c.png',
      '/public/lovable-uploads/d93bec81-b724-41cb-b278-f9cad0ccf892.png',
      '/public/lovable-uploads/development.jpg'
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Optimize performance
    const optimizePerformance = () => {
      // Add GPU acceleration to animated elements
      const animatedElements = document.querySelectorAll('.hover-magnetic, .tech-card, .animate-slide-up-stagger');
      animatedElements.forEach(el => {
        (el as HTMLElement).classList.add('gpu-accelerated');
      });
    };

    // Run optimization after initial render
    setTimeout(optimizePerformance, 100);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/verify-certificate" element={<VerifyCertificate />} />
            <Route path="/whats-special" element={<WhatsSpecial />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;