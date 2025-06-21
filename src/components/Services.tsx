import { useEffect, useState, useRef } from "react";
import { Shield, Code, Database, BarChart, Cpu, Lock, Users, Award, TrendingUp, Target } from "lucide-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from "./AnimatedText";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";

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

  // Enhanced stats with better visibility
  const statsData = [
    { 
      label: "Students Placed", 
      value: "500+", 
      color: "cyan",
      icon: Users,
      gradient: "from-secondary-cyan to-accent-blue",
      description: "Successfully placed in top companies"
    },
    { 
      label: "Partner Companies", 
      value: "50+", 
      color: "purple",
      icon: Target,
      gradient: "from-accent-rust to-accent-rust/80",
      description: "Industry-leading organizations"
    },
    { 
      label: "Success Rate", 
      value: "95%", 
      color: "green",
      icon: Award,
      gradient: "from-secondary-cyan to-primary-medium",
      description: "Program completion rate"
    },
    { 
      label: "Average Salary", 
      value: "$75K", 
      color: "blue",
      icon: TrendingUp,
      gradient: "from-primary-medium to-primary-dark",
      description: "Starting package for graduates"
    }
  ];

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
        {/* Header Section */}
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

        {/* Services Grid - 2x2 Layout positioned between header and stats */}
        <div className="flex flex-col items-center justify-center mb-20">
          <div 
            ref={gridContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {programs.map((program, index) => {
              const colorClasses = getColorClasses(program.color);
              
              return (
                <div 
                  key={index}
                  className="flex items-center justify-center" 
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
        </div>

        {/* Enhanced Stats Section with Better Visibility */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <AnimatedText
              text="Our Impact in Numbers"
              className="text-3xl md:text-4xl font-tech font-bold text-white mb-4 text-shadow"
              type="words"
              delay={0.2}
              stagger={0.1}
            />
            <p className="text-lg text-light-blue max-w-2xl mx-auto">
              Real results that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {statsData.map((stat, index) => (
              <TiltCard key={stat.label}>
                <div 
                  className="relative group animate-slide-up-stagger hover-magnetic"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Enhanced Card with Better Visibility */}
                  <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-2 border-gray-100 hover:border-secondary-cyan/30 transition-all duration-300 hover:shadow-3xl transform hover:scale-105">
                    {/* Icon with Gradient Background */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Value with High Contrast */}
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold font-tech mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      
                      {/* Label with Better Typography */}
                      <div className="text-lg font-semibold text-gray-800 mb-2 tracking-wide">
                        {stat.label}
                      </div>
                      
                      {/* Description for Context */}
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {stat.description}
                      </div>
                    </div>

                    {/* Subtle Accent Line */}
                    <div className={`w-12 h-1 bg-gradient-to-r ${stat.gradient} rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300`}></div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10`}></div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-secondary-cyan/20 max-w-2xl mx-auto hover-magnetic">
            <AnimatedText
              text="Ready to Start Your Tech Journey?"
              className="text-2xl md:text-3xl font-tech font-bold text-gray-900 mb-4"
              type="words"
              delay={0.2}
              stagger={0.1}
            />
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join thousands of successful students who have transformed their careers with our comprehensive programs.
            </p>
            <MagneticButton strength={0.4} range={120}>
              <button className="bg-gradient-to-r from-secondary-cyan to-accent-blue hover:from-secondary-cyan/90 hover:to-accent-blue/90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover-shine">
                Explore All Programs
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;