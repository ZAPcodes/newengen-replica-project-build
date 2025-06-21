import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaStar, 
  FaWhatsapp, 
  FaPlay, 
  FaTrophy, 
  FaUsers, 
  FaCode, 
  FaGraduationCap,
  FaCertificate,
  FaBriefcase,
  FaHome,
  FaLaptop,
  FaComments
} from 'react-icons/fa';
import { 
  Shield, 
  Code, 
  Database, 
  Award, 
  Users, 
  Target, 
  Zap, 
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Trophy,
  Gift,
  Sparkles
} from 'lucide-react';
import Header from "@/components/Header";
import AnimatedText from "@/components/AnimatedText";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import FloatingParticles from "@/components/FloatingParticles";

const testimonials = [
  {
    name: "Athira Nair",
    role: "Data Science Intern",
    company: "Tech Innovations",
    quote: "I am grateful for the amazing internship I worked on. The hands-on projects and real-world applications made all the difference in my career journey.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    achievement: "Placed at Google"
  },
  {
    name: "Nilo Anjum",
    role: "Full Stack Developer",
    company: "Digital Solutions",
    quote: "There are plenty of projects that make technical concepts clear. The outstanding revision qualities help learners move forward with confidence.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    achievement: "₹15 LPA Package"
  },
  {
    name: "Garima Pandey",
    role: "Cybersecurity Analyst",
    company: "SecureNet Corp",
    quote: "The experience at Inlighn Tech was transformative. Interactive discussions and hands-on labs prepared me for real-world challenges.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    achievement: "Security Expert"
  }
];

const videos = [
  {
    title: "LMS Setup & Access: A Step-by-Step Guide",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoId: "dQw4w9WgXcQ",
    duration: "15:30",
    description: "Complete guide to setting up and accessing our Learning Management System",
    category: "Setup"
  },
  {
    title: "Getting Started with Python Programming",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoId: "rfscVS0vtbw",
    duration: "20:45",
    description: "Introduction to Python programming for beginners",
    category: "Programming"
  },
  {
    title: "Web Development Fundamentals",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoId: "UB1O30fR-EE",
    duration: "25:10",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    category: "Web Dev"
  },
  {
    title: "Data Science with Python",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoId: "ua-CiDNNj30",
    duration: "30:15",
    description: "Exploring data science concepts using Python",
    category: "Data Science"
  },
  {
    title: "Cybersecurity Best Practices",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoId: "inWWhr5tnEA",
    duration: "18:22",
    description: "Essential cybersecurity practices for developers",
    category: "Security"
  }
];

const projects = [
  {
    title: "Nova - Voice-Activated AI Assistant",
    developer: "Athira Prasad Nair",
    description: "Combining speech recognition, AI & web APIs to deliver a versatile assistant with advanced capabilities.",
    tech: "Python Project",
    features: "Note-taking, advanced system controls, voice commands",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "AI/ML",
    github: "#",
    demo: "#"
  },
  {
    title: "SecureVault - Password Manager",
    developer: "Rohan Kumar",
    description: "Advanced password management system with encryption and biometric authentication.",
    tech: "React + Node.js",
    features: "End-to-end encryption, biometric auth, secure sharing",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Security",
    github: "#",
    demo: "#"
  },
  {
    title: "DataViz Pro - Analytics Dashboard",
    developer: "Priya Sharma",
    description: "Interactive data visualization platform for business intelligence and analytics.",
    tech: "React + D3.js",
    features: "Real-time charts, custom dashboards, data export",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Data Science",
    github: "#",
    demo: "#"
  }
];

const participationSteps = [
  {
    title: "Eligibility Check",
    description: "If you're in your last month of internship, you're eligible! You'll receive a Google Form to apply for this prestigious title!",
    color: "#00FFC6",
    icon: CheckCircle
  },
  {
    title: "Submit Projects",
    description: "Submit your best projects related to your domain! Showcase your skills and creativity.",
    color: "#8B5CF6",
    icon: Code
  },
  {
    title: "Skill Assessment Test",
    description: "Take a comprehensive skill assessment test to prove your expertise in your chosen domain!",
    color: "#FF6B35",
    icon: Target
  },
  {
    title: "Final Interview Round",
    description: "Ace the interview round (if shortlisted) and demonstrate your passion for technology!",
    color: "#12C2E9",
    icon: Users
  }
];

