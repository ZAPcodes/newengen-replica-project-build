import { useEffect, useState, useRef } from "react";
import { Shield, Code, Database, BarChart, Cpu, Lock } from "lucide-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Same images as in Hero component
const heroImages = [
  "/public/lovable-uploads/212e75b6-821d-4073-aba6-93892cbde78c.png",
  "/public/lovable-uploads/d93bec81-b724-41cb-b278-f9cad0ccf892.png",
  "/public/lovable-uploads/development.jpg",
  "/public/favicon.ico"
];

const Services = () => {
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [flyingImages, setFlyingImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.3;
      const imageAnimationPoint = window.innerHeight * 0.8;
      const flyingPoint = window.innerHeight * 0.7;
      
      setIsScrolled(scrollPosition > triggerPoint);
      setFlyingImages(scrollPosition > flyingPoint);
      setShowImages(scrollPosition > imageAnimationPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "Ethical Hacking & Security Analysis",
      color: "cyan",
      skills: ["Penetration Testing", "Network Security", "Incident Response"],
      duration: "12 weeks",
      image: heroImages[0]
    },
    {
      title: "Full Stack Development",
      icon: Code,
      description: "Modern Web & Mobile Applications",
      color: "purple",
      skills: ["React/Next.js", "Node.js", "Cloud Deployment"],
      duration: "16 weeks",
      image: heroImages[1]
    },
    {
      title: "Data Science",
      icon: Database,
      description: "AI/ML & Predictive Analytics",
      color: "green",
      skills: ["Python/R", "Machine Learning", "Deep Learning"],
      duration: "14 weeks",
      image: heroImages[2]
    },
    {
      title: "Data Analysis",
      icon: BarChart,
      description: "Business Intelligence & Visualization",
      color: "blue",
      skills: ["SQL", "Power BI", "Statistical Analysis"],
      duration: "10 weeks",
      image: heroImages[3]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "from-secondary-cyan to-secondary-cyan/80 text-secondary-cyan border-secondary-cyan/30",
      purple: "from-accent-rust to-accent-rust/80 text-accent-rust border-accent-rust/30",
      green: "from-secondary-cyan to-primary-medium text-secondary-cyan border-secondary-cyan/30",
      blue: "from-primary-medium to-primary-dark text-light-blue border-light-blue/30"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section 
      id="services" 
      ref={servicesSectionRef}
      className="py-20 cyber-bg min-h-screen relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-dark/60 backdrop-blur-sm border border-secondary-cyan/30 rounded-full px-4 py-2 mb-6 animate-slide-up-stagger">
            <Cpu className="w-4 h-4 text-secondary-cyan" />
            <span className="text-sm font-code text-secondary-cyan">INTERNSHIP PROGRAMS</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-tech font-bold text-white mb-8 animate-slide-up-stagger stagger-1 text-shadow">
            Master In-Demand{" "}
            <span className="text-gradient">Tech Skills</span>
          </h2>
          
          <p className="text-xl text-light-blue max-w-3xl mx-auto leading-relaxed animate-slide-up-stagger stagger-2">
            Join our intensive internship programs designed by industry experts. 
            Gain hands-on experience with real projects and get hired by top tech companies.
          </p>
        </div>

        {/* Services Grid - Target for flying cards with precise positioning */}
        <div 
          ref={gridContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto min-h-[500px] items-center justify-items-center"
        >
          {/* Precise target slots for each card matching reference layout */}
          {programs.map((program, index) => (
            <div 
              key={index}
              className="w-80 h-96 flex items-center justify-center" 
              data-target-slot={index}
            >
              {/* Placeholder that will be replaced by flying cards */}
              <div className="w-full h-full bg-primary-medium/20 rounded-2xl border border-secondary-cyan/20 flex items-center justify-center opacity-30">
                <div className="text-center">
                  <program.icon className="w-12 h-12 text-secondary-cyan/50 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-light-blue/50">{program.title}</h3>
                  <p className="text-sm text-light-blue/30 mt-2">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Students Placed", value: "500+", color: "cyan" },
            { label: "Partner Companies", value: "50+", color: "purple" },
            { label: "Success Rate", value: "95%", color: "green" },
            { label: "Average Salary", value: "$75K", color: "blue" }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center tech-card p-6 animate-slide-up-stagger hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-3xl font-bold font-code mb-2 ${getColorClasses(stat.color).split(' ')[2]}`}>
                {stat.value}
              </div>
              <div className="text-light-blue text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="tech-button-accent text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;