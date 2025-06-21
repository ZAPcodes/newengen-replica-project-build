import React, { useState } from 'react';
import { motion } from "framer-motion";
import { 
  Shield, 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  Globe, 
  Clock, 
  Users, 
  Star,
  ArrowRight
} from 'lucide-react';
import Header from "@/components/Header";
import { FaWhatsapp } from 'react-icons/fa';

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const programsData = [
    {
      id: 1,
      title: "Cybersecurity & Ethical Hacking",
      subtitle: "Advanced Security Analysis",
      description: "Master the art of ethical hacking and cybersecurity with hands-on penetration testing, vulnerability assessment, and security analysis using industry-standard tools.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Shield,
      duration: "12 weeks",
      level: "Intermediate",
      students: "2,500+",
      rating: 4.9,
      price: "₹15,999",
      originalPrice: "₹25,999",
      skills: ["Penetration Testing", "Network Security", "Kali Linux", "OWASP", "Incident Response", "Forensics"],
      highlights: ["Industry Certification", "Live Projects", "Expert Mentorship", "Job Assistance"],
      color: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
      category: "Security"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      subtitle: "Modern Web Applications",
      description: "Build scalable web applications using React, Node.js, and cloud technologies. Learn both frontend and backend development with real-world projects.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Code,
      duration: "16 weeks",
      level: "Beginner to Advanced",
      students: "3,200+",
      rating: 4.8,
      price: "₹18,999",
      originalPrice: "₹29,999",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "AWS", "Docker"],
      highlights: ["Portfolio Projects", "Deployment Training", "Code Reviews", "Industry Mentors"],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      category: "Development"
    },
    {
      id: 3,
      title: "Data Science & Machine Learning",
      subtitle: "AI-Powered Analytics",
      description: "Dive deep into data science with Python, machine learning algorithms, and AI technologies. Work with real datasets and build predictive models.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Brain,
      duration: "14 weeks",
      level: "Intermediate",
      students: "1,800+",
      rating: 4.9,
      price: "₹22,999",
      originalPrice: "₹35,999",
      skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Deep Learning", "NLP"],
      highlights: ["Kaggle Competitions", "Research Projects", "Industry Datasets", "AI Certification"],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Data Analytics & Visualization",
      subtitle: "Business Intelligence",
      description: "Transform raw data into actionable insights using advanced analytics tools, statistical methods, and powerful visualization techniques.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: BarChart3,
      duration: "10 weeks",
      level: "Beginner",
      students: "2,100+",
      rating: 4.7,
      price: "₹12,999",
      originalPrice: "₹19,999",
      skills: ["SQL", "Power BI", "Tableau", "Excel", "Python", "Statistics"],
      highlights: ["Business Cases", "Dashboard Creation", "Statistical Analysis", "Certification"],
      color: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      category: "Analytics"
    },
    {
      id: 5,
      title: "Cloud Computing & DevOps",
      subtitle: "Infrastructure & Automation",
      description: "Master cloud platforms and DevOps practices with AWS, Docker, Kubernetes, and CI/CD pipelines for modern application deployment.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Globe,
      duration: "12 weeks",
      level: "Intermediate",
      students: "1,500+",
      rating: 4.8,
      price: "₹19,999",
      originalPrice: "₹31,999",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Linux"],
      highlights: ["Cloud Certification", "Live Infrastructure", "Automation Projects", "Industry Tools"],
      color: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      category: "Cloud"
    },
    {
      id: 6,
      title: "Mobile App Development",
      subtitle: "Cross-Platform Applications",
      description: "Build native and cross-platform mobile applications using React Native, Flutter, and modern mobile development frameworks.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Database,
      duration: "14 weeks",
      level: "Intermediate",
      students: "1,200+",
      rating: 4.6,
      price: "₹17,999",
      originalPrice: "₹27,999",
      skills: ["React Native", "Flutter", "Firebase", "API Integration", "App Store", "UI/UX"],
      highlights: ["App Publishing", "Cross-Platform", "Real Apps", "Store Optimization"],
      color: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      category: "Mobile"
    }
  ];

  const categories = ["All", "Security", "Development", "AI/ML", "Analytics", "Cloud", "Mobile"];

  const filteredPrograms = selectedCategory === "All" 
    ? programsData 
    : programsData.filter(program => program.category === selectedCategory);

  const stats = [
    { icon: Users, value: "10,000+", label: "Students Enrolled" },
    { icon: Star, value: "95%", label: "Success Rate" },
    { icon: Code, value: "50+", label: "Expert Instructors" },
    { icon: Globe, value: "100+", label: "Partner Companies" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-dark via-primary-medium to-secondary-cyan relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-secondary-cyan" />
              <span className="text-sm font-semibold uppercase tracking-wider">Premium Tech Programs</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6 leading-tight">
              Master the Future of
              <span className="block bg-gradient-to-r from-secondary-cyan to-light-blue bg-clip-text text-transparent">
                Technology
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-light-blue max-w-4xl mx-auto leading-relaxed mb-12">
              Join industry-leading internship programs designed by experts. 
              Gain hands-on experience, build real projects, and launch your tech career with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-primary-dark font-bold px-8 py-4 rounded-xl hover:bg-light-blue transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Explore Programs
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-primary-dark transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary-dark to-primary-medium py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-secondary-cyan" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-light-blue text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-tech font-bold text-gray-900 mb-6">
              Choose Your Path to
              <span className="block text-secondary-cyan">Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to transform you into an industry-ready professional
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-secondary-cyan text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${program.color} shadow-lg`}>
                      {program.category}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">{program.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <program.icon className="w-5 h-5 text-secondary-cyan" />
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{program.subtitle}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {program.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{program.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{program.level}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700">Key Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.skills.slice(0, 4).map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {program.skills.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                          +{program.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">{program.price}</span>
                        <span className="text-sm text-gray-500 line-through">{program.originalPrice}</span>
                      </div>
                      <span className="text-xs text-green-600 font-medium">Limited Time Offer</span>
                    </div>
                    <button className={`px-6 py-3 bg-gradient-to-r ${program.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2`}>
                      <span>Enroll Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-light-blue mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who have transformed their careers with our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary-cyan hover:bg-secondary-cyan/90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-dark font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Talk to Counselor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919368842663"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};

export default Programs;