const perks = [
  { 
    title: "ISO Certified Certificate", 
    icon: FaCertificate, 
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Industry-recognized certification"
  },
  { 
    title: "Top 10 Interns Reward", 
    subtitle: "Stipend ₹15,000 + WebKit", 
    icon: FaTrophy,
    description: "Exclusive rewards for top performers"
  },
  { 
    title: "Offer Letter", 
    subtitle: "within 30 days", 
    icon: FaBriefcase,
    description: "Fast-track to employment"
  },
  { 
    title: "Industry-Based Projects", 
    icon: FaCode,
    description: "Real-world project experience"
  },
  { 
    title: "Experience with QR Code", 
    icon: FaLaptop,
    description: "Digital verification system"
  },
  { 
    title: "Exclusive Job Updates", 
    subtitle: "Shared on WhatsApp", 
    icon: FaBriefcase,
    description: "Priority job notifications"
  },
  { 
    title: "Community Forum", 
    subtitle: "Peer & Mentor Support", 
    icon: FaUsers,
    description: "Collaborative learning environment"
  },
  { 
    title: "My Portfolio Access", 
    subtitle: "Within 5 minutes", 
    icon: FaLaptop,
    description: "Instant portfolio creation"
  },
  { 
    title: "Virtual Internship", 
    subtitle: "Work from Home with Flexible Schedule", 
    icon: FaHome,
    description: "Complete flexibility and comfort"
  }
];

const perkVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeOut"
    }
  })
};

