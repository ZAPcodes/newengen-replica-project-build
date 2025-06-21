
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Programs = () => {
  const programs = [
    {
      title: "Digital Strategy Program",
      duration: "12 weeks",
      description: "Comprehensive digital marketing strategy and implementation program.",
      features: ["Market Analysis", "Brand Positioning", "Content Strategy", "Performance Metrics"]
    },
    {
      title: "Creative Development",
      duration: "8 weeks",
      description: "Advanced creative development and brand storytelling program.",
      features: ["Visual Identity", "Content Creation", "Campaign Design", "Brand Guidelines"]
    },
    {
      title: "Analytics & Insights",
      duration: "6 weeks",
      description: "Data-driven marketing analytics and optimization program.",
      features: ["Data Analysis", "Performance Tracking", "ROI Optimization", "Reporting Tools"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Programs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive training and development programs designed to elevate your 
              marketing capabilities and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                  <span className="text-orange-400 font-semibold">{program.duration}</span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-full transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
