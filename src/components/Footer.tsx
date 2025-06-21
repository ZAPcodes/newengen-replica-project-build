import { motion, Variants, Transition } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <footer ref={ref} className="bg-[#134E4A] text-gray-300 pt-16 pb-8">
      <motion.div
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Logo and Tagline */}
        <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative mb-4">
            <img src="https://via.placeholder.com/80?text=Inlighn" alt="Inlighn Tech Logo" className="rounded-full" />
            <div className="absolute -inset-1 rounded-full bg-[#00FFA3] blur-md opacity-50 animate-pulse"></div>
          </div>
          <p className="text-sm leading-relaxed">
            At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs.
          </p>
        </motion.div>

        {/* Menu */}
        <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-[#00FFA3] pb-2">Menu</h3>
          <ul className="space-y-3">
            {["Home", "About Us", "Programs", "Contact Us", "Login to Portal"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#00FFA3] transition-colors duration-300 transform hover:scale-105 inline-block">{item}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-[#00FFA3] pb-2">Quick Links</h3>
          <ul className="space-y-3">
            {["Privacy Policy", "Term & Conditions", "Disclaimer", "FAQ's"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#00FFA3] transition-colors duration-300 transform hover:scale-105 inline-block">{item}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Follow Us & Contact */}
        <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-[#00FFA3] pb-2">Follow Us</h3>
          <motion.div variants={iconVariants} className="flex space-x-4 mb-6">
            <a href="#" className="w-10 h-10 rounded-full border-2 border-[#00FFA3] flex items-center justify-center hover:bg-[#00FFA3] hover:text-[#134E4A] transition-all duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-[#00FFA3] flex items-center justify-center hover:bg-[#00FFA3] hover:text-[#134E4A] transition-all duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-[#00FFA3] flex items-center justify-center hover:bg-[#00FFA3] hover:text-[#134E4A] transition-all duration-300">
              <FaYoutube size={20} />
            </a>
          </motion.div>
          <div className="space-y-3 text-sm text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="mr-3 text-[#00FFA3]" />
              <span>VO-301, WeWork Prestige Central, Bengaluru, 560001</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <FaPhone className="mr-3 text-[#00FFA3]" />
              <span>+91 9368842663</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-3 text-[#00FFA3]" />
              <span>info@inlighntech.com</span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 pt-8 border-t border-[#00FFA3]/30 text-center text-sm"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p>© 2025 Inlighn Tech. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
