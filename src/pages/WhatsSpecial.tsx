import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaStar, FaWhatsapp } from 'react-icons/fa';
import Header from "@/components/Header";

const testimonials = [
  {
    name: "Athira Nair",
    quote: "I am grateful for the amazing internship I worked on... hands-on projects... glad and look forward to the future.",
    rating: 4,
    image: "https://via.placeholder.com/80?text=AN"
  },
  {
    name: "Nilo Anjum",
    quote: "There are plenty of projects that make the concept technical topics... outstanding revision qualities learners move on...",
    rating: 4,
    image: "https://via.placeholder.com/80?text=NA"
  },
  {
    name: "Garima Pandey",
    quote: "The experience at Inlighn Tech... interactive discussions and hands-on...",
    rating: 4,
    image: "https://via.placeholder.com/80?text=GP"
  }
];

const videos = [
  {
    title: "LMS Setup & Access: A Step-by-Step Guide",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    duration: "15:30",
    description: "Complete guide to setting up and accessing our Learning Management System"
  },
  {
    title: "Getting Started with Python Programming",
    thumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg",
    videoId: "rfscVS0vtbw",
    duration: "20:45",
    description: "Introduction to Python programming for beginners"
  },
  {
    title: "Web Development Fundamentals",
    thumbnail: "https://img.youtube.com/vi/UB1O30fR-EE/maxresdefault.jpg",
    videoId: "UB1O30fR-EE",
    duration: "25:10",
    description: "Learn the basics of HTML, CSS, and JavaScript"
  },
  {
    title: "Data Science with Python",
    thumbnail: "https://img.youtube.com/vi/ua-CiDNNj30/maxresdefault.jpg",
    videoId: "ua-CiDNNj30",
    duration: "30:15",
    description: "Exploring data science concepts using Python"
  },
  {
    title: "Cybersecurity Best Practices",
    thumbnail: "https://img.youtube.com/vi/inWWhr5tnEA/maxresdefault.jpg",
    videoId: "inWWhr5tnEA",
    duration: "18:22",
    description: "Essential cybersecurity practices for developers"
  }
];

const projects = [
  {
    title: "Nova - Voice-Activated AI Assistant",
    developer: "Athira Prasad Nair",
    description: "combining speech recognition, AI & web APIs delivers a versatile assistant...",
    tech: "Python Project",
    features: "like note-taking, advanced system controls...",
    image: "https://via.placeholder.com/300x200?text=Nova+AI"
  }
];

const participationSteps = [
  {
    title: "If you're in your last month of internship, you're eligible!",
    description: "You'll receive a Google Form to apply for this prestigious title!",
    color: "#00FFA3"
  },
  {
    title: "Submit Projects",
    description: "Submit your best projects related to your domain!",
    color: "#8B5CF6"
  },
  {
    title: "Skill Assessment Test",
    description: "Take a skill assessment test to prove your expertise!",
    color: "#FF6B6B"
  },
  {
    title: "Final Round",
    description: "Ace the interview round (if shortlisted)!",
    color: "#4ECDC4"
  }
];

const perks = [
  { title: "Certificate", icon: "🏆", image: "https://via.placeholder.com/200x250?text=Certificate" },
  { title: "Top 10 Interns", subtitle: "Stipend ₹15,000 + WebKit", icon: "💰" },
  { title: "Offer Letter", subtitle: "within 30 days", icon: "📋" },
  { title: "Industry-Based Projects", icon: "🏭" },
  { title: "Experience with QR Code", icon: "📱" },
  { title: "Exclusive Job Updates", subtitle: "Shared on WhatsApp", icon: "💼" },
  { title: "Community Forum", subtitle: "Peer & Mentor Support", icon: "👥" },
  { title: "My Portfolio Access", subtitle: "Within 5 minutes", icon: "💻" },
  { title: "Virtual Intern", subtitle: "Work from Home with Flexible Schedule", icon: "🏠" }
];

const perkVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: "easeInOut"
    }
  })
};

