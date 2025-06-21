
import { Zap, Wind, Sun, Battery, Cog, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Wind Energy Solutions",
      description: "Comprehensive wind farm development, from site assessment to grid connection and operations.",
      features: ["Site Assessment", "Turbine Selection", "Grid Integration"]
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Solar Power Systems",
      description: "End-to-end solar solutions including design, installation, and maintenance of PV systems.",
      features: ["System Design", "Installation", "Maintenance"]
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Energy Storage",
      description: "Advanced battery storage solutions for grid stability and renewable energy optimization.",
      features: ["Grid Stability", "Peak Shaving", "Backup Power"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Grid Modernization",
      description: "Smart grid technologies and infrastructure upgrades for efficient energy distribution.",
      features: ["Smart Grids", "Infrastructure", "Efficiency"]
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Engineering Services",
      description: "Expert engineering consultancy for energy projects and infrastructure development.",
      features: ["Project Management", "Technical Design", "Compliance"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Sustainability Consulting",
      description: "Environmental impact assessment and sustainable development strategies.",
      features: ["Impact Assessment", "Carbon Footprint", "Sustainability"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive energy solutions tailored to meet the evolving needs of modern infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
