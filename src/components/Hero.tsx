import { Button } from "@/components/ui/button";
import { Terminal, Code, Database, Shield, Cpu } from "lucide-react";
import React from "react";
import AnimatedText from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";
import NeonGlowText from "./NeonGlowText";
import FloatingParticles from "./FloatingParticles";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen cyber-bg text-white relative overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles 
        count={30}
        colors={['#00FFC6', '#12C2E9', '#FF6B35']}
        speed={0.3}
        size={{ min: 1, max: 4 }}
      />

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float-in stagger-1 animate-parallax-float">
          <Shield className="w-8 h-8 text-secondary-cyan opacity-20 hover-glow" />
        </div>
        <div className="absolute top-40 right-20 animate-float-in stagger-2 animate-parallax-float">
          <Code className="w-6 h-6 text-accent-rust opacity-20 hover-glow" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float-in stagger-3 animate-parallax-float">
          <Database className="w-10 h-10 text-secondary-cyan opacity-20 hover-glow" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-in stagger-4 animate-parallax-float">
          <Cpu className="w-12 h-12 text-light-blue opacity-20 hover-glow" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Tech badge */}
              <div className="inline-flex items-center space-x-2 bg-primary-dark/60 backdrop-blur-sm border border-secondary-cyan/30 rounded-full px-4 py-2 animate-slide-up-stagger stagger-1 hover-magnetic">
                <Terminal className="w-4 h-4 text-secondary-cyan animate-neon-pulse" />
                <span className="text-sm font-code text-secondary-cyan">TECH INTERNSHIPS 2024</span>
              </div>

              {/* Animated Main Heading */}
              <div className="animate-slide-up-stagger stagger-2">
                <AnimatedText
                  text="LEVEL UP YOUR"
                  className="text-5xl sm:text-6xl lg:text-7xl font-tech font-bold leading-tight text-shadow-glow"
                  type="words"
                  delay={0.3}
                  stagger={0.1}
                />
                <div className="mt-4">
                  <NeonGlowText
                    text="TECH CAREER"
                    className="text-5xl sm:text-6xl lg:text-7xl font-tech font-bold leading-tight"
                    color="#00FFC6"
                    intensity="high"
                  />
                </div>
              </div>
              
              <AnimatedText
                text="Launch your career in Cybersecurity, Full Stack Development, Data Science, and Data Analysis with hands-on internships."
                className="text-lg text-light-blue leading-relaxed max-w-lg animate-slide-up-stagger stagger-3"
                type="words"
                delay={0.6}
                stagger={0.05}
              />

              {/* Enhanced Code snippet */}
              <TiltCard className="max-w-md animate-slide-up-stagger stagger-4">
                <div className="code-block hover-glow">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-accent-rust rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-secondary-cyan rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-light-blue rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="text-secondary-cyan">
                    <span className="text-accent-rust">def</span> <span className="text-light-blue animate-code-typing">start_career</span>():
                    <br />
                    &nbsp;&nbsp;<span className="text-light-blue/70"># Your tech journey begins here</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-accent-rust">return</span> <span className="text-secondary-cyan animate-neon-pulse">"Success"</span>
                  </div>
                </div>
              </TiltCard>
            </div>
            
            {/* Enhanced Tech stats */}
            <div className="flex items-center space-x-8 pt-8 animate-slide-up-stagger stagger-5">
              <TiltCard className="text-center hover-glow">
                <div className="text-2xl font-bold text-secondary-cyan font-code animate-neon-pulse">500+</div>
                <div className="text-sm text-light-blue">Students Placed</div>
              </TiltCard>
              <div className="w-px h-12 bg-primary-medium"></div>
              <TiltCard className="text-center hover-glow">
                <div className="text-2xl font-bold text-accent-rust font-code animate-neon-pulse">50+</div>
                <div className="text-sm text-light-blue">Tech Companies</div>
              </TiltCard>
              <div className="w-px h-12 bg-primary-medium"></div>
              <TiltCard className="text-center hover-glow">
                <div className="text-2xl font-bold text-secondary-cyan font-code animate-neon-pulse">95%</div>
                <div className="text-sm text-light-blue">Success Rate</div>
              </TiltCard>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up-stagger stagger-6">
              <MagneticButton strength={0.4} range={120}>
                <button className="tech-button group hover-shine">
                  Apply for Internship
                  <Code className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </button>
              </MagneticButton>
              
              <MagneticButton strength={0.3} range={100}>
                <button className="bg-transparent border-2 border-primary-medium hover:border-secondary-cyan text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-secondary-cyan/10 hover-glow">
                  Explore Programs
                </button>
              </MagneticButton>
            </div>
          </div>

          <div className="relative animate-slide-up-stagger stagger-3">
            {/* Hero Image/Visual */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-b from-transparent via-secondary-cyan/5 to-transparent rounded-3xl animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-tech font-bold text-secondary-cyan/20">
                  TECH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced animated background grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;