const WhatsSpecial: React.FC = () => {
  const { ref: testimonialRef, inView: testimonialInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: challengeRef, inView: challengeInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: perksRef, inView: perksInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen cyber-bg relative overflow-hidden">
      <Header />
      
      {/* Floating Particles Background */}
      <FloatingParticles 
        count={40}
        colors={['#00FFC6', '#12C2E9', '#FF6B35']}
        speed={0.3}
        size={{ min: 1, max: 4 }}
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-dark/60 backdrop-blur-sm border border-secondary-cyan/30 rounded-full px-6 py-3 mb-8 hover-magnetic">
            <Sparkles className="w-5 h-5 text-secondary-cyan animate-pulse" />
            <span className="text-sm font-semibold text-secondary-cyan uppercase tracking-wider">What Makes Us Special</span>
          </div>

          <AnimatedText
            text="Discover What Makes INLIGHN TECH Extraordinary"
            className="text-5xl md:text-7xl font-tech font-bold text-white mb-6 leading-tight text-shadow-glow"
            type="words"
            delay={0.2}
            stagger={0.1}
          />

          <AnimatedText
            text="Experience the future of tech education with our innovative programs, expert mentorship, and industry-leading opportunities"
            className="text-xl text-light-blue max-w-4xl mx-auto leading-relaxed"
            type="words"
            delay={0.5}
            stagger={0.05}
          />
        </div>
      </section>

      {/* Feedback from Our Interns */}
      <section ref={testimonialRef} className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Success Stories from Our Interns"
              className="text-4xl md:text-5xl font-tech font-bold text-white mb-6"
              type="words"
              delay={0.2}
              stagger={0.1}
            />
            <p className="text-xl text-light-blue max-w-3xl mx-auto">
              Real feedback from students who transformed their careers with us
            </p>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -(testimonials.length * (400 + 32))],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TiltCard key={index}>
                  <motion.div
                    className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-gray-900 min-w-[400px] flex-shrink-0 border border-secondary-cyan/20 hover-magnetic"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 255, 198, 0.3)" }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full border-4 border-secondary-cyan/30 object-cover" 
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                        <p className="text-secondary-cyan font-medium">{testimonial.role}</p>
                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} />
                          ))}
                        </div>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                          {testimonial.achievement}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </motion.div>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Knowledge Through Videos */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Learn Through Interactive Videos"
              className="text-4xl md:text-5xl font-tech font-bold text-white mb-6"
              type="words"
              delay={0.2}
              stagger={0.1}
            />
            <p className="text-xl text-light-blue max-w-3xl mx-auto">
              Comprehensive video tutorials covering all aspects of modern technology
            </p>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -(videos.length * (450 + 32))],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...videos, ...videos].map((video, index) => (
                <TiltCard key={index}>
                  <motion.div
                    className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl min-w-[450px] flex-shrink-0 overflow-hidden group cursor-pointer border border-secondary-cyan/20 hover-magnetic"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 255, 198, 0.3)" }}
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
                  >
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                        <div className="w-20 h-20 bg-secondary-cyan rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-10 h-10 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary-cyan text-primary-dark px-3 py-1 rounded-full text-xs font-bold">
                          {video.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-full">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-secondary-cyan transition-colors duration-300">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interns of the Month Challenge */}
      <section ref={challengeRef} className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TiltCard>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={challengeInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-dark/90 to-primary-medium/90 backdrop-blur-sm p-12 rounded-3xl text-white text-center border border-secondary-cyan/30 hover-magnetic"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-cyan to-accent-blue rounded-2xl flex items-center justify-center shadow-2xl">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
              </div>

              <AnimatedText
                text="Interns of the Month Challenge"
                className="text-4xl md:text-5xl font-tech font-bold mb-6"
                type="words"
                delay={0.2}
                stagger={0.1}
              />

              <p className="text-xl text-light-blue mb-8 max-w-4xl mx-auto leading-relaxed">
                Every month, INLIGHN TECH brings an exclusive opportunity with our 'Interns of the Month Challenge' - 
                recognizing interns who have shown exceptional dedication, innovation, and technical excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <TiltCard>
                  <div className="bg-gradient-to-br from-accent-rust to-accent-rust/80 p-6 rounded-2xl shadow-xl hover-magnetic">
                    <Gift className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="font-bold text-xl text-white mb-2">₹15,000 Stipend Reward!</h3>
                    <p className="text-white/90 text-sm">Cash reward for outstanding performance</p>
                  </div>
                </TiltCard>
                <TiltCard>
                  <div className="bg-gradient-to-br from-secondary-cyan to-accent-blue p-6 rounded-2xl shadow-xl hover-magnetic">
                    <Award className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="font-bold text-xl text-white mb-2">Exclusive WebKit & Swag Pack!</h3>
                    <p className="text-white/90 text-sm">Premium branded merchandise and tools</p>
                  </div>
                </TiltCard>
                <TiltCard>
                  <div className="bg-gradient-to-br from-primary-medium to-primary-dark p-6 rounded-2xl shadow-xl hover-magnetic">
                    <Star className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="font-bold text-xl text-white mb-2">Special Platform Recognition!</h3>
                    <p className="text-white/90 text-sm">Featured across our digital platforms</p>
                  </div>
                </TiltCard>
              </div>

              <MagneticButton strength={0.4} range={120}>
                <button className="bg-white text-primary-dark font-bold px-8 py-4 rounded-xl hover:bg-secondary-cyan hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Learn More About Challenge
                </button>
              </MagneticButton>
            </motion.div>
          </TiltCard>
        </div>
      </section>

      {/* Our Interns' Projects */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Showcase of Intern Projects"
              className="text-4xl md:text-5xl font-tech font-bold text-white mb-6"
              type="words"
              delay={0.2}
              stagger={0.1}
            />
            <p className="text-xl text-light-blue max-w-3xl mx-auto">
              Innovative projects built by our talented interns using cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <TiltCard key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-secondary-cyan/20 hover-magnetic group"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary-cyan text-primary-dark px-3 py-1 rounded-full text-xs font-bold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent-rust text-white px-3 py-1 rounded-full text-xs font-bold">
                        {project.tech}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-secondary-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-secondary-cyan mb-3 font-medium">
                      Developed by: {project.developer}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                      Features: {project.features}
                    </p>
                    
                    <div className="flex gap-3">
                      <MagneticButton strength={0.3} range={80}>
                        <button className="flex-1 bg-gradient-to-r from-secondary-cyan to-accent-blue text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                          View Demo
                        </button>
                      </MagneticButton>
                      <MagneticButton strength={0.3} range={80}>
                        <button className="flex-1 border-2 border-secondary-cyan text-secondary-cyan hover:bg-secondary-cyan hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                          GitHub
                        </button>
                      </MagneticButton>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="How to Participate in the Challenge"
              className="text-4xl md:text-5xl font-tech font-bold text-white mb-6"
              type="words"
              delay={0.2}
              stagger={0.1}
            />
            <p className="text-xl text-light-blue max-w-3xl mx-auto">
              Follow these simple steps to join our monthly challenge and showcase your skills
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {participationSteps.map((step, index) => (
              <TiltCard key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl"
                      style={{ backgroundColor: step.color }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>
                  
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-gray-900 shadow-2xl border border-secondary-cyan/20 hover-magnetic"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: step.color }}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-2xl text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Selection Process */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TiltCard>
            <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl text-gray-900 shadow-2xl border border-secondary-cyan/20 hover-magnetic">
              <div className="text-center mb-12">
                <AnimatedText
                  text="Rules & Selection Process"
                  className="text-4xl md:text-5xl font-tech font-bold text-gray-900 mb-6"
                  type="words"
                  delay={0.2}
                  stagger={0.1}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TiltCard>
                  <div className="text-center p-6 bg-gradient-to-br from-secondary-cyan/10 to-accent-blue/10 rounded-2xl border border-secondary-cyan/20 hover-magnetic">
                    <CheckCircle className="w-16 h-16 text-secondary-cyan mx-auto mb-4" />
                    <h3 className="font-bold text-secondary-cyan mb-3 text-xl">Rules</h3>
                    <p className="text-gray-700">Each intern can apply ONCE in their final month! Make it count with your best work.</p>
                  </div>
                </TiltCard>
                
                <TiltCard>
                  <div className="text-center p-6 bg-gradient-to-br from-accent-rust/10 to-accent-rust/5 rounded-2xl border border-accent-rust/20 hover-magnetic">
                    <Award className="w-16 h-16 text-accent-rust mx-auto mb-4" />
                    <h3 className="font-bold text-accent-rust mb-3 text-xl">Benefits</h3>
                    <p className="text-gray-700">Winners announced on the last day of every month with amazing rewards!</p>
                  </div>
                </TiltCard>
                
                <TiltCard>
                  <div className="text-center p-6 bg-gradient-to-br from-primary-medium/10 to-primary-dark/5 rounded-2xl border border-primary-medium/20 hover-magnetic">
                    <Trophy className="w-16 h-16 text-primary-medium mx-auto mb-4" />
                    <h3 className="font-bold text-primary-medium mb-3 text-xl">Top 10 Interns</h3>
                    <p className="text-gray-700">Top 10 interns celebrated with rewards, recognition, and career opportunities!</p>
                  </div>
                </TiltCard>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section ref={perksRef} className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Exclusive Perks & Benefits"
              className="text-4xl md:text-5xl font-tech font-bold text-white mb-6"
              type="words"
              delay={0.2}
              stagger={0.1}
            />
            <p className="text-xl text-light-blue max-w-3xl mx-auto">
              Comprehensive benefits package designed to accelerate your tech career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <TiltCard key={index}>
                <motion.div
                  custom={index}
                  variants={perkVariants}
                  initial="hidden"
                  animate={perksInView ? "visible" : "hidden"}
                  className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-gray-900 shadow-2xl border border-secondary-cyan/20 hover-magnetic group"
                  whileHover={{ y: -10 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary-cyan to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <perk.icon className="text-2xl text-white" />
                    </div>
                    
                    {perk.image && (
                      <img 
                        src={perk.image} 
                        alt={perk.title} 
                        className="mx-auto mb-6 rounded-xl shadow-lg w-full h-32 object-cover" 
                      />
                    )}
                    
                    <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-secondary-cyan transition-colors duration-300">
                      {perk.title}
                    </h3>
                    
                    {perk.subtitle && (
                      <p className="text-secondary-cyan font-semibold mb-3">
                        {perk.subtitle}
                      </p>
                    )}
                    
                    <p className="text-gray-600 leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TiltCard>
            <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-secondary-cyan/20 hover-magnetic">
              <AnimatedText
                text="Ready to Join the Elite?"
                className="text-4xl md:text-5xl font-tech font-bold text-gray-900 mb-6"
                type="words"
                delay={0.2}
                stagger={0.1}
              />
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Start your journey with INLIGHN TECH today and become part of our success story. 
                Transform your career with cutting-edge technology skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton strength={0.4} range={120}>
                  <button className="bg-gradient-to-r from-secondary-cyan to-accent-blue text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2 hover-shine">
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </MagneticButton>
                <MagneticButton strength={0.3} range={100}>
                  <button className="border-2 border-secondary-cyan text-secondary-cyan hover:bg-secondary-cyan hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                    Explore Programs
                  </button>
                </MagneticButton>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919368842663"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.1, y: 0, transition: { duration: 0.2 } }}
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center hover:shadow-3xl transition-all duration-300 hover-magnetic"
      >
        <FaWhatsapp size={32} />
      </motion.a>
    </div>
  );
};

export default WhatsSpecial;