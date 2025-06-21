import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  Users, 
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Award
} from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import AnimatedText from "@/components/AnimatedText";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import FloatingParticles from "@/components/FloatingParticles";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    program: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        program: "",
        message: ""
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: "VO-301, WeWork Prestige Central",
      subDetails: "Bengaluru, Karnataka 560001",
      color: "from-secondary-cyan to-accent-blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9368842663",
      subDetails: "Mon-Fri 9AM-6PM IST",
      color: "from-accent-rust to-accent-rust/80"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@inlighntech.com",
      subDetails: "We'll respond within 24 hours",
      color: "from-primary-medium to-primary-dark"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      subDetails: "9:00 AM - 6:00 PM IST",
      color: "from-secondary-cyan to-light-blue"
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "#", color: "#0077B5", name: "LinkedIn" },
    { icon: FaInstagram, href: "#", color: "#E4405F", name: "Instagram" },
    { icon: FaYoutube, href: "#", color: "#FF0000", name: "YouTube" },
    { icon: FaTwitter, href: "#", color: "#1DA1F2", name: "Twitter" },
    { icon: FaWhatsapp, href: "https://wa.me/919368842663", color: "#25D366", name: "WhatsApp" }
  ];

  const programs = [
    "Cybersecurity & Ethical Hacking",
    "Full Stack Web Development", 
    "Data Science & Machine Learning",
    "Data Analytics & Visualization",
    "Cloud Computing & DevOps",
    "Mobile App Development"
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Communication",
      description: "Your data is protected with enterprise-grade security"
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Get responses within 24 hours on business days"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Connect directly with our program specialists"
    },
    {
      icon: Award,
      title: "Personalized Guidance",
      description: "Receive tailored advice for your career goals"
    }
  ];

  return (
    <div className="min-h-screen cyber-bg relative overflow-hidden">
      <Header />
      
      {/* Floating Particles Background */}
      <FloatingParticles 
        count={30}
        colors={['#00FFC6', '#12C2E9', '#FF6B35']}
        speed={0.3}
        size={{ min: 1, max: 4 }}
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary-dark/60 backdrop-blur-sm border border-secondary-cyan/30 rounded-full px-6 py-3 mb-8 hover-magnetic">
              <MessageSquare className="w-5 h-5 text-secondary-cyan animate-pulse" />
              <span className="text-sm font-semibold text-secondary-cyan uppercase tracking-wider">Get In Touch</span>
            </div>

            <AnimatedText
              text="Let's Build Your Tech Future Together"
              className="text-5xl md:text-7xl font-tech font-bold text-white mb-6 leading-tight text-shadow-glow"
              type="words"
              delay={0.2}
              stagger={0.1}
            />

            <AnimatedText
              text="Ready to transform your career? Connect with our experts and discover how INLIGHN TECH can accelerate your journey into the tech industry."
              className="text-xl text-light-blue max-w-4xl mx-auto leading-relaxed"
              type="words"
              delay={0.5}
              stagger={0.05}
            />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <TiltCard>
              <motion.div
                ref={contactRef}
                initial={{ opacity: 0, x: -50 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-secondary-cyan/20 hover-magnetic"
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-tech font-bold text-gray-900 mb-4">
                    Start Your Journey
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary-cyan focus:border-secondary-cyan transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary-cyan focus:border-secondary-cyan transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary-cyan focus:border-secondary-cyan transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company/Institution
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary-cyan focus:border-secondary-cyan transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Your organization"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
                      Program of Interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary-cyan focus:border-secondary-cyan transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    >
                      <option value="">Select a program</option>
                      {programs.map((program) => (
                        <option key={program} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary-cyan focus:border-secondary-cyan transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                      required
                      placeholder="Tell us about your goals and how we can help you..."
                    />
                  </div>
                  
                  <MagneticButton strength={0.4} range={120}>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-secondary-cyan to-accent-blue hover:from-secondary-cyan/90 hover:to-accent-blue/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover-shine"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </MagneticButton>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Message sent successfully! We'll get back to you soon.</span>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </TiltCard>

            {/* Contact Info */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-tech font-bold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-light-blue text-lg leading-relaxed mb-8">
                  We're here to help you achieve your tech career goals. 
                  Reach out to us through any of the channels below and let's discuss how we can work together.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <TiltCard key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={infoInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-secondary-cyan/20 hover-magnetic group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-secondary-cyan transition-colors duration-300">
                            {info.title}
                          </h4>
                          <p className="text-gray-700 font-semibold">{info.details}</p>
                          <p className="text-gray-500 text-sm">{info.subDetails}</p>
                        </div>
                      </div>
                    </motion.div>
                  </TiltCard>
                ))}
              </div>

              {/* Social Media Links */}
              <TiltCard>
                <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-secondary-cyan/20 hover-magnetic">
                  <h4 className="font-bold text-gray-900 text-xl mb-6 text-center">Follow Us</h4>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <MagneticButton key={index} strength={0.3} range={60}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                          style={{ backgroundColor: social.color }}
                          title={social.name}
                        >
                          <social.icon className="text-white text-xl" />
                        </a>
                      </MagneticButton>
                    ))}
                  </div>
                </div>
              </TiltCard>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <TiltCard key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={infoInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-secondary-cyan/20 hover-magnetic text-center group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary-cyan to-accent-blue rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2 group-hover:text-secondary-cyan transition-colors duration-300">
                        {feature.title}
                      </h5>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  </TiltCard>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TiltCard>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-secondary-cyan/20 hover-magnetic">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-tech font-bold text-gray-900 mb-4">
                  Visit Our Campus
                </h3>
                <p className="text-gray-600 text-lg">
                  Located in the heart of Bengaluru's tech hub
                </p>
              </div>
              
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TiltCard>
            <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-secondary-cyan/20 hover-magnetic">
              <AnimatedText
                text="Ready to Transform Your Career?"
                className="text-4xl md:text-5xl font-tech font-bold text-gray-900 mb-6"
                type="words"
                delay={0.2}
                stagger={0.1}
              />
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Don't wait any longer. Start your tech journey today and join thousands of successful graduates who have transformed their careers with INLIGHN TECH.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton strength={0.4} range={120}>
                  <button className="bg-gradient-to-r from-secondary-cyan to-accent-blue text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2 hover-shine">
                    <span>Explore Programs</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </MagneticButton>
                <MagneticButton strength={0.3} range={100}>
                  <button className="border-2 border-secondary-cyan text-secondary-cyan hover:bg-secondary-cyan hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                    Schedule Call
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

export default ContactUs;