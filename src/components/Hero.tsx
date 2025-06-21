
import { Button } from "@/components/ui/button";
import { Terminal, Code, Database, Shield, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen cyber-bg text-white relative overflow-hidden">
      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float-in stagger-1">
          <Shield className="w-8 h-8 text-cyan-400 opacity-20" />
        </div>
        <div className="absolute top-40 right-20 animate-float-in stagger-2">
          <Code className="w-6 h-6 text-purple-400 opacity-20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float-in stagger-3">
          <Database className="w-10 h-10 text-green-400 opacity-20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-in stagger-4">
          <Cpu className="w-12 h-12 text-blue-400 opacity-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Tech badge */}
              <div className="inline-flex items-center space-x-2 bg-gray-900/60 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2 animate-slide-up-stagger stagger-1">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-code text-cyan-400">TECH INTERNSHIPS 2024</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-tech font-bold leading-tight animate-slide-up-stagger stagger-2">
                LEVEL UP YOUR
                <br />
                <span className="text-gradient">TECH CAREER</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg animate-slide-up-stagger stagger-3">
                Launch your career in <span className="text-cyan-400 font-semibold">Cybersecurity</span>, 
                <span className="text-purple-400 font-semibold"> Full Stack Development</span>, 
                <span className="text-green-400 font-semibold"> Data Science</span>, and 
                <span className="text-blue-400 font-semibold"> Data Analysis</span> with hands-on internships.
              </p>

              {/* Code snippet */}
              <div className="code-block max-w-md animate-slide-up-stagger stagger-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-cyan-400">
                  <span className="text-purple-400">def</span> <span className="text-yellow-400">start_career</span>():
                  <br />
                  &nbsp;&nbsp;<span className="text-green-400"># Your tech journey begins here</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-cyan-400">"Success"</span>
                </div>
              </div>
            </div>
            
            {/* Tech stats */}
            <div className="flex items-center space-x-8 pt-8 animate-slide-up-stagger stagger-5">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 font-code">500+</div>
                <div className="text-sm text-gray-400">Students Placed</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 font-code">50+</div>
                <div className="text-sm text-gray-400">Tech Companies</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 font-code">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up-stagger stagger-6">
              <button className="tech-button group">
                Apply for Internship
                <Code className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-gray-600 hover:border-cyan-400 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-cyan-400/10">
                Explore Programs
              </button>
            </div>
          </div>

          <div className="relative animate-slide-up-stagger stagger-3">
            {/* Main image container with tech overlay */}
            <div className="relative">
              <div className="tech-card p-8 tech-hover-effect">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl overflow-hidden aspect-square relative">
                  <img
                    src="/lovable-uploads/212e75b6-821d-4073-aba6-93892cbde78c.png"
                    alt="Tech professional coding"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Tech overlay elements */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs font-code">ACTIVE</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3">
                    <div className="font-code text-xs text-cyan-400">
                      <div>Cybersecurity: <span className="text-green-400">✓ Active</span></div>
                      <div>Full Stack: <span className="text-purple-400">✓ Learning</span></div>
                      <div>Data Science: <span className="text-blue-400">✓ Enrolled</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech cards */}
              <div className="absolute -top-8 -left-8 tech-card p-4 animate-float-in stagger-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="text-sm font-semibold text-cyan-400">Cybersecurity</div>
                    <div className="text-xs text-gray-400">12 weeks</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 tech-card p-4 animate-float-in stagger-5">
                <div className="flex items-center space-x-2">
                  <Database className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-sm font-semibold text-green-400">Data Science</div>
                    <div className="text-xs text-gray-400">16 weeks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
