
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
      cyan: "from-cyan-500 to-cyan-600 text-cyan-400 border-cyan-500/30",
      purple: "from-purple-500 to-purple-600 text-purple-400 border-purple-500/30",
      green: "from-green-500 to-green-600 text-green-400 border-green-500/30",
      blue: "from-blue-500 to-blue-600 text-blue-400 border-blue-500/30"
    };
    return colors[color as keyof typeof colors];
  };  return (
    <section 
      id="services" 
      ref={servicesSectionRef}
      className="py-20 cyber-bg min-h-screen relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-900/60 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2 mb-6 animate-slide-up-stagger">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-code text-cyan-400">INTERNSHIP PROGRAMS</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-tech font-bold text-white mb-8 animate-slide-up-stagger stagger-1">
            Master In-Demand{" "}
            <span className="text-gradient">Tech Skills</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up-stagger stagger-2">
            Join our intensive internship programs designed by industry experts. 
            Gain hands-on experience with real projects and get hired by top tech companies.
          </p>
        </div>        {/* Services Grid - Target for flying cards with precise positioning */}
        <div 
          ref={gridContainerRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto min-h-[500px] items-center justify-items-center"
        >
          {/* Precise target slots for each card matching reference layout */}
          <div className="w-80 h-96 opacity-0 flex items-center justify-center" data-target-slot="0">
            <div className="w-full h-full bg-gray-800/10 rounded-2xl border border-gray-700/20"></div>
          </div>
          <div className="w-80 h-96 opacity-0 flex items-center justify-center" data-target-slot="1">
            <div className="w-full h-full bg-gray-800/10 rounded-2xl border border-gray-700/20"></div>
          </div>
          <div className="w-80 h-96 opacity-0 flex items-center justify-center" data-target-slot="2">
            <div className="w-full h-full bg-gray-800/10 rounded-2xl border border-gray-700/20"></div>
          </div>
          <div className="w-80 h-96 opacity-0 flex items-center justify-center" data-target-slot="3">
            <div className="w-full h-full bg-gray-800/10 rounded-2xl border border-gray-700/20"></div>
          </div>
        </div>        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Students Placed", value: "500+", color: "cyan" },
            { label: "Partner Companies", value: "50+", color: "purple" },
            { label: "Success Rate", value: "95%", color: "green" },
            { label: "Average Salary", value: "$75K", color: "blue" }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center tech-card p-6 animate-slide-up-stagger"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-3xl font-bold font-code mb-2 ${getColorClasses(stat.color).split(' ')[2]}`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
