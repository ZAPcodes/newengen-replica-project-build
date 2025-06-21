
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                GENUINE.
                <br />
                IMPACT.
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                We are an industry-leading digital marketing agency 
                partnering with bold brands to drive impact across every 
                stage of the customer journey - maximizing it, measuring it, 
                and repeating it.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 pt-8">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">COTOPAXI</div>
                <div className="text-sm text-gray-400">MUDWTR</div>
                <div className="text-sm text-gray-400">OREO</div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="w-6 h-0.5 bg-yellow-400"></div>
                <div className="w-6 h-0.5 bg-yellow-400"></div>
                <div className="w-6 h-0.5 bg-yellow-400"></div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-200 to-yellow-200 rounded-3xl overflow-hidden aspect-square">
              <img
                src="/lovable-uploads/212e75b6-821d-4073-aba6-93892cbde78c.png"
                alt="Smiling woman in colorful jacket"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl text-gray-800">
              <div className="text-lg font-bold">Cotopaxi</div>
              <div className="text-sm text-gray-600">+20% Marketing Efficiency</div>
            </div>
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
              For Creators
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
