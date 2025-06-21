import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, animate, Variants } from "framer-motion";
import { ArrowRight, Users, Target, Eye } from "lucide-react";

const cardData = [
  {
    icon: Users,
    title: "About INLIGHN TECH",
    description:
      "At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills in Full Stack Development, Data Science, and Project Management.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our students with the practical skills and confidence they need to succeed in the fast-evolving tech industry.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.",
  },
];

const statsData = [
  { value: 5000, label: "Interns Enrolled" },
  { value: 9000, label: "Projects Completed" },
  { value: 93, label: "Satisfaction Rate", symbol: "%" },
  { value: 30, label: "Top Instructors" },
];

const AnimatedStat = ({ value, label, symbol = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const countRef = useRef(null);

  useEffect(() => {
    if (isInView && countRef.current) {
      const node = countRef.current;
      const controls = animate(0, value, {
        duration: 2,
        onUpdate(latest) {
          node.textContent = Math.round(latest);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-cyan-400">
        <span ref={countRef}>0</span>
        {symbol}+
      </p>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
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
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section id="who-we-are" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          Who We Are
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col"
              variants={cardVariants}
            >
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center border-2 border-white mb-6">
                <card.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-300 leading-relaxed flex-grow">
                {card.description}
              </p>
              <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center self-start transition-colors duration-300">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
