import { useEffect, useState, useRef } from "react";
import { Shield, Code, Database, BarChart, Cpu, Lock } from "lucide-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from "./AnimatedText";
import TiltCard from "./TiltCard";

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
  const [cardsLanded, setCardsLanded] = useState(false);

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

  useEffect(() => {
    // Check if cards have landed from hero section
    const checkForLandedCards = () => {
      const landedCards = document.querySelectorAll('[data-card-landed="true"]');
      if (landedCards.length > 0) {
        setCardsLanded(true);
      }
    };

    // Check immediately and set up observer
    checkForLandedCards();
    
    const observer = new MutationObserver(checkForLandedCards);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true,
      attributeFilter: ['data-card-landed']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={servicesSectionRef}
      className="py-20 cyber-bg min-h-screen relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-dark/60 backdrop-blur-sm border border-secondary-cyan/30 rounded-full px-4 py-2 mb-6 animate-slide-up-stagger hover-magnetic">
            <Cpu className="w-4 h-4 text-secondary-cyan" />
            <span className="text-sm font-code text-secondary-cyan">INTERNSHIP PROGRAMS</span>
          </div>
          
          <AnimatedText
            text="Master In-Demand Tech Skills"
            className="text-4xl sm:text-5xl font-tech font-bold text-white mb-8 animate-slide-up-stagger stagger-1 text-shadow"
            type="words"
            delay={0.2}
            stagger={0.1}
          />
          
          <AnimatedText
            text="Join our intensive internship programs designed by industry experts. Gain hands-on experience with real projects and get hired by top tech companies."
            className="text-xl text-light-blue max-w-3xl mx-auto leading-relaxed animate-slide-up-stagger stagger-2"
            type="words"
            delay={0.5}
            stagger={0.05}
          />
        </div>

        {/* Services Grid - Target for flying cards */}
        <div 
          ref={gridContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto min-h-[500px] items-center justify-items-center mb-16"
        >
          {programs.map((program, index) => {
            const colorClasses = getColorClasses(program.color);
            
            return (
              <div 
                key={index}
                className="w-80 h-96 flex items-center justify-center" 
                data-target-slot={index}
              >
                {/* Show static cards if animation cards haven't landed */}
                {!cardsLanded && (
                  <TiltCard>
                    <div 
                      className="w-80 h-96 bg-primary-dark/90 backdrop-blur-sm border border-primary-medium/50 rounded-2xl overflow-hidden shadow-2xl hover-magnetic animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Card Header */}
                      <div className="p-6 border-b border-primary-medium/50">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-xl flex items-center justify-center shadow-lg`}>
                            <program.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className={`px-3 py-1 bg-primary-medium border ${colorClasses.split(' ')[3]} rounded-full text-xs font-mono ${colorClasses.split(' ')[2]}`}>
                            {program.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                        <p className="text-light-blue text-sm">{program.description}</p>
                      </div>

                      {/* Card Image */}
                      <div className="h-40 relative overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                      </div>

                      {/* Card Footer */}
                      <div className="p-6">
                        <div className="space-y-3">
                          <div className="text-xs font-mono text-light-blue/70 uppercase tracking-wider">Key Skills</div>
                          <div className="flex flex-wrap gap-2">
                            {program.skills.map((skill, idx) => (
                              <span 
                                key={idx} 
                                className="px-2 py-1 bg-primary-medium text-light-blue text-xs rounded border border-secondary-cyan/30 hover:bg-secondary-cyan/10 transition-colors duration-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {[
            { label: "Students Placed", value: "500+", color: "cyan" },
            { label: "Partner Companies", value: "50+", color: "purple" },
            { label: "Success Rate", value: "95%", color: "green" },
            { label: "Average Salary", value: "$75K", color: "blue" }
          ].map((stat, index) => (
            <TiltCard key={stat.label}>
              <div 
                className="text-center tech-card p-6 animate-slide-up-stagger hover:shadow-2xl transition-all duration-300 hover-magnetic"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-3xl font-bold font-code mb-2 ${getColorClasses(stat.color).split(' ')[2]}`}>
                  {stat.value}
                </div>
                <div className="text-light-blue text-sm">{stat.label}</div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="tech-button-accent text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover-shine">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;