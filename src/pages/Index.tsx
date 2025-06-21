import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/ServicesNew";
import WhoWeAre from "@/components/WhoWeAre";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <WhoWeAre />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;