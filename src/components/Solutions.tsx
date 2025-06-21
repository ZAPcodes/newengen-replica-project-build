
const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-gray-400 mb-4 tracking-wider">SOLUTIONS</div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Our marketing solutions turn 
            engagement into measurable 
            growth.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Acorn Creator Suite</h3>
                <p className="text-gray-300 leading-relaxed">
                  Connect with vetted creators to craft authentic 
                  content that drives engagement, amplifies reach, 
                  and fuels measurable growth across digital and 
                  retail channels.
                </p>
              </div>
            </div>
            
            <button className="bg-orange-400 hover:bg-orange-500 text-gray-800 font-semibold px-8 py-3 rounded-full inline-flex items-center">
              Learn More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="aspect-square bg-gray-700 rounded-lg"></div>
              ))}
            </div>
            <div className="absolute bottom-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
              For Creators
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
