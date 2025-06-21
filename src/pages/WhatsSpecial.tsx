
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WhatsSpecial = () => {
  const specialFeatures = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced artificial intelligence algorithms that provide deep insights into campaign performance and customer behavior.",
      icon: "🤖"
    },
    {
      title: "Real-Time Optimization",
      description: "Continuous monitoring and optimization of campaigns for maximum ROI and performance improvement.",
      icon: "⚡"
    },
    {
      title: "Omnichannel Integration",
      description: "Seamless integration across all digital channels for a unified brand experience.",
      icon: "🔗"
    },
    {
      title: "Personalized Strategies",
      description: "Tailored marketing strategies designed specifically for your brand and target audience.",
      icon: "🎯"
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
              What's <span className="text-yellow-400">Special</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the unique features and innovations that set New Engen apart 
              from traditional marketing agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {specialFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Innovation at Our Core</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                We don't just follow trends—we create them. Our team of innovators 
                constantly pushes the boundaries of what's possible in digital marketing.
              </p>
              <div className="space-y-4">
                {[
                  "Cutting-edge technology stack",
                  "Data-driven decision making",
                  "Creative problem solving",
                  "Continuous learning culture"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 animate-scale-in">
              {Array.from({ length: 12 }, (_, i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsSpecial;
