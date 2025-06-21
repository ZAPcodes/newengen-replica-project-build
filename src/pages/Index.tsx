
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/ServicesNew";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";
import WhoWeAre from "@/components/WhoWeAre";
import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhoWeAre />
      <TestimonialSection />
      <Clients />
      <Solutions />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
