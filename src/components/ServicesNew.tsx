import { useRef } from "react";
import { Shield, Code, Database, BarChart, Cpu } from "lucide-react";

const Services = () => {
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "from-cyan-500 to-cyan-600 text-cyan-400 border-cyan-500/30",
      purple: "from-purple-500 to-purple-600 text-purple-400 border-purple-500/30",
      green: "from-green-500 to-green-600 text-green-400 border-green-500/30",
      blue: "from-blue-500 to-blue-600 text-blue-400 border-blue-500/30"
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
        </div>

        {/* Services Grid - Target for flying cards */}
        <div 
          ref={gridContainerRef}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto min-h-[800px] items-center"
        >
          {/* Placeholder slots for animated cards */}
          <div className="w-80 h-96 mx-auto opacity-0" data-target-slot="0"></div>
          <div className="w-80 h-96 mx-auto opacity-0" data-target-slot="1"></div>
          <div className="w-80 h-96 mx-auto opacity-0" data-target-slot="2"></div>
          <div className="w-80 h-96 mx-auto opacity-0" data-target-slot="3"></div>
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