const WhatsSpecial: React.FC = () => {
  const { ref: testimonialRef, inView: testimonialInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: challengeRef, inView: challengeInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: perksRef, inView: perksInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-[#F9F5EB] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold text-[#333333] mb-4"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            What's Special
          </motion.h1>
        </div>
      </section>

      {/* Feedback from Our Interns */}
      <section ref={testimonialRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Feedback from Our Interns
          </h2>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -(testimonials.length * (350 + 32))],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1A3C3C] bg-opacity-85 p-6 rounded-lg shadow-lg text-white min-w-[350px] flex-shrink-0"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00FFAA" }}
                >
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <h3 className="font-bold text-center mb-2">{testimonial.name}</h3>
                  <p className="text-sm mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>"{testimonial.quote}"</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < testimonial.rating ? "text-[#FFC107]" : "text-gray-400"} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Knowledge Through Videos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Knowledge Through Videos
          </h2>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -(videos.length * (400 + 32))],
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
              {[...videos, ...videos].map((video, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1A3C3C] bg-opacity-90 rounded-lg shadow-lg min-w-[400px] flex-shrink-0 overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00FFAA" }}
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-[#00FFAA] transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-300" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {video.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interns of the Month Challenge */}
      <section ref={challengeRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={challengeInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#1A3C3C] bg-opacity-85 p-8 rounded-lg text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Interns of the Month Challenge
            </h2>
            <p className="text-lg mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Every single month, Inlighn Tech is bringing an SFC opportunity with 'Interns of the Month Challenge'...
            </p>
            <p className="text-sm mb-8 text-gray-300">
              ...recognizing interns who have shown exceptional dedication...
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#FF6F61] p-4 rounded-lg">
                <h3 className="font-bold">A Stipend Reward of ₹15,000!</h3>
              </div>
              <div className="bg-[#FF6F61] p-4 rounded-lg">
                <h3 className="font-bold">An Exclusive Inlighn Tech WebKit & Swag Pack!</h3>
              </div>
              <div className="bg-[#FF6F61] p-4 rounded-lg">
                <h3 className="font-bold">Special Recognition on Our Platform!</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Interns' Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Our Interns' Projects
          </h2>
          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00FFAA" }}
                  className="bg-[#1A3C3C] bg-opacity-85 p-6 rounded-lg shadow-lg min-w-[350px] text-white"
                >
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <span className="bg-[#00FFAA] text-black px-2 py-1 rounded text-xs">{project.tech}</span>
                  <h3 className="font-bold text-lg mt-2 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">Developed by: {project.developer}</p>
                  <p className="text-sm mb-4">{project.description}</p>
                  <p className="text-xs text-gray-400">{project.features}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>      {/* How to Participate */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-16" style={{ fontFamily: 'Roboto, sans-serif' }}>
            How to Participate?
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {participationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Colored dot on top center */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: step.color }}
                  ></motion.div>
                </div>
                
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1A3C3C] p-8 rounded-2xl text-white shadow-lg"
                >
                  <h3 className="font-bold text-xl mb-3 text-[#00FFAA]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Selection Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A3C3C] bg-opacity-85 p-8 rounded-lg text-white">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Rules & Selection Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-bold text-[#00FFAA] mb-2">Rules</h3>
                <p className="text-sm">Each intern can apply ONCE in their final month!</p>
              </div>
              <div>
                <h3 className="font-bold text-[#00FFAA] mb-2">Benefits</h3>
                <p className="text-sm">Winners will be announced on the last day of every month!</p>
              </div>
              <div>
                <h3 className="font-bold text-[#00FFAA] mb-2">Top 10 Interns</h3>
                <p className="text-sm">Top 10 interns will be celebrated with amazing rewards & recognition!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section ref={perksRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Perks & Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={perkVariants}
                initial="hidden"
                animate={perksInView ? "visible" : "hidden"}
                className="bg-[#FF6F61] p-6 rounded-lg text-white text-center shadow-lg"
              >
                <div className="text-3xl mb-4">{perk.icon}</div>
                {perk.image && (
                  <img src={perk.image} alt={perk.title} className="mx-auto mb-4 rounded-lg" />
                )}
                <h3 className="font-bold mb-2">{perk.title}</h3>
                {perk.subtitle && (
                  <p className="text-sm opacity-90">{perk.subtitle}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Icon */}
      <motion.a
        href="https://wa.me/919368842663"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.1, y: 0, transition: { duration: 0.2 } }}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
      >
        <FaWhatsapp size={32} />
      </motion.a>
    </div>
  );
};

export default WhatsSpecial;