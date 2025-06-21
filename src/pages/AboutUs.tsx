
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              About <span className="text-yellow-400">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate digital innovators dedicated to transforming 
              businesses through cutting-edge marketing solutions and creative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded with a vision to revolutionize digital marketing, New Engen has grown 
                from a small team of creative minds to a full-service agency trusted by leading 
                brands worldwide.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our journey began with a simple belief: that authentic, data-driven marketing 
                can create meaningful connections between brands and their audiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We push boundaries and embrace new technologies to stay ahead of the curve."
              },
              {
                title: "Authenticity",
                description: "We believe in genuine connections and transparent communication."
              },
              {
                title: "Excellence",
                description: "We strive for perfection in every project, no matter how big or small."
              }
            ].map((value, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
