import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, animate, Variants } from "framer-motion";
import { ArrowRight, Users, Target, Eye, Award, BookOpen, Lightbulb } from "lucide-react";

const cardData = [
  {
    icon: Users,
    title: "About INLIGHN TECH",
    description:
      "At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills in cutting-edge technologies.",
    gradient: "from-secondary-cyan to-primary-medium",
    features: ["Industry-Aligned Curriculum", "Expert Mentorship", "Real-World Projects", "Career Support"]
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our students with the practical skills and confidence they need to succeed in the fast-evolving tech industry.",
    gradient: "from-accent-rust to-accent-rust/80",
    features: ["Skill Development", "Industry Readiness", "Career Growth", "Innovation Focus"]
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the leading platform for tech education that transforms aspiring professionals into industry-ready experts. We envision a future where every student has access to world-class training and opportunities to excel in their chosen technology domain.",
    gradient: "from-secondary-cyan to-light-blue",
    features: ["Global Recognition", "Technology Leadership", "Student Success", "Industry Partnership"]
  },
];

const statsData = [
  { value: 10000, label: "Students Enrolled", icon: Users },
  { value: 15000, label: "Projects Completed", icon: BookOpen },
  { value: 95, label: "Success Rate", symbol: "%", icon: Award },
  { value: 50, label: "Expert Instructors", icon: Lightbulb },
];

const AnimatedStat = ({ value, label, symbol = "", icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const countRef = useRef(null);

  useEffect(() => {
    if (isInView && countRef.current) {
      const node = countRef.current;
      const controls = animate(0, value, {
        duration: 2.5,
        onUpdate(latest) {
          node.textContent = Math.round(latest);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref} 
      className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      whileHover={{ y: -5 }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-secondary-cyan to-primary-medium rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <p className="text-3xl md:text-4xl font-bold text-secondary-cyan mb-2">
        <span ref={countRef}>0</span>
        {symbol}+
      </p>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

const WhoWeAre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-30%" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section id="who-we-are" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23134E4A%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-50 border border-secondary-cyan/20 rounded-full px-6 py-3 mb-8">
            <Users className="w-5 h-5 text-secondary-cyan" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">About Us</span>
          </div>

          <motion.h2
            className="text-4xl md:text-5xl font-tech font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Who We Are &
            <span className="block text-secondary-cyan">What We Stand For</span>
          </motion.h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the story behind INLIGHN TECH and our commitment to transforming tech education
          </p>
        </div>

        {/* Cards Section */}
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-secondary-cyan transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                {card.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {card.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-cyan rounded-full"></div>
                    <span className="text-sm text-gray-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`bg-gradient-to-r ${card.gradient} hover:shadow-lg text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-md`}>
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These numbers represent the trust and success of our community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <AnimatedStat key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary-dark to-primary-medium p-8 md:p-12 rounded-3xl text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-light-blue mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their careers with INLIGHN TECH
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-dark font-bold px-8 py-4 rounded-xl hover:bg-light-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Programs
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-dark font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;