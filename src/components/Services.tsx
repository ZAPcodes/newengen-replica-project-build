
import { useEffect, useState } from "react";
import { Shield, Code, Database, BarChart, Cpu, Lock } from "lucide-react";

const Services = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.3;
      setIsScrolled(scrollPosition > triggerPoint);
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
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop"
    },
    {
      title: "Full Stack Development",
      icon: Code,
      description: "Modern Web & Mobile Applications",
      color: "purple",
      skills: ["React/Next.js", "Node.js", "Cloud Deployment"],
      duration: "16 weeks",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop"
    },
    {
      title: "Data Science",
      icon: Database,
      description: "AI/ML & Predictive Analytics",
      color: "green",
      skills: ["Python/R", "Machine Learning", "Deep Learning"],
      duration: "14 weeks",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop"
    },
    {
      title: "Data Analysis",
      icon: BarChart,
      description: "Business Intelligence & Visualization",
      color: "blue",
      skills: ["SQL", "Power BI", "Statistical Analysis"],
      duration: "10 weeks",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop"
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
  };

  return (
    <section id="services" className="py-20 cyber-bg min-h-screen">
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

        <div className={`transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'grid md:grid-cols-2 gap-8 max-w-5xl mx-auto' 
            : 'flex flex-row justify-center items-center space-x-8 overflow-x-auto'
        }`}>
          {programs.map((program, index) => {
            const Icon = program.icon;
            const colorClasses = getColorClasses(program.color);
            
            return (
              <div 
                key={program.title}
                className={`transition-all duration-700 ease-in-out tech-hover-effect ${
                  isScrolled ? 'w-full' : 'min-w-[320px] w-[320px]'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="tech-card p-6 h-full">
                  {/* Program header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 bg-gray-800 border ${colorClasses.split(' ')[3]} rounded-full text-xs font-code ${colorClasses.split(' ')[2]}`}>
                      {program.duration}
                    </span>
                  </div>

                  {/* Program image */}
                  <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4 relative group">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute bottom-2 left-2">
                      <Lock className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Program content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-tech font-bold text-white mb-2">{program.title}</h3>
                      <p className="text-gray-400 text-sm">{program.description}</p>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <div className="text-xs font-code text-gray-500 uppercase tracking-wider">Key Skills</div>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Apply button */}
                    <button className={`w-full bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}>
                      <span>Apply Now</span>
                      <Icon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
