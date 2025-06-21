import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaStar, FaWhatsapp } from 'react-icons/fa';
import Header from "@/components/Header";

const programsData = [
  { title: "Business Analyst Internship Program", description: "Gain practical business analysis skills by working on...", rating: 4 },
  { title: "Front-End Development Internship", description: "Front-End Web Development - Kickstart your journey into web development by...", rating: 4 },
  { title: "Ethical Hacking with Kali Linux", description: "Ethical Hacking with Kali - Internship Program Gain practical skills in...", rating: 4 },
  { title: "Full Stack Development Internship", description: "Full-Stack Web Development - Master web development from the ground up...", rating: 4 },
  { title: "AI & Machine Learning Internship Program", description: "AI & Machine Learning - Internship Program Build a strong foundation in...", rating: 4 },
  { title: "Data Analyst Internship Program", description: "Data Analyst - Internship Program Learn how to collect, clean, analyze, and...", rating: 4 },
  { title: "Offensive Cyber Security", description: "Offensive Cyber Security - Internship Program Dive deep into the world of ethical...", rating: 4 },
  { title: "Data Science Internship", description: "Data Science - Internship Program Master the fundamentals of data science by...", rating: 4 },
  { title: "Web Development Internship", description: "Web Development - Internship Program Learn to build dynamic, responsive websites with...", rating: 4 },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

const ProgramCard = ({ program, index, inView }: { program: typeof programsData[0], index: number, inView: boolean }) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00FFAA" }}
      className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <img src={`https://via.placeholder.com/300x200?text=${program.title.replace(/\s/g, '+')}`} alt={program.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-[#1A3C3C] bg-opacity-80"></div>
      <div className="relative p-6 text-white flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 flex-grow">{program.title}</h3>
        <p className="text-sm mb-4 flex-grow">{program.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} whileHover={{ scale: 1.2 }}>
                <FaStar className={i < program.rating ? "text-[#FFC107]" : "text-gray-500"} />
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#FF6F00] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_#00FFAA]"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Programs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-[#333333] mb-16"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Our Programs
        </motion.h1>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programsData.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} inView={inView} />
          ))}
        </div>
      </main>
      <motion.a
        href="https://wa.me/919368842663" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        whileHover={{ scale: 1.1, y: 0, transition: { duration: 0.2 } }}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
      >
        <FaWhatsapp size={32} />
      </motion.a>
    </div>
  );
};

export default Programs;
