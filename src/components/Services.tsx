
const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-gray-600 mb-4 tracking-wider">SELECTED WORK</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
            Creating impact for{" "}
            <span className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg inline-block">
              SALT & STONE
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-orange-200 to-yellow-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop"
                alt="Cotopaxi project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border-b-4 border-gray-800 pb-2">
              <h3 className="font-bold text-gray-800">Cotopaxi</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">Creative & Advertising</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">Fashion & Apparel</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop"
                alt="MUDWTR project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border-b-4 border-gray-800 pb-2">
              <h3 className="font-bold text-gray-800">MUDWTR</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">Health & Wellness</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-square bg-orange-300 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop"
                alt="OREO project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border-b-4 border-gray-800 pb-2">
              <h3 className="font-bold text-gray-800">OREO</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">Food & Beverage</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">CPG</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-square bg-blue-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop"
                alt="Coca-Cola project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border-b-4 border-gray-800 pb-2">
              <h3 className="font-bold text-gray-800">Coca-Cola</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">Food & Beverage</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">CPG</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-800 font-semibold px-8 py-3 rounded-full inline-flex items-center">
            View all work
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
